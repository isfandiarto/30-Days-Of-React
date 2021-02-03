import { React } from "react";
import {Link} from 'react-router-dom'

import '../../styles/style.css' 

function Nav(){
    return(
        <>
            <div className='navbar'>
                <h1>Logo</h1>
                <ul>
                    <Link to='/about'>
                        <li>About</li>
                    </Link>
                    <Link to='/contact'>
                        <li>Contact</li>
                    </Link>
                    <Link to='/characters'>
                        <li>Characters</li>
                    </Link>
                </ul>
            </div>
        </>
    )
}

export default Nav
