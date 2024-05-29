import React from "react";
import fb from "../images/facebook.png";
import wp from "../images/whatsapp.png";
import In from "../images/instagram.png";
import ln from "../images/linkedin.png";
import serviceIcon from "../images/customer-service.png";
import happyIcon from "../images/rating.png";
import certifiedIcon from "../images/contract.png";
import teamIcon from "../images/badge.png";

import { Link } from "react-router-dom";
import Footer from "./Footer";

const images = [
  "https://images.pexels.com/photos/914128/pexels-photo-914128.jpeg?cs=srgb&dl=pexels-saikat-ghosh-323099-914128.jpg&fm=jpg",
  "https://images.pexels.com/photos/914128/pexels-photo-914128.jpeg?cs=srgb&dl=pexels-saikat-ghosh-323099-914128.jpg&fm=jpg",
  "https://images.pexels.com/photos/914128/pexels-photo-914128.jpeg?cs=srgb&dl=pexels-saikat-ghosh-323099-914128.jpg&fm=jpg",
];
const delay = 2500;

function Home() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <>
      <div className="relative h-[100vh]">
        <span className="absolute right-10 bottom-[100px] z-[999] flex flex-col gap-[20px]">
          <a>
            <img className="w-[20px]" src={fb} alt="icon"></img>
          </a>
          <a>
            <img className="w-[20px]" src={In} alt="icon"></img>
          </a>
          <a>
            <img className="w-[20px]" src={wp} alt="icon"></img>
          </a>
          <a>
            <img className="w-[20px]" src={ln} alt="icon"></img>
          </a>
        </span>
        <img
          className="w-full h-full object-cover"
          src="https://wherethesoulswander.com/wp-content/uploads/2022/08/A-guide-to-Kolsai-Lakes-Kazakhstan-uai-2000x1125.jpg"
          alt="Kolsai Lakes"
        />
        <span className="absolute lg:top-[30%] lg:translate-x-0 lg:left-0 lg:translate-y-0 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[100] text-white py-[100px] px-12 bg-[#ffffff47] w-[100%] lg:w-[50%] flex flex-col gap-6">
          <h1 className="text-[2rem] lg:text-[2.8rem] xl:text-[4rem] font-bold leading-[2rem] lg:leading-[3rem] xl:leading-[4.8rem]">
            Feel the Adrenaline <br />
            in every <span className="d-font">Adventure</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </p>
          <button className="bg-black text-white px-8 py-4 hover:bg-[#000]">
            Contact Us
          </button>
        </span>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#000000]"></div>
      </div>
      <div className="flex flex-col gap-[100px] mb-[130px]">
        <Booking />
        <Welcome />
        <TotalWork />
        <OurServices />
        <Testimonials />
        <WhyChooseUs />
        <OurPrices />
        <Appointment />
        <JoinUs />
      </div>
    </>
  );
}

function Booking() {
  return (
    <div className="w-full flex items-center justify-center my-[30px]">
      <div className="p-4 shadow-xl shadow-[#77777763] flex flex-wrap gap-4 rounded-lg">
        <input
          className="p-4 rounded-md bg-[#eee] outline-none w-full md:w-auto"
          placeholder="Your Name"
        />
        <input
          className="p-4 rounded-md bg-[#eee] outline-none w-full md:w-auto"
          placeholder="Activities"
        />
        <input
          className="p-4 rounded-md bg-[#eee] outline-none w-full md:w-auto"
          type="date"
          placeholder="Date"
        />
        <input
          className="p-4 rounded-md bg-[#eee] outline-none w-full md:w-auto"
          type="number"
          placeholder="Person"
        />
        <button className="bg-[#242424] text-white px-8 py-4 rounded-md hover:bg-[#000] w-full md:w-auto">
          Book Now
        </button>
      </div>
    </div>
  );
}

