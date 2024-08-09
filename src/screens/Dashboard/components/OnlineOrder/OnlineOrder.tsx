import React, { FC } from 'react';
import { ScrollView, Text, View } from 'react-native';
import styled from 'styled-components/native';

// Definisikan tipe untuk item pesanan
interface OrderItem {
  orderId: string;
  totalItems: number;
  icon: string;
}

// Definisikan tipe props untuk komponen
interface ScrollableCardListProps {
  data: OrderItem[];
  style?: object; // opsional, jika kamu ingin menerima style tambahan
}

// Komponen untuk menampilkan daftar pesanan dalam format scrollable card
const ScrollableCardList: FC<ScrollableCardListProps> = ({ data, style }) => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={[scrollViewStyle, style]}>
      {data.map((item) => (
        <Card key={item.orderId}>
          <Icon>{item.icon}</Icon>
          <OrderId>#{item.orderId}</OrderId>
          <Items>Total {item.totalItems} items</Items>
        </Card>
      ))}
    </ScrollView>
  );
};

// Styled-components untuk styling
const scrollViewStyle = {
  flex: 1,
  margin: 10
};

const Card = styled(View)`
  width: 200px;
  height: 100px;
  padding: 15px;
  background-color: #ffffff;
  margin-right: 10px;
  border-radius: 10px;
  shadow-opacity: 0.2;
  shadow-radius: 4px;
  align-items: center;
`;

const Icon = styled(Text)`
  font-size: 24px;
  margin-bottom: 10px;
`;

const OrderId = styled(Text)`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Items = styled(Text)`
  font-size: 14px;
  color: #666;
`;

export default ScrollableCardList;
