"use client";
import React, { useRef } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import useSectionInView from "../../lib/hook";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

const Contact = () => {
  const { ref } = useSectionInView("Contact");
  const resetRef = useRef<HTMLFormElement>(null);
  return (
    <motion.section
      ref={ref}
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:trenton@sadrakulaonline.com">
          trenton@sadrakulaonline.com
        </a>{" "}
        or through this form.
      </p>
      <form
        className="mt-10 flex flex-col dark:text-black"
        ref={resetRef}
        action={async (FormData) => {
          resetRef.current?.reset();
          const { data, error } = await sendEmail(FormData);

          if (error) {
            toast.error(error);
            return;
          }
          toast.success("Email sent successfully!");
        }}
      >
        <input
          name="senderEmail"
          className="h-14 borderBlack rounded-lg px-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          type="email"
          placeholder="Your email"
          required
          maxLength={500}
        ></input>
        <textarea
          name="message"
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <div className=" flex sm:block justify-center">
          <SubmitBtn />
        </div>
      </form>
    </motion.section>
  );
};

export default Contact;
