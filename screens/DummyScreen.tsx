import { View, Text } from "react-native";
import React from "react";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";

export default function DummyScreen() {
  const shared = useSharedValue(0);

  return (
    <View>
      <Text className="font-latoBold">DummyScreen</Text>
    </View>
  );
}
