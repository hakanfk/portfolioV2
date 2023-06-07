import React, { useState, useRef } from "react";
import MapChart from "./Map";
import emailjs from "@emailjs/browser";

type Props = {};

function ContactMe({}: Props) {
  //const [mail, setMail] = useState({ name: "", fromMail: "", message: "" });

  const form = useRef<any>();
  const [success, setSuccess] = useState<boolean>(false);
  const [fail, setFail] = useState<boolean>(false);

  function sendEmail(e: any) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_jc1hwe7",
        "template_jw2fiyl",
        form.current,
        "oyVcdKL0bR7IXIPU6"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setFail(true);
        }
      );
  }

  return (
    <div className="h-[100vh] w-full relative flex flex-row justify-center items-center">
      <div className="flex-[1]  md:px-0 flex flex-col gap-y-6 justify-center items-center">
        <h2 className="text-3xl">Contact Us</h2>
        <form
          ref={form}
          onSubmit={sendEmail}
          className=" flex flex-col gap-y-4 justify-center items-start"
        >
          <input
            name="name"
            type="text"
            className="lg:bg-gray-200 bg-gray-50 relative transition-all duration-200 appearance-none focus:outline-none pl-2 pr-24  md:pr-48 py-2 rounded-md focus:bg-white focus:border-2 focus:border-black/70"
            placeholder="Name"
          />
          <input
            type="email"
            className="lg:bg-gray-200 bg-gray-50 relative transition-all duration-200 appearance-none focus:outline-none pl-2  pr-24 md:pr-48 py-2 rounded-md focus:bg-white focus:border-2 focus:border-black/70"
            placeholder="Mail"
            required
          />
          <textarea
            className="lg:bg-gray-200 bg-gray-50 relative transition-all duration-200 appearance-none focus:outline-none pl-2 pr-24  md:pr-[12rem] py-2 rounded-md focus:bg-white focus:border-2 focus:border-black/70"
            placeholder="Message"
            name="message"
            rows={5}
          />
          <button
            type="submit"
            className="py-2 px-24 hover:bg-emerald-300 transition-all duration-300 bg-emerald-400 rounded-md mx-auto"
          >
            Send
          </button>
          {success == true ? (
            <div className="w-full mx-auto text-green-400">
              Your message Sent Successfully
            </div>
          ) : fail ? (
            <div className="w-full mx-auto text-red-400">
              Error while sending your message!
            </div>
          ) : (
            ""
          )}
        </form>
      </div>
      <div className="lg:flex-[1] lg:flex hidden ">
        <MapChart />
      </div>
      <div className="lg:hidden absolute top-0 opacity-10 -z-10  ">
        <MapChart />
      </div>
    </div>
  );
}

export default ContactMe;
