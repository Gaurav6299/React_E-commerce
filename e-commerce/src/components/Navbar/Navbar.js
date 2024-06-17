import React from 'react'
import { NavLink } from 'react-router-dom'
import { BsCart3 } from 'react-icons/bs';
import styled from 'styled-components';

const Navbar = () => {
  return (
    // Navbar
    <>
      <Nav className="navbar navbar-expand-lg my-navbar">
        <div class="container-fluid">
          <NavLink className="navbar-brand logo" href="#">
            <p className="apna">apna<span className='bazar'>Bazar</span></p>
            <span className='slogn'>kharido to jaane</span>
          </NavLink>
          <button className="navbar-toggler ham-burger" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0" style={{ marginTop: '13px' }}>
              <li class="nav-item">
                {/* <a class="nav-link active" aria-current="page" href="#">Home</a> */}
                <NavLink className='nav-link active' to='/'>Home</NavLink>
              </li>

              <li class="nav-item">
                {/* <a class="nav-link active" aria-current="page" href="#">Product-List</a> */}
                <NavLink className='nav-link active' to='/product-list'>Product-List</NavLink>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <img src="../image/search.png" alt="" className="image" />
              <input class="form-control me-2 search-input" type="search" placeholder="Search for products,brands and more" aria-label="Search" />
              {/* <button class="btn btn-outline-success" type="submit">Search</button> */}
              <button className='btn btn-outline-primary log-out'>Log out</button>
              <ul>
                <li>
                  <NavLink to='/cart'>
                    <BsCart3 className='cart' />
                    <span className='total--items'>10</span>
                  </NavLink>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </Nav>

    </>
  )
}

// Styled components Styling
const Nav = styled.nav`
form{
  ul{
  li{
    list-style:none;
    a{
      color:${({theme})=>theme.Colors.white};
      text-decoration: none;
    .cart{
      position: relative;
      font-size: 21px;
      top: 5px;
    }
    .total--items{
      background: ${({theme})=>theme.background.danger};
      border: 1px solid #fff;
      border-radius: 50px;
      font-size: 11px;
      
    position: relative;
    top: -4px;
    right: 6px;
    padding: 0px;

    }
    }
  }
  }
}

`;

export default Navbar