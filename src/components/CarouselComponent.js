import React, { useState, useRef } from "react";
import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { colors } from "../utils/Colors";

export function CarouselComponent({ carouselData, ready }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const SCREEN_WIDTH = Dimensions.get("window").width;

  const ref = useRef(null);

  const renderImage = (index) => {
    switch (index) {
      case 0:
        return (
          <Image
            source={require("/Users/ctrovato/Desktop/MyProjects/EasyBreakUi/src/source/menu.jpg")}
            style={{ width: 180, height: 160, top: 8 }}
          />
        );
      case 1:
        return (
          <Image
            source={require("/Users/ctrovato/Desktop/MyProjects/EasyBreakUi/src/source/hamburger.jpg")}
            style={{ width: 180, height: 160, top: 8 }}
          />
        );
      case 2:
        return (
          <Image
            source={require("/Users/ctrovato/Desktop/MyProjects/EasyBreakUi/src/source/drink.jpg")}
            style={{ width: 180, height: 160, top: 8 }}
          />
        );
    }
  };
  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        onPress={item?.action}
        style={{
          borderColor: colors.grey400,
          backgroundColor: colors.blue100,
          borderWidth: 1,
          borderRadius: 20,
          width: 300,
          height: 250,
          alignItems: "center",
          justifyContent: "center",
          marginLeft: 30,
        }}
      >
        <Text
          style={{
            color: colors.red,
            fontFamily: "verdana",
            fontWeight: "bold",
            fontSize: 18,
            top: -1,
          }}
        >
          {item?.title}
        </Text>
        {renderImage(index)}
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={{
        shadowColor: colors.grey400,
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.29,
        shadowRadius: 8,
        elevation: 7,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Carousel
        enableMomentum={true}
        decelerationRate={0.9}
        activeDotIndex
        activeSlideAlignment={"start"}
        layout="default"
        ref={ref}
        data={carouselData}
        sliderWidth={SCREEN_WIDTH}
        itemWidth={372}
        renderItem={renderItem}
        removeClippedSubviews={true}
        inactiveSlideScale={0.92}
        inactiveSlideOpacity={0.65}
        onSnapToItem={(index) => {
          setActiveIndex(index);
        }}
      />
      {carouselData.length > 0 && (
        <Pagination
          activeDotIndex={activeIndex}
          dotsLength={carouselData.length}
          containerStyle={{ marginTop: -32 }}
          dotStyle={{
            width: 16,
            height: 4,
            borderRadius: 8,
            marginRight: -12,
            backgroundColor: colors.grey700,
          }}
          inactiveDotStyle={{
            borderRadius: 8,
            backgroundColor: colors.grey400,
          }}
        />
      )}
    </View>
  );
}
