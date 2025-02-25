import { Box, Container, Stack, Typography } from "@mui/material";
import imag1 from "../../assets/banner1.png";
import imag2 from "../../assets/banner2.png";
import React from "react";
import { theme } from "../../config/mui-config";
import { SecondaryButton } from "../secondary-button";

export const Banner = () => {
    return (
        <Box bgcolor={theme.palette.primary.main} py={{ xs: "20px", md: "97px" }}>
            <Container maxWidth={"xs"}>
                <Stack
                    direction={{ xs: "column", md: "row" }}
                    alignItems="center"
                    justifyContent={{ xs: "center", md: "space-between" }}
                >
                    <Box>
                        <Typography mb={{ xs: "15px", md: "32px" }} variant="h1">
                            Новая коллекция ковров Venetta
                        </Typography>
                        <SecondaryButton sx={{ display: { xs: "none", md: "inline-block" } }}>
                            Смотреть все
                        </SecondaryButton>
                    </Box>
                    <Stack direction="row" gap="40px">
                        <Box maxWidth={{ xs: "100%", md: "303px" }}>
                            <img src={imag1} alt="imag" style={{ width: "100%", height: "auto" }} />
                        </Box>
                        <Box maxWidth={{ xs: "100%", md: "303px" }} display={{ xs: "none", lg: "block" }}>
                            <img src={imag2} alt="imag" style={{ width: "100%", height: "auto" }} />
                        </Box>
                    </Stack>
                    <Box maxWidth={"100%"}>
                        <SecondaryButton sx={{ 
                            display: { xs: "inline-block", md: "none" },
                            }}>
                            Смотреть все
                        </SecondaryButton>
                    </Box>

                </Stack>
            </Container>
        </Box>

    )
}