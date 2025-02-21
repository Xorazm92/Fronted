import { Box, Container, Stack } from "@mui/material";
import React from "react";
import { navbarLinks } from "../data";
import { Link } from "react-router-dom";
import { COLORS } from "../../config/colors";
import styled from "@emotion/styled";

const CustomLink = styled(Link)`
  text-decoration: none;
  font-weight: 400;
  font-size: 18px;
  line-height: 100%;
  color: ${COLORS.titleColor};

  &:hover {
    color: ${COLORS.primary};
  }
`;

export const Navbar = () => {
  return (
    <Box py={"30px"} bgcolor={COLORS.lightGrey}>
      <Container maxWidth="xl">
        <Stack direction={"row"} justifyContent={"space-between"}>
          {navbarLinks.map((item) => (
            <CustomLink key={item.id} to={item.path}>
              {item.name}
            </CustomLink>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};
