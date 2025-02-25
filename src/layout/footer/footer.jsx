import { Box, Container, IconButton, InputAdornment, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { TelIcon } from "../../assets/icons/tel-icon";
import { EmailIcon } from "../../assets/icons/email-icon";
import { WhatsappIcon } from "../../assets/icons/whatsapp-icon";
import { EmailInputIcon } from "../../assets/icons/email-input-icon";
import { AddIcon } from "../../assets/icons/add-icon";
import { theme } from "../../config/mui-config";
import styled from "@emotion/styled";


const CustomIconButton = styled(IconButton)`
    color: #878787;
    transition: all 0.4 s ease;
    &:hover {
        color: ${theme.palette.primary[700]};
    }
`
const TelNum = styled.p`
    font-weight: 400;
    font-size: 14px;
    line-height: 100%;
    color: #618c78;
`

const EmailInput = () => {
    return (
        <TextField
            variant="outlined"
            placeholder="Ваш email"
            InputProps={{
                style: {
                    height: '50px',
                    padding: 0,
                    borderRadius: '10px',
                    backgroundColor: '#FFFFFF',
                    border: "none"
                },
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton
                            style={{
                                height: '100%',
                                backgroundColor: '#618c78',
                                borderRadius: '0 10px 10px 0',
                                padding: '13px',
                            }}
                        >
                            <EmailInputIcon />
                        </IconButton>
                    </InputAdornment>
                ),
            }}
        />
    );
};


export const Footer = () => {
    return (
        <Box bgcolor={"#f2f2f2"} py={{ xs: "20px", md: "40px" }}>
            <Container maxWidth={"xs"}>
                <Stack direction={{ md: "row" }} justifyContent={"space-between"}>
                    <Stack>
                        <Stack direction={"row"} justifyContent={"space-between"} alignItems={"start"}>
                            <Link to={"/"} style={{ textDecoration: "none" }}>
                                <Typography mb={"24px"} variant="h4">Каталог товаров</Typography>
                            </Link>
                            <Box display={{ xs: "block", md: "none" }}>
                                <IconButton>
                                    <AddIcon />
                                </IconButton>
                            </Box>
                        </Stack>
                        <Box display={{ xs: "none", md: "block" }}>
                            <Link to={"/"} style={{ textDecoration: "none" }}>
                                <Typography mb={"16px"} variant="h3">Ковры</Typography>
                            </Link>
                            <Link to={"/"} style={{ textDecoration: "none" }}>
                                <Typography mb={"16px"} variant="h3">Коврики</Typography>
                            </Link>
                            <Link to={"/"} style={{ textDecoration: "none" }}>
                                <Typography mb={"16px"} variant="h3">Дорожки</Typography>
                            </Link>
                            <Link to={"/"} style={{ textDecoration: "none" }}>
                                <Typography mb={"16px"} variant="h3">Для ванной</Typography>
                            </Link>
                            <Link to={"/"} style={{ textDecoration: "none" }}>
                                <Typography variant="h3">Особенные ковры</Typography>
                            </Link>
                        </Box>
                    </Stack>
                    <Stack>
                        <Stack direction={"row"} justifyContent={"space-between"} alignItems={"start"}>
                            <Link to={"/"} style={{ textDecoration: "none" }}>
                                <Typography mb={"24px"} variant="h4">Личный кабинет</Typography>
                            </Link>
                            <Box display={{ xs: "block", md: "none" }}>
                                <IconButton>
                                    <AddIcon />
                                </IconButton>
                            </Box>
                        </Stack>
                        <Box display={{ xs: "none", md: "block" }}>
                            <Link to={"/"} style={{ textDecoration: "none" }}>
                                <Typography mb={"16px"} variant="h3">Личный кабинет</Typography>
                            </Link>
                            <Link to={"/"} style={{ textDecoration: "none" }}>
                                <Typography mb={"16px"} variant="h3">Мои заказы</Typography>
                            </Link>
                            <Link to={"/"} style={{ textDecoration: "none" }}>
                                <Typography variant="h3">Избранное</Typography>
                            </Link>
                        </Box>
                    </Stack>
                    <Stack>
                        <Stack direction={"row"} justifyContent={"space-between"} alignItems={"start"}>
                            <Link to={"/"} style={{ textDecoration: "none" }}>
                                <Typography mb={"24px"} variant="h4">Центр поддержки</Typography>
                            </Link>
                            <Box display={{ xs: "block", md: "none" }}>
                                <IconButton>
                                    <AddIcon />
                                </IconButton>
                            </Box>
                        </Stack>
                        <Box display={{ xs: "none", md: "block" }}>
                            <Link to={"/"} style={{ textDecoration: "none" }}>
                                <Typography mb={"16px"} variant="h3">Контакты</Typography>
                            </Link>
                            <Link to={"/"} style={{ textDecoration: "none" }}>
                                <Typography mb={"16px"} variant="h3">Доставка</Typography>
                            </Link>
                            <Link to={"/"} style={{ textDecoration: "none" }}>
                                <Typography variant="h3">Возвраты</Typography>
                            </Link>
                        </Box>
                    </Stack>
                    <Stack>
                        <Stack direction={"row"} justifyContent={"space-between"} alignItems={"start"}>
                            <Link to={"/"} style={{ textDecoration: "none" }}>
                                <Typography mb={"24px"} variant="h4">Помощь и контакты</Typography>
                            </Link>
                            <Box display={{ xs: "block", md: "none" }}>
                                <IconButton>
                                    <AddIcon />
                                </IconButton>
                            </Box>
                        </Stack>
                        <Box display={{ xs: "none", md: "block" }}>
                            <Stack direction={"row"} gap={"8px"}>
                                <CustomIconButton>
                                    <TelIcon />
                                </CustomIconButton>
                                <Link style={{ textDecoration: "none" }}>
                                    <TelNum>+7 775 657 66 76</TelNum>
                                </Link>
                            </Stack>
                            <Stack direction={"row"} gap={"8px"}>
                                <CustomIconButton>
                                    <EmailIcon />
                                </CustomIconButton>
                                <Link style={{ textDecoration: "none" }}>
                                    <TelNum>info@kilem.kz</TelNum>
                                </Link>
                            </Stack>
                            <Stack direction={"row"} gap={"8px"}>
                                <CustomIconButton>
                                    <WhatsappIcon />
                                </CustomIconButton>
                                <CustomIconButton>
                                    <WhatsappIcon />
                                </CustomIconButton>
                                <CustomIconButton>
                                    <WhatsappIcon />
                                </CustomIconButton>
                            </Stack>
                        </Box>
                    </Stack>
                    <Stack>
                        <Link to={"/"} style={{ textDecoration: "none" }}>
                            <Typography mb={"24px"} variant="h4">Рассылка</Typography>
                        </Link>
                        <Link to={"/"} style={{ textDecoration: "none" }}>
                            <Typography maxWidth={"220px"} mb={"16px"} variant="h3">Подпишитесь, чтобы всегда быть в курсе наших новый акций</Typography>
                        </Link>
                        <Stack flexGrow={1}><EmailInput /></Stack>
                    </Stack>
                    <Stack pt={"16px"} direction={"row"} gap={"8px"} display={{ xs: "block", md: "none" }}>
                        <CustomIconButton>
                            <WhatsappIcon />
                        </CustomIconButton>
                        <CustomIconButton>
                            <WhatsappIcon />
                        </CustomIconButton>
                        <CustomIconButton>
                            <WhatsappIcon />
                        </CustomIconButton>
                    </Stack>
                </Stack>
            </Container>
        </Box>
    )
}