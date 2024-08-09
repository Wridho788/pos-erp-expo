import React from 'react';
import { View, Text, Image } from 'react-native';
import styled from 'styled-components/native';

interface CardOnlineOrderProps {
  orderId: string;
  totalItems: number;
  icon: any;
}

const CardContainer = styled.View`
  background-color: #fff;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  width: 50%
`;

const OrderIdText = styled.Text`
  font-size: 16px;
  font-weight: 500;
  color: #000;
  margin-bottom: 8px;
`;

const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const TotalItemsText = styled.Text`
  font-size: 14px;
  color: #333;
`;

const IconImage = styled.Image`
  width: 24px;
  height: 24px;
`;

const CardOnlineOrder: React.FC<CardOnlineOrderProps> = ({ orderId, totalItems, icon }) => {
  return (
    <CardContainer>
      <OrderIdText>{`Order ID: ${orderId}`}</OrderIdText>
      <Row>
        <IconImage source={icon} />
        <TotalItemsText>{`Total Items: ${totalItems}`}</TotalItemsText>
      </Row>
    </CardContainer>
  );
};

export default CardOnlineOrder;
