import React, { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';


import { useSettingsContext } from 'src/components/settings';

import AppNewInvoice from '../app-new-invoice';
import AppWidgetSummary from '../app-widget-summary';
import axios from 'axios';
import order from '../../../pages/dashboard/order';

// ----------------------------------------------------------------------

export default function OverviewAppView({ vendorCode }) {
  const theme = useTheme();

  const settings = useSettingsContext();

  const [orderList, setOrderList] = useState([]);
  const [stats, setStats] = useState({});


  useEffect(() => {
    if (vendorCode) {
      fetchAllOrders();
      getStats();
    }
  }, [vendorCode]);

  function getStats() {
    axios.get(`http://ec2-54-173-125-80.compute-1.amazonaws.com:8080/nccf/csp/${vendorCode}/orders_stats`).then((res) => {
      setStats(res.data?.data[0]);
    });
  }

  function fetchAllOrders() {
    axios.get(`http://ec2-54-173-125-80.compute-1.amazonaws.com:8080/nccf/csp/${vendorCode}/orders`).then((res) => {
      setOrderList(res.data?.data);
    });
  }

  console.log(stats)
  return (
    <Container maxWidth={settings.themeStretch ? false : 'xl'}>
      <Grid container spacing={3}>
        <Grid xs={12} md={3}>
          <AppWidgetSummary
            title="Total Orders"
            total={stats?.total_orders}

          />
        </Grid>

        <Grid xs={12} md={3}>
          <AppWidgetSummary
            title="Orders Pending"
            total={stats?.placed_orders}

          />
        </Grid>

        <Grid xs={12} md={3}>
          <AppWidgetSummary
            title="Orders Accepted"
            total={stats?.accepted_orders}

          />
        </Grid>

        <Grid xs={12} md={3}>
          <AppWidgetSummary
            title="Orders Declined"
            total={stats?.declined_orders}

          />
        </Grid>
        <Grid xs={12} lg={12}>
          <AppNewInvoice
            title="New Invoice"
            tableData={orderList}
            tableLabels={[
              { id: 'id', label: 'Invoice ID' },
              { id: 'category', label: 'Category' },
              { id: 'price', label: 'Price' },
              { id: 'status', label: 'Status' },
              { id: '' },
            ]}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
