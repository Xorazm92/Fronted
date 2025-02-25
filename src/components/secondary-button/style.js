import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { theme } from "../../config/mui-config";

export const SecondaryButton = styled(Button)`
    background-color: ${theme.palette.secondary.main};
    border-radius: 10px;
    font-weight: 700;
    font-size: 18px;
    line-height: 140%;
    color: #fff;
    padding: 13px 38px;
    transition: all 0.3s ease;
    display: block;
    &:hover {
    background-color: ${theme.palette.secondary[600]};
  }
`