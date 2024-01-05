import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { COLORS } from "../constants/theme";

const Pagination = ({ items, currentIndex }) => {
  return (
    <View style={styles["pagination-dots"]}>
      {items.map((_, index) => (
        <View
          key={index}
          style={[styles["dot"], { opacity: index === currentIndex ? 1 : 0.3 }]}
        />
      ))}
    </View>
  );
};

export default Pagination;

const styles = StyleSheet.create({
  "pagination-dots": {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  dot: {
    width: 7,
    height: 7,
    borderRadius: 5,
    backgroundColor: COLORS.primary,
    marginHorizontal: 5,
  },
});
