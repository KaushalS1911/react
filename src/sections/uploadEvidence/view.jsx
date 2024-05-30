import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Container from '@mui/material/Container';
import { useSettingsContext } from 'src/components/settings';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { ToastContainer, toast } from 'react-toastify';
import { useForm, Controller } from 'react-hook-form';
import {
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Grid,
  Typography,
} from '@mui/material';
import FormProvider from 'src/components/hook-form/form-provider'; // Adjust the import path as needed
import axios from 'axios';
import { LoadingButton } from '@mui/lab';
import { Upload } from 'src/components/upload';

export default function UploadDocument() {
  const settings = useSettingsContext();
  const [vendorCode, setVendorCode] = useState('');
  const [files, setFiles] = useState([null, null, null, null, null]);
  const notify = () => toast.success('Your Document Uploaded');
  const notifyError = () => toast.error('Failed to Upload');

  const defaultValues = useMemo(
    () => ({
      doc_type_0: '',
      doc_type_1: '',
      doc_type_2: '',
      doc_type_3: '',
      doc_type_4: '',
    }),
    []
  );

  const methods = useForm({
    defaultValues,
  });

  const { handleSubmit, control } = methods;

  const storedVendorCode = sessionStorage.getItem('vendor');
  useEffect(() => {
    setVendorCode(storedVendorCode || '');
  }, []);

 const onSubmit = handleSubmit(async (data) => {
   const formDataList = files
     .map((file, index) => {
       if (file) {
         const formData = new FormData();
         formData.append('doc_type', data[`doc_type_${index}`]);
         formData.append('vendor_code', vendorCode);
         formData.append('file', file);
         return formData;
       }
       return null;
     })
     .filter((formData) => formData !== null);

   try {
     const responses = await Promise.all(
       formDataList.map((formData) =>
         axios.post(
           'http://ec2-54-173-125-80.compute-1.amazonaws.com:8080/nccf/csp/upload_document',
           formData,
           {
             headers: {
               'Content-Type': 'multipart/form-data',
             },
           }
         )
       )
     );

     const allSuccess = responses.every((response) => response.data.status === '201');
     if (allSuccess) {
       notify();
     } else {
       notifyError();
     }
   } catch (error) {
     console.error('Error submitting form:', error);
     notifyError();
   }
 });

  const docTypeOption = [
    { label: 'Milling Unit Photo', key: 'milling_unit_photo' },
    { label: 'Milling Unit Video', key: 'milling_unit_video' },
  ];

  const handleDropSingleFile = useCallback(
    (index) => (acceptedFiles) => {
      const newFile = acceptedFiles[0];
      if (newFile) {
        setFiles((prevFiles) => {
          const newFiles = [...prevFiles];
          newFiles[index] = Object.assign(newFile, {
            preview: URL.createObjectURL(newFile),
          });
          return newFiles;
        });
      }
    },
    []
  );

  const renderUploadBox = (index) => (
    <Card key={index}>
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
            <Controller
              name={`doc_type_${index}`}
              control={control}
              render={({ field }) => (
                <FormControl fullWidth>
                  <InputLabel>Document Type</InputLabel>
                  <Select {...field} label="Document Type">
                    {docTypeOption.map((option) => (
                      <MenuItem key={option.key} value={option.key}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              )}
            />
          </Box>
          <Typography variant="subtitle2">Upload Your Document</Typography>
          <Upload
            file={files[index]}
            onDrop={handleDropSingleFile(index)}
            onDelete={() =>
              setFiles((prevFiles) => {
                const newFiles = [...prevFiles];
                newFiles[index] = null;
                return newFiles;
              })
            }
          />
        </Stack>
      </Stack>
    </Card>
  );

  return (
    <>
      <ToastContainer />
      <Container maxWidth={settings.themeStretch ? false : 'xl'}>
        <Typography variant="h4">Evidence</Typography>
        <Box
          sx={{
            mt: 5,
            width: 1,
            borderRadius: 2,
          }}
        >
          <FormProvider methods={methods} onSubmit={onSubmit}>
            <Grid container spacing={5}>
              {Array.from({ length: 5 }).map((_, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  {renderUploadBox(index)}
                </Grid>
              ))}
            </Grid>
            <Stack alignItems="flex-end" sx={{ mt: 3 }}>
              <LoadingButton
                type="submit"
                className="button"
                loading={methods.formState.isSubmitting}
                onClick={onSubmit}
              >
                Save
              </LoadingButton>
            </Stack>
          </FormProvider>
        </Box>
      </Container>
    </>
  );
}
