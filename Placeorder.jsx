// import React from 'react'
// import Title from '../Components/Title'
// import CartTotals from '../Components/CartTotals'
// import { assets } from '../assets/assets'

// const Placeorder = () => {
//   return (
//     <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
//       {/* ---------left side-------- */}
//       <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
//      <div className='text-xl sm:text-2xl my-3'>
//       <Title text1={'DELIEVERY'} text2={'INFORMATION'} />


//      </div>
//      <div className='flex gap-3'>
//       <input type="text" className='border border-gray-300  rounded py-1.5 px-3.5 w-full' placeholder='First name'/>
//       <input type="text" className='border border-gray-300  rounded py-1.5 px-3.5 w-full' placeholder='Last name'/>

//      </div>
//          <input type="email" className='border border-gray-300  rounded py-1.5 px-3.5 w-full' placeholder='Email address'/>
//          <input type="text" className='border border-gray-300  rounded py-1.5 px-3.5 w-full' placeholder='Street'/>
//         <div className='flex gap-3'>
//            <input type="text" className='border border-gray-300  rounded py-1.5 px-3.5 w-full' placeholder='City'/>
//       <input type="text" className='border border-gray-300  rounded py-1.5 px-3.5 w-full' placeholder='State'/>
//         </div>
//          <div className='flex gap-3'>
//            <input type="number" className='border border-gray-300  rounded py-1.5 px-3.5 w-full' placeholder='Pincode'/>
//       <input type="text" className='border border-gray-300  rounded py-1.5 px-3.5 w-full' placeholder='State'/>
//         </div>
//               <input type="number" className='border border-gray-300  rounded py-1.5 px-3.5 w-full' placeholder='Phone'/>
//       </div>
//       {/* ------Right side------ */}
//       <div className='mt-8'>
//         <div className='mt-8 min-w-80'>
//           <CartTotals/>

//         </div>
//         <div className='mt-12'>
//           <Title text1={'PAYMENT'}  text2={'METHOD'}/>

//         </div>
//         {/* -----------Payment Mathod Selection */}
        


// <div className="flex gap-3 flex-col lg:flex-row">

//   {/* Stripe */}
//   <div className="flex items-center gap-3 border h-14 px-4 cursor-pointer">
//     <span className="w-4 h-4 border rounded-full"></span>
//     <img className="h-5 mx-4" src={assets.stripe_logo} alt="Stripe" />
//   </div>

//   {/* Razorpay */}
//   <div className="flex items-center gap-3 border h-14 px-4 cursor-pointer">
//     <span className="w-4 h-4 border rounded-full"></span>
//     <img className="h-5 mx-4" src={assets.razorpay_logo} alt="Razorpay" />
//   </div>

//   {/* Paytm */}
//   <div className="flex items-center gap-3 border h-14 px-4 cursor-pointer">
//     <span className="w-4 h-4 border rounded-full"></span>
//     <img className="h-8 mx-4" src={assets.paytm_logo} alt="Paytm" />
//   </div>

//   {/* PhonePe */}
//   <div className="flex items-center gap-3 border h-14 px-4 cursor-pointer">
//     <span className="w-4 h-4 border rounded-full"></span>
//     <img className="h-8 mx-4" src={assets.phonepe_logo} alt="PhonePe" />
//   </div>

//   {/* COD */}
//   <div className="flex items-center gap-3 border h-14 px-4 cursor-pointer">
//     <span className="w-4 h-4 border rounded-full"></span>
//     <p className="text-gray-500 text-sm font-medium mx-4">
//       CASH ON DELIVERY
//     </p>
//   </div>

// </div>
// </div>



// export default Placeorder





// import React, { useState } from 'react'
// import Title from '../Components/Title'
// import CartTotals from '../Components/CartTotals'
// import { assets } from '../assets/assets'

// const Placeorder = () =

//   // ✅ Payment selection state
//   const [paymentMethod, setPaymentMethod] = useState('phonepe')

//   return (
//     <div className="flex flex-col sm:flex-row justify-between gap-6 pt-5 sm:pt-14 min-h-[80vh] border-t">

//       {/* ================= LEFT SIDE ================= */}
//       <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">

//         <div className="text-xl sm:text-2xl my-3">
//           <Title text1="DELIVERY" text2="INFORMATION" />
//         </div>

//         <div className="flex gap-3">
//           <input className="border rounded py-1.5 px-3.5 w-full" placeholder="First name" />
//           <input className="border rounded py-1.5 px-3.5 w-full" placeholder="Last name" />
//         </div>

//         <input className="border rounded py-1.5 px-3.5 w-full" placeholder="Email address" />
//         <input className="border rounded py-1.5 px-3.5 w-full" placeholder="Street" />

//         <div className="flex gap-3">
//           <input className="border rounded py-1.5 px-3.5 w-full" placeholder="City" />
//           <input className="border rounded py-1.5 px-3.5 w-full" placeholder="State" />
//         </div>

//         <div className="flex gap-3">
//           <input className="border rounded py-1.5 px-3.5 w-full" placeholder="Pincode" />
//           <input className="border rounded py-1.5 px-3.5 w-full" placeholder="Country" />
//         </div>

