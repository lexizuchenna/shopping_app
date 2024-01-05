import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import CheckBox from "react-native-bouncy-checkbox";

import { COLORS, SIZES } from "../../constants/theme";

import { useMainContext } from "../../context/MainContext";

const CartCard = ({ product }) => {
  const {
    checkoutItems,
    handleSelectCheckoutItem,
    handleRemoveCartItem,
    handleCartItemQty,
  } = useMainContext();
  return (
    <View style={styles["cart-card"]}>
      <View style={styles["image-container"]}>
        <Image source={product.images[0]} style={styles["cart-image"]} />
      </View>
      <View style={styles["cart-detail"]}>
        <View style={[styles["action-container"], { marginBottom: 7 }]}>
          <Text style={styles["item-name"]}>{product.name}</Text>
          <View style={styles["action-container"]}>
            <CheckBox
              size={20}
              fillColor={COLORS.primary}
              unfillColor={COLORS.white}
              style={{ marginRight: 10 }}
              isChecked={checkoutItems.find((item) => product._id === item._id)}
              onPress={(e) => {
                if (
                  checkoutItems.findIndex(
                    (item) => item._id === product._id
                  ) === -1
                ) {
                  handleSelectCheckoutItem(e, product, "add");
                } else {
                  handleSelectCheckoutItem(e, product, "remove");
                }
              }}
            />
            <TouchableOpacity
              style={styles["action-btn"]}
              onPress={() => handleRemoveCartItem(product)}
            >
              <FontAwesome5 name="trash" size={18} color={COLORS.primary} />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles["item-desc"]}>{product.desc}</Text>
        <View style={styles["action-container"]}>
          <View style={[styles["action-container"], styles["quantity"]]}>
            <TouchableOpacity
              style={[
                styles["qty-btn"],
                {
                  borderRightWidth: 1,
                  borderRightColor: COLORS.gray2,
                  paddingRight: 8,
                },
              ]}
              onPress={() => handleCartItemQty(product, "dec")}
            >
              <FontAwesome5 name="minus" size={15} color="red" />
            </TouchableOpacity>
            <Text
              style={{
                fontFamily: "medium",
                fontSize: 14,
                paddingTop: 4,
              }}
            >
              {product.quantity}
            </Text>
            <TouchableOpacity
              style={[
                styles["qty-btn"],
                {
                  borderLeftWidth: 1,
                  borderLeftColor: COLORS.gray2,
                  paddingLeft: 8,
                },
              ]}
              onPress={() => handleCartItemQty(product, "inc")}
            >
              <FontAwesome5 name="plus" size={15} color="green" />
            </TouchableOpacity>
          </View>
          <View style={[styles["action-container"], { marginTop: 8 }]}>
            {product?.discount && product?.discountPrice !== "" && (
              <Text style={styles["item-discount"]}>
                N{product?.discountPrice}
              </Text>
            )}
            <Text style={styles["item-price"]}>
              N
              {product.discount && product.discountPrice !== ""
                ? product.price - product.discountPrice
                : product.price - 0}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CartCard;

const styles = StyleSheet.create({
  "cart-card": {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingHorizontal: 5,
    paddingBottom: 20,
    marginBottom: 5,
    borderBottomColor: COLORS.gray,
    borderBottomWidth: 1,
  },
  "image-container": {
    height: SIZES.width / 3.2,
    width: SIZES.width / 3.2,
    padding: 4,
    backgroundColor: "rgba(220, 220, 220, 1)",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  "cart-image": {
    height: SIZES.width / 3.2,
    width: SIZES.width / 3.2,
  },
  "cart-detail": {
    width: SIZES.width / 1.55,
  },
  "item-name": {
    fontFamily: "semi-bold",
    textTransform: "capitalize",
    fontSize: 15,
  },
  "item-desc": {
    textAlign: "auto",
    fontFamily: "regular",
    fontSize: 12,
  },
  "action-container": {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  "action-btn": {
    marginRight: 5,
  },
  quantity: {
    width: 110,
    height: 30,
    // paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: COLORS.gray2,
    borderRadius: 15,
    alignItems: "center",
  },
  "qty-btn": {
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  "item-price": {
    fontFamily: "semi-bold",
    fontSize: 18,
    marginRight: 5,
  },
  "item-discount": {
    textDecorationLine: "line-through",
    color: COLORS.gray,
    marginRight: 10,
    fontFamily: "regular",
    fontSize: 11,
    paddingTop: 4,
  },
});
