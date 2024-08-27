//     'use client'

// import axios from "axios"
// import { useEffect, useState } from "react"

//  export default function Details({params}) {
//     const {id} = params 
//     const [card, setCard] = useState([])
//     useEffect(() => {
//         axios(`https://api.imgflip.com/get_memes/${id}`)
//         .then ((res) => {
//             setCard(res.data)
//             console.log(res.data)
//         })
//         .catch ((error) => {
//             console.log("error", error)
//         })
//     }, [])

//   return (
//     <div>
//         {card ?.map ((item ,index) => {
//             return <div key= {index}>
//                 <h1>{item.name}</h1>

//             </div>
            
//         } )}



        
//     </div>
// )
// }


export default async function Details({ params }) {
    const { id } = params;
    const res = await fetch("https://api.imgflip.com/get_memes" + id ) ;
    const data = await res.json();

    // Find the specific meme by its id
    const meme = data.data.memes.find(m => m.id === id);

    

    return (
        <div>
            <h1>{meme.name}</h1>
            <img src={meme.url} alt={meme.name} width={400} />
        </div>
    );
}
