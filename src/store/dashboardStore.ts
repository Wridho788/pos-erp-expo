import create from 'zustand';
import { fetchDashboardData } from '../services/dashboardService'; // Import the service function

interface DashboardState {
  customers: number;
  orders: number;
  income: number;
  expenses: number;
  averageSales: number;
  fetchDashboardData: () => Promise<void>;
}

export const useDashboardStore = create<DashboardState>((set) => ({
  customers: 0,
  orders: 0,
  income: 0,
  expenses: 0,
  averageSales: 0,
  fetchDashboardData: async () => {
    try {
      const data = await fetchDashboardData();
      set({
        customers: data.customers,
        orders: data.orders,
        income: data.income,
        expenses: data.expenses,
        averageSales: data.averageSales,
      });
    } catch (error) {
      console.error('Failed to fetch dashboard data:', error);
    }
  },
}));
