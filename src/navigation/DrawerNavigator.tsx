//* Mengatur navigasi drawer untuk layar utama aplikasi.
import React from "react";
import { Image } from 'react-native';
import { createDrawerNavigator } from "@react-navigation/drawer";
import DashboardScreen from "../screens/Dashboard/DashboardScreen";
import OrderScreen from "../screens/Order/OrderScreen";
import TransactionScreen from "../screens/Transactions/TransactionsScreen";
import InventoryScreen from "../screens/Inventory/InventoryScreen";
import CashScreen from "../screens/Cash/CashScreen";
import MembershipScreen from "../screens/Membership/MembershipScreen";
import ReportScreen from "../screens/Report/ReportScreen";
import AttendanceScreen from "../screens/Attendance/AttendanceScreen";
import SettingsScreen from "../screens/Settings/SettingsScreen";
import CustomDrawerContent from './CustomNavigator'; // Import custom drawer content

const Drawer = createDrawerNavigator();

const DrawerNavigator: React.FC = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        drawerType: "permanent", // This makes the drawer always visible
        headerShown: false, // Optional: Hide the header if you don't want it
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />} 
    >
      <Drawer.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          headerShown: false,
          drawerIcon: () => (
            <Image
              source={require("../../assets/image/home.png")}
              style={{ width: 24, height: 24 }}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Open Order"
        component={OrderScreen}
        options={{ headerShown: false, 
          drawerIcon: () => (
            <Image
              source={require("../../assets/image/Order-ic.png")}
              style={{ width: 24, height: 24 }}
            />
          ),
         }}
      />
      <Drawer.Screen
        name="Transaction"
        component={TransactionScreen}
        options={{ headerShown: false,
          drawerIcon: () => (
            <Image
              source={require("../../assets/image/Transaction-ic.png")}
              style={{ width: 24, height: 24 }}
            />
          ),
         }}
      />
      <Drawer.Screen
        name="Inventory"
        component={InventoryScreen}
        options={{ headerShown: false,
          drawerIcon: () => (
            <Image
              source={require("../../assets/image/Inventory-ic.png")}
              style={{ width: 24, height: 24 }}
            />
          ),
         }}
      />
      <Drawer.Screen
        name="Cash"
        component={CashScreen}
        options={{ headerShown: false, 
          drawerIcon: () => (
            <Image
              source={require("../../assets/image/Cashflow-ic.png")}
              style={{ width: 24, height: 24 }}
            />
          ),
         }}
      />
      <Drawer.Screen
        name="Membership"
        component={MembershipScreen}
        options={{ headerShown: false, 
          drawerIcon: () => (
            <Image
              source={require("../../assets/image/membership-ic.png")}
              style={{ width: 24, height: 24 }}
            />
          ),
         }}
      />
      <Drawer.Screen
        name="Report"
        component={ReportScreen}
        options={{ headerShown: false,
          drawerIcon: () => (
            <Image
              source={require("../../assets/image/Report-ic.png")}
              style={{ width: 24, height: 24 }}
            />
          ),
         }}
      />
      <Drawer.Screen
        name="Attendance"
        component={AttendanceScreen}
        options={{ headerShown: false, 
          drawerIcon: () => (
            <Image
              source={require("../../assets/image/Attendance-ic.png")}
              style={{ width: 24, height: 24 }}
            />
          ),
         }}
      />
      {/* <Drawer.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ headerShown: false,
          drawerIcon: () => (
            <Image
              source={require("../../assets/image/settings.png")}
              style={{ width: 24, height: 24 }}
            />
          ),
         }}
      /> */}
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
