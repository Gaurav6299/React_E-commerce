import React from 'react'
// import './style.scss'
import styled from 'styled-components'
import { Button } from './button'

const LandingPage = () => {
  // isko yaha bhi likh sakte ho
  const Wrapper = styled.div`
  // height:100vh;
background-color:${({ theme }) => theme.Colors.white};
box-shadow: 2px 3px 10px 5px gray;

.product-title{
  padding: 5px;
  .title{
    color: black;
    font-family: Roboto,Arial,sans-serif;
    font-size: 20px;
    line-height: 32px;
    font-weight: 500;
  }
  .similar-items{
    line-height: 2px;
    font-size: 13px;
  }
}

`
  return (
    <>

      {/* Banner Section */}
      <div className="container-fluid mt-1">
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel" data-bs-pause="false">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1">
              <span></span>
            </button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2">
              <span></span>
            </button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3">
              <span></span>
            </button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 3">
              <span></span>
            </button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="../image/banner5.jpg" class="d-block w-100" alt="" />
            </div>
            <div class="carousel-item">
              <img src="../image/banner6.jpg" class="d-block w-100" alt="" />
            </div>
            <div class="carousel-item">
              <img src="../image/banner7.jpg" class="d-block w-100" alt="" />
            </div>
            <div class="carousel-item">
              <img src="../image/banner8.jpg" class="d-block w-100" alt="" />
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      {/* Main Section */}

      <Wrapper className="container-fluid mt-2 mb-3">
        <div className="product-title row">
          <div className="col-md-11">
            <h2 className='title'>Suggested For You..</h2>
            <p className='similar-items'>Similar items to you viewed</p>
          </div>
          <div className="col-md-1">
            <Button>View All</Button>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-2">
            <div className="card my-cards" >
              <img src="../image/t-shirts.webp" className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title imageName">RED TAPE</h5>
                <p className="card-text image-type">Men Solid Round Neck Blue T-Shirt</p>
                <p className="card-text price">	&#8377;400 <span className='cut'>&#8377;1699 </span> <span className='discount'>78% off</span></p>
                <p className="card-text size">Size <span className='size-type'>S</span></p>
              </div>
            </div>
          </div>

          <div className="col-sm-2">
            <div className="card my-cards" >
              <img src="../image/t-shirts.webp" className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title imageName">RED TAPE</h5>
                <p className="card-text image-type">Men Solid Round Neck Blue T-Shirt</p>
                <p className="card-text price">	&#8377;400 <span className='cut'>&#8377;1699 </span> <span className='discount'>78% off</span></p>
                <p className="card-text size">Size <span className='size-type'>S</span></p>
              </div>
            </div>
          </div>

          <div className="col-sm-2">
            <div className="card my-cards" >
              <img src="../image/t-shirts.webp" className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title imageName">RED TAPE</h5>
                <p className="card-text image-type">Men Solid Round Neck Blue T-Shirt</p>
                <p className="card-text price">	&#8377;400 <span className='cut'>&#8377;1699 </span> <span className='discount'>78% off</span></p>
                <p className="card-text size">Size <span className='size-type'>S</span></p>
              </div>
            </div>
          </div>
          <div className="col-sm-2">
            <div className="card my-cards" >
              <img src="../image/t-shirts.webp" className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title imageName">RED TAPE</h5>
                <p className="card-text image-type">Men Solid Round Neck Blue T-Shirt</p>
                <p className="card-text price">	&#8377;400 <span className='cut'>&#8377;1699 </span> <span className='discount'>78% off</span></p>
                <p className="card-text size">Size <span className='size-type'>S</span></p>
              </div>
            </div>
          </div>
          <div className="col-sm-2">
            <div className="card my-cards" >
              <img src="../image/t-shirts.webp" className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title imageName">RED TAPE</h5>
                <p className="card-text image-type">Men Solid Round Neck Blue T-Shirt</p>
                <p className="card-text price">	&#8377;400 <span className='cut'>&#8377;1699 </span> <span className='discount'>78% off</span></p>
                <p className="card-text size">Size <span className='size-type'>S</span></p>
              </div>
            </div>
          </div>

          <div className="col-sm-2">
            <div className="card my-cards" >
              <img src="../image/t-shirts.webp" className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title imageName">RED TAPE</h5>
                <p className="card-text image-type">Men Solid Round Neck Blue T-Shirt</p>
                <p className="card-text price">	&#8377;400 <span className='cut'>&#8377;1699 </span> <span className='discount'>78% off</span></p>
                <p className="card-text size">Size <span className='size-type'>S</span></p>
              </div>
            </div>
          </div>

        </div>
      </Wrapper>
    </>
  )
}

// isko yaha bhi likh sakte ho
// const Wrapper = styled.div`
// background-color:${({ theme }) => theme.Colors.secondary}
// `

export default LandingPage