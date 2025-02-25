import React from "react";
import { PrimaryButton as StyledPrimaryButton } from "./style";

export const SecondaryButton = ({children, onClick, type="button", ...res}) => {
    return (
        <StyledPrimaryButton {...res} type={type} onClick={onClick}>{children}</StyledPrimaryButton>
    )
}