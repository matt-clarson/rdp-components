import React from "react";
import { Section, SectionGroup } from "../src/Section";

export default {
  title: "Section",
  decorators: [
    (Story: React.ElementType) => (
      <div style={{ padding: "50px" }}>
        <Story />
      </div>
    )
  ]
};

export const raised = () => (
  <Section style={{ width: "60%" }}>
    <h2>{"A Section"}</h2>
    <p>
      {
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id est id neque consequat iaculis vitae auctor mi. Praesent sagittis nulla dapibus magna sodales hendrerit. Suspendisse quis eros nec justo euismod tincidunt vel at neque. Vestibulum porta purus nec gravida fermentum. Aenean ullamcorper urna ex, non malesuada quam fermentum et. Nullam eu aliquet urna. Etiam vitae turpis ut augue ornare iaculis."
      }
    </p>

    <p>
      {
        "Quisque rutrum ex leo, sed pretium lectus euismod vitae. Fusce lorem ante, imperdiet quis velit eget, lacinia blandit leo. Sed ut mauris in arcu pellentesque condimentum. Cras eget ligula magna. Integer sapien nisl, lobortis eu ex vel, egestas dapibus ipsum. Nulla sed interdum augue, in ultricies ligula. Donec ac eros facilisis metus blandit ultricies at et lectus. Donec orci turpis, aliquet eget consectetur et, lobortis a est. Vivamus congue ultrices sapien, eget aliquet odio accumsan in."
      }
    </p>
  </Section>
);

export const flat = () => (
  <Section flat style={{ width: "60%" }}>
    <h2>{"A Section"}</h2>
    <p>
      {
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id est id neque consequat iaculis vitae auctor mi. Praesent sagittis nulla dapibus magna sodales hendrerit. Suspendisse quis eros nec justo euismod tincidunt vel at neque. Vestibulum porta purus nec gravida fermentum. Aenean ullamcorper urna ex, non malesuada quam fermentum et. Nullam eu aliquet urna. Etiam vitae turpis ut augue ornare iaculis."
      }
    </p>

    <p>
      {
        "Quisque rutrum ex leo, sed pretium lectus euismod vitae. Fusce lorem ante, imperdiet quis velit eget, lacinia blandit leo. Sed ut mauris in arcu pellentesque condimentum. Cras eget ligula magna. Integer sapien nisl, lobortis eu ex vel, egestas dapibus ipsum. Nulla sed interdum augue, in ultricies ligula. Donec ac eros facilisis metus blandit ultricies at et lectus. Donec orci turpis, aliquet eget consectetur et, lobortis a est. Vivamus congue ultrices sapien, eget aliquet odio accumsan in."
      }
    </p>
  </Section>
);

export const grouped = () => (
  <SectionGroup>
    <Section style={{ flexBasis: "40%" }}>
      <h2>{"Section 1"}</h2>
      <p>
        {
          " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed est et purus sollicitudin malesuada. Nunc at metus vitae metus ultricies vehicula id non lorem. Sed nec sem sed ante malesuada viverra iaculis sit amet nibh. In condimentum euismod consequat. Donec lobortis ex vel porta convallis. Fusce porta maximus facilisis. Donec vitae aliquam ex. Integer et eros vitae tellus pulvinar tempor eu vitae magna. Vivamus at nunc ac lacus pharetra consectetur in a sapien. Suspendisse urna tellus, interdum ac lobortis nec, consequat vel felis. Maecenas finibus gravida diam aliquam faucibus. Vivamus aliquet pretium viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In vel lorem ut lectus faucibus dictum. Aliquam eget facilisis nulla, interdum sagittis sapien."
        }
      </p>
    </Section>
    <Section style={{ flexBasis: "20%" }}>
      <h2>{"Section2"}</h2>
      <p>
        {
          " Aliquam tellus mi, sollicitudin rhoncus aliquam nec, fermentum ullamcorper quam. Donec quis lorem et nulla placerat fermentum et vitae ipsum. Quisque at tristique eros. Aliquam erat volutpat. Suspendisse eu risus et urna vulputate varius vel et diam. Vivamus a enim vel est porta eleifend at quis sapien. Aliquam finibus erat sed felis tristique, eget ornare ligula volutpat. Suspendisse potenti."
        }
      </p>
    </Section>
    <Section>
      <h2>{"Section 3"}</h2>
      <p>
        {
          " Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean sit amet eros libero. Vivamus ligula elit, rhoncus vulputate orci at, pellentesque efficitur elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut purus ligula, blandit sed tempus sit amet, dictum sit amet dolor. Morbi euismod diam eget ultrices semper. Quisque finibus, nisi ac blandit efficitur, tellus tortor sagittis orci, eget sollicitudin sapien nunc egestas nisl. Aenean semper risus vel lacus aliquam dapibus. Fusce condimentum dolor ipsum, id gravida orci blandit vel."
        }
      </p>
    </Section>
  </SectionGroup>
);
