import herologo from './assets/photo-grid.png'

function Hero(){
    return(
        <section className='heroSection'>
            <img className='heroLogo' src={herologo} alt="hero logo with many pictures" />
        </section>
    )
}

export default Hero