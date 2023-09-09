import Home from "./home.jsx"
import Products from "./products.jsx"
import { useParams } from "react-router-dom"
import {Link} from "react-router-dom"
import logo from "./assets/bike.svg"

const Header = ()  => {
    
    return (
        <div className="header">
            <div className="left">
                <Link to='/TheBikyWay' className="head"><p>The Biky Way</p></Link>
                <img src={logo}></img>
            </div>
            <div className="right">
                <Link to="/products" className="button">Products</Link>
                
                
            </div>
            
            
            
        </div>
    )
}

const Button = ({text,clas}) => {
    
    
    return(
        <div className={'button'}>
            <p>{text}</p>
        </div>
        
    )
}

const Footer = () => {
    return (
        <div className='footer'>
            <p>2023 </p>
        </div>
    )
}

const Outer = () => {
    const { name } = useParams();
    return (
        
        <div className="outer">     
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet"/>   


            <Header></Header>
            {name === "products" ? (
                    <Products />
                ): (<Home></Home>)}
            
            <Footer></Footer>
        </div>
 
    )
}

export default Outer;