import PropTypes from 'prop-types';
import { useMemo, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { Container } from '@mui/material';
import FormProvider from '../../hook-form';
import RHFTextField from '../../hook-form/rhf-text-field';
import { useSettingsContext } from '../../settings';
import RHFAutocomplete from '../../hook-form/rhf-autocomplete';

export default function OrderNewForm() {
  const [vendorCode, setVendorCode] = useState('');
  const [commodities, setCommodities] = useState([])
  const settings = useSettingsContext();

  const notify = () => toast.success('Order created');
  const notifyError = (msg) => toast.error(msg);

  const storedVendorCode = sessionStorage.getItem('vendor');
  useEffect(() => {
    setVendorCode(storedVendorCode || '');
    fetchCommodities()
  }, []);

  function fetchCommodities() {
    axios.get(`http://ec2-54-173-125-80.compute-1.amazonaws.com:8080/nccf/commodity`).then((res) => {
      setCommodities(res.data?.data)
    })
  }

  const defaultValues = useMemo(
    () => ({
      vendor_code: vendorCode,
      commodity: '',
      quantity: '',
    }),
    []
  );
  const methods = useForm({
    defaultValues,
  });

  const {
    handleSubmit,
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    const payload = {
      ...data,
      vendor_code: vendorCode,
      mode: 'test',
      status: '0',
    };
    try {
      const response = await axios.post(
        'http://ec2-54-173-125-80.compute-1.amazonaws.com:8080/nccf/csp/create_order',
        payload
      );

      if (response.data.status == '201') {
        notify();
      } else if(response.data.status == '400'){
        notifyError(response.data.message);
      }
    } catch (error) {
      notifyError("Something went wrong");
      console.error('Order creation error:', error);
    }
  });

  return (
    <>
      <ToastContainer />
      <Container maxWidth={settings.themeStretch ? false : 'xl'}>
        <FormProvider methods={methods} onSubmit={onSubmit}>
          <Grid container sx={{ mt: '30px' }}>
            <Grid item md={4}>
              <Box sx={{ ml: { md: '60px', xs: '0' }, mt: '60px' }}>
                <Box sx={{ mb: '30px', fontWeight: '600', fontSize: '18px' }}>
                  Create Order
                  <Typography sx={{ fontSize: '13px', color: '#637381' }}>
                    Create Order Input fields
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item md={8}>
              <Card>
                <Stack spacing={3} sx={{ p: 3 }}>
                  <Stack spacing={1.5}>
                    <Box
                      rowGap={3}
                      columnGap={2}
                      display="grid"
                      gridTemplateColumns={{
                        xs: 'repeat(1, 1fr)',
                        sm: 'repeat(2, 1fr)',
                        md: 'repeat(2, 1fr)',
                      }}
                    >
                      {/* <RHFTextField name="vendor_code" label="VendorCode" value={vendorCode} /> */}
                        <RHFAutocomplete
                          name="commodity"
                          type="commodity"
                          label="Commodity"
                          placeholder="Choose Commodity"
                          fullWidth
                          options={commodities.map((option) => option?.commodity_name)}
                          getOptionLabel={(option) => option}
                        />
                      <RHFTextField name="quantity" label="Quantity" />
                    </Box>
                  </Stack>
                </Stack>
              </Card>
              <Stack alignItems="flex-end" sx={{ mt: 3 }}>
                <LoadingButton
                  type="submit"
                  className="button"
                  loading={methods.formState.isSubmitting}
                  onClick={onSubmit}
                >
                  Order
                </LoadingButton>
              </Stack>
            </Grid>
          </Grid>
        </FormProvider>
      </Container>
    </>
  );
}

OrderNewForm.propTypes = {
  currentUser: PropTypes.object,
};
