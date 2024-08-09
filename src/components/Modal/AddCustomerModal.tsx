import React, { useEffect, useState } from "react";
import { Modal, TextInput, Button, View, Text, StyleSheet, FlatList } from "react-native";
import styled from "styled-components/native";
import { useCustomerStore } from "../../store/customerStore";

interface AddCustomerModalProps {
  visible: boolean;
  onClose: () => void;
}

const ModalContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalContent = styled.View`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  width: 90%;
  max-width: 500px;
`;

const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Input = styled.TextInput`
  border-width: 1px;
  border-color: #ccc;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 15px;
`;

const ButtonContainer = styled.View`
  align-items: center;
`;

const StyledButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.primaryMain};
  padding: 10px 20px;
  border-radius: 5px;
  align-items: center;
`;

const ButtonText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
`;

const CustomerItem = styled.TouchableOpacity`
  padding: 10px;
  border-bottom-width: 1px;
  border-bottom-color: #ddd;
`;

const CustomerName = styled.Text`
  font-size: 16px;
`;

const AddCustomerModal: React.FC<AddCustomerModalProps> = ({ visible, onClose }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const { customerName, phoneNumber, setCustomerName, setPhoneNumber, saveCustomer, filteredCustomers, filterCustomers } = useCustomerStore();

  useEffect(() => {
    filterCustomers(searchQuery);
  }, [searchQuery]);

  const handleSave = () => {
    saveCustomer();
    onClose();
  };

  const handleCustomerSelect = (name: string) => {
    setCustomerName(name);
    setSearchQuery('');
  };

  return (
    <Modal transparent visible={visible} animationType="slide" onRequestClose={onClose}>
      <ModalContainer>
        <ModalContent>
          <Title>Add Customer</Title>
          <TextInput
            placeholder="Search customer..."
            value={searchQuery}
            onChangeText={setSearchQuery}
            style={styles.searchInput}
          />
          {/* {filteredCustomers.length > 0 && (
             <FlatList
             data={filteredCustomers}
             renderItem={({ item }) => (
               <CustomerItem onPress={() => handleCustomerSelect(item.name)}>
                 <CustomerName>{item.name}</CustomerName>
               </CustomerItem>
             )}
             keyExtractor={(item) => item.id}
             style={styles.customerList}
           />
          )} */}
          <Input
            placeholder="Customer Name"
            value={customerName}
            onChangeText={setCustomerName}
          />
          <Input
            placeholder="Phone Number"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            keyboardType="phone-pad"
          />
          <ButtonContainer>
            <StyledButton onPress={handleSave}>
              <ButtonText>Open Order</ButtonText>
            </StyledButton>
          </ButtonContainer>
        </ModalContent>
      </ModalContainer>
    </Modal>
  );
};

const styles = StyleSheet.create({
  searchInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    width: '100%',
  },
  customerList: {
    maxHeight: 150,
    marginBottom: 15,
  },
});

export default AddCustomerModal;