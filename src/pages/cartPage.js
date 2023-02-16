import Nav from "../components/navbar";
import Cart from "../components/cart";
import Footer from "../components/footer";
import { useDispatch, useSelector } from "react-redux";
import { CHANGE_ORDER_CART, CHANGE_QUANTITY, REMOVE_ITEM} from "../actions";
import { useEffect } from "react";

function CartPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  useEffect(()=>{
   dispatch({type:CHANGE_ORDER_CART,payload:cartItems})
  },[cartItems])

  const changeQuantity = (quantity,item)=>{
dispatch({type:CHANGE_QUANTITY, payload:{...item,quantity:quantity}})
  }

  const removeItem = (item)=>{
    dispatch({type: REMOVE_ITEM, payload:item })
      }
  
  const order = useSelector(state=>state.order)
  return (
    <> 
      <Nav cartCount={cartItems.length} />
      <Cart items={cartItems}  order={order} changeQuantity={changeQuantity} removeItem={removeItem} />
      <Footer />
    </>
  );
}

export default CartPage;