function Welcome() {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center gap-10 text-justify">
      <img
        className="w-[100%] lg:w-[50%] object-cover lg:rounded-md"
        src="https://media.trekbikes.com/image/upload/w_1200/b300_mtbMarqueeImage"></img>
      <div className="w-[90%] lg:w-[40%] flex flex-col gap-7">
        <p className="uppercase font-extrabold text-[#777]">
          welcome to adventures
        </p>
        <h1 className="text-[2.8rem] leading-[3rem] font-bold text-left">
          We provide the best Tours and Treks in Country
        </h1>
        <p className="text-[#444] text-[14px]">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec.
        </p>
        <span className="flex justify-between w-[240px] text-[14px]">
          <ul>
            <li>&#10003; Best Award</li>
            <li>&#10003; Best Award</li>
            <li>&#10003; Best Award</li>
            <li>&#10003; Best Award</li>
          </ul>
          <ul>
            <li>&#10003; Best Award</li>
            <li>&#10003; Best Award</li>
            <li>&#10003; Best Award</li>
            <li>&#10003; Best Award</li>
          </ul>
        </span>
        <Link
          className="bg-[#242424] text-white px-8 py-4 text-center uppercase hover:bg-[#000] rounded-md"
          to="/about">
          About Us
        </Link>
      </div>
    </div>
  );
}

function TotalWork() {
  return (
    <div className="flex flex-col md:flex-row flex-wrap gap-10 justify-evenly bg-[#f5f5f5] py-[100px]">
      <span className="flex flex-col items-center">
        <img className="h-[60px]" src={serviceIcon}></img>
        <h1 className="text-[2.6rem] font-extrabold text-[#f68742]">100%</h1>
        <p>Service Guarantee</p>
      </span>
      <span className="flex flex-col items-center">
        <img className="h-[60px]" src={happyIcon}></img>
        <h1 className="text-[2.6rem] font-extrabold text-[#f68742]">199 +</h1>
        <p>Happy Customers</p>
      </span>
      <span className="flex flex-col items-center">
        <img className="h-[60px]" src={certifiedIcon}></img>
        <h1 className="text-[2.6rem] font-extrabold text-[#f68742]">100%</h1>
        <p>Certified</p>
      </span>
      <span className="flex flex-col items-center">
        <img className="h-[60px]" src={teamIcon}></img>
        <h1 className="text-[2.6rem] font-extrabold text-[#f68742]">7+</h1>
        <p>Professional Team</p>
      </span>
    </div>
  );
}

