

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