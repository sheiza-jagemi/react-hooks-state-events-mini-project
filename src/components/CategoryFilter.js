import React from "react";

function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* Add "All" button first */}
      <button
        key="All"
        className={"All" === selectedCategory ? "selected" : ""}
        onClick={() => onSelectCategory("All")}
      >
        All
      </button>
      
      {/* Render other categories */}
      {categories.filter(c => c !== "All").map(category => (
        <button
          key={category}
          className={category === selectedCategory ? "selected" : ""}
          onClick={() => onSelectCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;