/*
=========================================================
* Name
=========================================================

* Product Page: https://github.com/taka41sproduct/material-kit-react
* Copyright 2023 Taka41s (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Sections components
import BaseLayout from "layouts/sections/components/BaseLayout";
import View from "layouts/sections/components/View";

// ProgressBars page components
import ProgressSimple from "layouts/sections/elements/progress-bars/components/ProgressSimple";

// ProgressBars page components code
import progressSimpleCode from "layouts/sections/elements/progress-bars/components/ProgressSimple/code";

function ProgressBars() {
  return (
    <BaseLayout
      title="Progress Bars"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/elements/progress-bars" },
        { label: "Progress Bars" },
      ]}
    >
      <View title="Progress bar simple" code={progressSimpleCode}>
        <ProgressSimple />
      </View>
    </BaseLayout>
  );
}

export default ProgressBars;
