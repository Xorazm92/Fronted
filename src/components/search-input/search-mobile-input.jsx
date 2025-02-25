import styled from "@emotion/styled";
import React from "react";
import { theme } from "../../config/mui-config";
import { MobileSearchIcon } from "../../assets/icons/mobile-search-icon";

const Input = styled.input`
    width: 100%;
    border: none;
    border-radius: 5px;
    background-color: #eff3f6;
    padding: 6px 10px 6px 36px;
    outline-color: ${theme.palette.primary.main};
    &::placeholder {
        font-weight: 400;
        font-size: 14px;
        line-height: 100%;
        color: #000;
        opacity: 0.5;
  };
`
const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;
const IconWrapper = styled.div`
  position: absolute;
  width: 15px;
  height: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
`;
export const SearchMobileInput = ({ onChange }) => {
    return (
      <InputWrapper>
        <IconWrapper>
          <MobileSearchIcon />
        </IconWrapper>
        <Input onChange={onChange} placeholder="Поиск " />
      </InputWrapper>
    );
  };