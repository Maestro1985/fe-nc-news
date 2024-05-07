import { Link } from "react-router-dom";

function Header(){

return(
<div>

    <div className="head">
        <h1>NC NEWS</h1>
    </div>
   
    <nav>
    <Link className="link" to="/articles">
          Home
        </Link>
    </nav>
    {/* <div className="border"></div> */}
    </div>
)


}

export default Header