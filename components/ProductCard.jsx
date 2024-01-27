import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { COLORS, SIZES } from "../constants/theme";

import { useMainContext } from "../context/MainContext";

const ProductCard = ({ product, isHot, list }) => {
  const { handleAddCartItem } = useMainContext();
  const navigation = useNavigation();
  return (
    <View style={[styles["product-main"], styles.list(list)]}>
      <View style={styles["product-wrapper"]}>
        {isHot && (
          <View style={styles["hot-sale"]}>
            <MaterialIcons name="bolt" size={17} color="#ffffff" />
          </View>
        )}
        <View style={styles["product-card-image"]}>
          <TouchableOpacity
            style={styles["products-link-wrapper"]}
            onPress={() => navigation.navigate("product-page", { product })}
          >
            <Image
              style={styles["product-image"]}
              source={product.images[0]}
              resizeMode="cover"
            />
          </TouchableOpacity>
        </View>
        <View style={styles["product-card-detail"]}>
          <View style={styles["price"]}>
            <Text style={styles["product-price"]}>
              {"N"}
              {product.discount && product.discountPrice !== ""
                ? product.price - product.discountPrice
                : product.price - 0}
            </Text>

            {product?.discount && product?.discountPrice !== "" && (
              <Text style={styles["product-discount"]}>
                N{product?.discountPrice}
              </Text>
            )}
          </View>
          <View style={styles["name-price"]}>
            <Text style={styles["product-name"]}>{product?.name}</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              {[4, 4, 4, 4, 5].map((_, i) => (
                <AntDesign name="star" color="orange" key={i} size={17} />
              ))}
            </View>
            <TouchableOpacity
              style={styles["product-to-cart"]}
              onPress={() => handleAddCartItem(product, 1)}
            >
              <MaterialIcons
                name="add-shopping-cart"
                size={18}
                color={COLORS.primary}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  "product-main": {
    width: SIZES.width / 2 - 15,
    height: "auto",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  "product-wrapper": {
    padding: 0,
    position: "relative",
    width: SIZES.width / 2 - 15,
    backgroundColor: "#ebebeb",
  },
  "hot-sale": {
    width: 22,
    height: 20,
    backgroundColor: COLORS.secondary,
    position: "absolute",
    zIndex: 90,
    justifyContent: "center",
    alignItems: "center",
    top: 0,
    left: 0,
  },
  "product-card-image": {
    backgroundColor: "rgba(220, 220, 220, 1)",
  },
  "product-link-wrapper": {},
  "product-image": {
    width: SIZES.width / 2 - 17,
    height: SIZES.width / 2 - 17,
    borderRadius: 2,
    borderTopLeftRadius: 10,
  },
  "product-to-cart": {
    backgroundColor: COLORS.white,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderTopLeftRadius: 10,
  },
  "product-card-detail": {
    padding: 10,
  },
  "product-price": {
    fontFamily: "bold",
    color: COLORS.text,
    fontSize: 25,
  },

  "product-name": {
    fontFamily: "regular",
    fontSize: 15,
    textTransform: "capitalize",
  },
  "product-discount": {
    fontFamily: "regular",
    color: COLORS.gray,
    fontSize: 15,
    marginLeft: 5,
    textDecorationLine: "line-through",
  },
  rating: {},
  price: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  list: (list) => ({
    marginRight: list ? 10 : 0,
  }),
});
