import React from "react";
import img from "../assets/product-2.png";
import styled from "@emotion/styled";
import { Box, Rating, Typography } from "@mui/material";
import { COLORS } from "../config/colors";

const ProductWrapper = styled.div`
  border-radius: 10px;

  height: 524px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  background: #fff;
  position: relative;
  padding-top: 68px;
  padding-bottom: 21px;
  padding-left: 20px;
  padding-right: 20px;
`;

const CardBadge = styled.span`
  background: #618c78;
  padding: 3px 20px;
  display: inline-block;
  position: absolute;
  font-weight: 400;
  font-size: 18px;
  line-height: 130%;
  color: #fff;
  top: 20px;
  left: 0;
`;

export const ProductCard = () => {
  return (
    <ProductWrapper>
      <CardBadge>Новинка</CardBadge>
      <Box mb={"20px"} textAlign={"center"}>
        <img src={img} alt="img" />
      </Box>
      <Typography
        mb={"8px"}
        maxWidth={"175px"}
        fontSize={"18px"}
        color={COLORS.titleColor}
      >
        Aster Q893A LVIZON LVIZON
      </Typography>
      <Typography
        mb={"8px"}
        maxWidth={"175px"}
        fontSize={"14px"}
        color={COLORS.titleColor}
      >
        Размер: 60x100
      </Typography>
      <Typography mb={"8px"} fontSize={"14px"} color={COLORS.titleColor}>
        Производитель: Казахстан
      </Typography>
      <Rating readOnly value={4} />
    </ProductWrapper>
  );
};
