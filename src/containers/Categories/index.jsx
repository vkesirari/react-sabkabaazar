import React, { useState, useEffect } from "react";
import "./style.scss";
import categoriesData from "../../redux/server/categories/index.get.json";
import { connect } from "react-redux";
import { categoryList } from "../../redux/actions/banner";
import { useDispatch } from "react-redux";
const Categories = ({ categoryLists }) => {
  const [categoriesData, setcategoriesData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(categoryList());
    // console.log("hey-->", product_Lists);
    setcategoriesData(categoryLists.data);
  }, []);
  return (
    <section id="category-container">
      {categoriesData &&
        categoriesData.map((item, index) => (
          <div class="img-photo-container">
            <div class={index % 2 == 0 ? "" : "odd-home-img"}>
              <img src={`${item.imageUrl}`} alt={item.name} width="300px" />
            </div>
            <div class="img-container-details">
              <h3>{item.name}</h3>
              <p class="para-des">{item.description}</p>
              <button class="btn btn-padding">Explore {item.key}</button>
            </div>
          </div>
        ))}
    </section>
  );
};
// export default Categories;
// export default Slider;
const mapStateToProps = (state) => {
  console.log("state", state);
  return {
    categoryLists: state.banner.categorys,
  };
};

export default connect(mapStateToProps)(Categories);
