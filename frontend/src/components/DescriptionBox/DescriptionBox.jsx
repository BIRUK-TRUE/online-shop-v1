import React from "react";
import "./DescriptionBox.css";
export default function DescriptionBox() {
  return (
    <div className="descriptionBox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Welcome to our e-commerce website, your one-stop destination for all
          your shopping needs. We offer a wide range of high-quality products at
          competitive prices, ensuring a seamless and enjoyable shopping
          experience. Explore our categories, discover exclusive deals, and
          enjoy fast, reliable delivery right to your doorstep. Shop with
          confidence and convenience today!
        </p>
        <p>
          Our e-commerce platform is designed to provide you with a
          user-friendly experience, making it easy to browse, compare, and
          purchase products. With secure payment options and excellent customer
          service, we are committed to ensuring your satisfaction. Join our
          community of happy shoppers and start exploring our diverse selection
          of products now!
        </p>
      </div>
    </div>
  );
}
