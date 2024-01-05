import { StyleSheet, Text, View } from "react-native";

import { COLORS, SIZES } from "../../constants/theme";

const SingleHeader = ({ text }) => {
  return (
    <View style={styles["header-container"]}>
      <Text style={styles["header-text"]}>{text}</Text>
    </View>
  );
};

export default SingleHeader;

const styles = StyleSheet.create({
  "header-text": {
    textAlign: "center",
    fontFamily: "semi-bold",
    fontSize: 15,
    textTransform: "uppercase",
    color: COLORS.white,
  },
  "header-container": {
    width: SIZES.width,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.primary,
    paddingVertical: 10,
    paddingHorizontal: 7,
  },
});
