/**
=========================================================
* Name
=========================================================

* Product Page: https://github.com/taka41sproduct/material-kit-react
* Copyright 2023 Taka41s (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Name React Base Styles
import colors from "assets/theme/base/colors";

const { transparent } = colors;

export default {
  styleOverrides: {
    root: {
      "&:hover": {
        backgroundColor: transparent.main,
      },
    },
  },
};
