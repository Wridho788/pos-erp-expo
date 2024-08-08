import React from 'react';
import { Image, View } from 'react-native';
import { Container, Title, Total, Icon } from './styles';

interface HeaderSectionProps {
  icon: any;
  title: string;
  total: number;
  isCurrency?: boolean; // Add a flag to indicate if the total should be formatted as currency

}

const HeaderSection: React.FC<HeaderSectionProps> = ({ icon, title, total, isCurrency }) => {
    const formattedTotal = isCurrency
    ? new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(total)
    : total;

  return (
    <Container>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Icon source={icon} />
        <Title>{title}</Title>
      </View>
      <Total>{formattedTotal}</Total>
    </Container>
  );
};

export default HeaderSection;
