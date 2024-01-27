import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { COLORS, SIZES } from "../constants/theme";
import { useMainContext } from "../context/MainContext";

const MainHeader = () => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const topHeight =
    Platform.OS === "android" ? StatusBar.currentHeight : insets;
  const { cartItems } = useMainContext();
  return (
    <View style={styles["header-container"]}>
      <View style={[styles["main-header"], { marginTop: topHeight }]}>
        <TouchableOpacity style={styles["search-btn"]}>
          <Text>Search spree</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles["cart-btn"]}>
          <Ionicons name="notifications" size={25} color={COLORS.primary} />
          <View style={styles["cart-qty-container"]}>
            <Text style={styles["cart-qty"]}>0</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles["cart-btn"]}
          onPress={() => navigation.navigate("cart")}
        >
          <Ionicons name="cart" size={25} color={COLORS.primary} />
          <View style={styles["cart-qty-container"]}>
            <Text style={styles["cart-qty"]}>
              {cartItems.length > 9 ? "20" : cartItems.length}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MainHeader;

const styles = StyleSheet.create({
  "header-container": {
    backgroundColor: COLORS.gray,
    minHeight: 50,
    paddingHorizontal: 7,
  },
  "main-header": {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: 8,
  },
  "cart-btn": {
    backgroundColor: COLORS.offwhite,
    padding: 4,
    width: 38,
    position: "relative",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  "cart-qty-container": {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    paddingHorizontal: 5,
    paddingVertical: 0,
    backgroundColor: COLORS.primary,
    borderRadius: 55,
    position: "absolute",
    top: -6,
    right: -6,
    height: 18,
    width: 18,
  },
  "cart-qty": {
    margin: 0,
    fontSize: 11,
    color: "#ffffff",
    fontFamily: "semi-bold",
  },
  "search-btn": {
    backgroundColor: COLORS.lightWhite,
    paddingVertical: 8,
    height: "100%",
    width: SIZES.width - 110,
    borderRadius: 4,
    paddingLeft: 6,
  },
});
