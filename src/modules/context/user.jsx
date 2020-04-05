 import React from 'react'
 import { AuthConsumer } from './authContext'

 const User = () => {
    return (
        <AuthConsumer>
            {({ user,isAuthenticated }) => 
                {
                    
                    return (
                        <div>
                            {isAuthenticated && <p>
                                <strong>Name: </strong>{user.name}<br/>
                                <strong>Email: </strong>{user.email}<br/>
                            </p>}
                            
                        </div>
                    )
                }
            }
           
        </AuthConsumer>
    )
 }

 export default User;