//         <input className="border rounded py-1.5 px-3.5 w-full" placeholder="Phone" />
//       </div>

//       {/* ================= RIGHT SIDE ================= */}
//       <div className="w-full sm:max-w-[420px] mt-8">

//         <CartTotals />

//         <div className="mt-12">
//           <Title text1="PAYMENT" text2="METHOD" />
//         </div>

//         {/* ================= PAYMENT OPTIONS ================= */}
//         <div className="flex flex-col gap-3 mt-6">

//           <PaymentOption
//             id="stripe"
//             logo={assets.stripe_logo}
//             logoSize="h-5"
//             paymentMethod={paymentMethod}
//             setPaymentMethod={setPaymentMethod}
//           />

//           <PaymentOption
//             id="razorpay"
//             logo={assets.razorpay_logo}
//             logoSize="h-5"
//             paymentMethod={paymentMethod}
//             setPaymentMethod={setPaymentMethod}
//           />

//           <PaymentOption
//             id="paytm"
//             logo={assets.paytm_logo}
//             logoSize="h-8"
//             paymentMethod={paymentMethod}
//             setPaymentMethod={setPaymentMethod}
//           />

//           <PaymentOption
//             id="phonepe"
//             logo={assets.phonepe_logo}
//             logoSize="h-8"
//             paymentMethod={paymentMethod}
//             setPaymentMethod={setPaymentMethod}
//           />

//           <PaymentOption
//             id="cod"
//             text="CASH ON DELIVERY"
//             paymentMethod={paymentMethod}
//             setPaymentMethod={setPaymentMethod}
//           />

//         </div>
//       </div>
//     </div>
//   )
// }

// export default Placeorder

// /* ================= REUSABLE PAYMENT OPTION ================= */

// const PaymentOption = ({
//   id,
//   logo,
//   text,
//   logoSize,
//   paymentMethod,
//   setPaymentMethod
// }) => {

//   const isSelected = paymentMethod === id

//   return (
//     <div
//       onClick={() => setPaymentMethod(id)}
//       className={`flex items-center gap-3 h-14 px-4 cursor-pointer border transition
//         ${isSelected ? 'border-green-500 bg-green-50' : 'border-gray-300'}`}
//     >
//       {/* Radio */}
//       <span
//         className={`w-4 h-4 rounded-full border flex items-center justify-center
//           ${isSelected ? 'border-green-500' : 'border-gray-400'}`}
//       >
//         {isSelected && (
//           <span className="w-2 h-2 bg-green-500 rounded-full"></span>
//         )}
//       </span>

//       {/* Logo or Text */}
//       {logo ? (
//         <img src={logo} className={`${logoSize} mx-4`} alt={id} />
//       ) : (
//         <p className="text-gray-600 text-sm font-medium mx-4">{text}</p>
//       )}
//     </div>
//   )
// }






// import React, { useState } from 'react'
// import Title from '../Components/Title'
// import CartTotals from '../Components/CartTotals'

// const Placeorder = () => {
//   const [paymentMethod, setPaymentMethod] = useState('stripe')

//   return (
//     <div className="flex flex-col sm:flex-row justify-between gap-6 pt-6 sm:pt-14 min-h-[80vh] border-t">

//       {/* ---------- LEFT SIDE ---------- */}
//       <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
//         <div className="text-xl sm:text-2xl my-3">
//           <Title text1="DELIVERY" text2="INFORMATION" />
//         </div>

//         <div className="flex gap-3">
//           <input className="border rounded py-2 px-3 w-full" placeholder="First name" />
//           <input className="border rounded py-2 px-3 w-full" placeholder="Last name" />
//         </div>

//         <input className="border rounded py-2 px-3 w-full" placeholder="Email address" />
//         <input className="border rounded py-2 px-3 w-full" placeholder="Street" />

//         <div className="flex gap-3">
//           <input className="border rounded py-2 px-3 w-full" placeholder="City" />
//           <input className="border rounded py-2 px-3 w-full" placeholder="State" />
//         </div>

//         <div className="flex gap-3">
//           <input className="border rounded py-2 px-3 w-full" placeholder="Pincode" />
//           <input className="border rounded py-2 px-3 w-full" placeholder="Country" />
//         </div>

//         <input className="border rounded py-2 px-3 w-full" placeholder="Phone" />
//       </div>

//       {/* ---------- RIGHT SIDE ---------- */}
//       <div className="w-full sm:max-w-[420px] mt-8">
//         <CartTotals />

//         <div className="mt-10">
//           <Title text1="PAYMENT" text2="METHOD" />
//         </div>

//         {/* --------- PAYMENT SELECT --------- */}
//         <div className="mt-6">
//           <select
//             value={paymentMethod}
//             onChange={(e) => setPaymentMethod(e.target.value)}
//             className="w-full border rounded py-3 px-4 cursor-pointer"
//           >
//             {/* <option value="stripe">Stripe (Card)</option>
//             <option value="razorpay">Razorpay</option>
//             <option value="paytm">Paytm</option>
//             <option value="phonepe">PhonePe</option>
//             <option value="cod">Cash on Delivery</option> */}
//                 <option value="stripe">💳 Stripe (Card)</option>
// <option value="razorpay"> Razorpay</option>
// <option value="paytm">📱 Paytm</option>
// <option value="phonepe">📲 PhonePe</option>
// <option value="cod">🚚 Cash on Delivery</option>


