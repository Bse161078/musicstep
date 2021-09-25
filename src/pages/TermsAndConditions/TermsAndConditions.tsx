import React from "react";
import { HeadingWithContent } from "../../components";
import { TermsAndConditionsStyle } from "./TermsAndConditions.style";

export default function TermsAndConditions() {
  return (
    <TermsAndConditionsStyle>
      <HeadingWithContent
        handleButtonClick={() => {}}
        heading="Terms & Conditions"
        content={[
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in quam et risus finibus finibus. Morbi vitae est vitae neque lobortis sollicitudin nec non ipsum. Aliquam hendrerit, nisi sed finibus sagittis, dui erat aliquam est, vel viverra nulla diam ut orci. Vestibulum ante metus, semper nec eros et, commodo dapibus dui. Maecenas lacinia felis at consequat consectetur. Vestibulum malesuada erat eget facilisis interdum. Sed fringilla non elit et commodo. Duis lacinia neque sit amet vestibulum finibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean vestibulum tortor nunc, non lacinia ipsum hendrerit quis.",
          "Suspendisse potenti. Sed lacinia nulla in est aliquet, sit amet efficitur ligula venenatis. Ut congue urna ac mauris rhoncus, at euismod elit mollis. Cras id ipsum ac leo scelerisque luctus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam aliquam justo in ex elementum commodo. Integer pretium, orci in gravida pellentesque, justo sem bibendum est, eget consectetur magna enim eget arcu.",
          "Pellentesque bibendum a ligula id varius. Proin nec finibus tellus, sed fringilla velit. Quisque sodales mi at fringilla tincidunt. Proin commodo et tellus in dictum. Nulla tortor sem, convallis ut egestas eu, ultricies eu risus. Donec nec eros eu nisl ultrices rutrum. Donec tempus massa ligula, at efficitur odio dignissim nec. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam eu enim varius, scelerisque enim eget, consequat turpis. Proin euismod mauris sit amet suscipit faucibus.",
          "Cras mauris nulla, gravida ut neque at, egestas fermentum diam. Fusce ullamcorper, urna sed lobortis semper, elit odio sodales arcu, vel finibus eros purus efficitur eros. Curabitur eget finibus ipsum. Ut metus ante, fringilla eu quam sed, euismod pulvinar eros. Donec eu lorem ipsum. Sed sed pulvinar est. Nullam dignissim aliquam tincidunt. Maecenas porta fermentum nunc in congue. Ut at lacus justo. Praesent et libero nec nisi fringilla porttitor quis sed purus. Aliquam a sollicitudin tortor. In posuere efficitur viverra. Etiam scelerisque risus quis lectus tincidunt pharetra.",
          "Pellentesque volutpat nunc a imperdiet ullamcorper. Pellentesque tortor purus, lobortis pretium fermentum sit amet, commodo id tortor. Praesent interdum tristique nulla, a suscipit leo porta nec. In vel nisl eget sem ultricies placerat sit amet non justo. Phasellus sed nibh ac nulla auctor luctus. Pellentesque sit amet lorem at odio dignissim ornare. Nullam blandit, dolor nec tristique accumsan, velit neque rutrum dolor, vel malesuada est metus nec enim.",
        ]}
      />
    </TermsAndConditionsStyle>
  );
}
