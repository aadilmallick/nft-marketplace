import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

import type { NFT } from "../data/dummy";
// import useRoute
import { useRoute } from "@react-navigation/native";
import { shadow_styles } from "../styles/shadows";
import { EndingDate, PeopleBar } from "../components/NFTCard";

export default function DetailsScreen() {
  const route = useRoute();
  const nft: NFT = route.params!.nft;
  return (
    <SafeAreaView className="flex-1 bg-white relative">
      <View className="h-1/2 relative">
        <Image source={nft.image} className="w-full object-cover h-full" />
        {/* heart icon */}
        <TouchableOpacity
          className="absolute top-8 right-4 bg-white h-12 w-12 rounded-full flex justify-center items-center"
          style={shadow_styles.shadow_md}
        >
          <AntDesign name="heart" color={"red"} size={24} />
        </TouchableOpacity>
        <TouchableOpacity
          className="absolute top-8 left-4 bg-white h-12 w-12 rounded-full flex justify-center items-center"
          style={shadow_styles.shadow_md}
        >
          <AntDesign name="back" color={"black"} size={24} />
        </TouchableOpacity>
        <PeopleBar />
        <EndingDate />
      </View>
      <View className="p-4">
        <Text className="font-latoBold text-lg">{nft.name}</Text>
        <Text className="font-lato">{nft.creator}</Text>
        <View className="mt-4">
          <Text className="text-base">{nft.description}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
