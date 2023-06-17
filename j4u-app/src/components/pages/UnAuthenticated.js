import { useNavigate } from "react-router-dom"

const UnAuthenticated = () => {

    const navigate = useNavigate()

    const back = ()=>{navigate(-1)}

  return (
    <section>
        <h2>UnAuthenticated</h2>
        <p>Your role is insufficient permission to request this page !</p>
        <div>
            <button onClick={back}>Go Back</button>
        </div>
    </section>
  )
}

export default UnAuthenticated