import React from "react";
import { useState } from "react";
import categoryPage from "./CategoryAPI";
import CategoryList from "./CategoryList";

const uniqueCategory = [
  ...new Set(
    categoryPage.map((curElem) => {
      return curElem.categoryName;
    })
  ),
  "All",
];

const Category = () => {
  const [categoryName, setCategoryName] = useState(categoryPage);
  const [categoryList, setCategoryList] = useState(uniqueCategory);

  const filterCategory = (category) => {
    if (category === "All") {
      setCategoryName(categoryPage);
      return;
    }
    const updatedCategory = categoryPage.filter((curElem) => {
      return curElem.categoryName === category;
    });
    setCategoryName(updatedCategory);
  };
  return (
    <>
      <div className="section-category uk-container uk-section uk-overflow-hidden">
        <h2 className="uk-text-center uk-text-bold">
          <span style={{ color: "#e76900" }}>Shop </span>
          <span style={{ color: "#0b0b45" }}>by categories</span>
        </h2>
        <CategoryList
          filterCategory={filterCategory}
          categoryList={categoryList}
        />
        <div className="uk-child-width-1-3@m uk-text-center uk-margin-auto uk-margin-medium-top uk-grid">
          {categoryName.map((props) => {
            const { id, image, categoryName } = props;

            return (
              <div className="category" key={id}>
                <div className="category-img">
                  <a href="#">
                    <img src={image} alt="category image" />
                  </a>
                </div>
                <a href="#" className="category-overlay">
                  <p>{categoryName}</p>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Category;
