import Footer from "../footer/footer"
import Header from "../header/header"
import NavBar from "../nav/nav"

function MainLayout({children}) {
    return <>
        <Header/>
        <NavBar/>
        <main>
            {children}
        </main>
        <Footer/>
    </>
}

export default MainLayout