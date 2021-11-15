import React from "react";
import "./style.scss";
import bannerData from "../../store/server/banners/index.get.json";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
console.log("bannerData", bannerData);

const Slider = (porps) => (
  <section className="slideshow-container">
    <Carousel showThumbs={false} showStatus={false}>
      {bannerData.map((item) => (
        <div>
          <img src={item.bannerImageUrl} />
        </div>
      ))}
    </Carousel>
  </section>
);

// function Slider(props) {
//   console.log("bannerData", bannerData);
//   return (
//     // dataItems.map((item) => {
//     //   const content = `<div class="img-photo-container">
//     //   <div class="home-img">
//     //     <img src="${item.imageUrl}" alt="${item.name}" />
//     //   </div>
//     //   <div class="img-container-details">
//     //     <h3>${item.name}</h3>
//     //     <p class="para-des">${item.description}</p>
//     //     <button class="btn" >Explore ${item.key}</button>
//     //   </div>
//     // </div>`

//     <section className="slideshow-container">
//       {/* -- Full-width images with number and caption text -- */}

//       <div className="mySlides fade">
//         <img className="slider-img" src="/static/images/offers/offer1.jpg" />
//       </div>

//       <div className="mySlides fade">
//         <img className="slider-img" src="/static/images/offers/offer2.jpg" />
//       </div>

//       <div className="mySlides fade">
//         <img className="slider-img" src="/static/images/offers/offer3.jpg" />
//       </div>
//       <div className="mySlides fade">
//         <img className="slider-img" src="/static/images/offers/offer4.jpg" />
//       </div>
//       <div className="mySlides fade">
//         <img className="slider-img" src="/static/images/offers/offer5.jpg" />
//       </div>
//       <a className="prev" onclick="plusSlides(-1)">
//         Prev
//       </a>
//       <a className="next" onclick="plusSlides(1)">
//         Next
//       </a>
//     </section>
//   );
// }

export default Slider;
