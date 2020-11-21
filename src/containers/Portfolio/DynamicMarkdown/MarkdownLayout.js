import React from 'react';
import { ThemeProvider } from 'styled-components';
import Sticky from 'react-stickynode';
import { DrawerProvider } from '../../../../common/src/contexts/DrawerContext';
import { portfolioTheme } from '../../../../common/src/theme/portfolio';
import { ResetCSS } from '../../../../common/src/assets/css/style';
import { GlobalStyle, ContentWrapper } from '../portfolio.style';

import Navbar from '../Navbar';
import Footer from '../Footer';
import DynamicMarkdownContainer from './dynamic-markdown.style';
import Container from '../../../../common/src/components/UI/Container/index';

const MarkdownLayout = ({ children }) => {
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
          <DynamicMarkdownContainer id="dynamic_markdown_container">
            <Container noGutter mobileGutter width="1200px">
              <>{children}</>
            </Container>
          </DynamicMarkdownContainer>
          <Footer />
        </ContentWrapper>
      </>
    </ThemeProvider>
  );
};

export default MarkdownLayout;
