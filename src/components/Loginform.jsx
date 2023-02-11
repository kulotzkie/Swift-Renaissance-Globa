import './Loginform.css'

const Loginform = () => {
  return (
    <div className='login-container'>
        <div className="login-form">
            <input type="username" className='username' id='username'/>
            <input type="password" className='password' id='password'/>
            <input type="submit" />
        </div>
    </div>
  )
}

export default Loginform