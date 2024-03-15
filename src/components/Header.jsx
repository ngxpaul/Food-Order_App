import logo from '../../public/logo.jpg'
export default function Header(){
    return(
        <header id='main-header'>
            <div id='title'>
                <img src={logo} alt="Demo Logo" />
                <h1>REACTSHOP</h1>
            </div>
            <nav>
                <button>Cart (0)</button>
            </nav>
        </header>
    )
}