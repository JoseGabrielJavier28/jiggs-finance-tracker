import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useTransactionStore = create(
  persist(
    (set) => ({
      transactions: [],
      
      // Action to add a transaction
      addTransaction: (transaction) => 
        set((state) => ({ 
          transactions: [transaction, ...state.transactions] 
        })),

      // Action to delete a transaction
      deleteTransaction: (id) => 
        set((state) => ({ 
          transactions: state.transactions.filter(t => t.id !== id) 
        })),
    }),
    { name: 'finance-storage' } 
  )
);

// "Transaction" Object
//{
//  id: crypto.randomUUID(), 
//  title: "Grocery Shopping",
//  amount: 50.00,
//  type: "expense",
//  category: "Food",
//  date: new Date().toISOString()
//}