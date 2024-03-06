import React, { useState } from "react";
import Chatbot from "./Chatbot";
import Navbar from "./Navbar";
import Logo from "../assets/ChatbotLOGO.jpg";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Home() {
  const [clicked, setCLicked] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setCLicked(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setCLicked(false);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <Navbar />
      <div className="backdrop-blur-sm">
        <div className="flex justify-center m-5">
          <img src={Logo} className="h-36 animate-pulse" alt="" />
        </div>
        <div className="text-center">
          <span className="">
            <span className="font-bold text-black text-2xl ">Chatbot </span>{" "}
            <span className="text-green-500 font-bold text-2xl">AI </span>
            <span className="text-black font-semibold text-xl">Assist</span>
          </span>
          <br />
          <span className="m-8 text-lg">
            This chatbot leverages the speed and efficiency of the Large
            Language Model (LLM) <br />
            for a swift and responsive conversational experience
          </span>
          <br />
          <div className="carousel rounded-box mt-10">
            <div className="carousel-item">
              <img
                className="h-96"
                src="https://images.unsplash.com/photo-1515150144380-bca9f1650ed9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Burger"
              />
            </div>
            <div className="carousel-item">
              <img
                className="h-96"
                src="https://images.unsplash.com/photo-1522579479806-486feddb6d25?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Burger"
              />
            </div>
            <div className="carousel-item">
              <img
                className="h-96"
                src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
                alt="Burger"
              />
            </div>
            <div className="carousel-item">
              <img
                className="h-96"
                src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
                alt="Burger"
              />
            </div>
            <div className="carousel-item">
              <img
                className="h-96"
                src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
                alt="Burger"
              />
            </div>
            <div className="carousel-item">
              <img
                className="h-96"
                src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
                alt="Burger"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="">
          <div className="fixed bottom-5 right-5 rounded-full">
            <button
              className={`${
                clicked
                  ? "tooltip tooltip-open tooltip-info tooltip-left btn btn-circle btn-outline h-20 w-20 animate-pulse"
                  : "tooltip tooltip-open tooltip-info tooltip-left btn btn-circle btn-outline h-20 w-20 animate-bounce"
              }`}
              type="button"
              aria-describedby={id}
              onClick={handleClick}
              data-tip="Hello!🤖"
            >
              <img src={Logo} className="rounded-full" alt="" />
            </button>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
            >
              <Chatbot />
            </Popover>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default Home;
