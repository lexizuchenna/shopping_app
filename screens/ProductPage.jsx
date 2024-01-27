import { StyleSheet, Text, View, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";

const ProductPage = () => {
  const route = useRoute();

  const { product } = route.params;
  return (
    <View>
      <Text>ProductPage</Text>
    </View>
  );
};

export default ProductPage;

const styles = StyleSheet.create({});
