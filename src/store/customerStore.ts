import create from 'zustand';

interface Customer {
  id: string;
  name: string;
  phoneNumber: string;
}

interface CustomerStore {
  customers: Customer[];
  filteredCustomers: Customer[];
  customerName: string;
  phoneNumber: string;
  setCustomerName: (name: string) => void;
  setPhoneNumber: (number: string) => void;
  filterCustomers: (query: string) => void;
  saveCustomer: () => void;
}

export const useCustomerStore = create<CustomerStore>((set, get) => ({
  customers: [
    { id: '1', name: 'John Doe', phoneNumber: '123-456-7890' },
    { id: '2', name: 'Jane Smith', phoneNumber: '098-765-4321' },
    { id: '3', name: 'Alice Johnson', phoneNumber: '111-222-3333' },
  ],
  filteredCustomers: [],
  customerName: '',
  phoneNumber: '',
  setCustomerName: (name) => set({ customerName: name }),
  setPhoneNumber: (number) => set({ phoneNumber: number }),
  filterCustomers: (query) => {
    const { customers } = get(); // Ambil state menggunakan get
    const filtered = customers.filter(customer =>
      customer.name.toLowerCase().includes(query.toLowerCase())
    );
    set({ filteredCustomers: filtered });
  },
  saveCustomer: () => {
    const { customerName, phoneNumber } = get(); // Ambil state menggunakan get
    console.log('Customer saved:', customerName, phoneNumber);
  },
}));
