import airbnblogo from './assets/airbnb-logo.png'
export default function Nav(){
    return(
        <div className='appNav'>
            <img className='navLogo' src={airbnblogo} alt="logo of airbnb" />
        </div>
    )
}