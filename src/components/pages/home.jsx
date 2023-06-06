import { useState } from "react"
import ProductCard from '../productCard'
import HeroImg from '../images/cloth-img1.avif'
import HeroImg2 from '../images/bag-img.avif'
import HeroImg3 from '../images/shoe-img.avif'
import HeroImg4 from '../images/watch-img.avif'
import img1 from '../images/girl.avif'
import img2 from '../images/boy2.avif'
import img3 from '../images/man2.avif'
import img4 from '../images/woman2.avif'
import { AiOutlineBlock } from "react-icons/ai"
import { Hero } from "../utils/hero"
import { Footer } from "../footer"
const Home=()=>{
        return (
          <section>
            <Hero/>
            <div className="sub-hero">
              <h2 className="heading-xl">Sell to every buyer, everywhere</h2>
              <p className="sub-hero-p">Sell online, in person, and around the world with the marketing tools, social integrations, and sales channels you need to get your products in front of customers.</p>
            </div>
            <div>
            </div>
            <div className="gallery2">
              <div className="gallery-2-img">
                <img src={HeroImg2}/>
                <p className="img-text">Bags</p>
                </div>
                <div className="gallery-2-img">
                <div className="overlay2"></div>
                <img src={HeroImg4}/>
                <p className="img-text">Watvh</p>
                </div>
                <div className="gallery-2-img">
                <img src={HeroImg}/>
                <p className="img-text">Cloth</p>
                </div>
                <div className="gallery-2-img">
              <div className="overlay2"></div>
                <img src={HeroImg3}/>
                <p className="img-text">Shoe</p>
                </div>
              </div>
                      <hr/>
                      <div>
                        <h2 className="heading-lg customers">Meet our prospective customers</h2>
                      </div>
                <div className="meet">
                  <div>
                    <img src={img1} className=""/>
                    <img src={img3}/>
                  </div>
                  <h2 className="heading-xl">Meet the People who choose <span className="zeemack">Zeemack</span></h2>
                  <div>
                  <img src={img2}/>
                  <img src={img4}/>
                  </div>
                </div>
                <div className="sub-footer">
                  <p>Zeemack support</p>
                  <h2 className="heading-lg">The help you need When you need it</h2>
                  <div className="sub-footer-flex">
                    <div>
                      <p><AiOutlineBlock size={35}/></p>
                      <h3 className="heading-md">Blog</h3>
                      <p>Get all the marketing and business strategy tips you need to help you run an online business.</p>
                      <button>Read</button>
                    </div>
                    <div>
                      <p><AiOutlineBlock size={35}/></p>
                      <h3 className="heading-md">Online Courses</h3>
                      <p>Get all the marketing and business strategy tips you need to help you run an online business.</p>
                      <button>Learn</button>
                    </div>
                    <div>
                      <p><AiOutlineBlock size={35}/></p>
                      <h3 className="heading-md">Community</h3>
                      <p>Get all the marketing and business strategy tips you need to help you run an online business.</p>
                      <button>Discuss</button>
                    </div>
                    <div>
                      <p><AiOutlineBlock size={35}/></p>
                      <h3 className="heading-md">Help Center</h3>
                      <p>Get all the marketing and business strategy tips you need to help you run an online business.</p>
                      <button>Help</button>
                    </div>
                   
                  </div>
                </div>
          </section>
        )
      }
      
export default Home