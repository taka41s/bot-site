/* eslint-disable no-param-reassign */
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

// Name React components
import MKBox from "components/MKBox";

// Name React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";

// Routes
import routes from "routes";

function NavbarDark() {
  return (
    <MKBox variant="gradient" bgColor="dark" shadow="sm" py={0.25}>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "https://github.com/taka41sproduct/material-kit-react",
          label: "free download",
          color: "info",
        }}
        transparent
        relative
        light
        center
      />
    </MKBox>
  );
}

export default NavbarDark;
