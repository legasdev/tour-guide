const guideSystemScreenImage = "images/home/guide-system.jpg";

import { BlurBlock } from "@components/common";
import { ImageScreen } from "@components/shared";

function DevicesSystemScreen() {
  return (
    <ImageScreen
      title="Collect Your System to a Better Experience."
      translate="Сакупите свој систем за боље искуство."
      image={guideSystemScreenImage}
    >
      <div style={{ width: "100%" }}>
        <BlurBlock>Block 1</BlurBlock>
        <BlurBlock>Block 2</BlurBlock>
      </div>
    </ImageScreen>
  );
}

export default DevicesSystemScreen;
