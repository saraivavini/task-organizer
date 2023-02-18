import { Image } from 'native-base';

const logoImg = require('../../assets/logo.png');

type LogoProps = {
  size?: 'small' | 'medium';
};

const sizeMapping = {
  small: 'xs',
  medium: 'lg',
} as const;

export const Logo = (props: LogoProps) => {
  const { size = 'medium' } = props;

  return (
    <Image
      size={sizeMapping[size]}
      source={logoImg}
      alt="logo-image"
      resizeMode="contain"
    />
  );
};