function OurServices() {
  return (
    <div className="flex justify-center overflow-x-hidden">
      <div className="flex flex-col items-center gap-[20px]">
        <p className="uppercase font-extrabold text-[#777]">Our Services</p>
        <h1 className="text-[2.8rem] leading-[3rem] font-bold text-center">
          We Provide Best Adventure
        </h1>
        <p className="w-[90%] lg:w-[45%] text-center text-[#444] text-[14px]">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis.
        </p>
        <div className="card-container w-[98vw] mt-[60px] flex overflow-x-scroll gap-10 justify-evenly px-10">
          <div>
            <div className="card w-[80vw] lg:w-[400px] max-w-[500px] h-[500px] overflow-hidden flex flex-col justify-end items-start relative group">
              <span className="card-content lg:translate-y-[100%] w-full p-8 absolute text-white z-[100] flex flex-col gap-4 duration-300">
                <h2 className="text-[1.4rem] font-bold">Kolsai Lake</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa cum sociis
                  natoque.
                </p>
                <a className="text-orange-300">Learn More</a>
              </span>
              <img
                className="object-cover h-full w-full duration-300 transform group-hover:scale-105"
                src="https://media.istockphoto.com/id/1255682961/photo/kolsay-national-park-middle-lake-kazakhstan-adventure-travel.jpg?s=612x612&w=0&k=20&c=O7-9qRDsLKqiekI5kK2ZHZUIAsgEAH1N7Plfh2XeTkM="
                alt="image"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black lg:opacity-0 lg:group-hover:opacity-75 duration-300"></div>
            </div>
            <p className="font-bold text-center text-[1.2rem] py-4">
              Black Canyon
            </p>
          </div>

          <div>
            <div className="card w-[80vw] lg:w-[400px] max-w-[500px] h-[500px] overflow-hidden flex flex-col justify-end items-start relative group">
              <span className="card-content lg:translate-y-[100%] w-full p-8 absolute text-white z-[100] flex flex-col gap-4 duration-300">
                <h2 className="text-[1.4rem] font-bold">Kaindy Lake</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa cum sociis
                  natoque.
                </p>
                <a className="text-orange-300">Learn More</a>
              </span>
              <img
                className="object-cover h-full w-full duration-300 transform group-hover:scale-105"
                src="https://t3.ftcdn.net/jpg/04/09/45/86/360_F_409458621_V2Mhck7XScrmCPXEIdM6ogHmycWtodQA.jpg"
                alt="image"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black lg:opacity-0 lg:group-hover:opacity-75 duration-300"></div>
            </div>
            <p className="font-bold text-center text-[1.2rem] py-4">
              Black Canyon
            </p>
          </div>
          <div>
            <div className="card w-[80vw] lg:w-[400px] max-w-[500px] h-[500px] overflow-hidden flex flex-col justify-end items-start relative group">
              <span className="card-content lg:translate-y-[100%] w-full p-8 absolute text-white z-[100] flex flex-col gap-4 duration-300">
                <h2 className="text-[1.4rem] font-bold">Black Canyon</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa cum sociis
                  natoque.
                </p>
                <a className="text-orange-300">Learn More</a>
              </span>
              <img
                className="object-cover h-full w-full duration-300 transform group-hover:scale-105"
                src="https://res.cloudinary.com/simpleview/image/upload/v1548444601/clients/montroseco/home_slide_e18c09bf-8ee2-4400-9ddc-b0eaf1487ae1.png"
                alt="image"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black lg:opacity-0 lg:group-hover:opacity-75 duration-300"></div>
            </div>
            <p className="font-bold text-center text-[1.2rem] py-4">
              Black Canyon
            </p>
          </div>
          <div>
            <div className="card w-[80vw] lg:w-[400px] max-w-[500px] h-[500px] overflow-hidden flex flex-col justify-end items-start relative group">
              <span className="card-content lg:translate-y-[100%] w-full p-8 absolute text-white z-[100] flex flex-col gap-4 duration-300">
                <h2 className="text-[1.4rem] font-bold">Charyn Canyon</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa cum sociis
                  natoque.
                </p>
                <a className="text-orange-300">Learn More</a>
              </span>
              <img
                className="object-cover h-full w-full duration-300 transform group-hover:scale-105"
                src="https://c4.wallpaperflare.com/wallpaper/697/255/637/rocks-morning-kazakhstan-charyn-canyon-wallpaper-preview.jpg"
                alt="image"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black lg:opacity-0 lg:group-hover:opacity-75 duration-300"></div>
            </div>
            <p className="font-bold text-center text-[1.2rem] py-4">
              Black Canyon
            </p>
          </div>
          <div>
            <div className="card w-[80vw] lg:w-[400px] max-w-[500px] h-[500px] overflow-hidden flex flex-col justify-end items-start relative group">
              <span className="card-content lg:translate-y-[100%] w-full p-8 absolute text-white z-[100] flex flex-col gap-4 duration-300">
                <h2 className="text-[1.4rem] font-bold">Moon Canyon</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa cum sociis
                  natoque.
                </p>
                <a className="text-orange-300">Learn More</a>
              </span>
              <img
                className="object-cover h-full w-full duration-300 transform group-hover:scale-105"
                src="https://w0.peakpx.com/wallpaper/462/144/HD-wallpaper-rock-cliff-moon-canyon-landscape.jpg"
                alt="image"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black lg:opacity-0 lg:group-hover:opacity-75 duration-300"></div>
            </div>
            <p className="font-bold text-center text-[1.2rem] py-4">
              Black Canyon
            </p>
          </div>
        </div>
        <span className="flex">
          <p>To see more adventure, &nbsp;</p>
          <Link className="font-bold" to="/">
            click here
          </Link>
        </span>
      </div>
    </div>
  );
}

