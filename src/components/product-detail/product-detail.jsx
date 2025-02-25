import { Box, Container, Rating, Stack, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../../data/product-data";
import { SecondaryButton } from "../secondary-button/style";
import { PrimaryButton } from "../primary-button/style";
import styled from "@emotion/styled";
import { BtnStartIcon } from "../../assets/icons/btn-start-icon";
import LabTabs from "../tab/tab";

const ServiceWrapper = styled.div`
    box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.1);
    background-color: #fff;
    width: 100%;
    padding: 20px;
`

export const ProductDetail = () => {
    const { id } = useParams();
    const carpet = products.find((item) => item.id === parseInt(id));

    return (
        <Container maxWidth={"xs"}>
            {carpet && (
                <Box py={"50px"}>
                    <Box pb={"20px"}>
                        <Typography mb={"8px"} variant="h2">{carpet.title}</Typography>
                        <Rating value={carpet.raiting} precision={0.5} />
                        <hr />
                    </Box>
                    <Stack direction={"row"}  gap={"40px"} mb={"64px"}>
                        <Box>
                            <Box maxWidth={"180px"} mb={"40px"}>
                                <img width={"180px"} style={{ borderRadius: '20px' }} src={carpet.img} alt="imag" />
                            </Box>
                            <Box maxWidth={"180px"} mb={"40px"}>
                                <img width={"180px"} style={{ borderRadius: '20px' }} src={carpet.img} alt="imag" />
                            </Box>
                            <Box maxWidth={"180px"}>
                                <img width={"180px"} style={{ borderRadius: '20px' }} src={carpet.img} alt="imag" />
                            </Box>
                        </Box>
                        <Box>
                            <img width={"600px"} height={"800px"} style={{ borderRadius: '20px' }} src={carpet.img} alt="imag" />
                        </Box>
                        <Stack flexGrow={1} maxWidth={"400px"}>
                            <Stack direction={"row"} justifyContent={"space-between"} mb={"24px"}>
                                <Stack>
                                    <Typography mb={"8px"} variant='h3'>Цена</Typography>
                                    <Typography variant='h5'>{carpet.price}T</Typography>
                                </Stack>
                                <Stack>
                                    <Typography mb={"8px"} variant='h3'>В рассрочку</Typography>
                                    <Typography variant='h6'>13.333T</Typography>
                                </Stack>
                            </Stack>
                            <Stack mb={"32px"}>
                                <SecondaryButton>В корзину</SecondaryButton>
                            </Stack>
                            <ServiceWrapper>
                                <Typography mb={"20px"} variant="h3">Возврат в течение 14 дней</Typography>
                                <Typography mb={"20px"} variant="h3">Среднее время доставки 2.5 дня</Typography>
                                <Typography variant="h3">Подробнее</Typography>
                            </ServiceWrapper>
                            <Typography mb={"16px"} mt={"32px"} variant="h4">Нужна помощь с выбором? Просто напишите нам в WhatsApp и мы обязательно вам поможем!</Typography>
                            <PrimaryButton startIcon={<BtnStartIcon />}>Написать</PrimaryButton>
                        </Stack>
                    </Stack>
                    <LabTabs />
                </Box>

            )}
        </Container>
    )
}