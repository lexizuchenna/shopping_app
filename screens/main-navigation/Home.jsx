import {
  StyleSheet,
  View,
  FlatList,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useRef, useState } from "react";

import HomeBanner from "../../components/HomeBanner";
import Pagination from "../../components/Pagination";
import SectionHeader from "../../components/SectionHeader";
import ProductCard from "../../components/ProductCard";

import { useMainContext } from "../../context/MainContext";

import { SIZES, COLORS } from "../../constants/theme";

const Home = () => {
  const listRef = useRef(null);
  const items = [
    { image: require("../../assets/images/banner01.jpg"), link: "/banner/01" },
    { image: require("../../assets/images/banner02.jpg"), link: "/banner/02" },
    { image: require("../../assets/images/banner03.jpg"), link: "/banner/03" },
    { image: require("../../assets/images/banner04.jpg"), link: "/banner/04" },
    { image: require("../../assets/images/banner05.png"), link: "/banner/05" },
    { image: require("../../assets/images/banner06.png"), link: "/banner/06" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = (event) => {
    const contentOffset = event.nativeEvent.contentOffset.x;
    const index = Math.floor(contentOffset / 300);
    setCurrentIndex(index);
  };

  const products = [
    {
      _id: "12345",
      images: [require("../../assets/images/headphone.jpg")],
      name: "headphone 1",
      discount: true,
      discountPrice: 40,
      price: 120,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum veritatis libero dolore blanditiis incidunt soluta voluptatem exercitationem nobis dicta voluptatibus.",
      "item-quantity": 20,
      "user-quantity": 5,
    },
    {
      _id: "1345",
      images: [require("../../assets/images/headphone2.jpg")],
      name: "headphone 2",
      discount: true,
      discountPrice: 40,
      price: 120,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum veritatis libero dolore blanditiis incidunt soluta voluptatem exercitationem nobis dicta voluptatibus.",
      "item-quantity": 20,
      "user-quantity": 5,
    },
    {
      _id: "1245",
      images: [require("../../assets/images/headphone3.jpg")],
      name: "headphone 3",
      discount: false,
      discountPrice: 40,
      price: 120,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum veritatis libero dolore blanditiis incidunt soluta voluptatem exercitationem nobis dicta voluptatibus.",
      "item-quantity": 20,
      "user-quantity": 5,
    },
    {
      _id: "1235",
      images: [require("../../assets/images/headphone1.jpg")],
      name: "headphone 4",
      discount: false,
      discountPrice: 40,
      price: 120,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum veritatis libero dolore blanditiis incidunt soluta voluptatem exercitationem nobis dicta voluptatibus.",
      "item-quantity": 20,
      "user-quantity": 5,
    },
    {
      _id: "12345",
      images: [require("../../assets/images/headphone.jpg")],
      name: "headphone 1",
      discount: true,
      discountPrice: 40,
      price: 120,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum veritatis libero dolore blanditiis incidunt soluta voluptatem exercitationem nobis dicta voluptatibus.",
      "item-quantity": 20,
      "user-quantity": 5,
    },
    {
      _id: "1345",
      images: [require("../../assets/images/headphone2.jpg")],
      name: "headphone 2",
      discount: true,
      discountPrice: 40,
      price: 120,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum veritatis libero dolore blanditiis incidunt soluta voluptatem exercitationem nobis dicta voluptatibus.",
      "item-quantity": 20,
      "user-quantity": 5,
    },
    {
      _id: "1245",
      images: [require("../../assets/images/headphone3.jpg")],
      name: "headphone 3",
      discount: false,
      discountPrice: 40,
      price: 120,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum veritatis libero dolore blanditiis incidunt soluta voluptatem exercitationem nobis dicta voluptatibus.",
      "item-quantity": 20,
      "user-quantity": 5,
    },
    {
      _id: "1235",
      images: [require("../../assets/images/headphone1.jpg")],
      name: "headphone 4",
      discount: false,
      discountPrice: 40,
      price: 120,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum veritatis libero dolore blanditiis incidunt soluta voluptatem exercitationem nobis dicta voluptatibus.",
      "item-quantity": 20,
      "user-quantity": 5,
    },
  ];

  return (
    <ScrollView>
      <View>
        <View style={styles["header-container"]}>
          <Text style={styles["header-text"]}>Welcome to spree</Text>
        </View>
        <View style={{ paddingHorizontal: 7 }}>
          <FlatList
            ref={listRef}
            data={items}
            keyExtractor={(_, index) => index + 1}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            horizontal
            scrollEnabled
            renderItem={({ item, index }) => (
              <HomeBanner item={item} index={index} items={items} />
            )}
            onScroll={handleScroll}
            style={styles["list"]}
          />
          <Pagination currentIndex={currentIndex} items={items} />
        </View>
        <View style={[styles["header-container"], { marginTop: 15 }]}>
          <Text style={styles["header-text"]}>Flash sales</Text>
        </View>
        <View style={{ paddingHorizontal: 7 }}>
          <FlatList
            // ref={listRef}
            data={products}
            keyExtractor={(_, index) => index + 1}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            horizontal
            scrollEnabled
            renderItem={({ item, index }) => (
              <ProductCard
                product={item}
                isHot={true}
                key={index}
                list={true}
              />
            )}
            // onScroll={handleScroll}
            // style={{ marginRight: 10 }}
          />
          {/* <Pagination currentIndex={currentIndex} items={items} /> */}
        </View>
        <View
          style={{
            paddingHorizontal: 7,
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {products.map((product, index) => (
            <ProductCard product={product} isHot={true} key={index} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  "main-container": {
    paddingHorizontal: 7,
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
  "header-text": {
    textAlign: "center",
    fontFamily: "semi-bold",
    fontSize: 15,
    textTransform: "uppercase",
    color: COLORS.white,
  },
  list: {
    marginTop: 10,
  },
});
