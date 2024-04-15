import { Link } from "react-router-dom";

const NavBar = () => {
  return (<nav>
    <ul>
      <li><Link to='/about'>About</Link></li>
      <li><Link to='/'>Home</Link></li>
    </ul>
  </nav>
  )
}

export default NavBar;