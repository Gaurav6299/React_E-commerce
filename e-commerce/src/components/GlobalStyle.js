import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*{
  margin:0px;
  padding:0px;
}
// Fonts Icon
@import url("https://fonts.googleapis.com/css2?family=Philosopher:wght@700&display=swap");

// Navbar 
.my-navbar {
  background-color: blue;
  .container-fluid {
    height: 48px;
    a {
      height: 50px;
    }
  }
}

.logo {
  border: 1px solid #fff;
  border-radius: 8px;
  padding: 0px 10px 0px 10px;
}
.apna {
  color: orange;
  font-family: "Philosopher", sans-serif;
  font-size: 25px;
  position: relative;
  top: -5px;
}
.bazar {
  color: #fff;
}

.slogn {
  font-family: "Kelly Slab", cursive;
  font-size: 12px;
  position: relative;
  color: #fff;
  left: 2px;
  bottom: 38px;
}

.nav-item {
  a {
    color: #fff !important;
  }
}

.search-input {
  width: 471px !important;
  background: #e9e6e6 !important;
  padding-left: 63px !important;
}

.search-input:focus-visible {
  background-color: #fff !important;
}

.image {
  width: 20px;
  position: relative;
  left: 29px;
  height: 19px;
  top: 11px;
}

.log-out {
  background: #fff !important;
  color: #0d6efd !important;
  font-weight: 500 !important;
  position: relative;
  left: 17px;
}

// Navbar End


//Banner Section

.carousel-indicators [data-bs-target] {
  position: relative !important;
  width: 60px !important;
  height: 6px !important;
  border: none !important;
  border-radius: 24px !important;
}
.carousel-indicators [data-bs-target] span {
  content: ’’;
  position: absolute !important;
  top: 0 !important;
  left: 0 !important;
  width: 0 !important;
  height: 100% !important;
  background: #7952b3 !important;
  border-radius: inherit !important;
}
// End Banner Section


// Main Section Start
.my-cards {
  cursor: pointer;

  .imageName {
    font-size: 16px;
    color: #c0baba;
    font-weight: 500;
  }
  .image-type {
    font-size: 16px;
    line-height: 19px !important;
  }
  .price {
    font-weight: bold;
  }

  .cut {
    margin-left: 7px;
    color: #b1abab;
    font-weight: 300;
    text-decoration: line-through;
  }
  .discount {
    color: #388e3c;
    font-size: 13px;
    margin-left: 11px;
  }

  .size {
    color: #878787;
    font-weight: 500;
    font-family: Roboto, Arial, sans-serif;
    position: absolute !important;
    display: none !important;
  }
  .size-type {
    color: black;
  }
}
.card-body {
  transform: translate3d(0px, 0px, 0px);
}

.card-body:hover {
  transform: translate3d(0px, -36.6px, 0px) !important;
  background: #fff;
  transition: 0.2s !important;
  .size {
    display: block !important;
  }
}

.product-title{
  .title{
    color: black;
    font-family: Roboto, Arial, sans-serif;
  }
}

@media(max-width:${({ theme }) => theme.media.tab}){
  form{
    justify-content: end !important;
    flex-direction: column !important;
    width: 326px !important;
    margin-left: 606px !important;

    .search-input{
      background: #e9e6e6 !important;
    padding-left: 63px !important;
    z-index: 99999 !important;
    width: 330px !important;
    }

    .log-out{
      z-index: 99999 !important;
    width: 143px !important;
    margin: auto !important;
    margin-top: 6px !important;
    }
  }
}

@media(max-width:${({ theme }) => theme.media.mobile}){
  form{
    justify-content: end !important;
    flex-direction: column !important;
    width: 326px !important;
    margin-left: 606px !important;

    .search-input{
      background: #e9e6e6 !important;
    padding-left: 63px !important;
    z-index: 99999 !important;
    width: 330px !important;
    }

    .log-out{
      z-index: 99999 !important;
    width: 143px !important;
    margin: auto !important;
    margin-top: 6px !important;
    }
  }

 .ham-burger{
  background: #fff;
  font-size: 16px;
  }
  .ham-burger:focus-visible{
   border:1px solid ${({theme})=>theme.Colors.white}
    }
}

`;