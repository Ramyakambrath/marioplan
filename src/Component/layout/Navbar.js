import React from 'react'
import { Link }  from 'react-router-dom'
import SignedInLink from './SignedInLink'
import SignedOutLink from './SignedOutLink'
import {connect} from 'react-redux'

const Navbar = (props)=>{
 const {auth,profile}=props
 const links=auth.uid ? <SignedInLink profile={profile}/>:<SignedOutLink/>
    return(
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
            <Link to='/' className='brand-logo'>Mario Plan</Link>
            {links}
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => ({

    isAuthenticated:state.auth.isAuthenticated,
    message: state.msg,
    error: state.error
})


export default connect(mapStateToProps, { })(Navbar)