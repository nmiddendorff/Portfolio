import React from 'react';
import { ThemeProvider } from 'styled-components';
import Sticky from 'react-stickynode';
import { DrawerProvider } from '../../common/src/contexts/DrawerContext';
import { portfolioTheme } from '../../common/src/theme/portfolio';
import { ResetCSS } from '../../common/src/assets/css/style';
import {
  GlobalStyle,
  ContentWrapper,
} from '../containers/Portfolio/portfolio.style';

import Navbar from '../containers/Portfolio/Navbar';
import Footer from '../containers/Portfolio/Footer';

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={portfolioTheme}>
      <>
        <ResetCSS />
        <GlobalStyle />

        <ContentWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <>{children}</>
          <Footer />
        </ContentWrapper>
      </>
    </ThemeProvider>
  );
};

export default Layout;
