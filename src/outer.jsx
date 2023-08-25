import Home from "./home.jsx"

const Header = ()  => {
    return (
        <div className="header">
            <div className="left">
                <p>The Biky Way</p>
                <img src="./src/assets/bike.svg"></img>
            </div>
            <div className="right">
                <Button text="Products"></Button>
                <Button text="Login"></Button>
            </div>
        </div>
    )
}

const Button = ({text,clas}) => {
    
    
    return(
        <div className={clas ? clas : 'button'}>
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

    return (
        <div className="outer">       
            <Header></Header>
            <Home></Home>
            <Footer></Footer>
        </div>
 
    )
}

export default Outer;