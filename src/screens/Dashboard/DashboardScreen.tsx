import React, { useEffect, useState } from "react";
import { ScrollView, View, FlatList, SafeAreaView, StatusBar } from "react-native";
import styled from "styled-components/native";
import HeaderSection from "./components/Header/Header";
import { useDashboardStore } from "../../store/dashboardStore";
import FloatingActionButton from "../../components/Button/FloatingActionButton";
import CardOnlineOrder from "../../components/Card/CardOnlineOrder";
import OnlineOrderList from "./components/OnlineOrder/OnlineOrder";
import AddCustomerModal from "../../components/Modal/AddCustomerModal";

const dummyOrders = [
  {
    orderId: "ORD123456",
    totalItems: 5,
    icon: require("../../../assets/image/Order-ic.png"),
  },
  {
    orderId: "ORD789012",
    totalItems: 3,
    icon: require("../../../assets/image/Order-ic.png"),
  },
  {
    orderId: "ORD345678",
    totalItems: 7,
    icon: require("../../../assets/image/Order-ic.png"),
  },
  {
    orderId: "ORD901234",
    totalItems: 2,
    icon: require("../../../assets/image/Order-ic.png"),
  },
  {
    orderId: "ORD567890",
    totalItems: 6,
    icon: require("../../../assets/image/Order-ic.png"),
  },
];

const DashboardScreen: React.FC = () => {
  const {
    customers,
    orders,
    income,
    expenses,
    averageSales,
    fetchDashboardData,
  } = useDashboardStore((state) => ({
    customers: state.customers,
    orders: state.orders,
    income: state.income,
    expenses: state.expenses,
    averageSales: state.averageSales,
    fetchDashboardData: state.fetchDashboardData,
  }));

  const [isModalVisible, setModalVisible] = useState(false);

  const handleFABPress = () => {
    setModalVisible(true);
  };

  useEffect(() => {
    fetchDashboardData();
  }, [fetchDashboardData]);

  return (
    <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight || 0 }}>
      {/* <ScrollView> */}
      <ContainerHeader>
        <HeaderSection
          icon={require("../../../assets/image/Customer-ic.png")}
          title="Customers"
          total={customers}
        />
        <HeaderSection
          icon={require("../../../assets/image/Order-dashboard.png")}
          title="Orders"
          total={orders}
        />
        <HeaderSection
          icon={require("../../../assets/image/income-ic.png")}
          title="Income"
          total={income}
          isCurrency
        />
        <HeaderSection
          icon={require("../../../assets/image/Expenses-ic.png")}
          title="Expenses"
          total={expenses}
          isCurrency
        />
        <HeaderSection
          icon={require("../../../assets/image/sales-graph-ic.png")}
          title="Average Sales"
          total={averageSales}
        />
      </ContainerHeader>
      <OnlineOrderList data={dummyOrders} />

      {/* </ScrollView> */}
      <AddCustomerModal
        visible={isModalVisible}
        onClose={() => setModalVisible(false)}
      />

      <FloatingActionButton
        icon={require("../../../assets/image/Take-away-ic.png")}
        onPress={handleFABPress}
      />
    </SafeAreaView>
  );
};

const ContainerHeader = styled.View`
  flex-direction: row;
  padding: 10px;
  margin: 10px;
  background: white;
  radius: 8px;
`;

export default DashboardScreen;
