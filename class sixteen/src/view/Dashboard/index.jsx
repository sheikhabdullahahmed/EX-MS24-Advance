// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";


// export default function Dashboard() {
//     const navigation = useNavigate()
//     const [products, setproducts] = useState([])


//     useEffect(() => {
//         axios('https://fakestoreapi.com/products')
//             .then((res) => {
//                 setproducts(res.data)
//                 console.log(res.data);
//             })
//             .catch((error) => {
//                 console.log('error', error);
//             })
//     }, [])


//     const gotoDetails = (detailid) => {
//         console.log(detailid)
//         navigation(`/Details/${detailid}`)
//     }


//     return (
//         <div  style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: "30px"}}>
            
//             {products.map(item => {
//                 return <div>
//                     <div className="card card-compact w-56 shadow-gray-400 shadow-xl m-10 border-solid border-2 border-inherit p-4   ">
//                         <figure>
//                             <img className="w-full"
//                                 src={item.image}
//                                 alt="Shoes" />
//                         </figure>
//                         <div className="card-body ">
//                             <h2 className="card-title">{item.category}</h2>
//                             <p>$ :{item.price}</p>
//                             <div className="card-actions ">
//                                 <button className="btn btn-primary" onClick={() => gotoDetails(item.id)} >Buy Now</button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             })}
//         </div>
//     )
// }








// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// export default function Dashboard() {
//   const navigation = useNavigate();
//   const [recipes, setRecipes] = useState([]);

//   useEffect(() => {
//     axios('https://dummyjson.com/recipes')
//       .then((res) => {
//         setRecipes(res.data.recipes);
//         console.log(res.data);
//       })
//       .catch((error) => {
//         console.log('error', error);
//       });
//   }, []);

//   const gotoDetails = (productId) => {
//     console.log(productId);
//     navigation(`/details/${productId}`);
//   };

//   return (
//     <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: "30px" }}>
//       {recipes.map(item=> (
//         <div key={item.id}>
//           <div className="card card-compact w-56 shadow-gray-400 shadow-xl m-10 border-solid border-2 border-inherit p-4">
//             <figure>
//               <img className="w-full" src={item.image} alt={item.title} />
//             </figure>
//             <div className="card-body">
//               <h2 className="card-title">{item.name}</h2>
//               <p>$ {item.rating}</p>
//               <p>{`User id :${item.userId}`}</p>
//               <div className="card-actions">
//                 <button className="btn btn-primary" onClick={() => gotoDetails(item.id)}>Buy Now</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

















import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { increment } from "../../store/countSlice"; // Import the action

export default function Dashboard() {
  const navigate = useNavigate();
  const [recipes, setRecipes] = useState([]);
  const dispatch = useDispatch(); // Dispatch hook

  useEffect(() => {
    axios("https://dummyjson.com/recipes")
      .then((res) => {
        setRecipes(res.data.recipes);
        console.log(res.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);

  const gotoDetails = (productId) => {
    dispatch(increment()); // Increment cart count
    console.log(productId);
    navigate(`/details/${productId}`); 
  };

  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", gap: "30px" }}>
      {recipes.map((item) => (
        <div key={item.id}>
          <div className="card card-compact w-56 shadow-gray-400 shadow-xl m-10 border-solid border-2 border-inherit p-4">
            <figure>
              <img className="w-full" src={item.image} alt={item.title} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{item.name}</h2>
              <p>$ {item.rating}</p>
              <p>{`User id : ${item.userId}`}</p>
              <div className="card-actions">
                <button className="btn btn-primary" onClick={() => gotoDetails(item.id)}>
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
