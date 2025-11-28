import React from 'react'
import './Abdulloh.css'
import logo from '/public/logo.png'
import manekur from '/public/manekur.png'
import l1 from '/public/l1.png'
import l2 from '/public/l2.png'
import l3 from '/public/l3.png'
import l4 from '/public/l4.png'
import l5 from '/public/l5.png'
import l6 from '/public/l6.png'
import i1 from '/public/i1.png'
import i2 from '/public/i2.png'

function Abdulloh() {
  return (
    <div>
      <header>
        <div className="container">
          <nav>
            <img src={logo} alt="" />
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Products</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
            <div className="icons">
              <i class="fa-solid fa-user"></i>
              <i class="fa-solid fa-cart-shopping"></i>
              <i class="fa-solid fa-bars-staggered"></i>
            </div>
          </nav>
        </div>
      </header>
      <section id="top" className="get-here">
        <div className="get-text">
          <h1>Get Your Best Cosmetic Products Here</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy
          </p>

          <form>
            <span className="inp">
              <input placeholder="search..." type="search" name="" id="" />
              <i class="fa-solid fa-magnifying-glass"></i>
            </span>
            <button>Shop Now</button>
          </form>
        </div>
        <img src={manekur} alt="" />
      </section>
      <section className="sect2">
        <div className="container">
          <div className="logos">
            <img src={l1} alt="" />
            <img src={l2} alt="" />
            <img src={l3} alt="" />
            <img src={l4} alt="" />
            <img src={l5} alt="" />
            <img src={l6} alt="" />
          </div>
        </div>
      </section>
      <section className="sect3">
        <div className="container">
          <div className="popular">
            <div className="popular-text">
              <span>
                <h2>Our Porular Product</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy
                </p>
              </span>
              <a href="#">
                <span>Discover Our Products</span> →
              </a>
            </div>
            <div className="popular-cards">
              <div className="popular-card">
                <img src={i1} alt="" />
                <h4>Cosmetic products</h4>

                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy
                </p>

                <div className="price">
                  <span>
                    <button>Buy Now</button>
                    <button>Add To Cart</button>
                  </span>

                  <h3>$120</h3>
                </div>
              </div>
              <div className="popular-card">
                <img src={i2} alt="" />
                <h4>Cosmetic products</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy
                </p>
                <div className="price">
                  <span>
                    <button>Buy Now</button>
                    <button>Add To Cart</button>
                  </span>
                  <h3>$120</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Abdulloh
