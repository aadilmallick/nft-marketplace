import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import type { NFT } from "../data/dummy";
import { shadow_styles } from "../styles/shadows";
// import from expo vector icons a heart icon
import { AntDesign } from "@expo/vector-icons";
import assets from "../data/assets";

// import useNavigation
import { useNavigation } from "@react-navigation/native";

interface NFTCardProps {
  nft: NFT;
}
export default function NFTCard({ nft }: NFTCardProps) {
  const navigation = useNavigation();
  return (
    <View
      className="bg-slate-50 rounded-sm my-4 relative"
      style={shadow_styles.shadow_2xl}
    >
      {/* image part */}
      <View className="h-48 relative">
        <Image
          source={nft.image}
          className="h-full w-full object-cover rounded-t-sm"
        />
        <PeopleBar />
        <EndingDate />
      </View>

      {/* heart icon */}
      <TouchableOpacity
        className="absolute top-1 right-1 bg-white h-12 w-12 rounded-full flex justify-center items-center"
        style={shadow_styles.shadow_md}
      >
        <AntDesign name="heart" color={"red"} size={24} />
      </TouchableOpacity>
      {/* content part */}
      <View className="p-4 space-y-2">
        <Text className="font-latoBold text-lg">{nft.name}</Text>
        <Text className="font-lato">{nft.creator}</Text>
        <View className="flex flex-row justify-between items-center">
          <Text>${nft.price}</Text>
          <TouchableOpacity
            className="bg-slate-700  px-4 py-2 rounded-full"
            onPress={() => navigation.navigate("Details", { nft })}
          >
            <Text className="text-white font-lato text-base">See Details</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export const PeopleBar = () => {
  return (
    <View className="absolute bottom-0 left-0 flex flex-row translate-y-4 translate-x-4">
      {[assets.person04, assets.person02, assets.person03].map((imgPath) => {
        return (
          <Image
            source={imgPath}
            key={imgPath}
            className="h-8 w-8 rounded-full -mr-2"
          />
        );
      })}
    </View>
  );
};

export const EndingDate = () => {
  // translating by percentage doesn't work
  return (
    <View
      className="absolute bottom-0 right-0 translate-y-6 -translate-x-4 flex items-center bg-white p-2"
      style={shadow_styles.shadow_md}
    >
      <Text className="font-lato text-xs text-slate-400">Ending in</Text>
      <Text className="font-latoBold text-slate-800">12h 30 m</Text>
    </View>
  );
};
