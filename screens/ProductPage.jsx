import { StyleSheet, Text, View } from "react-native";
import { useRoute } from "@react-navigation/native";

const ProductPage = () => {
  const route = useRoute();

  const { product } = route.params;
  console.log(product);
  return (
    <View>
      <Text>ProductPage</Text>
    </View>
  );
};

export default ProductPage;

const styles = StyleSheet.create({});
