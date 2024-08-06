import './hero.css';
import osm from "./../../assets/osm.jpg";
const Hero = () => {
    return (
        <>
            <div className='heroWrapper'>
                <div className='heroContent'>
                    <h1>Making Commerce <br></br>
                         Easier for All</h1>
                    <p>Reyna is supporting the next generation of entrepreneurs,<br></br>
                         the world’s biggest brands,and everyone in between</p>
                    <button>Start Free Trial</button>
                </div>
                <div className='imgWrapper'>
                    <img src={osm} alt="" />
                </div>

            </div>
        </>
    )
}

export default Hero
