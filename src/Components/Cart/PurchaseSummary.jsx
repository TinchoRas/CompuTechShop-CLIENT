import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../Redux/Actions";
import { TYPES } from "../../Redux/Actions/shoppingCartActions";
import ProductCard from "../ProductCard/ProductCard";
import NavBar from "../NavBar/Navbar";
import { useNavigate } from "react-router-dom"
import styles from "./PurchaseSummary.module.css"
import { useAuth0 } from "@auth0/auth0-react"
import Swal from 'sweetalert2'
import Footer from "../Footer/Footer";
import { Button } from "@mui/material";
import { useState } from "react";
import { CircularProgress } from "@mui/material";
import emptyCart from '../../Images/emptyCart.png'

const PurchaseSummary = () => {
  const dispatch = useDispatch();
  const productsFilter = useSelector((state) => state.cart);
  const arregloPrice = productsFilter.map((el) => el.price * el.quantity);
  const reducir = (accumulator, curr) => accumulator + curr;
  let arregloTotal
  const navigate = useNavigate()
  const { user } = useAuth0();
  if (arregloPrice.length > 0) { arregloTotal = arregloPrice.reduce(reducir) }

  useEffect(() => {
    dispatch(getUser())

  }, [dispatch])


  const handleBuyCart = (e) => {
    e.preventDefault();
    if (user) {

      // setTimeout(function () {
      navigate("/cartSend")
      // }, 2000)
    }
    else {
      Swal.fire({
        title: 'You must be logged to buy products!',
        icon: 'info',
        confirmButtonText: 'OK',
      })
    }
  };
  const delFromCart = (id, all = false) => {
    all
      ? dispatch({ type: TYPES.REMOVE_ALL_FROM_CART, payload: id })
      : dispatch({ type: TYPES.REMOVE_ONE_FROM_CART, payload: id });
  };
  const addToCart = (id) => {
    // console.log(id);
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });
  };
  const clearCart = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to clean your cart?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, clean it!'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch({ type: TYPES.CLEAR_CART });
        Swal.fire(
          'Cleaned!',
          'Your cart has been celaned.',
          'success'
        )
      }
    })
  };

  const [load, setLoad] = useState(true)

  setTimeout(function () {
    setLoad(false)
  }, 1000)

  return (
    <div className={styles.purchaseSummary}>
      <NavBar />
      <Button variant='outlined' style={{margin:'10px auto 0 auto', display:'flex'}} onClick={() => navigate("/Allproducts")}>Back to Products</Button>
      <h1 className={styles.title}>My cart:</h1>
      <div className={styles.summaryContainer} >
        <div className={styles.cardsContainer}>

        {
            load ?
                <CircularProgress color="inherit" style={{ position: 'absolute', top: '50%', left: '50%' }} />
            : 
            productsFilter.length > 0 && arregloTotal.length !== 0 ?
              productsFilter.map((el) => (
                <ProductCard
                  name={el.name}
                  price={el.price}
                  image={el.image}
                  key={el.id}
                  id={el.id}
                  brand={el.brand}
                  description={el.description}
                  calification={el.calification}
                  quantity={el.quantity}
                  addToCart={addToCart}
                  delFromCart={delFromCart}
                  priceTotal={true}
                  wishlist={false}
                />

              )) : (<div className={styles.productNotFound}>
                <div className={styles.productNotFoundContainer}>
                  <h1>Empty Cart</h1>
                  <div className={styles.productNotFoundText}>
                    {/* <p>Check all products</p>
                    <p>Browse the categories to find a product</p> */}
                    <img alt="empty" src={emptyCart} />
                  </div>
                </div>
              </div>)
          }</div>
        {(arregloPrice.length !== 0 ?
          <div className={styles.containerImgBtn}>
            <label className={styles.text}>Total Price:  $ {new Intl.NumberFormat().format(arregloTotal)}</label>
            <Button variant='outlined' className={styles.btn} onClick={handleBuyCart}>Buy cart</Button>
            <Button
              variant='outlined'
              onClick={clearCart}
            >
              Clean Cart
            </Button>
          </div>
          : null)}
      </div>
      <br />
      <Footer />
    </div >
  );
};

export default PurchaseSummary;
