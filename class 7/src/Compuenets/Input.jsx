

// const input = (placeholder, title) => {
//   return (
//     <>
//     <form action="">
//     <label htmlFor=""  ></label>
//     <input type="text" name="" id="inp" placeholder='placeholder' />
//     <button>Search</button>
//     </form>
//     </>

//   )
// }

// export default Input



// import React, {useRef} from 'react'

// const Input = ({title, placholder, func } ) => {
//     const name = useRef()
//     const showvalue = () => {
//         console.log(name.current.value);
//         func
//     }

//     return (
//         <>
//         <label htmlFor="inp">{title}</label>
//         <input type="text" name="" id="inp" placeholder={placholder} ref={name} /><br /><br />
//         <button onClick={showvalue}>Login</button>
//         </>
//     )
// }





// import React from 'react'
// import React, { useRef } from 'react'

// const Input = ({ title, placeholder, func }) => {
//     const name = useRef()
//     const showvalue = () => {
//         console.log(name.current.value);
//         func(name.current.value)
//     }

//     return (

//         <>
//             <label htmlFor="inp">{title}</label>
//             <input type="text" name="" id="inp" placeholder={placholder} ref={inp} />
//             <button onClick={showvalue}>Login</button>
//         </>


//     )
// }



// import React, {useEffect, useRef} from 'react'


// const Input = ({title, placeholder, func}) => {
//     useEffect(() => {
//         console.log('compuenets mounted');
//         return () => {
//             console.log("compuenets Unmounted");
//         } 
//     }, [])


//     const fullName = useRef()
//     const showVal = () => {
//         console.log(fullName.current.value);
//         func(fullName.current.value)
//     }
//     return (
//         <>
//         <label htmlFor="inp">{title}</label><br />
//         <input type="text" name="" id="inp" placeholder={placeholder} ref={fullName} />
//         <button onClick={showVal}>getvalue</button>
//         </>
//     )
// }



// export default Input








// import React, {useEffect, useRef}  from 'react'


// const Input = ({title, placholder, func}) => {
//     useEffect(() => {
//         console.log('compunenets Mounted');
//         return () => {
//             console.log('Compunenets Unmounted');
//         }
//     }, [])

//     const fullName = useRef()
//     const showVal = () => {
//         console.log(fullName.current.value);
//         func(fullName.current.value)
//     }

//     return (
//         <>
//         <label htmlFor="inp">{title}</label>
//         <input type="text" name="" id="inp" placeholder={placholder} ref={fullName} />
//         <button onClick={showVal}>Login</button>
//         </>
        
//     )
// }



import React, {useEffect, useRef} from 'react'

const Input = ({title, placehlder, func}) => {
    useEffect(() => {
        console.log('Compunents Mounted');

        return () => {
            console.log('Compunents Unmounted');
        }
    }, [])

    const fullName = useRef()
    const showvalue = () => {
        console.log(fullName.current.value);
        func(fullName.current.value)
    }

    return (
        <>
        <label htmlFor="inp">{title}</label>
        <input type="text" name="" id="inp" placeholder={placehlder} ref={fullName} />
        <button onClick={showvalue}>Login</button>

        </>
    )

}