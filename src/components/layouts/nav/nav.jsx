import './nav.css'

function NavBar() {
    return (<>
        <nav className="navbar">
            <div className="container">
                <ul className="navbar__list">
                    <li className="navbar__itim">
                        <a href="#" className="navbar__link">Аудиокитоб</a>
                    </li>
                    <li className="navbar__itim">
                        <a href="#" className="navbar__link">Электрон китоблар</a>
                    </li>
                    <li className="navbar__itim">
                        <a href="#" className="navbar__link">Босма китоблар</a>
                    </li>
                    <li className="navbar__itim">
                        <a href="#" className="navbar__link">Контакт</a>
                    </li>
                    <li className="navbar__itim">
                        <a href="#" className="navbar__link">Биз хақимизда</a>
                    </li>
                </ul>
            </div>
        </nav>
    </>)
}


export default NavBar
