import { FlatList, View, Text } from "react-native";
import React from "react";
import style from "./productRow.style";
import { SIZES } from "../../constants";
import ProductCardView from "./ProductCardView";

const ProductRow = () => {
  const products = [1, 2, 3, 4];
  return (
    <View style={style.container}>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductCardView />}
        horizontal
        contentContainerStyle={{ columnGap: SIZES.medium }}
      />
    </View>
  );
};

export default ProductRow;
