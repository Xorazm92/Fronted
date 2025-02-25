import React from "react";
import { IconButton, Stack, Typography, useMediaQuery, Box, Drawer } from "@mui/material";
import logo from "../../../../assets/logo.svg";
import logoMobile from "../../../../assets/logo_mobile.svg";
import { LogoLink } from "./style";
import { LocationIcon } from "../../../../assets/icons/location-icon";
import { SearchInput } from "../../../../components/search-input";
import { MenuIcon } from "../../../../assets/icons/menu-icon";
import { theme } from "../../../../config/mui-config";
import { useToggle } from "../../../../hooks/useToggle";
import { SearchMobileInput } from "../../../../components/search-input/search-mobile-input";
import { links } from "../../header-data";
import { Link } from "react-router-dom";
import { HeaderButton } from "../header-button";

export const Search = () => {
    const md = useMediaQuery(`(min-width:${theme.breakpoints.values.md}px)`);
    const { close, isOpen, open } = useToggle();
    const changeInput = (e) => {
        console.log(e.target.value);
    };
    return <Stack flexGrow={1} direction={"row"} alignItems={"center"} gap={{ xs: "33px", md: "60px" }}>
        <Stack gap={"16px"} alignItems={"center"} direction={"row"}>
            <IconButton
                onClick={open}
                sx={{ display: { xs: "block", md: "none" } }}
            >
                <MenuIcon />
            </IconButton>
            <LogoLink to={"/"}>
                {md ? (
                    <img style={{ verticalAlign: "bottom" }} src={logo} alt="logo" />
                ) : (
                    <img
                        style={{ verticalAlign: "bottom" }}
                        src={logoMobile}
                        alt="img"
                    />
                )}
            </LogoLink>
        </Stack>
        <Stack display={{ xs: "none", md: "flex" }} direction={"row"} alignItems={"center"} gap={"4px"}>
            <IconButton>
                <LocationIcon />
            </IconButton>
            <Typography variant="body1">Алматы</Typography>
        </Stack>
        {md ? (
            <SearchInput onChange={changeInput} />
        ) : (
            <SearchMobileInput onChange={changeInput} />
        )}
        <Drawer open={isOpen} onClose={close} anchor="left">
            <Box bgcolor={"white"} p="30px" height="100vh" width={"300px"}>
                <Stack mb={"20px"} justifyContent={"end"} direction={"row"}>
                    <IconButton onClick={close}>x</IconButton>
                </Stack>
                <Stack mb={"20px"} gap={"20px"}>
                    {links.map((item) => (
                        <Link style={{ textDecoration: "none" }} key={item.id} to={"/"}>
                            <Typography variant="body1">{item.name}</Typography>
                        </Link>
                    ))}
                </Stack>
                <HeaderButton />
            </Box>
        </Drawer>
    </Stack>
}