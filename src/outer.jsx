const Header = ()  => {
    return (
        <div>
            <Button text="The Milky Way"></Button>
            <Button text="Products"></Button>
            <Button text="Login"></Button>
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
        <>       
            <Header></Header>
            <Footer></Footer>
        </>
 
    )
}

export default Outer;