import {
  Box,
  Button,
  Container,
  Grid2,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { COLORS } from "../../config/colors";
import bg from "../../assets/product1.png";
import { SecondaryButton } from "../../components/secondary-button";
import { ProductCard } from "../../components/product-card";

export const Home = () => {
  return (
    <>
      <section>
        <Box bgcolor={COLORS.primary} py={"98px"}>
          <Container maxWidth="xl">
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Box maxWidth={"524px"}>
                <Typography
                  mb={"32px"}
                  fontWeight={700}
                  fontSize={60}
                  color="#fff"
                >
                  Новая коллекция ковров Venetta
                </Typography>
                <SecondaryButton>Смотреть все</SecondaryButton>
              </Box>
              <Stack direction={"row"}>
                <img src={bg} alt="img" />
                <img src={bg} alt="img" />
              </Stack>
            </Stack>
          </Container>
        </Box>
      </section>
      <Box py={"100px"}>
        <Container maxWidth="xl">
          <Grid2 container spacing={"40px"}>
            <Grid2 size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
              <ProductCard />
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
              <ProductCard />
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
              <ProductCard />
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
              <ProductCard />
            </Grid2>
          </Grid2>
        </Container>
      </Box>
    </>
  );
};
