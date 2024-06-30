


















































import React from 'react'; 

function Login() {
  return (
    <div  >
    <div style={{boxShadow: '0 4px 18px rgba(0, 0, 0, 10)', paddingTop: "30px", width: "400px", textAlign: 'center', fontSize: "2rem", borderBottomRightRadius: "20px", margin: "auto", height: "250px"} }>
        <input  style={{ padding: "10px",height: "4vh",  width: "250px" , fontSize: "16px",  border: "none",  cursor: "pointer"}}  type="text" name="" id="" placeholder='Enter Your Email' /><br /><br />
        <input style={{height: "4vh",  padding: "10px",  fontSize: "16px",  border: "none",   width: "250px", cursor: "pointer"}} type="text" name="" id="" placeholder='Enter Your Paaword' /><br /><br />
        <button style={{backgroundColor: "lightblue", border: "none",   fontSize: "16px",   width: "100px",height: "6vh"}}>Login In</button>
    </div>
    </div>
  )
}

export default Login