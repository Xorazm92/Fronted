import { Facebook } from "../../assets/svg/icon/facebookIcon"
import { AppStoreIcon } from "../../assets/svg/icon/footerAppStoreIcon"
import { GooglePlayIcon } from "../../assets/svg/icon/footerGooglePlayIcon"
import { Instagram } from "../../assets/svg/icon/instagramIcon"
import { Telegram } from "../../assets/svg/icon/telegramIcon"
import { TikTok } from "../../assets/svg/icon/tiktokIcon"
import { UzcardIcon } from "../../assets/svg/icon/uzcardIcon"
import { YouTube } from "../../assets/svg/icon/youtubeIcon"
import { Button } from "../../component/ui/button";
export const Footer = () => {
    return (
        <div className="p-0">
            <section className="flex bg-[#eef4ff]">
                <div className="container">
                    <div className="flex justify-between pt-[31px] mb-[63px]">
                        <div>
                            <h3 className="text-[#11142d] font-bold text-xl mb-[14px]">Платформа хақида</h3>
                            <ul className="text-[#11142d] font-normal text-lg flex flex-col gap-[18px]">
                                <li>
                                    <a href="#">Liber ўзи нима?</a>
                                </li>
                                <li>
                                    <a href="#">Фойдаланиш шартлари</a>
                                </li>
                                <li>
                                    <a href="#">Ёрдам</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-[#11142d] font-bold text-xl mb-[14px]">Обуна хақида</h3>
                            <ul className="text-[#11142d] font-normal text-lg flex flex-col gap-[18px]">
                                <li>
                                    <a href="#">Обуна бўлиш</a>
                                </li>
                                <li>
                                    <a href="#">Қандай тўлаш</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-[#11142d] font-bold text-xl mb-[14px]">Китоблар</h3>
                            <ul className="text-[#11142d] font-normal text-lg flex flex-col gap-[18px]">
                                <li>Аудио китоблар</li>
                                <li>Электрон китоблар</li>
                                <li>Китоблар</li>
                            </ul>
                        </div>
                        <div className="mr-[204px]">
                            <h3 className="text-[#11142d] font-bold text-xl mb-[14px]">Мобил илова</h3>
                            <div className="flex flex-col gap-[16px]">
                                <GooglePlayIcon />
                                <AppStoreIcon />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-[#10182c] pt-[12px] pb-[34px]">
                <div className="container">
                    <div className="flex justify-between">
                        <div>
                            <p className="text-[#fff] font-light leading-[114%] text-sm mb-[12px]">Ижтимоий тармоқлар</p>
                            <div className="flex gap-[24px] items-center">
                                <Facebook />
                                <YouTube />
                                <TikTok />
                                <Telegram />
                                <Instagram />
                            </div>
                        </div>
                        <div>
                            <p className="text-[#fff] font-light leading-[114%] text-sm mb-[11px]">Боғланиш</p>
                            <div className="flex gap-[23px]">
                                <p className="text-[#fff] font-light leading-[114%] text-sm ">+998 90 253 77 53</p>
                                <p className="text-[#fff] font-light leading-[114%] text-sm ">support@liber.uz</p>
                            </div>
                        </div>
                        <div className="mr-[382px]">
                            <p className="text-[#fff] font-light leading-[114%] text-sm mb-[11px]">Биз қабул қиламиз</p>
                            <div className="flex gap-[8px]">
                                <Button
                                    startIcon={<UzcardIcon />}
                                    variant={"uchinchi"}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </div>
    )
}