import React from 'react';
import PropTypes from 'prop-types';
import Box from '../../../../common/src/components/Box';
import Text from '../../../../common/src/components/Text';
import Heading from '../../../../common/src/components/Heading';
import Image from '../../../../common/src/components/Image';
import Container from '../../../../common/src/components/UI/Container';
import GlideCarousel from '../../../../common/src/components/GlideCarousel';
import GlideSlide from '../../../../common/src/components/GlideCarousel/glideSlide';

import { AWARDS } from '../../../../common/src/data/Portfolio/data';

import { PrevButton, NextButton } from '../portfolio.style';
import {
  AwardSectionWrapper,
  AwardItem,
  AwardeeWrapper,
  AwardeeLogo,
  AwardeeDetails,
} from './awards.style';

const AwardsSection = ({
  secTitleWrapper,
  secTitle,
  awardNameStyle,
  awardDetailsStyle,
  awardeeLogoStyle,
  awardeeNameStyle,
  awardDateStyle,
}) => {
  //Carousel Options
  const carouselOptions = {
    type: 'carousel',
    autoplay: false,
    perView: 3,
    gap: 30,
    animationDuration: 800,
    breakpoints: {
      990: {
        perView: 3,
      },
      767: {
        perView: 2,
      },
      500: {
        perView: 1,
      },
    },
  };

  return (
    <AwardSectionWrapper id="awards_section">
      <Container noGutter mobileGutter width="1200px">
        <Box {...secTitleWrapper}>
          <Heading {...secTitle} content="Work History" />
        </Box>

        <GlideCarousel
          carouselSelector="awards-carousel"
          options={carouselOptions}
          prevButton={
            <PrevButton>
              <span />
            </PrevButton>
          }
          nextButton={
            <NextButton>
              <span />
            </NextButton>
          }>
          <>
            {AWARDS.map((award, index) => (
              <GlideSlide key={`award-item-${index}`}>
                <AwardItem>
                  <Heading content={award.awardName} {...awardNameStyle} />
                  <Text content={award.awardDetails} {...awardDetailsStyle} />
                  <AwardeeWrapper>
                    <AwardeeLogo>
                      <Image
                        src={award.awardeeLogo}
                        alt={`awardee-logo-${index}`}
                        {...awardeeLogoStyle}
                      />
                    </AwardeeLogo>
                    <AwardeeDetails>
                      <Heading
                        content={award.awardeeName}
                        {...awardeeNameStyle}
                      />
                      <Text content={award.date} {...awardDateStyle} />
                    </AwardeeDetails>
                  </AwardeeWrapper>
                </AwardItem>
              </GlideSlide>
            ))}
          </>
        </GlideCarousel>
      </Container>
    </AwardSectionWrapper>
  );
};

AwardsSection.propTypes = {
  secTitleWrapper: PropTypes.object,
  secTitle: PropTypes.object,
  secDescription: PropTypes.object,
  awardLogoStyle: PropTypes.object,
  awardNameStyle: PropTypes.object,
  awardDetailsStyle: PropTypes.object,
  awardeeLogoStyle: PropTypes.object,
  awardeeNameStyle: PropTypes.object,
  awardDateStyle: PropTypes.object,
};

AwardsSection.defaultProps = {
  secTitleWrapper: {
    width: ['100%', '100%', '60%', '50%', '50%'],
    mb: '90px',
  },
  secTitle: {
    fontSize: ['22px', '26px', '26px', '30px', '30px'],
    fontWeight: '600',
    color: '#302b4e',
    lineHeight: '1.34',
    mb: ['15px', '18px', '18px', '20px', '20px'],
  },
  secDescription: {
    fontSize: ['15px', '16px'],
    fontWeight: '400',
    color: '#43414e',
    lineHeight: '1.5',
    mb: '0',
  },
  awardLogoStyle: {
    ml: 'auto',
    mr: 'auto',
    mb: '25px',
  },
  awardNameStyle: {
    fontSize: ['16px', '16px', '18px', '20px'],
    fontWeight: '600',
    color: '#302b4e',
    lineHeight: '1.35',
    textAlign: 'center',
    mb: '17px',
  },
  awardDetailsStyle: {
    fontSize: ['15px', '15px', '15px', '16px'],
    color: '#43414e',
    lineHeight: '1.5',
    textAlign: 'center',
    mb: '0',
  },
  awardeeNameStyle: {
    fontSize: '16px',
    color: '#9391a5',
    lineHeight: '1.35',
    fontWeight: '600',
    mb: '4px',
  },
  awardDateStyle: {
    fontSize: '12px',
    color: '#9391a5',
    lineHeight: '1.35',
    mb: '0',
  },
};

export default AwardsSection;
