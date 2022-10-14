import React from "react";
import emailjs from "emailjs-com";
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

  const socialBoxes = [
    { text: "github", link: "https://github.com/murito7" },
    {
      text: "linkedin",
      link: "https://www.linkedin.com/in/mariyan-popov-7399b91a6/",
    },
    {
      text: "facebook",
      link: "https://www.facebook.com/profile.php?id=100005851508717",
    },
    { text: "instagram", link: "https://www.instagram.com/_murito__/?hl=bg" },
  ];
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
          <div className=" flex flex-wrap justify-center mt-2 lg:mt-8 lg:flex-nowrap lg:flex-col lg:items-center">
            {socialBoxes.map((media, i) => {
              return (
                <React.Fragment key={i}>
                  <div className="py-2 w-[150px] text-center mt-2 mx-1 rounded-md bg-white hover:bg-[#1A1A19] hover:text-white duration-[250ms]">
                    <a
                      className="text-xl tracking-widest font-bold"
                      target="_blanl"
                      href={media.link}
                    >
                      {media.text}
                    </a>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
