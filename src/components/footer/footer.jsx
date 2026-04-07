import React from 'react'
import './footer.css';

const Footer = () => {
    return (
        <div className='foot-container'>


            <div className="rights">

                <p>All Rights Reserved @jay</p>
            </div>

            <div className="links">
                <ul>
                    <li><a href="https://www.linkedin.com/in/jayesh-kohakade-635110240/" target="_blank" rel="noreferrer"><i class="fa-brands fa-linkedin"></i></a> </li>
                    <li><a href="https://www.linkedin.com/in/jayesh-kohakade-635110240/" target="_blank" rel="noreferrer"><i class="fa-brands fa-twitter"></i></a> </li>
                    <li><a href="https://www.linkedin.com/in/jayesh-kohakade-635110240/" target="_blank" rel="noreferrer"><i class="fa-brands fa-instagram"></i></a></li>
                    <li><a href="https://www.linkedin.com/in/jayesh-kohakade-635110240/" target="_blank" rel="noreferrer"><i class="fa-brands fa-whatsapp"></i> </a></li>
                </ul>

            </div>

        </div>
    )
}

export default Footer;