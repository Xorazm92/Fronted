import Logo from '../../../assets/logo.svg'
import CategoryIcon from '../../../assets/category_icon.svg'
import CategoryIcon2 from '../../../assets/category_icon2.svg'
import SearchIcon from '../../../assets/search_icon.svg'
import UzbFlag from '../../../assets/uzb_flag.svg'
import LoginIcon from '../../../assets/login_icon.svg'


import Button from '../../button/button'



import './header.css'


function Header() {
    return (<>
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <a href="#" className="site__logo--link">
                        <img src={Logo} alt="" />
                    </a>
                    <div className="search__block">
                        <div className="header__category--box">
                            <span className='header__category--item'>
                                <img className='header__category--icon' src={CategoryIcon} alt="icon" />
                                <p className='header__category--text'>Рукнлар</p>
                                <img className='header__category--icon' src={CategoryIcon2} alt="icon" />
                            </span>
                        </div>
                        <form className='header__form'>
                            <input type="text" placeholder='Қидириш' name='data' className='header__form--input'/>
                            <button className='header__form--sbm' type='submit'>
                                <img className='header__form_icon' src={SearchIcon} alt="icon" />
                            </button>
                        </form>
                    </div>

                    <div className="header__select--lan-box">
                        <span className='header__select--item'>
                            <img src={UzbFlag} alt="flag" />
                            <p>Ўз</p>
                            <img src={CategoryIcon2} alt="icon" />
                        </span>
                    </div>
                    <Button colorType='purple'>
                        <img src={LoginIcon} alt="" />
                        <p>Кириш</p>
                    </Button>
                </div>
            </div>
        </header>
    </>)
}

export default Header