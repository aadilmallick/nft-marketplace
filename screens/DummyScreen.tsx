import { View, Text, TouchableOpacity, Switch } from "react-native";
import React, { useState } from "react";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
  useAnimatedGestureHandler,
} from "react-native-reanimated";
import {
  GestureHandlerRootView,
  PanGestureHandler,
} from "react-native-gesture-handler";

export default function DummyScreen() {
  const shared = useSharedValue(0);
  const sharedOpacity = useSharedValue(0);
  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: withSpring(shared.value) }],
    };
  }, []);

  const opacityStyles = useAnimatedStyle(() => {
    return {
      transform: [
        { rotate: `${withSpring(sharedOpacity.value)}deg` },
        { scale: withTiming(sharedOpacity.value / 20) },
      ],
    };
  });
  const [switchOn, setSwitchOn] = useState(false);
  const AnimatibleSwitch = Animated.createAnimatedComponent(Switch);

  const onGesture = useAnimatedGestureHandler({
    onActive(event, context) {
      console.warn(event.x, event.y);
      shared.value = event.translationX;
    },
    onEnd(event, context) {
      const maxSwipe = 100;
      if (Math.abs(event.translationX) > maxSwipe) {
        shared.value = withSpring(1000);
        return;
      }
      shared.value = withSpring(0);
    },
  });

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <TouchableOpacity
        onPress={() => (shared.value = 0)}
        className="px-4 py-2 mb-4 bg-blue-600 rounded-md"
      >
        <Text>Press me</Text>
      </TouchableOpacity>
      <PanGestureHandler
        minVelocityX={-1}
        minVelocityY={100}
        onGestureEvent={onGesture}
      >
        <Animated.View className="flex-1 justify-center items-center">
          <Animated.View
            className="w-32 h-32 bg-blue-400 rounded-full"
            style={animatedStyles}
          ></Animated.View>
          <AnimatibleSwitch
            onValueChange={() => {
              sharedOpacity.value += 20;
              setSwitchOn((prev) => !prev);
            }}
            value={switchOn}
            style={opacityStyles}
          />
        </Animated.View>
      </PanGestureHandler>
    </GestureHandlerRootView>
  );
}
