import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../constants/theme";

const SectionHeader = ({ title }) => {
  return (
    <View style={styles["header-container"]}>
      <TouchableOpacity>
        <Text>{title}</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>SEE ALL</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SectionHeader;

const styles = StyleSheet.create({
  "header-container": {
    width: SIZES.width,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: COLORS.primary,
    paddingVertical: 10,
    paddingHorizontal: 7,
  },
});
