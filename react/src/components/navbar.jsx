import '../css/welcomepage.css';
import logo from '../images/logo.png'

const Navbar = () => {
  return (
    <div className='navbar-cont glass'>
      <section className='navbar-left'>
      <img className='navbar-logo-img' src={logo} alt='brand logo'/>
        <p>LEAKSEEKER NAME LOGO</p>
      </section>
      <section className='navbar-right'>
         <a className='navbar-right-item' href='x'>LINK1</a>
         <a className='navbar-right-item' href='x'>LINK2</a>
         <a className='navbar-right-item' href='x'>LINK3</a>
         <button className='navbar-right-item' type="button">Login</button>
      </section>
    </div>
  )
}

export default Navbar