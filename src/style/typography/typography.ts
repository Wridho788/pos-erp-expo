import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const isTablet = width >= 768;

const typography = {
  fonts: {
    regular: 'Urbanist-Regular',
    bold: 'Urbanist-Bold',
    semibold: 'Urbanist-SemiBold'
  },
  fontSizes: {
    body: isTablet ? '18px' : '14px',
    heading: isTablet ? '24px' : '20px',
  },
};

export default typography;
