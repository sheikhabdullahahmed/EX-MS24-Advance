import { useNavigate, useParams } from "react-router-dom";


export default function Deatils () {
  const navigate = useNavigate()
  const params = useParams()

  console.log('param', params);


  const onBack = () =>  {
    navigate(-1)
  }


  return (
    <div>
      <button onClick={onBack}>Back</button>
      <h1>Details</h1>
    </div>
    
  )
 }