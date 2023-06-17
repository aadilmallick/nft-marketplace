# Tips

## Nativewind and typescript

The `className` attribute when using nativewind will not be recognized, so to get rid of that annyoing error, follow these steps:

1. Create an `my-app.d.ts` in the root of your folder, and paste in the following triple directive:

   ```typescript
   /// <reference types="nativewind/types" />
   ```

   - alternatively, just paste this line at the top of every tsx file.

2. Add the filepath to the `types` key in your `package.json`, letting your app know that this is the types library you want to use.

   ```json
   "types": "my-app.d.ts"
   ```

## Fonts

### 1. Download the font

You can download everything you need for fonts from the `@expo/google-fonts` package. Make sure to install the exact font you want, and not the entire package, like this:

```bash
npm install @expo-google-fonts/<font-name>
npm install @expo-google-fonts/lato
```

### 2. Load the font

Use the `useFonts()` hook to load fonts, and render the splash screen in the meantime while you wait for the app to load.

```javascript
import {
  useFonts,
  Lato_300Light,
  Lato_400Regular,
  Lato_700Bold,
} from "@expo-google-fonts/lato";
```

```javascript
export default function App() {
  const [loaded] = useFonts({
    "lato-300": Lato_300Light,
    "lato-400": Lato_400Regular,
    "lato-700": Lato_700Bold,
  });

  // render splash screen while app is loading
  if (!loaded) {
    return null;
  }

  // return app here
}
```

The `useFonts()` hook takes in an object of the fonts we want to load, and we can give them names to refer later in our code.

### 3. Add font to theme

Create a separate js file that holds our theme, and then we extend from tailwind's theme. Global default font is not possible, so we have to add it to every component, but adding to theme removes the square bracket usage.

```javascript
// theme.js

module.exports = {
  fontFamily: {
    lato: ["lato-400", "sans-serif"],
    latoLight: ["lato-300", "sans-serif"],
    latoBold: ["lato-700", "sans-serif"],
  },
};
```

```javascript
/** @type {import('tailwindcss').Config} */
const { fontFamily: ff } = require("./theme");
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: ff,
    },
  },
  plugins: [],
};
```

With the above code, we are loading the fonts and mapping them like this:

```text
lato-400 -> lato -> font-lato
lato-300 -> latoLight -> font-latoLight
lato-700 -> latoBold -> font-latoBold
```

### 4. font usage

Make sure to not use font weight when doing this, as it will not work, and the font will revert back to Roboto. Instead, use the font name to specify the font weight and family.

```javascript
<Text className="font-latoBold">bold text</Text>
<Text className="font-[lato-700]">bold text</Text>
<Text className="font-lato">normal text</Text>
```

# Project

## Importing assets folder structure

## Flatlist styling

### Normal flatlist

### Absolutely positioned flatlist

```javascript
export const HomeScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-white relative">
      <View className="bg-teal-700 flex-[0.3]"></View>
      <View className="bg-white flex-[0.7]"></View>
      <View className="absolute w-full py-8 px-4 h-full border-8 border-black">
        <FlatList
          data={NFTData}
          renderItem={({ item }) => <NFTCard nft={item} key={item.id} />}
        />
      </View>
    </SafeAreaView>
  );
};
```

We position the root view as `relative`, and then the flatlist container as `absolute`. Make sure to define a height on the absolutely positioned view to enable scrolling.

```javascript
export const HomeScreen = () => {
  return (
    <SafeAreaView className="relative">
      <View className="absolute w-full h-full">
        <FlatList />
      </View>
    </SafeAreaView>
  );
};
```

## Shadows

The nativewind shadow styles don't work, so we have to use our own.

### Shadows in flatlist

In a `<FlatList>` component, you'll get a weird bug where the shadows will only show straight down. The way to fix this is to introduce horizontal padding on the `contentContainerStyle` prop.

```javascript
<View className="absolute w-full py-8 h-full">
  <FlatList contentContainerStyle={{ padding: 20 }} />
</View>
```
