import React from 'react';
import Navbar from './nav'
import {AuthProvider} from './authContext'
import ChangeName from './changeName'


class ContextDemo extends React.Component {

    state = {
        isAuthenticated: true,
        user: {
            name: "Shahriar Ahmad",
            email: "shahriar@gmail.com"
        }
    }

    changeName = () => {
        this.setState({
            user:{
                name: "Liza",
                email: "liza@gmail.com"
            }
        })
    }

    login = () => {
        this.setState({
            isAuthenticated: true
        })
    }

    logout = () => {
        this.setState({
            isAuthenticated: false
        })
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({
                user:{
                    name: "Rifat Ahmad",
                    email: "rifat@gmail.com"
                }
            })
        },2000)
    }

    render() {
        return (
            <AuthProvider value={{...this.state,changeName: this.changeName,login:this.login,logout:this.logout}}>
                <div className="cont">
                    <h1>Context API Demo</h1>
                    <Navbar />

                    <ChangeName/>
                </div>
            </AuthProvider>
        )
    }
}

export default ContextDemo;
