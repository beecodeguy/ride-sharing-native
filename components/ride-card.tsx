import { GEO_MAP_DOMAIN } from "@/constants";
import { Ride } from "@/types/type";
import React from "react";
import { Image, Text, View } from "react-native";

const RideCard = ({ ride }: { ride: Ride }) => {
  const { driver, destination_latitude, destination_longitude } = ride;

  return (
    <View className="flex flex-row items-center justify-center bg-white rounded-lg shadow-sm shadow-neutral-300 mb-3">
      <View className="flex flex-row items-center justify-between p-3">
        <View className="flex flex-row items-center justify-between">
          <Image
            source={{
              uri: `${GEO_MAP_DOMAIN}:${destination_longitude},${destination_latitude}&zoom=14&apiKey=${process.env.EXPO_PUBLIC_GEOAPIFY_API_KEY}`,
            }}
            className="w-[80px] h-[90px] rounded-lg"
          />
        </View>
      </View>
      <Text className="text-3xl">{driver.first_name}</Text>
    </View>
  );
};

export default RideCard;
