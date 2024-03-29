import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Box from 'reusecore/src/elements/Box';
import Text from 'reusecore/src/elements/Text';
import Heading from 'reusecore/src/elements/Heading';
import Button from 'reusecore/src/elements/Button';
import Image from 'reusecore/src/elements/Image';
import { Icon } from 'react-icons-kit';
import { ic_arrow_forward } from 'react-icons-kit/md/ic_arrow_forward';
import FeatureBlock from 'common/src/components/FeatureBlock';
import Container from 'common/src/components/UI/Container';
import { BannerSquareShape, BannerCircleShape } from '../app.style';
import {
  ButtonWrapper,
} from './banner.style';

import AppScreenshot from 'common/src/assets/image/app/mobile.png';

const DomainSection = ({
  SectionWrapper,
  row,
  col,
  title,
  description,
  button,
  image,
  imageArea,
  btnStyle,
  btnStyleTwo,
}) => {
  return (
    <Box {...SectionWrapper}>
      <BannerSquareShape />
      <BannerCircleShape />
      <Container>
        <Box {...row}>
          <Box {...col}>
            <FeatureBlock
              title={<Heading {...title} />}
              description={<Text {...description} />}
            />
            <ButtonWrapper>
              <Link href="#services">
                <a>
                  <Button {...button} {...btnStyle} />
                </a>
              </Link>
              <Link href="#">
                <a>
                  <Button
                    {...button}
                    {...btnStyleTwo}
                    icon={<Icon icon={ic_arrow_forward} />}
                    className="withoutBg"
                  />
                </a>
              </Link>
            </ButtonWrapper>
          </Box>
          <Box {...col} {...imageArea}>
            <Image src={AppScreenshot} alt="Domain Image" {...image} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

DomainSection.propTypes = {
  SectionWrapper: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  title: PropTypes.object,
  description: PropTypes.object,
  button: PropTypes.object,
  btnStyle: PropTypes.object,
  btnStyleTwo: PropTypes.object,
  discountAmount: PropTypes.object,
  discountText: PropTypes.object,
};

DomainSection.defaultProps = {
  SectionWrapper: {
    as: 'section',
    pt: '80px',
    pb: '80px',
    overflow: 'hidden',
  },
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
    alignItems: 'center',
  },
  imageAreaRow: {
    flexDirection: 'row-reverse',
  },
  col: {
    pr: '15px',
    pl: '15px',
    width: ['100%', '100%', '50%', '44%', '44%'],
    mt: '-80px',
  },
  imageArea: {
    width: ['0%', '0%', '43%', '35%', '50%'],
    ml: 'auto',
  },
  title: {
    content: 'Hola Vet',
    fontSize: ['26px', '30px', '30px', '48px', '60px'],
    fontWeight: '300',
    color: '#0f2137',
    letterSpacing: '-0.01px',
    mb: '20px',
  },
  description: {
    content:
      'Ten acceso a una red de veterionarios dispuestos a trabajar por el bienestar de tus mascotas en todo momento.',
    fontSize: '16px',
    color: '#343d48',
    lineHeight: '33px',
    mb: '10px',
  },
  button: {
    title: 'DESCARGAR APP',
    type: 'button',
    fontSize: '14px',
    fontWeight: '600',
    color: '#fff',
    borderRadius: '4px',
    pl: '22px',
    pr: '22px',
    colors: 'primaryWithBg',
  },
  image: {
    ml: 'auto',
    mt: '70px',
  },
  btnStyle: {
    minWidth: '156px',
    fontSize: '14px',
    fontWeight: '500',
  },
  btnStyleTwo: {
    title: 'VER MÁS',
    type: 'button',
    minWidth: '156px',
    fontSize: '14px',
    fontWeight: '500',
    ml: '15px',
    bg: '#fff',
    color: 'rgb(26, 115, 232)',
  },
  textArea: {
    width: ['100%', '100%', '50%', '55%', '55%'],
  },
  discountAmount: {
    content: 'update',
    fontSize: '14px',
    fontWeight: '600',
    color: '#fff',
    mb: 0,
    as: 'span',
    mr: '0.4em',
    bg: 'rgb(26, 115, 232)',
  },
  discountText: {
    content: 'Version 2.5.0 has just released .',
    fontSize: '13px',
    fontWeight: '400',
    color: '#0f2137',
    mb: 0,
    as: 'span',
    ml: '10px',
  },
};

export default DomainSection;
