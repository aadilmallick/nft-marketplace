import { View, Text, Image, TextInput } from "react-native";
import React from "react";
import { assets } from "../data";
import { AntDesign } from "@expo/vector-icons";
import { shadow_styles } from "../styles/shadows";

interface HeaderProps {
  searchValue: string;
  setSearchValue: (searchVal: string) => void;
}

//  * found out that object-contain doesn't work nativewind, must use resizeMode="contain"
export default function Header({ searchValue, setSearchValue }: HeaderProps) {
  return (
    <View className="p-4">
      <View className="flex flex-row justify-between items-center">
        <View className="w-24">
          <Image
            source={assets.logo}
            className="w-full object-contain"
            resizeMode="contain"
          />
        </View>
        <Image source={assets.person01} className="w-12 h-12 rounded-full" />
      </View>
      <View>
        <Text className="font-lato text-sm text-white">Hello, bruh🙌</Text>
        <Text className="font-latoBold text-xl text-white">What's Up?</Text>
      </View>
      <View className="flex flex-row items-center my-2 bg-teal-500 rounded-full py-1 px-2">
        <AntDesign name="search1" size={24} color="white" />
        <TextInput
          placeholder="Search away..."
          className="font-lato text-base px-1 flex-1 h-full"
          value={searchValue}
          onChangeText={setSearchValue}
        />
      </View>
    </View>
  );
}
