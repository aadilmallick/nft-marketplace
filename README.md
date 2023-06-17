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
