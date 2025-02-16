// images
import PlayMarket from '../../../assets/play_market_icon.svg'
import AppStore from '../../../assets/app_store_icon.svg'
import FacebookIcon from '../../../assets/facebook_icon.svg'
import YoutubeIcon from '../../../assets/youtube_icon.svg'
import TiktokIcon from '../../../assets/tiktok_icon.svg'
import TelegramIcon from '../../../assets/telegram_icon.svg'
import InstagramIcon from '../../../assets/instagram_icon.svg'

import UzcardIcon from '../../../assets/uzcard_icon.svg'
import HumoIcon from '../../../assets/humo_icon.svg'
import PaymeIcon from '../../../assets/payme_icon.svg'

//css
import './footer.css'

function Footer() {
    return (<>
        <footer className='footer'>
            <div className="footer__top">
                <div className="container">
                    <div className="footer__top--inner">
                        <ul className="footer__top--list">
                            <li className="footer__top--item">
                                <h2 className="footer__top--title">Платформа хақида</h2>
                            </li>
                            <li className="footer__top--item">
                                <a href="#" className="footer__top--link">Liber ўзи нима?</a>
                            </li>
                            <li className="footer__top--item">
                                <a href="#" className="footer__top--link">Фойдаланиш шартлари</a>
                            </li>
                            <li className="footer__top--item">
                                <a href="#" className="footer__top--link">Ёрдам</a>
                            </li>
                        </ul>

                        <ul className="footer__top--list">
                            <li className="footer__top--item">
                                <h2 className="footer__top--title">Обуна хақида</h2>
                            </li>
                            <li className="footer__top--item">
                                <a href="#" className="footer__top--link">Обуна бўлиш</a>
                            </li>
                            <li className="footer__top--item">
                                <a href="#" className="footer__top--link">Қандай тўлаш</a>
                            </li>
                        </ul>

                        <ul className="footer__top--list">
                            <li className="footer__top--item">
                                <h2 className="footer__top--title">Китоблар</h2>
                            </li>
                            <li className="footer__top--item">
                                <a href="#" className="footer__top--link">Аудио китоблар</a>
                            </li>
                            <li className="footer__top--item">
                                <a href="#" className="footer__top--link">Электрон китоблар</a>
                            </li>
                            <li className="footer__top--item">
                                <a href="#" className="footer__top--link">Китоблар</a>
                            </li>
                        </ul>
                        <ul className="footer__top--list">
                            <li className="footer__top--item">
                                <h2 className="footer__top--title">Мобил илова</h2>
                            </li>
                            <li className="footer__top--item">
                                <a href="#" className="footer__app--link">
                                    <img src={PlayMarket} alt="icon" />
                                </a>
                            </li>
                            <li className="footer__top--item">
                                <a href="#" className="footer__app--link">
                                    <img src={AppStore} alt="" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div className="footer__bottom">
                <div className="container">
                    <div className="footer__bottom--inner">
                        <div className="footer__bottom--social-box">
                            <p className="footer__social--text">Ижтимоий тармоқлар</p>
                            <div className="footer__social--wrap">
                                <a href="#" className="footer__social--link">
                                    <img src={FacebookIcon} alt="" className="footer__social--img" />
                                </a>
                                <a href="#" className="footer__social--link">
                                    <img src={YoutubeIcon} alt="" className="footer__social--img" />
                                </a>
                                <a href="#" className="footer__social--link">
                                    <img src={TiktokIcon} alt="" className="footer__social--img" />
                                </a>
                                <a href="#" className="footer__social--link">
                                    <img src={TelegramIcon} alt="" className="footer__social--img" />
                                </a>
                                <a href="#" className="footer__social--link">
                                    <img src={InstagramIcon} alt="" className="footer__social--img" />
                                </a>
                            </div>
                        </div>
                        <div className="footer__bottom--contact-box">
                            <p className="footer__contact--text">Боғланиш</p>
                            <div className="footer__contact--box">
                                <a href="#" className="footer__contact--link">+998 90 253 77 53</a>
                                <a href="#" className="footer__contact--link">support@liber.uz</a>
                            </div>
                        </div>

                        <div className="footer__bottom--payment--box">
                            <div className="footer__payment--title">Биз қабул қиламиз</div>
                            <div className="footer__payment--box">
                                <a className="footer__payment--link">
                                    <img src={UzcardIcon} alt="icon" className="footer__payment--img" />
                                </a>
                                <a className="footer__payment--link">
                                    <img src={HumoIcon} alt="icon" className="footer__payment--img" />
                                </a>
                                <a className="footer__payment--link">
                                    <img src={PaymeIcon} alt="icon" className="footer__payment--img" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    </>)
}

export default Footer