function Testimonials() {
  return (
    <>
      <div className="flex flex-col gap-6">
        <h1 className="text-center text-[2.8rem] leading-[3rem] font-bold">
          Testimonials
        </h1>
        <div className="flex items-center flex-wrap justify-center gap-11">
          <figure className="snip1157">
            <blockquote className="shadow-md">
              Calvin: You know sometimes when I'm talking, my words can't keep
              up with my thoughts... I wonder why we think faster than we speak.
              Hobbes: Probably so we can think twice.
              <div className="arrow"></div>
            </blockquote>
            <div className="author">
              <img
                className="w-[80px] rounded-full"
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample3.jpg"
                alt="sq-sample3"
              />
              <span>
                <h2 className="text-[1.2rem] font-bold">Pelican Steve</h2>
                <p className="text-[0.8rem]">3siixtin.com</p>
              </span>
            </div>
          </figure>
          <figure className="snip1157 hover">
            <blockquote className="shadow-md">
              Thank you. before I begin, I'd like everyone to notice that my
              report is in a professional, clear plastic binder...When a report
              looks this good, you know it'll get an A. That's a tip kids. Write
              it down.
              <div className="arrow"></div>
            </blockquote>
            <div className="author">
              <img
                className="w-[80px] rounded-full"
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample27.jpg"
                alt="sq-sample27"
              />
              <span>
                <h2 className="text-[1.2rem] font-bold">Pelican Steve</h2>
                <p className="text-[0.8rem]">3siixtin.com</p>
              </span>
            </div>
          </figure>
          <figure className="snip1157">
            <blockquote className="shadow-md">
              My behaviour is addictive functioning in a disease process of
              toxic co-dependency. I need holistic healing and wellness before
              I'll accept any responsibility for my actions.
              <div className="arrow"></div>
            </blockquote>
            <div className="author">
              <img
                className="w-[80px] rounded-full"
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample17.jpg"
                alt="sq-sample17"
              />
              <span>
                <h2 className="text-[1.2rem] font-bold">Pelican Steve</h2>
                <p className="text-[0.8rem]">3siixtin.com</p>
              </span>
            </div>
          </figure>
        </div>
      </div>
    </>
  );
}

function WhyChooseUs() {
  return (
    <>
      <div className="flex w-[100%] flex-col lg:flex-row justify-center items-center">
        <div className="md:w-[80%] lg:w-[50%] xl:w-[40%] w-[100%] flex flex-col gap-4 p-10">
          <h2 className="uppercase font-extrabold text-[#777]">
            Why Choose Us
          </h2>
          <h1 className="text-[2.8rem] leading-[3rem] font-bold text-left">
            We Provide the Best Service and Adventure
          </h1>
          <p className="text-[#444] text-[14px]">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec.
          </p>
          <button className="bg-[#242424] text-white px-8 py-4 text-center uppercase hover:bg-[#000] rounded-md">
            Learn More
          </button>
        </div>
        <img
          className="w-[100%] md:w-[80%] lg:w-[60%] xl:w-[40%]"
          src="https://media.licdn.com/dms/image/D4D12AQH2losvtvoBUQ/article-cover_image-shrink_720_1280/0/1675609436334?e=2147483647&v=beta&t=ei9kHPEakHjYWICZA5_wi_7919sI8lfGWQvPLWbbG4c"></img>
      </div>
    </>
  );
}

