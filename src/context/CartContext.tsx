import React, { createContext, useContext } from "react";
import { useAuth } from "./AuthContext";
import { useUser } from "./UserContext";


type CartType = {
  email: string;
  cart?: any[];
};

type CartContextType = {
  cartObj: CartType;
};

export const CartContext = createContext<CartContextType>({
  cartObj: {
    email: '',
    cart: []
  }
});

export const useCart = () => {
  return useContext(CartContext);
};

interface CartProviderProps { 
  children: React.ReactNode;
}

const CartProvider: React.FC<CartProviderProps> = ({ children }: CartProviderProps) => {
  const userData = useAuth();
  const cartObj = userData.getCart(userData.email, userData.password);

  const contextValue = { cartObj };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
