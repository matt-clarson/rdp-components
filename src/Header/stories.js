import React from "react";
import { action } from "@storybook/addon-actions";
import Header from "./Header";
import HeaderActions from "./HeaderActions";
import HeaderActionButton from "./HeaderActionButton";
import HeaderTitle from "./HeaderTitle";

export default { title: "Header", component: Header };

export const standard = () => (
  <Header>
    <HeaderTitle>{"Red Panda Components"}</HeaderTitle>
    <HeaderActions>
      <HeaderActionButton icon="account_circle" onClick={action("Account")} />
      <HeaderActionButton icon="help" onClick={action("Help")} />
    </HeaderActions>
  </Header>
);

export const leadingActions = () => (
  <Header>
    <HeaderActions>
      <HeaderActionButton icon="menu" onClick={action("Menu")} />
    </HeaderActions>
    <HeaderTitle>{"Red Panda Components"}</HeaderTitle>
    <HeaderActions>
      <HeaderActionButton icon="account_circle" onClick={action("Account")} />
      <HeaderActionButton icon="help" onClick={action("Help")} />
    </HeaderActions>
  </Header>
);
