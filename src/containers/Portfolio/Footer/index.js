import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { Icon } from 'react-icons-kit';
import Box from '../../../../common/src/components/Box';
import Text from '../../../../common/src/components/Text';
import Heading from '../../../../common/src/components/Heading';
import Button from '../../../../common/src/components/Button';
import Input from '../../../../common/src/components/Input';
import Container from '../../../../common/src/components/UI/Container';
import SocialProfile from '../SocialProfile';

const d = new Date();
const currentYear = d.getFullYear();
const yearString = `© ${currentYear} All rights reserved. `

import {
  FooterWrapper,
  Newsletter,
  FooterNav,
  FooterNavItem,
} from './footer.style';
import { FOOTER_MENU } from '../../../../common/src/data/Portfolio/data';
import { SOCIAL_PROFILES } from '../../../../common/src/data/Portfolio/data';
import { heart } from 'react-icons-kit/fa/heart';

const Footer = ({
  row,
  col,
  titleStyle,
  linkStyle,
  newsletterButton,
  copyrightStyle,
  contactItem,
  flexBox,
  contactTitle,
  contactInfo,
  noMargin,
}) => {
  return (
    <FooterWrapper>
      <Container noGutter mobileGutter width="1200px">
        <SocialProfile
          className="footer_social"
          items={SOCIAL_PROFILES}
          iconSize={40}
        />
        <Text
          as="span"
          content={yearString}
          {...copyrightStyle}
        />
      </Container>
    </FooterWrapper>
  );
};

Footer.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
  titleStyle: PropTypes.object,
  linkStyle: PropTypes.object,
  newsletterButton: PropTypes.object,
  copyrightStyle: PropTypes.object,
  contactItem: PropTypes.object,
  flexBox: PropTypes.object,
  contactTitle: PropTypes.object,
  contactInfo: PropTypes.object,
  noMargin: PropTypes.object,
};

Footer.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    ml: '-15px',
    mr: '-15px',
    mb: ['0', '70px', '80px', '100px', '100px'],
  },
  col: {
    width: [1, 1 / 2, 1 / 2, 1 / 3, 1 / 3],
    pl: '15px',
    pr: '15px',
    mb: ['40px', '0', '0', '0', '0', '0'],
  },
  titleStyle: {
    fontSize: ['16px', '18px'],
    fontWeight: '600',
    mb: ['20px', '25px'],
  },
  linkStyle: {
    fontSize: ['22px', '26px', '26px', '30px'],
    color: '#3444f1',
    mb: 0,
  },
  newsletterButton: {
    type: 'button',
    fontSize: '16px',
    pl: '20px',
    pr: '20px',
    colors: 'primary',
    minHeight: 'auto',
  },
  copyrightStyle: {
    fontSize: '14px',
    color: '#fff',
  },
  flexBox: {
    flexBox: true,
    justifyContent: 'space-between',
    // flexWrap: 'wrap'
  },
  contactItem: {
    // width: 1 / 2
  },
  contactTitle: {
    fontSize: ['15x', '15px', '16px', '16px', '16px'],
    mb: '10px',
  },
  contactInfo: {
    fontSize: ['16x', '16px', '18px', '18px', '20px'],
    fontWeight: '500',
    mb: 0,
  },
  noMargin: {
    mb: '0',
  },
};

export default Footer;
