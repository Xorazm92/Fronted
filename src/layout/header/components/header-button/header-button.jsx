import { IconButton, Stack } from "@mui/material";
import { UserIcon } from "../../../../assets/icons/user-icon";
import React from "react";
import styled from "@emotion/styled";
import { theme } from "../../../../config/mui-config";
import { LikeIcon } from "../../../../assets/icons/like-icon";
import { CartIcon } from "../../../../assets/icons/cart-icon";

const CustomIconButton = styled(IconButton)`
    color: #1d1d1d;
    transition: all 0.4 s ease;
    &:hover {
        color: ${theme.palette.primary.main};
    }
`

export const HeaderButton = () => {
    return (
        <Stack direction={"row"} gap={"20px"}>
            <CustomIconButton>
                <UserIcon/>
            </CustomIconButton>
            <CustomIconButton>
                <LikeIcon/>
            </CustomIconButton>
            <CustomIconButton>
                <CartIcon/>
            </CustomIconButton>
        </Stack>
    )
}