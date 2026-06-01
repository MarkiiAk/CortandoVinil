import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface CartItem {
  id: string;
  productId: string;
  slug: string;
  name: string;
  price: number;
  quantity: number;
  customization?: string;
}

interface CartStore {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "id">) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  total: () => number;
  count: () => number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (item) => {
        const existing = get().items.find(
          (i) =>
            i.productId === item.productId &&
            i.customization === item.customization
        );

        if (existing) {
          set((state) => ({
            items: state.items.map((i) =>
              i.id === existing.id
                ? { ...i, quantity: i.quantity + item.quantity }
                : i
            ),
          }));
        } else {
          set((state) => ({
            items: [
              ...state.items,
              { ...item, id: `${item.productId}-${Date.now()}` },
            ],
          }));
        }
      },

      removeItem: (id) =>
        set((state) => ({
          items: state.items.filter((i) => i.id !== id),
        })),

      updateQuantity: (id, quantity) => {
        if (quantity <= 0) {
          get().removeItem(id);
          return;
        }
        set((state) => ({
          items: state.items.map((i) =>
            i.id === id ? { ...i, quantity } : i
          ),
        }));
      },

      clearCart: () => set({ items: [] }),

      total: () =>
        get().items.reduce((sum, item) => sum + item.price * item.quantity, 0),

      count: () =>
        get().items.reduce((sum, item) => sum + item.quantity, 0),
    }),
    {
      name: "casaalesssia-cart",
    }
  )
);
