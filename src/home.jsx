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
            <img className="img1" src="assets/bike2.jpg"></img>
            <img className="img2" src="assets/bike1.jpg"></img>
        </div>
    )
}


export default Home;