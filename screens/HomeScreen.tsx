// import text from react native
import { FlatList, SafeAreaView, Text, View } from "react-native";
import { NFTData } from "../data";
import NFTCard from "../components/NFTCard";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import type { NFT } from "../data/dummy";
export const HomeScreen = () => {
  const [searchValue, setSearchValue] = useState("");
  const [nftData, setNftData] = useState<NFT[]>(NFTData);

  useEffect(() => {
    if (searchValue === "" || !searchValue) {
      setNftData(NFTData);
      return;
    }
    setNftData(
      NFTData.filter((nft) =>
        nft.name.toLowerCase().includes(searchValue.toLowerCase())
      )
    );
  }, [searchValue]);

  return (
    <SafeAreaView className="flex-1 bg-white relative">
      <View className="bg-teal-700 flex-[0.4]"></View>
      <View className="bg-white flex-[0.6]"></View>
      <View className="absolute w-full py-4 h-full">
        <Header searchValue={searchValue} setSearchValue={setSearchValue} />
        <FlatList
          data={nftData}
          renderItem={({ item }) => <NFTCard nft={item} key={item.id} />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 16 }}
          className="flex-1"
        />
      </View>
    </SafeAreaView>
  );
};
