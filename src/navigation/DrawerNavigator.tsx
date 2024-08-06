//* Mengatur navigasi drawer untuk layar utama aplikasi.
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DashboardScreen from '../screens/Dashboard/DashboardScreen';
import OrderScreen from '../screens/Order/OrderScreen';
import TransactionScreen from '../screens/Transactions/TransactionsScreen';
import InventoryScreen from '../screens/Inventory/InventoryScreen';
import CashScreen from '../screens/Cash/CashScreen';
import MembershipScreen from '../screens/Membership/MembershipScreen';
import ReportScreen from '../screens/Report/ReportScreen';
import AttendanceScreen from '../screens/Attendance/AttendanceScreen';
import SettingsScreen from '../screens/Settings/SettingsScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigator: React.FC = () => {
  return (
    <Drawer.Navigator initialRouteName="Dashboard">
      <Drawer.Screen name="Dashboard" component={DashboardScreen} />
      <Drawer.Screen name="Order" component={OrderScreen} />
      <Drawer.Screen name="Transaction" component={TransactionScreen} />
      <Drawer.Screen name="Inventory" component={InventoryScreen} />
      <Drawer.Screen name="Cash" component={CashScreen} />
      <Drawer.Screen name="Membership" component={MembershipScreen} />
      <Drawer.Screen name="Report" component={ReportScreen} />
      <Drawer.Screen name="Attendance" component={AttendanceScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
