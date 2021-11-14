import React from 'react';
import bannerImg from '../../../src/images/412553290_app_icon_big_1442138742.jpg';
import bannerImg2 from '../../../src/images/th.jpeg';
import './Banner.css';
const Banner = () => {
    return (
        <div>
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img  src={bannerImg} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
      <h2>World Most Expensive Cars are Here!</h2>
      </div>
    </div>
    <div class="carousel-item">
      <img  src={bannerImg2} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h2>World Most Expensive Cars are Here!</h2>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

    </div>
    );
};

export default Banner;