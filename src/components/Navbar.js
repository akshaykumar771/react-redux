import React from 'react'
import {Link, NavLink, withRouter} from 'react-router-dom';

const Navbar = (props) => {
    // console.log(props);
    // setTimeout( () => {
    //     props.history.push('/about')
    // }, 2000)
    return(
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <a className="brand-logo">PokiTimes</a>
                <ul className = "right">
                {/* {Link is similar to prevent default action and is used to route without hitting server} */}
                    <li> <Link to= "/">Home</Link></li> 
                    {/* NavLink cretaes a class and can be used for styling */}
                    <li> <NavLink to= "/about">About</NavLink></li> 
                    <li> <NavLink to = "/contact">Contact</NavLink></li>
                    
                </ul>

            </div>
        </nav>
        )
}

export default withRouter(Navbar)