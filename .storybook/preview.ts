import type { Preview } from "@storybook/react";
import type { ThemeConfig } from "storybook-addon-data-theme-switcher";

import "../src/styles.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        date: /Date$/i,
      },
    },
    backgrounds: { disable: true },
  },
  initialGlobals: {
    dataTheme: "Light",
    dataThemes: {
      list: [
        { name: "Light", dataTheme: "light" },
        { name: "Dark", dataTheme: "dark" },
        { name: "Cupcake", dataTheme: "cupcake" },
        { name: "Bumblebee", dataTheme: "bumblebee" },
        { name: "Emerald", dataTheme: "emerald" },
        { name: "Corporate", dataTheme: "corporate" },
        { name: "Synthwave", dataTheme: "synthwave" },
        { name: "Retro", dataTheme: "retro" },
        { name: "Cyberpunk", dataTheme: "cyberpunk" },
        { name: "Valentine", dataTheme: "valentine" },
        { name: "Halloween", dataTheme: "halloween" },
        { name: "Garden", dataTheme: "garden" },
        { name: "Forest", dataTheme: "forest" },
        { name: "Aqua", dataTheme: "aqua" },
        { name: "Lofi", dataTheme: "lofi" },
        { name: "Pastel", dataTheme: "pastel" },
        { name: "Fantasy", dataTheme: "fantasy" },
        { name: "Wireframe", dataTheme: "wireframe" },
        { name: "Black", dataTheme: "black" },
        { name: "Luxury", dataTheme: "luxury" },
        { name: "Dracula", dataTheme: "dracula" },
        { name: "Cmyk", dataTheme: "cmyk" },
        { name: "Autumn", dataTheme: "autumn" },
        { name: "Business", dataTheme: "business" },
        { name: "Acid", dataTheme: "acid" },
        { name: "Lemonade", dataTheme: "lemonade" },
        { name: "Night", dataTheme: "night" },
        { name: "Coffee", dataTheme: "coffee" },
        { name: "Winter", dataTheme: "winter" },
        { name: "Dim", dataTheme: "dim" },
        { name: "Nord", dataTheme: "nord" },
        { name: "Sunset", dataTheme: "sunset" },
        { name: "Caramellatte", dataTheme: "caramellatte" },
        { name: "Abyss", dataTheme: "abyss" },
        { name: "Silk", dataTheme: "silk" },
      ],
      dataAttribute: "data-theme",
      toolbar: {
        title: "Change data-theme attribute",
        icon: "PaintBrushIcon",
      },
    } satisfies ThemeConfig,
  },
};

export default preview;
