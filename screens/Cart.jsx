import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import CartHeader from "../components/headers/CartHeader";
import SingleHeader from "../components/headers/SingleHeader";
import CartCard from "../components/cards/CartCard";

import { COLORS, SIZES } from "../constants/theme";

import { useMainContext } from "../context/MainContext";

const Cart = () => {
  const { cartItems, totalAmount } = useMainContext();
  return (
    <View style={{ height: SIZES.height }}>
      <CartHeader />
      <SingleHeader text="Select items for checkout" />
      <ScrollView style={styles["scroll-view"]}>
        {cartItems.length > 0 ? (
          cartItems.map((product, index) => (
            <CartCard product={product} key={index} />
          ))
        ) : (
          <View style={styles["empty-cart"]}>
            <MaterialCommunityIcons
              name="shopping"
              color={COLORS.primary}
              size={SIZES.width / 2}
            />
            <Text style={styles.text}>Your shopping cart is empty</Text>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles["btn-text"]}>Continue shopping</Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
      {cartItems.length > 0 && (
        <View style={styles["checkout-container"]}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              width: SIZES.width / 1.1,
            }}
          >
            <Text style={[styles.text, { marginHorizontal: 0, color: "#fff" }]}>
              Subtotal
            </Text>
            <Text style={[styles.text, { marginHorizontal: 0, color: "#fff" }]}>
              N{totalAmount}
            </Text>
          </View>
          <TouchableOpacity
            style={[
              styles.btn,
              { height: 50, borderRadius: 5, backgroundColor: COLORS.white },
            ]}
          >
            <Text
              style={[
                styles["btn-text"],
                { fontSize: 18, color: COLORS.primary },
              ]}
            >
              Checkout
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  "scroll-view": {
    paddingTop: 20,
    marginBottom: SIZES.height / 9,
  },
  "empty-cart": {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: "bold",
    marginHorizontal: 10,
    fontSize: 17,
  },
  "btn-text": {
    fontFamily: "bold",
    fontSize: 20,
    textTransform: "uppercase",
    color: COLORS.white,
  },
  btn: {
    width: SIZES.width / 1.1,
    backgroundColor: COLORS.primary,
    paddingHorizontal: 10,
    height: 55,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  "checkout-container": {
    position: "absolute",
    bottom: -27,
    width: SIZES.width,
    backgroundColor: COLORS.primary,
    paddingVertical: 10,
    alignItems: "center",
  },
});
