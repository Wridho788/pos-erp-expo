import React, { useEffect } from 'react';
import { ScrollView, View } from 'react-native';
import styled from 'styled-components/native';
import HeaderSection from './components/Header/Header';
import { useDashboardStore } from '../../store/dashboardStore';
import { Container } from './components/Header/styles'; // Import styled components

const DashboardScreen: React.FC = () => {
  const { customers, orders, income, expenses, averageSales, fetchDashboardData } = useDashboardStore(state => ({
    customers: state.customers,
    orders: state.orders,
    income: state.income,
    expenses: state.expenses,
    averageSales: state.averageSales,
    fetchDashboardData: state.fetchDashboardData,
  }));

  useEffect(() => {
    fetchDashboardData();
  }, [fetchDashboardData]);

  return (
    <ScrollView>
      <ContainerHeader>
        <HeaderSection
          icon={require('../../../assets/image/Customer-ic.png')}
          title="Customers"
          total={customers}
        />
        <HeaderSection
          icon={require('../../../assets/image/Order-dashboard.png')}
          title="Orders"
          total={orders}
        />
        <HeaderSection
          icon={require('../../../assets/image/income-ic.png')}
          title="Income"
          total={income}
          isCurrency 
        />
        <HeaderSection
          icon={require('../../../assets/image/Expenses-ic.png')}
          title="Expenses"
          total={expenses}
          isCurrency 
        />
        <HeaderSection
          icon={require('../../../assets/image/sales-graph-ic.png')}
          title="Average Sales"
          total={averageSales}
        />
      </ContainerHeader>
    </ScrollView>
  );
};

const ContainerHeader = styled.View`
flex-direction: row;
padding: 10px;
margin: 10px;
background: white;
radius: 8px
`

export default DashboardScreen;
