import React from "react";
import emailjs from "emailjs-com";
import facebook from "../assets/facebook.png";
import instagram from "../assets/ig.png";
import { useState } from "react";

function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
    }, 3000);
    emailjs
      .sendForm(
        "service_g5e34sa",
        "template_87930dp",
        e.target,
        "i9uK8SThzPWyLIirA"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
    setName("");
    setEmail("");
    setMessage("");
  };
  return (
    <div className="bg-[#B08A6C] md:bg-[#C99E7D] py-[60px]">
      <div className="lg:flex lg:w-[800px] xl:w-[1000px]  mx-auto lg:bg-[#361f11ad] lg:rounded-md lg:py-10 xl:p-20">
        <form
          className="w-[90%] sm:w-[450px] md:w-[510px] lg:w-[55%] xl:w-[55%]  mx-auto "
          onSubmit={sendEmail}
        >
          <h1 className=" text-center 2xl:ml-5  text-white text-3xl font-bold  tracking-[3px] drop-shadow-[2px_2px_5px_#1A1A19] mb-10">
            CONTACT ME
          </h1>
          <input
            className="w-[100%] h-[40px] bg-[#361f117a] rounded-md pl-4 placeholder-white text-white lg:bg-[#eee] lg:placeholder-black lg:text-black "
            type="text"
            name="name"
            placeholder="Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="mt-3 w-[100%] h-[40px] bg-[#361f117a] rounded-md pl-4 placeholder-white text-white lg:bg-[#eee] lg:placeholder-black lg:text-black "
            type="email"
            name="user_email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            className="mt-3 w-[100%]  bg-[#361f117a] rounded-md px-4 py-2 placeholder-white text-white lg:bg-[#eee] lg:placeholder-black lg:text-black "
            name="message"
            rows="3"
            placeholder="Message"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            className="bg-[#eee] hover:bg-[#1A1A19] hover:text-white mx-auto w-[100%] h-[50px] rounded-md mt-2 duration-[250ms]"
            type="submit"
          >
            Submit
          </button>
          {success && (
            <p className="mt-5 text-center text-[#44F42D] font-bold drop-shadow-[2px_2px_5px_#000] ">
              Thank you for submitting the form!
            </p>
          )}
        </form>
        <div className="mt-10 lg:w-[38%] lg:mt-0">
          <h1 className=" text-center 2xl:ml-5  text-white text-3xl font-bold  tracking-[3px] drop-shadow-[2px_2px_5px_#1A1A19]">
            SOCIAL MEDIA
          </h1>
          <div className="flex flex-wrap mt-10 w-[250px] md:w-[510px] lg:w-[250px] justify-between mx-auto">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/murito7"
            >
              <svg
                className="w-[120px] bg-white rounded-md p-3 hover:bg-[#C99E7D] duration-[250ms]"
                viewBox="0 0 128 128"
              >
                <g fill="#181616">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"
                  ></path>
                  <path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path>
                </g>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/mariyan-popov-7399b91a6/"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                className="w-[120px] bg-white rounded-md p-3  hover:bg-[#C99E7D] duration-[250ms]"
                viewBox="0 0 128 128"
              >
                <path
                  fill="#0076b2"
                  d="M116 3H12a8.91 8.91 0 00-9 8.8v104.42a8.91 8.91 0 009 8.78h104a8.93 8.93 0 009-8.81V11.77A8.93 8.93 0 00116 3z"
                ></path>
                <path
                  fill="#fff"
                  d="M21.06 48.73h18.11V107H21.06zm9.06-29a10.5 10.5 0 11-10.5 10.49 10.5 10.5 0 0110.5-10.49M50.53 48.73h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75v32H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53z"
                ></path>
              </svg>
            </a>
            <a
              className="w-[120px] h-[120px] bg-white rounded-md mt-3 md:mt-0 lg:mt-3  hover:bg-[#C99E7D] duration-[250ms]"
              href="https://www.facebook.com/profile.php?id=100005851508717"
              rel="noreferrer"
              target="_blank"
            >
              <img src={facebook} alt="" />
            </a>
            <a
              className="w-[120px]  bg-white rounded-md mt-3 md:mt-0 lg:mt-3  hover:bg-[#C99E7D] duration-[250ms]"
              href="https://www.instagram.com/_murito__/?hl=bg"
              rel="noreferrer"
              target="_blank"
            >
              <img src={instagram} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
