import React from "react";
import { View, Image, StyleSheet, Alert } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { useAuthStore } from "../store/store";

const CustomDrawerContent = (props: any) => {
  const { isAuthenticated, logout } = useAuthStore();

  const handleLock = () => {
    Alert.alert("Lock Screen", "Device will be locked."); // Ganti dengan aksi kunci perangkat sesungguhnya
  };

  const handleLogout = async () => {
    await logout();
    props.navigation.replace("Login");
  };

  return (
    <DrawerContentScrollView {...props}>
      <View>
        <View>
          <DrawerItemList {...props} />
        </View>
        <View style={styles.bottomDrawerSection}>
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
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  bottomDrawerSection: {
    flex: 1,
    position: "relative",
    justifyContent: "space-between",
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
    paddingVertical: 10,
  },
});

export default CustomDrawerContent;