function OurPrices() {
  return (
    <>
      <div className="flex flex-col items-center gap-5">
        <h2 className="uppercase font-extrabold text-[#777]">Our Prices</h2>
        <h1 className="text-[2.8rem] leading-[3rem] font-bold text-center">
          Best Prices for Experience
        </h1>
        <p className="text-[#444] md:w-[40%] text-[14px] text-center">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis.
        </p>
        <div className="flex flex-col md:flex-row md:flex-wrap md:justify-center gap-10 pt-[40px]">
          <div className="w-[90vw] md:w-[400px] bg-[#eee] flex flex-col items-center p-10 gap-6">
            <h1 className="p-4 bg-[#000] text-white w-full text-center font-extrabold uppercase">
              Person Package
            </h1>
            <span className="flex items-end">
              <h1 className="text-[2.4rem] font-bold">$99</h1>
              <p className="mb-[10px]">/person</p>
            </span>
            <hr />
            <ul className="text-center flex flex-col gap-3">
              <li>&#10003; 1 Person</li>
              <li>&#10003; Get Gazebo</li>
              <li>&#10003; Pro Instructor</li>
              <li>&#10003; Free Instructor</li>
              <li>&#10003; Free Four Towel</li>
            </ul>
            <button className="bg-[#000] text-white px-8 py-4 text-center uppercase hover:bg-[#242424] rounded-md">
              Learn More
            </button>
          </div>
          <div className="w-[90vw] md:w-[400px] bg-[#000] text-white flex flex-col items-center p-10 gap-6">
            <h1 className="p-4 bg-white text-black w-full text-center font-extrabold uppercase">
              Popular Package
            </h1>
            <span className="flex items-end">
              <h1 className="text-[2.4rem] font-bold">$299</h1>
              <p className="mb-[10px]">/person</p>
            </span>
            <hr />
            <ul className="text-center flex flex-col gap-3">
              <li>&#10003; 10 Person</li>
              <li>&#10003; Get Gazebo</li>
              <li>&#10003; Pro Instructor</li>
              <li>&#10003; Free Soft Drink</li>
              <li>&#10003; Free Four Towel</li>
            </ul>
            <button className="bg-white text-black px-8 py-4 text-center font-extrabold uppercase hover:bg-[#eee] rounded-md">
              Learn More
            </button>
          </div>
          <div className="w-[90vw] md:w-[400px] bg-[#eee] flex flex-col items-center p-10 gap-6">
            <h1 className="p-4 bg-[#000] text-white w-full text-center font-extrabold uppercase">
              Basic Package
            </h1>
            <span className="flex items-end">
              <h1 className="text-[2.4rem] font-bold">$199</h1>
              <p className="mb-[10px]">/person</p>
            </span>
            <hr />
            <ul className="text-center flex flex-col gap-3">
              <li>&#10003; 5 Person</li>
              <li>&#10003; Get Gazebo</li>
              <li>&#10003; Pro Instructor</li>
              <li>&#10003; Free Instructor</li>
              <li>&#10003; Free Four Towel</li>
            </ul>
            <button className="bg-[#000] text-white px-8 py-4 text-center uppercase hover:bg-[#242424] rounded-md">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

function Appointment() {
  return (
    <>
      <div className="appointment-div w-full flex justify-center p-10 text-white lg:justify-center">
        <div className="w-[90vw] lg:w-[50%] flex flex-col justify-center gap-5 z-[999]">
          <h1 className="text-[2.4rem] leading-[3rem] font-bold text-center">
            Feel The Adventure Experience With Us, Don't Hesitate To Contact Us
          </h1>
          <p className="text-[#fff] text-[14px] text-center">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis.
          </p>
          <button className="bg-[#000] text-white px-8 py-4 text-center uppercase hover:bg-[#242424]">
            Get Appointment
          </button>
        </div>
      </div>
    </>
  );
}
function JoinUs() {
  return (
    <>
      <div className="flex flex-col items-center gap-6">
        <h1 className="text-[2.4rem] leading-[3rem] font-bold text-center">
          Join Our Newsletter
        </h1>
        <p className="text-[#000] text-[14px] text-center w-[90%] md:w-[40%]">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis.
        </p>
        <span className="flex flex-col w-full items-center gap-4 md:flex-row md:gap-0 md:justify-center">
          <input
            className="p-4 bg-[#eee] outline-none w-[90%] md:w-[40%]"
            placeholder="Your Name"
          />
          <button className="bg-[#000] w-[90%] md:w-auto text-white px-8 py-4 text-center uppercase hover:bg-[#242424]">
            Get Appointment
          </button>
        </span>
      </div>
    </>
  );
}

export default Home;
