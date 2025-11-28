import React from "react";
import "./Azamat.css";
import gro from "../../assets/gro.png";
import f2 from "../../assets/f2.png";
import nima from "../../assets/nima.png";
function Azamat() {
  return (
    <div>
      <section>
        <div className="img">
          <img src={gro} alt="" />
        </div>

        <br />
        <br />
        <div className="div">
          <div className="div1">
            <div className="text">
              <h1>
                The Perfect Beauty <br /> Of You
              </h1>
              <br />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. <br /> It
                has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. Lorem
                Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <br />
              <br />
              <br />
              <button>Shop Now</button>
            </div>

            <div className="img1">
              <img src={f2} alt="" />
            </div>
          </div>

          <br />
          <br />
          <br />

          <div className="div2">
            <div className="img2">
              <img src={nima} alt="" />
            </div>
            <div className="text1">
              <h1>
                Amazing Cosmetic <br /> ⭐⭐⭐⭐⭐
              </h1>
              <br />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book
              </p>
              <br />
              <br />
              <h3>Rusmin Islam</h3>
              <br />
              <br />
              <br />
              <br />  
            </div>
          </div>   
        </div>
      </section>
      <footer></footer>
    </div>
  );
}

export default Azamat;
