import React from "react";
import { HeadingWithContent } from "../../components";

import { HowItWorksStyle } from "./HowItWorks.style";

export default function HowItWorks() {
  return (
    <HowItWorksStyle>
      <HeadingWithContent
        handleButtonClick={() => {}}
        heading="How It Works?"
        content={[
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus malesuada ligula a felis efficitur molestie. Integer pretium fermentum urna, quis volutpat lectus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis dui lorem, varius nec ornare nec, eleifend id nisi. Nullam tristique facilisis arcu sit amet tincidunt. Nunc ultrices libero sit amet facilisis pretium. Suspendisse tortor orci, tincidunt at ipsum in, dapibus fermentum justo. Fusce ut dignissim risus.",
          "Donec luctus dignissim diam quis tempus. Nulla sed eros est. Nam laoreet non lectus et fermentum. Sed pulvinar sem eget nisi hendrerit porttitor. Donec in porttitor nunc, sit amet dapibus risus. Cras imperdiet metus eu risus posuere, a pellentesque diam finibus. Morbi eu leo vestibulum, porttitor nisl non, gravida nulla. Morbi lorem massa, placerat ut nisl ut, condimentum venenatis est. Aliquam dictum fringilla metus, ac aliquam diam tristique ut. Quisque auctor at felis eu aliquet. Integer semper molestie nunc, eu dignissim orci porta eget. Phasellus placerat ante at dolor viverra interdum. Duis eget eros massa. Donec eget ex eu est aliquet cursus. Nulla et velit vel enim molestie blandit. Ut auctor, augue ut hendrerit blandit, odio lectus sagittis tellus, ut luctus ante purus eget nunc.",
          "⩥ Fusce aliquam nisi id neque facilisis, vel rhoncus ante fringilla. ⩥ Duis euismod purus ac neque laoreet mattis. ⩥ Praesent iaculis orci ut ligula lacinia, id accumsan elit ornare. ⩥ In consectetur sem ut mi hendrerit dignissim. ⩥ Maecenas gravida elit sed ornare ultrices. ⩥ Pellentesque pellentesque urna in ante pulvinar, vitae tempor lacus egestas.",
          "Donec consequat, elit sed rhoncus faucibus, neque orci fermentum lectus, eget blandit lacus augue vitae massa. Morbi maximus ligula at metus sagittis, sit amet sodales ipsum varius. Etiam rhoncus neque eget nisl ultrices volutpat. Vivamus faucibus arcu a odio euismod vehicula. Pellentesque vehicula elit augue, id lacinia urna ultricies a. Proin id viverra tellus. In pretium cursus purus. Curabitur iaculis arcu quis nunc euismod vehicula. Sed condimentum commodo sollicitudin. Sed vitae sapien imperdiet, cursus neque a, rhoncus est. Pellentesque lacus sem, porta vitae accumsan a, eleifend facilisis nisi. Aliquam varius efficitur metus eget ultrices. Mauris mattis tempor malesuada. Sed bibendum ex nec urna rutrum consequat.",
          "Ut convallis nulla lacus, et dignissim ex lacinia sit amet. Curabitur varius aliquam enim vitae euismod. Sed rhoncus felis in metus ultricies porta. Donec ultrices suscipit nisl, nec scelerisque odio venenatis ac. Quisque sed ligula luctus, fringilla magna in, lobortis lorem. Quisque consectetur odio pharetra arcu fringilla facilisis. Suspendisse ullamcorper enim sit amet aliquet vulputate. Etiam sed sagittis felis, vitae laoreet neque. Sed suscipit augue felis.",
        ]}
      />
    </HowItWorksStyle>
  );
}
