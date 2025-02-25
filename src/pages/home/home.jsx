import React from "react";
import { Banner } from "../../components/banner";
import { Box, Container, Grid2, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { theme } from "../../config/mui-config";
import { ProductCard } from "../../components/card/product-card";
import { products } from "../../data/product-data";

const CustomLink = styled(Link)`
    font-weight: 400;
    font-size: 18px;
    line-height: 140%;
    text-decoration: underline;
    text-decoration-skip-ink: none;
    display: block;
    color: ${theme.palette.primary.main};
    &:hover {
        color: ${theme.palette.primary[600]};
    }
`

export const Home = () => {
    return (
        <>
            <Banner />
            <Box py={{xs:"40px", md:"100px"}}>
                <Container maxWidth="xs">
                    <Stack direction={"row"} gap={{ xs: 0, md: "32px" }} alignItems={"center"} mb={"29px"} justifyContent={{ xs: "space-between", md: "flex-start" }}>
                        <Typography variant="h2">Новинки</Typography>
                        <CustomLink>Все новинки</CustomLink>
                        
                    </Stack>
                    <Grid2 container spacing={"40px"}>
                            {products.map((item) => {
                                return <Grid2 size={{ sm: 12, md: 6, lg: 3 }} key={item.id}>
                                    <ProductCard {...item} />
                                </Grid2>
                        })}
                        </Grid2>
                </Container>
            </Box>
            <Box pb={{xs:"40px", md:"100px"}}>
                <Container maxWidth="xs">
                    <Stack direction={"row"} gap={{ xs: 0, md: "32px" }} alignItems={"center"} mb={"29px"} justifyContent={{ xs: "space-between", md: "flex-start" }}>
                        <Typography variant="h2">Скидки</Typography>
                        <CustomLink>Все новинки</CustomLink>
                        
                    </Stack>
                    <Grid2 container spacing={"40px"}>
                            {products.map((item) => {
                                return <Grid2 size={{ sm: 12, md: 6, lg: 3 }} key={item.id}>
                                    <ProductCard {...item} />
                                </Grid2>
                        })}
                        </Grid2>
                </Container>
            </Box>
        </>
    )
}