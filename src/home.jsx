import "./home.css"




const Home = () => {
    return (
        <>
        <div className="home">
            <Greeting></Greeting>
            <Pics></Pics>
        </div>
        </>
    )
}

const Greeting = () => {
    return (
        <div className="greeting">
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet"/> 
            <h1>Welcome To The Biky Way!</h1>
            <p>
                Ride as fast as commmets with bicycles that are out of this world!
                Leave you star trails across the highways with our light-speed road bikes,
                or discover new constellations with our great collection of tourist bikes!
                Maybe if you are up to some challenge, have a shot in riding the bumpy terrain 
                of the greatest exoplanets with our reliable mountain bikes.
            </p>
            
        </div>
    )
}

const Pics = () => {
    return (
        <div className="imgs">
            <img className="img1" src="./src/assets/bike2.jpg"></img>
            <img className="img2" src="./src/assets/bike1.jpg"></img>
        </div>
    )
}


export default Home;