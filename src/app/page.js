'use client';

import React from 'react';
import Head from 'next/head';
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
import AwardsSection from '../containers/Portfolio/Awards';
import PortfolioShowcase from '../containers/Portfolio/PortfolioShowcase';
import ProcessSection from '../containers/Portfolio/Process';
import SkillSection from '../containers/Portfolio/Skill';
import CallToAction from '../containers/Portfolio/CallToAction';
import TestimonialSection from '../containers/Portfolio/Testimonial';
import ClientsSection from '../containers/Portfolio/Clients';
import ContactSection from '../containers/Portfolio/Contact';
import Footer from '../containers/Portfolio/Footer';
import BannerSection from '../containers/Portfolio/Banner';

const Portfolio = () => {
  return (
    <ThemeProvider theme={portfolioTheme}>
      <>
        <Head>
          <title>
            Middweb | Nelson Middendorff | Ecommerce Software Engineer
          </title>
          <meta
            name="Description"
            content="Sofware Engineer in Des Moines Iowa, specializing in Front-End and Javascript development"
          />
          <meta name="theme-color" content="#ec5555" />
          {/* Load google fonts */}
          <link
            href="https://fonts.googleapis.com/css?family=Raleway:300,400,400i,500,600,700,800|Roboto:300,400,400i,500,700,900"
            rel="stylesheet"
          />
        </Head>

        <ResetCSS />
        <GlobalStyle />

        <ContentWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <BannerSection />
          <ProcessSection />
          <AwardsSection />

          {/* <PortfolioShowcase /> */}
          {/* <SkillSection /> */}
          {/* <CallToAction /> */}
          {/* <TestimonialSection /> */}
          {/* <ClientsSection /> */}
          {/* <ContactSection /> */}
          <Footer />
        </ContentWrapper>
      </>
    </ThemeProvider>
  );
};

export default Portfolio;
