import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

// Product interface
interface Product {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
  oldprice?: number; // Optional old price
  newprice: number; // Required new price
}

// Basket item interface extends Product with count
interface BasketItem extends Product {
  count: number;
}

// Zustand store interface
interface UseStore {
  basket: BasketItem[];
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  clearAll: () => void;
  getTotalPrice: () => number;
  getItemCount: () => number;
  getGroupedItems: () => Record<string, BasketItem[]>;
}

const useStore = create<UseStore>()(
  persist(
    (set, get) => ({
      basket: [],

      // Add item to the basket
      addItem: (product: Product) => {
        set((state) => {
          const existingProduct = state.basket.find((item) => item._id === product._id);
          if (existingProduct) {
            return {
              basket: state.basket.map((item) =>
                item._id === product._id ? { ...item, count: item.count + 1} : item
              ),
            };
          } else {
            return { basket: [...state.basket, { ...product, count: 1 }] };
          }
        });
      },

      // Remove item from the basket
      removeItem: (productId: string) => {
        set((state) => {
          const existingProduct = state.basket.find((item) => item._id === productId);
      
          if (existingProduct) {
            // If count is greater than 1, decrement the count
            if (existingProduct.count > 1) {
              return {
                basket: state.basket.map((item) =>
                  item._id === productId ? { ...item, count: item.count - 1 } : item
                ),
              };
            } else {
              // Otherwise, remove the item from the basket
              return {
                basket: state.basket.filter((item) => item._id !== productId),
              };
            }
          }
      
          return { basket: state.basket }; // No changes if the product isn't found
        });
      },
      
      // Clear all items from the basket
      clearAll: () => {
        set({ basket: [] });
      },

      // Get the total price of the basket
      getTotalPrice: () => {
        return get().basket.reduce((sum, item) => sum + item.newprice * item.count, 0);
      },

      // Get the total item count in the basket
      getItemCount: () => {
        return get().basket.reduce((sum, item) => sum + item.count, 0);
      },

      // Get the basket grouped by product title
      getGroupedItems: () => {
        return get().basket.reduce((groupedItems, item) => {
          if (!groupedItems[item.title]) {
            groupedItems[item.title] = [];
          }
          groupedItems[item.title].push(item);
          return groupedItems;
        }, {} as Record<string, BasketItem[]>);
      },
    }),
    {
      name: 'basket-storage', // Key for localStorage
      storage: createJSONStorage(() => localStorage), // Use localStorage to persist the basket
    }
  )
);

export default useStore;
