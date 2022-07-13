import React from "react";

const CategoryList = ({ filterCategory, categoryList }) => {
  return (
    <>
      <div className="category-list">
        {categoryList.map((curElem) => {
          return (
            <button
              className="category-btn"
              type="button"
              onClick={() => filterCategory(curElem)}
            >
              {curElem}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default CategoryList;
