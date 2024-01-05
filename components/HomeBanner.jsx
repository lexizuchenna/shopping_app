import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS } from "../constants/theme";

const HomeBanner = ({ item, index, items }) => {
  return (
    <TouchableOpacity style={styles.btnBanner(index, items)}>
      <Image source={item.image} resizeMode="cover" style={styles["image"]} />
    </TouchableOpacity>
  );
};

export default HomeBanner;

const styles = StyleSheet.create({
  btnBanner: (index, items) => ({
    marginRight: index === items.length - 1 ? 0 : 20,
    padding: 4,
    borderRadius: 5,
    borderColor: COLORS.primary,
    borderWidth: 2,
  }),
  image: {
    height: 180,
    width: 300,
  },
});
