import React, { useState } from "react";
import { select } from "@storybook/addon-knobs";
import Dialog from "./Dialog";
import DialogActions from "./DialogActions";
import DialogContent from "./DialogContent";
import DialogTitle from "./DialogTitle";
import { Button } from "../Button";

export default { title: "Dialog" };

const dialogSizes = {
  small: "s",
  medium: "m",
  large: "l",
  fullscreen: "fs"
};

export const dialog = () => {
  const size = select("Dialog Size", dialogSizes, "s");
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>{"Open Dialog"}</Button>
      <Dialog open={open} size={size} onClose={() => setOpen(false)}>
        <DialogTitle>{"A Dialog Title"}</DialogTitle>
        <DialogContent>{"Dialog content goes here..."}</DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>{"Ok"}</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export const withCloseIcon = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>{"Open Dialog"}</Button>
      <Dialog open={open} size="m" onClose={() => setOpen(false)}>
        <DialogTitle closeButton>{"With Close Icon"}</DialogTitle>
        <DialogContent>
          {"This dialog has a close icon button in the top right."}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>{"Ok"}</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
