import { Link } from "react-router-dom";

const NavBar = () => {
  return (<nav>
    <ul className="navBar">
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/random'>Random Meal</Link></li>
      <li><Link to='/meal'>Previously Viewed</Link></li> {/* More details on the meal??? */}
    </ul>
  </nav>
  )
}

export default NavBar;