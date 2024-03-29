import { useDispatch, useSelector } from "react-redux";
// import { selectStockList } from "../../../store/home/home.selector";
import { fetchProducts } from "../../../store/home/home.store";
import { useEffect } from "react";
import MainCard from "../../../components/cards/main.card";

export default function Products() {
  const products = useSelector((state) => state.home.products) || [];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <section className="md:py-16 py-10 shadow-md">
      <div className="container gap-5 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-col-1">
        {products.slice(0, 8).map((product) => {
          return (
            <div key={product.id}>
              <MainCard
                id={product.id}
                image={product.image}
                title={product.title}
                category={product.category}
                price={product.price}
                description={product.description}
              />
            </div>
          );
        })}
        {/* <MainCard /> */}
      </div>
    </section>
  );
}
