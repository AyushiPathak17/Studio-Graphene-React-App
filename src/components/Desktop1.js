import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown, DropdownButton } from "react-bootstrap";
import SectionForm from "./SectionForm";
import SecondaryButton from "./SecondaryButton";
import PrimaryButton from "./PrimaryButton";
import TextField from "./TextField";
import "./Desktop1.css";

const Desktop1 = () => {
  return (
    <a className="desktop-1">
      <section className="desktop-1-child" />
      <section className="rectangle" />
      <SectionForm />
      <a className="home">HOME</a>
      <a className="about">ABOUT</a>
      <a className="contact-us">CONTACT US</a>
      <img
        className="zam-nungaray-acw3b7q6ys0-unspl-icon"
        alt=""
        src="/zamnungarayacw3b7q6ys0unsplash@2x.png"
      />
      <img
        className="philipp-arlt-nmh9a0obon8-unspl-icon"
        alt=""
        src="/philipparltnmh9a0obon8unsplash@2x.png"
      />
      <img
        className="philipp-arlt-8eyb-rvawty-unspl-icon"
        alt=""
        src="/philipparlt8eyb-rvawtyunsplash@2x.png"
      />
      <h1 className="lorem-ipsum-dolor">Fresh</h1>
      <h1 className="lorem-ipsum-dolor1">New products</h1>
      <h1 className="lorem-ipsum-dolor2">Look</h1>
      <div className="lorem-ipsum-dolor3">2022</div>
      <div className="apparel">Apparel</div>
      <h2 className="accessories">Accessories</h2>
      <div className="best-sellers">Best sellers</div>
      <div className="off">50% off</div>
      <header className="desktop-1-item" />
      <footer className="desktop-1-inner" />
      <section className="section" />
      <div className="copyright-2022-all">
        Copyright 2022 All Right Reserved By SG
      </div>
      <div className="bag-0">BAG (0)</div>
      <div className="wishlist-0">WISHLIST (0)</div>
      <h1 className="shopkart">ShopKart</h1>
      <div className="free-delivery">Free Delivery</div>
      <div className="return-policy">Return Policy</div>
      <div className="login">Login</div>
      <div className="follow-us">Follow US</div>
      <img className="layer-156-icon" alt="truck" src="/layer-156.svg" />
      <img className="vector-icon" alt="" src="/vector2.svg" />
      <img className="vector-icon1" alt="" src="/vector3.svg" />
      <img className="vector-icon2" alt="" src="/vector4.svg" />
      <img className="group-icon" alt="" src="/group-6.svg" />
      <div className="line-div" />
      <img className="desktop-1-child1" alt="" src="/group-16.svg" />
      <img className="desktop-1-child2" alt="" src="/group-17.svg" />
      <div className="get-news-about-container">
        <p className="blank-line">&nbsp;</p>
        <p className="blank-line">
          Get news about articles and updates in your inbox.
        </p>
      </div>
      <h2 className="newslleter">Newslleter</h2>
      <label className="name">NAME</label>
      <label className="email">EMAIL</label>
      <label className="message">MESSAGE</label>
      <img className="arrow-icon" alt="" src="/arrow-1.svg" />
      <img className="desktop-1-child3" alt="" src="/arrow-2.svg" />
      <section className="lorem-ipsum-dolor-container">
        <p className="blank-line">{`GET `}</p>
        <p className="blank-line">IN TOUCH</p>
      </section>
      <div className="desktop-1-child4" />
      <div className="desktop-1-child5" />
      <div className="desktop-1-child6" />
      <button className="button">
        <div className="button-child" />
        <h2 className="send">SEND</h2>
      </button>
      <SecondaryButton
        secondaryButtonPosition="absolute"
        secondaryButtonTop="79.69rem"
        secondaryButtonLeft="38.19rem"
      />
      <SecondaryButton
        secondaryButtonPosition="absolute"
        secondaryButtonTop="79.69rem"
        secondaryButtonLeft="58.81rem"
      />
      <SecondaryButton
        secondaryButtonPosition="absolute"
        secondaryButtonTop="79.69rem"
        secondaryButtonLeft="79.5rem"
      />
      <img
        className="malicki-m-beser-pkmvkg7vnuo-un-icon"
        alt=""
        src="/malickimbeserpkmvkg7vnuounsplash@2x.png"
      />
      <SecondaryButton
        secondaryButtonPosition="absolute"
        secondaryButtonTop="79.69rem"
        secondaryButtonLeft="79.5rem"
      />
      <PrimaryButton
        primaryButtonCursor="pointer"
        primaryButtonBorder="1px solid var(--grey-scale-000)"
        primaryButtonPadding="0"
        primaryButtonBackgroundColor="transparent"
        primaryButtonPosition="absolute"
        primaryButtonTop="43.5rem"
        primaryButtonLeft="7.19rem"
        seeMoreDisplay="inline-block"
      />
      <Dropdown
        dropdownDisplay="flex"
        dropdownFlexDirection="column"
        dropdownPosition="absolute"
        dropdownTop="7.19rem"
        dropdownLeft="33.94rem"
      />
      <TextField
        textFieldPosition="absolute"
        textFieldTop="83.25rem"
        textFieldLeft="21.63rem"
        fLORIDAJACKETMargin="0"
      />
      <TextField
        textFieldPosition="absolute"
        textFieldTop="83.25rem"
        textFieldLeft="42.63rem"
        fLORIDAJACKETMargin="0"
      />
      <TextField
        textFieldPosition="absolute"
        textFieldTop="83.25rem"
        textFieldLeft="63.25rem"
        fLORIDAJACKETMargin="0"
      />
      <TextField
        textFieldPosition="absolute"
        textFieldTop="83.25rem"
        textFieldLeft="83.94rem"
        fLORIDAJACKETMargin="0"
      />
    </a>
  );
};

export default Desktop1;
