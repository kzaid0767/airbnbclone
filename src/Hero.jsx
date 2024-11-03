import herologo from './assets/photo-grid.png'

function Hero(){
    return(
        <section className='heroSection'>
            <img className='heroLogo' src={herologo} alt="hero logo with many pictures" />
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
        </section>
    )
}

export default Hero