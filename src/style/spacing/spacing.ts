import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const isTablet = width >= 768;

const spacing = {
  padding: isTablet ? 20 : 10,
  margin: isTablet ? 20 : 10,
};

export default spacing;
