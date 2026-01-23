// import React, { createContext, useEffect, useState } from 'react'
// import { products } from '../assets/assets';
// import { toast } from 'react-toastify';

// export const ShopContext = createContext();


//    const ShopContextProvider = ({children}) => {
//           const currency = "₹";
//           const delivery_fee= 50;
//         const [search, setSearch]= useState("");
//         const [showSearch, setShowSearch]= useState(false);
         

//         const [cartItems, setCartItems] = useState({})
//   const [cartData, setCartData] = useState([])


       
//       const addToCart = async(itemId,size)=>{
//         let CartData =structuredClone(cartItems)

//          if (!size) {
//    toast.error('Select a Product Size')
//     return; // size missing → exit
//   }


//         if(CartData[itemId]){
//           if(CartData[itemId][size]){
//             CartData[itemId][size] +=1
//           }
//           else{
//              CartData[itemId][size] =1
//           }
//           }
//            else{
//             CartData[itemId]={};
//             CartData[itemId][size]=1;
//            }
//           setCartItems(CartData)
          
//         }
      
//        const getCartCount=()=>{
//         let totalCount=0;
//         for(const items in cartItems){
//           for(const item in cartItems[items])
//           try{
//             if(cartItems[items][item]>0){
//               totalCount +=cartItems[items][item];
//             }

//           }catch(error){
   
//           }
//         }
//         return totalCount;
//        }

//           const updateQuantity= async (itemId,size,quantity)=>{
//     const cartData=structuredClone(cartItems)
//     cartData[itemId][size]=quantity;


//     setCartItems(cartData);
//    }


//       const value={
//         products,
//         currency,
//         delivery_fee,
//         search,
//         setSearch,
//         showSearch,
//         setShowSearch,
//         cartItems,addToCart,getCartCount,updateQuantity
//       };
    
     

//     return (
//       <ShopContext.Provider value={value}>
//         {children}
//       </ShopContext.Provider>
//     )
//   }
//   export default ShopContextProvider;



import React, { createContext, useState } from 'react'
import { products } from '../assets/assets'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

export const ShopContext = createContext()

const ShopContextProvider = ({ children }) => {

  const currency = "₹"
  const delivery_fee = 50

  const [search, setSearch] = useState("")
  const [showSearch, setShowSearch] = useState(false)
  const [cartItems, setCartItems] = useState({})
  const navigate=useNavigate()

  // ✅ ADD TO CART
  const addToCart = (itemId, size) => {

    if (!size) {
      toast.error('Select a Product Size')
      return
    }

    const cartData = structuredClone(cartItems)

    if (cartData[itemId]) {
      cartData[itemId][size] = (cartData[itemId][size] || 0) + 1
    } else {
      cartData[itemId] = {}
      cartData[itemId][size] = 1
    }

    setCartItems(cartData)
  }

  // ✅ TOTAL CART COUNT (for navbar badge)
  const getCartCount = () => {
    let totalCount = 0

    for (const productId in cartItems) {
      for (const size in cartItems[productId]) {
        if (cartItems[productId][size] > 0) {
          totalCount += cartItems[productId][size]
        }
      }
    }

    return totalCount
  }

  // ✅ UPDATE QUANTITY (Cart Page)
  const updateQuantity = (itemId, size, quantity) => {

    const cartData = structuredClone(cartItems)

    if (quantity <= 0) {
      delete cartData[itemId][size]

      if (Object.keys(cartData[itemId]).length === 0) {
        delete cartData[itemId]
      }
    } else {
      cartData[itemId][size] = quantity
    }

    setCartItems(cartData)
  }
const getCartAmount= ()=>{
let  totalAmount=0;
for(const items in cartItems){
  let itemInfo = products.find((product)=>product._id === items);
  for(const item in cartItems[items]){
    try{
      if(cartItems[items][item]>0 ){
       totalAmount += itemInfo.price *cartItems[items][item]

      }
    }catch(error){

    }
  }
}
return totalAmount;
}


  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    getCartCount,
    updateQuantity,
    getCartAmount,
    navigate
  }

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider
