import { Helmet } from 'react-helmet-async';
import { OverviewAppView } from 'src/sections/app/view';
// import OrderNewForm from 'src/components/customComponent/Order-new-form';

import FourView from 'src/sections/four/view';
import { useEffect, useState } from 'react';

// ----------------------------------------------------------------------

export default function Page() {
  const [vendorCode, setVendorCode] = useState('');

  const storedVendorCode = sessionStorage.getItem('vendor');
  useEffect(() => {
    setVendorCode(storedVendorCode || '');
  }, []);


  return (
    <>
      <Helmet>
        <title> Dashboard</title>
      </Helmet>

      {/* <OrderNewForm /> */}

      <OverviewAppView vendorCode={vendorCode} />
      {/*<FourView />*/}
    </>
  );
}
