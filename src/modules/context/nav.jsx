import React from 'react'
import {AuthConsumer} from './authContext'
import User from './user'

const Navbar = () => {
   return (
           <AuthConsumer>
               {(props) => {
                   return (
                    <div>
                        <User/>
                        <h3>Nav Bar</h3>
                        {props.isAuthenticated ? <ul>
                            <li>Dashboard</li>
                            <li onClick={props.logout}>Log Out</li>
                        </ul> : <ul>
                            <li>Home</li>
                            <li onClick={props.login}>Login</li>
                        </ul>}
                        
                    </div>
                   )
               }}
           </AuthConsumer>
        
   )
}

export default Navbar;