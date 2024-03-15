import logo from '../../public/logo.jpg'
import Button from './UI/Button'
export default function Header(){
    return(
        <header id='main-header'>
            <div id='title'>
                <img src={logo} alt="Demo Logo" />
                <h1>REACTSHOP</h1>
            </div>
            <nav>
                <Button textOnly>Cart (0)</Button >
            </nav>
        </header>
    )
}