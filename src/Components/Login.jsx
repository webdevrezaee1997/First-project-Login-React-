import React from "react";
import image from "../assets/images/image.jpg";

const Login = () => {
  return (
    <div
      style={{ width: "100%" }}
      className=" mx-0 p-0 d-flex justify-content-right align-item-center"
    >
      <div style={{ width: "100%" }} className="mx-0 p-0  ">
        <img
          style={{ width: "100%", position: "absolute", top: "0", right: "0", height:'100%' }}
          className="mt-0 p-0  rounded"
          src={image}
          alt="Your Image"
        />
        <div
          style={{
            flexDirection: "column",
            width: "45% ",
            position: "absolute",
            top: "0",
            right: "50px",
          }}
          className="d-flex flex-wrap mt-1"
        >
          <h2 className="text-white">Login page</h2>
          <input
            style={{ width: "100%" }}
            className="rounded-4 p-2  "
            placeholder="username"
            type="text"
          />
          <input
            style={{ width: "100%" }}
            className="rounded-4 p-2 mt-2"
            placeholder="password"
            type="password"
          />
          <input style={{width:'100%'}} type="submit" className='bg-danger p-2  mt-2 mb-2 rounded-4 text-white' />
          <p className='text-dark text-start p-2 bg-white rounded-4 mt-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque odio magnam eaque nulla illo. Laborum ut ab porro sint nulla sapiente veritatis veniam a, quidem nemo necessitatibus hic temporibus officia.</p>
        </div>
      </div>
    </div>
  );
};
export default Login;
