import React from 'react';
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signout } from '../actions/userActions';

export default function Navebar(){
    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const dispatch = useDispatch();
    const signoutHandler = () => {
        dispatch(signout());
      }
    return(
    <>
    <div className="parallax">
    <div className="page-title"><Link className="link" to="/">EAT FRESH</Link></div>
    </div>
    <div className="menu" id="sticky">
        <ul className="menu-ul">
            <a href="#" className="a-menu"><li>Home</li></a>
            <a href="#deals" className="a-menu"><li>Deals</li></a>
            <a href="#vegetables" className="a-menu"><li>Vegetables</li></a>
            <a href="#" className="a-menu"><li>Fruits</li></a>
            <Link className="a-menu" to="/cart"><li>Cart</li>
            {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
            </Link>
            {
              userInfo ? (
                <div className="dropdown">
                  <Link className="a-menu" to="#">{userInfo.name} <i className="fa fa-caret-down"></i></Link>
                  <ul className="dropdown-content">
                    <li><Link className="a-menu" to="/profile">User</Link></li>
                    <li><Link className="a-menu" to="/orderhistory">Order History</Link></li>
                    <li><Link className="a-menu" to="#signout" onClick={signoutHandler}>Sign Out</Link></li>
                  </ul>
                </div>

              ) :
                (
                  <Link className="a-menu" to="/signin"><li>Sign In</li></Link>
                )
            }
        </ul>
        <div className="search-box">
            <form>
                <input type="text" placeholder="Search.." name="search" className="search-input"/>
                <button type="submit"><i className="fa fa-search"></i></button>
            </form>
        </div>
    </div>
    </>
    )
}