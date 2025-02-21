import { IconButton, Stack } from "@mui/material";
import { UserIcon } from "../../assets/user-icon";
import React from "react";

export const HeaderButtons = () => {
  return (
    <Stack direction={"row"} alignItems={"center"} gap={"30px"}>
      <IconButton>
        <UserIcon />
      </IconButton>
      <IconButton>
        <UserIcon />
      </IconButton>
      <IconButton>
        <UserIcon />
      </IconButton>
    </Stack>
  );
};
