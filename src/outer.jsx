const Header = ()  => {
    return (
        <div className="header">
            <div className="left">
                <p>The Biky Way</p>
                <img src="./resources/bike.svg"></img>
            </div>
            <div className="right">
                <Button text="Products"></Button>
                <Button text="Login"></Button>
            </div>
        </div>
    )
}

const Button = ({text}) => {
    
    
    return(
        <div className="button">
            <p>{text}</p>
        </div>
    )
}

const Footer = () => {
    return (
        <div className='footer'>
            <p>2023 - hCode122</p>
        </div>
    )
}

const Outer = () => {

    return (
        <div className="outer">       
            <Header></Header>
            <div className="main"></div>
            <Footer></Footer>
        </div>
 
    )
}

export default Outer;