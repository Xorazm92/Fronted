import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { theme } from "../../config/mui-config";

export const PrimaryButton = styled(Button)`
    background-color: ${theme.palette.primary.main};
    border-radius: 10px;
    font-weight: 700;
    font-size: 18px;
    line-height: 140%;
    color: #fff;
    padding: 13px 38px;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    &:hover {
    background-color: ${theme.palette.primary[600]};
  }
`