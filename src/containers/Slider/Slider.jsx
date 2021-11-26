import React, { useState, useEffect } from "react";
import "./style.scss";
import bannerData from "../../redux/server/banners/index.get.json";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { connect } from "react-redux";
import { bannerList } from "../../redux/actions/banner";
import { useDispatch } from "react-redux";

const Slider = ({ bannerLists }) => {
  const [bannerData, setbannerList] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(bannerList());
    // console.log("hey-->", product_Lists);
    setbannerList(bannerLists.data);
  }, []);
  return (
    <section className="slideshow-container">
      <Carousel showThumbs={false} showStatus={false}>
        {bannerData &&
          bannerData.map((item) => (
            <div>
              <img src={item.bannerImageUrl} />
            </div>
          ))}
      </Carousel>
    </section>
  );
};

// export default Slider;
const mapStateToProps = (state) => {
  console.log("state", state);
  return {
    bannerLists: state.banner.banners,
  };
};

export default connect(mapStateToProps)(Slider);
