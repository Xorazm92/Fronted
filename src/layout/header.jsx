import { Container, Stack } from "@mui/material";
import React from "react";
import { HeaderSearch } from "./components/header-search";
import { HeaderButtons } from "./components/header-buttons";
import { Navbar } from "./components/navbar";

export const Header = () => {
  return (
    <>
      <Container maxWidth="xl">
        <Stack gap={"60px"} py={"31px"} direction={"row"}>
          <HeaderSearch />
          <HeaderButtons />
        </Stack>
      </Container>
      <Navbar />
    </>
  );
};
