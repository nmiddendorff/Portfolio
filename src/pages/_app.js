/* eslint-disable no-undef */
import React, { useEffect, Fragment } from 'react';
import { Modal } from '@redq/reuse-modal';
// import '@redq/reuse-modal/es/index.css';
// import 'rc-tabs/assets/index.css';

const App = ({ Component, pageProps }) => {
  useEffect(() => {
    heap?.identify('unique_identifier');
    heap?.addUserProperties({ VisitorType: 'Web' });
  }, []);

  return (
    <Fragment>
      <Modal />
      <Component {...pageProps} />
    </Fragment>
  );
};

export default App;
