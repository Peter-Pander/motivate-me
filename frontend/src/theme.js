// frontend/src/theme.js

import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const config = {
  initialColorMode: "dark",      // start in dark mode
  useSystemColorMode: false,     // don’t sync to OS setting
};

// global styles for full‐height root & background
const styles = {
  global: (props) => ({
    html: {
      height: "100%",
    },
    body: {
      height: "100%",
      bg: mode("gray.50", "gray.900")(props),
    },
    "#root": {
      height: "100%",
    },
  }),
};

const theme = extendTheme({ config, styles });

export default theme;
