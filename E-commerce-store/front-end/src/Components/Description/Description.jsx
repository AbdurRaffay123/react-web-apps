import React from "react";
import "./Description.css";

const Description = () => {
  return (
    <div className="description">
      <div className="description-navigator">
        <div className="description-nav-box">Description</div>
        <div className="description-nav-box fade">Reviews (122) </div>
      </div>
      <div className="descriptionbox-description">
        <p>
          An e-commerece website is an online platform that facilitates the
          buyng and selling of products or services over the internet. It serves
          as a virtual marketplace where buisnesses and individuals can showcase
          their products, interact with customers, and conduct transactions
          without the need for a physical presence. E-commerece websites have
          gained immense popularity due to their convenience, accessibility, and
          t he global reach they offer
        </p>
        <p>
          E-commerende websites typically display products or services along
          with detailed description, images, prices, and any available variation
          (e.g, sizes, colors). Each product usually has its own dedication page
          with relevant information
        </p>
      </div>
    </div>
  );
};

export default Description;
