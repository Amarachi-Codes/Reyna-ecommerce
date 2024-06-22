import './hero.css';
import creditcard from "../../assets/creditcard.png";
const Hero = () => {
    return (
        <>
            <div className='heroWrapper'>
                <div>
                    <h1>Making Commerce <br></br>
                         Easier for All</h1>
                    <p>Reyna is supporting the next generation of entrepreneurs,<br></br>
                         the world’s biggest brands,and everyone in between</p>
                    <button>Start Free Trial</button>
                </div>
                <div>
                    <img src={creditcard} alt="" />
                </div>

            </div>
        </>
    )
}

export default Hero
