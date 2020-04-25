import React, { useState } from "react";
import { select } from "@storybook/addon-knobs";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogSize,
  DialogTitle
} from "../src/Dialog";
import { Button } from "../src/Button";

export default { title: "Dialog" };

export const dialog = () => {
  const size = select("Dialog Size", DialogSize, DialogSize.SMALL);
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
      <Dialog open={open} onClose={() => setOpen(false)}>
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
