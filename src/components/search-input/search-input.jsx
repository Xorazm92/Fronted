import React from "react";
import { SearchIcon } from "../../assets/icons/search-icon";
import { SearchInputWrapper } from "./style";
import { TextField, InputAdornment} from "@mui/material";

export const SearchInput = () => {
    return (
        <SearchInputWrapper flexGrow={1}>
            <TextField slotProps={{
                input: {
                    endAdornment:(
                        <InputAdornment position="end">
                            <SearchIcon />
                        </InputAdornment>
                    )
                }
            }}
            fullWidth variant="filled" placeholder="Поиск по товарам"/>
        </SearchInputWrapper>
    )
}