import { StyleSheet, View, Text } from "react-native";
import React from "react";
import { SliderBox } from "react-native-image-slider-box";
import { COLORS } from "../../constants";

const Carousel = () => {
  const slides = [
    "https://housing.com/news/wp-content/uploads/2022/11/Popular-wooden-furniture-design-for-home-and-types-of-wood.jpg",
    "https://i.pinimg.com/originals/93/12/8d/93128ddcbdf103eee3b95f99c6f7fa7e.jpg",
    "https://stylesatlife.com/wp-content/uploads/2020/04/turkish-bedroom-furniture-designs.jpg",
  ];
  return (
    <View style={styles.carouselContainer}>
      <SliderBox
        images={slides}
        dotColor={COLORS.primary}
        inactiveDotColor={COLORS.secondary}
        ImageComponentStyle={{ borderRadius: 15, width: "92%", marginTop: 15 }}
        autoplay
        circleLoop
      />
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  carouselContainer: {
    flex: 1,
    alignItems: "center",
  },
});
