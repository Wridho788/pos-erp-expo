import React from 'react';
import { View, Image, StyleSheet, Alert } from 'react-native';
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { useAuthStore } from '../store/store';

const CustomDrawerContent = (props: any) => {
    const { isAuthenticated, logout } = useAuthStore();

  const handleLock = () => {
    Alert.alert("Lock Screen", "Device will be locked."); // Ganti dengan aksi kunci perangkat sesungguhnya
  };

  const handleLogout = async () => {
    await logout();
    props.navigation.replace('Login');
  };

  return (
    <DrawerContentScrollView {...props}>
    <DrawerItemList {...props} />
    <View style={styles.bottomDrawerSection}>
      <DrawerItem
        label="Settings"
        icon={() => (
          <Image
            source={require("../../assets/image/settings.png")}
            style={{ width: 24, height: 24 }}
          />
        )}
        onPress={() => props.navigation.navigate('Settings')}
      />
      <DrawerItem
        label="Lock"
        icon={() => (
          <Image
            source={require("../../assets/image/Lock-ic.png")}
            style={{ width: 24, height: 24 }}
          />
        )}
        onPress={handleLock}
      />
      <DrawerItem
        label="Logout"
        icon={() => (
          <Image
            source={require("../../assets/image/Logout-ic.png")}
            style={{ width: 24, height: 24 }}
          />
        )}
        onPress={handleLogout}
      />
    </View>
  </DrawerContentScrollView>
  );
};


const styles = StyleSheet.create({
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1,
      },
  });
  

export default CustomDrawerContent;
