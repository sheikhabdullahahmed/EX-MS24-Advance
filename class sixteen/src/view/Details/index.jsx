// import axios from "axios";
// import { useEffect, useState } from "react";
// import {   useParams,  } from "react-router-dom";


// export default function Deatils () {

//   const [detail, setDetail ] = useState({}) 
//   const {detailid } = useParams()


//   useEffect(() => {
//     axios(`https://fakestoreapi.com/products/${detailid}`)
//     .then((res) => {
//       setDetail(res.data)
//       console.log(res.data);
//     })
//     .catch((error) => {
//       console.log('error', error);
//     })
//   },[detailid])


//   return (
//     <div>
//       <div className="card card-compact bg-base-100 w-96 shadow-xl">
//   <figure>
//     <img
//       src={detail.image}
//       alt="Shoes" />
//   </figure>
//   <div className="card-body">
//     <h2 className="card-title">{detail.id}</h2>
//     <p>{detail.title}</p>
//     <div className="card-actions justify-end">
//       <button className="btn btn-primary">Buy Now</button>
//     </div>
//   </div>
// </div>
      

//     </div>
    
//   )
//  }




import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Details() {
  const [detail, setDetail] = useState({});
  const { productId } = useParams();

  useEffect(() => {
    axios(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => {
        setDetail(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log('error', error);
      });
  }, [productId]);

  return (
    <div>
      <div className="card card-compact bg-base-100 w-96 shadow-xl">
        <figure>
          <img src={detail.image} alt={detail.title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{detail.id}</h2>
          <p>{detail.title}</p>
          <p>$ {detail.price}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}













