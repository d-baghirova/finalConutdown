import React from "react";
import { View, Text, Pressable } from "react-native";
import { useUser } from "../context/UserContext";
import Title from "../components/Title";
import Btn from "../components/Btn";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParams } from "../navigation/Index";

type Props = {
  navigation: StackNavigationProp<RootStackParams, "AddressChange">;
};

const Profile = ({ navigation }: Props) => {
  const userData = useUser();
  const user = userData.user;
  return (
    <View>
      <Text>Profile</Text>
      <Text>{user.name}</Text>
      <Text>{user.email}</Text>
      <Text>{user.password}</Text>

      <Title title={"Address"} />
      <Btn
        btnText="Change"
        onPress={() => navigation.navigate("AddressChange")}
      />
      <Text>{user.deliveryAdress?.street}</Text>
      <Text>{user.deliveryAdress?.city}</Text>
      <Text>{user.deliveryAdress?.country}</Text>
      <Text>{user.deliveryAdress?.apartment}</Text>

      <Text>{user.nonContactDelivery}</Text>

      <Text>fa {user.favorites}</Text>

      <Text>cart {user.cart}</Text>

      <Title title={"Card"} />
      <Text>cart {user.paymentMethod?.hexCode}</Text>
      <Text>cart {user.paymentMethod?.date}</Text>
      <Text>cart {user.paymentMethod?.cvv}</Text>
      <Btn btnText="Change" onPress={() => navigation.navigate("CardChange")} />
    </View>
  );
};

export default Profile;