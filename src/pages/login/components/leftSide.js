import wave1 from '../../../assets/svg/login-wave.svg'
import wave2 from '../../../assets/svg/login-wave2.svg'

import './leftSide.css'

export let LeftSide = (props) => {
    return(
        <div className='login-left-side col-lg-5 ps-5 pe-5 d-flex flex-row align-items-center bg-primary'>
            <div className='title-left-side flex-fill m-4 text-light'>
                <h1 className='header-login fw-bolder'>Login</h1>
                <h6>Let's start manage <br/>your money</h6>
            </div>
            <img className='wave1' src={wave1} alt='wave'></img>
            <img className='wave2 d-none' src={wave2} alt='wave'></img>
        </div>
    )
}