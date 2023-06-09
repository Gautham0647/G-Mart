import { useData } from "../../Context/DataContext";
import { Link } from "react-router-dom";
import "./CategoryCard.css"
import { useFilter } from "../../Context/FilterContext";

export function CategoryCard() {
  const { categories } = useData();
  const { filterDispatch } = useFilter()
  console.log(categories)
  const handleClick = (categoryName) => {
    document.documentElement.scrollTop = 0;
    filterDispatch({ type: "SELECT-CATEGORY", payload: categoryName });
  };
  return (
    <div className="categories__card__container">
      {categories.map(({ _id, categoryName, img }) => {
        return (
          <div key={_id} className="category__card">
            <div className="category__img__container">
              <Link to="/products"  onClick={() => handleClick(categoryName)}>
                <img src={img} alt={categoryName} loading="lazy" />
              </Link>
            </div>
            <h3>{`${
              categoryName[0].toUpperCase() + categoryName.slice(1)
            }`}</h3>
          </div>
        );
      })}
    </div>
  );
}
