import zeemackbag from './images/shopify-bag4.avif'
import { AiOutlineFacebook } from "react-icons/ai"
import { AiOutlineTwitter } from "react-icons/ai"
import { AiOutlineGithub } from "react-icons/ai"
import { AiOutlineWhatsApp } from "react-icons/ai"
import {Link} from 'react-router-dom'
export const Footer=()=>{
    return(
        <footer>
            <div className="footer-li">
                <ul>
                <p>Shopify</p>
                    <li>About</li>
                    <li>Careers</li>
                    <li>Investors</li>
                    <li>Press and Media</li>
                    <li>Partners</li>
                    <li>Affiliates</li>
                    <li>Legal</li> 
                    <li>Service status</li>
                </ul>
                <ul>
                <p>Support</p>
                    <li>Merchant support</li>
                    <li>Help center</li>
                    <li>Hire an Expert</li>
                    <li>Shopify Community</li>
                    <li>Shopify Events</li>                
                </ul>
                <ul>
                <p>Developers</p>
                    <li>zeemac.dev</li>
                    <li>Api documentations</li> 
                    <li>Dev Degree</li>
                </ul>
                <ul>
                <p>Products</p>
                    <li>Shop</li>
                    <li>Shop day</li>
                    <li>Shopify plus</li>
                    <li>Shopify fulfilment network</li>
                    <li>Linkpop</li>
                    <li>Commerce component</li> 
                </ul>
            </div>
            <hr/>
            <div className='footer-div'>
             <ul className='footer-li2'>
                <li><AiOutlineTwitter size={25}/></li>
                <li><AiOutlineWhatsApp size={25}/></li>
                <li><AiOutlineGithub size={25}/></li>

             </ul>
             <p className='credit'>Zeemack 2023, All right reserved. Developed by Farmer in tech</p>
            </div>
        </footer>
    )
}