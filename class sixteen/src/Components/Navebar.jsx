// import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {faCartShopping} from '@fortawesome/free-solid-svg-icons'

// function Navebar() {
//   return (
//     <div>
//         <div className="navbar bg-base-100 shadow-gray-300 shadow-md">
//   <div className="flex-1">
//     <a className="btn btn-ghost text-xl ">E-commerce</a>
//   </div>
//   <div className="flex-none gap-3">
//   <FontAwesomeIcon className=' cursor-pointer text-3xl' icon={faCartShopping} />
//     <div className="form-control">
//       <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
//     </div>
//     <div className="dropdown dropdown-end">
//       <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
//       </div>
//       <ul
//         tabIndex={0}
//         className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
//         <li>
//           <a className="justify-between">
//             Profile
//             <span className="badge">New</span>
//           </a>
//         </li>
//         <li><a>Settings</a></li>
//         <li><a>Logout</a></li>
//       </ul>
//     </div>
//   </div>
// </div>
//     </div>
//   )
// }

// export default Navebar









  import React from 'react';
  import { useDispatch, useSelector } from 'react-redux'; 
  import { setTheme } from '../store/countSlice';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

  function Navebar() {
    const dispatch = useDispatch()
    const count = useSelector(state => state.count.count);
    console.log(count) 

    return (
      <div className="navbar bg-base-100 shadow-gray-300 shadow-md">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">E-commerce</a>
        </div>
        <div className="flex-none gap-3">
          <FontAwesomeIcon className="cursor-pointer text-3xl" onClick={() => dispatch(setTheme('2'))} icon={faCartShopping} />
          <div className="form-control">
            <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
          </div>
          <div className="dropdown dropdown-end">
            <div role="button" className="btn btn-ghost btn-circle avatar"></div>
            <ul  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li><a>Settings</a></li>  
              <li><a>Logout</a></li>
            </ul>
          </div>
        </div>
        <div>Cart Count: {count}</div>
      </div>
    );
  }

  export default Navebar;