//           </select>
//         </div>

//         {/* Optional: show selected payment */}
//         <p className="text-sm text-gray-500 mt-3">
//           Selected Payment Method: <span className="font-medium">{paymentMethod.toUpperCase()}</span>
//         </p>
//       </div>
//     </div>
//   )
// }

// export default Placeorder




import React, { useContext, useState } from 'react'
import Title from '../Components/Title'
import CartTotals from '../Components/CartTotals'
import { assets } from '../assets/assets'
import { ShopContext } from '../Context/ShopContext'

const Placeorder = () => {
  const[method,setMethod]=useState('cod')
  const {navigate}= useContext(ShopContext);
  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t">

      {/* -------- LEFT SIDE -------- */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1="DELIVERY" text2="INFORMATION" />
        </div>

        <div className="flex gap-3">
          <input
            type="text"
            className="border rounded py-2 px-3 w-full"
            placeholder="First name"
          />
          <input
            type="text"
            className="border rounded py-2 px-3 w-full"
            placeholder="Last name"
          />
        </div>

        <input
          type="email"
          className="border rounded py-2 px-3 w-full"
          placeholder="Email address"
        />

        <input
          type="text"
          className="border rounded py-2 px-3 w-full"
          placeholder="Street"
        />

        <div className="flex gap-3">
          <input
            type="text"
            className="border rounded py-2 px-3 w-full"
            placeholder="City"
          />
          <input
            type="text"
            className="border rounded py-2 px-3 w-full"
            placeholder="State"
          />
        </div>

        <div className="flex gap-3">
          <input
            type="number"
            className="border rounded py-2 px-3 w-full"
            placeholder="Pincode"
          />
          <input
            type="text"
            className="border rounded py-2 px-3 w-full"
            placeholder="Country"
          />
        </div>

        <input
          type="number"
          className="border rounded py-2 px-3 w-full"
          placeholder="Phone"
        />
      </div>

      {/* -------- RIGHT SIDE -------- */}
      <div className="mt-8 w-full sm:max-w-[420px]">

        <CartTotals />

        <div className="mt-12">
          <Title text1="PAYMENT" text2="METHOD" />
        </div>

        {/* -------- PAYMENT OPTIONS -------- */}
        <div className="flex gap-3 flex-col lg:flex-row">

          <div onClick={()=>setMethod('stripe')} className="flex items-center gap-3 border  h-10  px-1  cursor-pointer rounded">
            {/* <p className={`w-4 h-4 border rounded-full` }></p> */}
             <span className={`w-4 h-4 border rounded-full ${method ==='stripe'? 'bg-green-400':''}`}></span>
            <img className="h-5 mx-4" src={assets.stripe_logo} alt="Stripe" />
          </div>
          <div onClick={()=>setMethod('razorpay')} className="flex items-center gap-3 border h-10  px-1  cursor-pointer rounded">
            {/* <p className={`w-4 h-4 border rounded-full` }></p> */}
             <span className={`w-4 h-4 border rounded-full ${method ==='razorpay'? 'bg-green-400':''}`}></span>
            <img className="h-5 mx-4" src={assets.razorpay_logo} alt="razorpay" />
          </div>
          <div onClick={()=>setMethod('paytm')} className="flex items-center gap-3 border h-10  px-1   cursor-pointer rounded">
            {/* <p className={`w-4 h-4 border rounded-full` }></p> */}
             <span className={`w-4 h-4 border rounded-full ${method ==='paytm'? 'bg-green-400':''}`}></span>
            <img className="h-8 mx-4" src={assets.paytm_logo} alt="paytm" />
          </div>
             </div>
             <br />
             <div  className="flex gap-3 flex-col lg:flex-row">
              <div onClick={()=>setMethod('phonepe')} className="flex items-center gap-3 border h-10  px-1   cursor-pointer rounded">
            {/* <p className={`w-4 h-4 border rounded-full` }></p> */}
             <span className={`w-4 h-4 border rounded-full ${method ==='phonepe'? 'bg-green-400':''}`}></span>
            <img className="h-10 mx-6" src={assets.phonepe_logo} alt="phonepe" />
          </div>
             
          <div onClick={()=>setMethod('cod')} className="flex items-center gap-3 border h-10 px-1 cursor-pointer rounded">
            <span className={`w-4 h-4 border rounded-full ${method ==='cod'? 'bg-green-400':''}`}></span>
            <p className="text-gray-500 text-sm font-medium mx-4">
              CASH ON DELIVERY
            </p>
          </div>
          </div>
          <div className='w-full text-end mt-8'>
            <button onClick={()=>navigate('/order')} className='bg-black text-white px-16 py-3 text-sm'>Place Order</button>

          </div>
</div>
        </div>
      
   
  )
}

export default Placeorder
