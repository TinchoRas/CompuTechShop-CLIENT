import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import styles from './AllProductsAdmin.module.css'
import Loader from '../../../../Loader/Loader'
import ProductNotFound from '../../../../ProductNotFound/ProductNotFound'
import Filter from '../../../../Filter/Filter'
import { getProducts } from '../../../../../Redux/Actions'
import { useDispatch } from 'react-redux'
import ProductCardAdmin from '../../ProductCardAdmin/ProductCardAdmin'
import PaginationCAdmin from '../../Pagination/PaginationCAdmin'
import Categories from '../../../../Categories/Categories'
import CategoryAdmin from '../Category/CategoryAdmin'
import CategoriesAdmin from '../CategoriesAdmin'

function AllProductsAdmin() {
  let products = useSelector((state) => state.allProducts);
  const productsFilter = useSelector((state) => state.productsFilter);
  products = productsFilter.length > 0 ? productsFilter : products;
  const dispatch = useDispatch();
  const category  = 'Allproducts'

  // Pagination Info //
  const currentPage = useSelector((state) => state.currentPage);
  const productsPerPage = 6;
  const indexLastProduct = currentPage * productsPerPage;
  const indexFirstProduct = indexLastProduct - productsPerPage;
  const currentProducts =
    products.length > 0
      ? products.slice(indexFirstProduct, indexLastProduct)
      : null;
  const totalPages = Math.ceil(products.length / productsPerPage);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className={styles.viewProducts}>
      <CategoriesAdmin/>
      {products.length > 0 ? (
        <>
          <div className={styles.productsContainer}>
            <Filter />
            <div className={styles.productsCardsContainer}>
              {productsFilter.length > 0 ? (
                currentProducts?.map((el) => {
                  return (
                    <ProductCardAdmin
                      name={el.name}
                      price={el.price}
                      image={el.image}
                      key={el.id}
                      id={el.id}
                      brand={el.brand}
                      description={el.description}
                      calification={el.calification}
                      quantity={el.quantity}
                    />
                  );
                })
              ) : (
                <ProductNotFound />
              )}
            </div>
          </div>
          {productsFilter.length > 0 ? (
            <PaginationCAdmin category={category} totalPages={totalPages} />
          ) : null}
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default AllProductsAdmin