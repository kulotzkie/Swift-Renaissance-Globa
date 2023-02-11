import { Link } from "react-router-dom";
import './Loginbtn.css'

const Loginbtn = () => {
  return (
    <Link to='/Loginform'>
      <button className='login-btn'>Log-in</button>
    </Link>
  )
}

export default Loginbtn