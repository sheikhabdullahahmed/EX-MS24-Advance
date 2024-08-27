'use client'

import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Page() {
  const [memes, setMemes] = useState([]);

  useEffect(() => {
    axios('https://api.imgflip.com/get_memes')
      .then((res) => {
        setMemes(res.data.data.memes);
        console.log(res.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);

  return (
    <div className="flex flex-wrap gap-5 justify-center">
      {memes?.map((meme) => {
        return (
          <div key={meme.id} className="border border-gray-300 p-4 rounded-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/5 text-center">
            <h1 className="text-lg font-semibold mb-2">{meme.name}</h1>
            <div className="w-full h-0 pb-[100%] relative overflow-hidden rounded-md">
              <img src={meme.url} className="absolute inset-0 w-full h-full object-cover" alt={meme.name} />
            </div>
          </div>
        );
      })}
    </div>
  );
}




// 'use client';

// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useparams } from 'next/router';

// export default function Home() {
//   const [memes, setMemes] = useState([]);
//   const router = useRouter();

//   useEffect(() => {
//     axios('https://api.imgflip.com/get_memes')
//       .then((res) => {
//         setMemes(res.data.data.memes);
//       })
//       .catch((error) => {
//         console.log("error", error);
//       });
//   }, []);

//   const handleMemeClick = (id) => {
//     router.push(`/meme-maker/${id}`);
//   };

//   return (
//     <div className="flex flex-wrap gap-5 justify-center">
//       {memes?.map((meme) => (
//         <div
//           key={meme.id}
//           className="border border-gray-300 p-4 rounded-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/4 text-center cursor-pointer"
//           onClick={() => handleMemeClick(meme.id)}
//         >
//           <h1 className="text-lg font-semibold mb-2">{meme.name}</h1>
//           <img src={meme.url} className="w-full h-auto rounded-md" alt={meme.name} />
//         </div>
//       ))}
//     </div>
//   );
// }

// File: pages/index.js

// 'use client';

// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams } from 'next/navigation';

// export default function Home() {
//   const [memes, setMemes] = useState([]);
//   const params = useParams();

//   useEffect(() => {
//     axios.get('https://api.imgflip.com/get_memes')
//       .then((res) => {
//         setMemes(res.data.data.memes);
//       })
//       .catch((error) => {
//         console.error("Error fetching memes", error);
//       });
//   }, []);

//   const handleMemeClick = (id) => {
//     console.log(`Navigating to meme-maker/${id}`);
//     params(`/meme-maker/${id}`);
//   };

//   return (
//     <div className="flex flex-wrap gap-5 justify-center">
//       {memes?.map((meme) => (
//         <div
//           key={meme.id}
//           className="border border-gray-300 p-4 rounded-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/4 text-center cursor-pointer"
//           onClick={() => handleMemeClick(meme.id)}
//         >
//           <h1 className="text-lg font-semibold mb-2">{meme.name}</h1>
//           <img src={meme.url} className="w-full h-auto rounded-md" alt={meme.name} />
//         </div>
//       ))}
//     </div>
//   );
// }
