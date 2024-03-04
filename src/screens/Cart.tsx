import React from "react";
import { View, Text } from "react-native";
import { useUser } from "../context/UserContext";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const cartObj = useCart();

  console.log(cartObj)
  
  return (
    <View>
      <Text>Cart</Text>
    </View>
  );
};

export default Cart;
