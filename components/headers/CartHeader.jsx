import {
  StyleSheet,
  View,
  Platform,
  StatusBar,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { COLORS, SIZES } from "../../constants/theme";

const CartHeader = ({ handleChange, setIsFilter }) => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const topHeight =
    Platform.OS === "android" ? StatusBar.currentHeight : insets;
  return (
    <View style={styles["header-container"]}>
      <View style={[styles["main-header"], { marginTop: topHeight }]}>
        <TouchableOpacity
          style={styles["back-btn"]}
          onPress={() => navigation.goBack()}
        >
          <Ionicons
            name="arrow-back-circle-sharp"
            size={25}
            color={COLORS.primary}
          />
        </TouchableOpacity>
        <TextInput
          style={styles["search-input"]}
          placeholder="Filter cart"
          onChangeText={(text) => handleChange(text)}
        />
      </View>
    </View>
  );
};

export default CartHeader;

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
  "back-btn": {
    backgroundColor: COLORS.offwhite,
    padding: 4,
    width: 38,
    position: "relative",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  "search-input": {
    backgroundColor: COLORS.lightWhite,
    paddingVertical: 4,
    height: "100%",
    width: SIZES.width - 76,
    borderRadius: 4,
    paddingHorizontal: 10,
  },
});
