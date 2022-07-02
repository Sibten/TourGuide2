import React from "react";
import {Carousel}from "react-bootstrap";
import "../CSS/Slideshow.css"

export default function Slideshow() {
  let img = require("../../../database/city.json");
  return (
    <div className="slideshow">
      <Carousel className="slideItem">
        <Carousel.Item >
          <img
            className="d-block w-100"
            src={img["SlideShow"]["s1"]["link"]}
            alt="First slide"
          />
          <Carousel.Caption className="cap">
              <h4> {img["SlideShow"]["s1"]["title"]} </h4>
              <p> {img["SlideShow"]["s1"]["details"]} </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item >
          <img
            className="d-block w-100"
            src={img["SlideShow"]["s2"]["link"]}
            alt="Second slide"
          />
           <Carousel.Caption  className="cap">
              <h4> {img["SlideShow"]["s2"]["title"]} </h4>
              <p> {img["SlideShow"]["s2"]["details"]} </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item >
          <img
            className="d-block w-100"
            src={img["SlideShow"]["s3"]["link"]}
            alt="Third slide"
          />
           <Carousel.Caption className="cap">
              <h4> {img["SlideShow"]["s3"]["title"]} </h4>
              <p> {img["SlideShow"]["s3"]["details"]} </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
