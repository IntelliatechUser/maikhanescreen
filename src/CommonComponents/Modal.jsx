// import { useEffect, useRef, useState } from "react";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";

// const OTPInput = ({ field, form }) => {
//   const inputRefs = useRef([]); // Ref to hold all input elements

//   const handleChange = (e, index) => {
//     const value = e.target.value;
//     if (/^\d?$/.test(value)) {
//       const otp = field.value.split("");
//       otp[index] = value;
//       form.setFieldValue(field.name, otp.join(""));
//       // Move focus to the next input if a digit is entered and it's not the last input
//       if (value && index < inputRefs.current.length - 1) {
//         inputRefs.current[index + 1].focus();
//       }
//     }
//   };

//   const handleKeyDown = (e, index) => {
//     if (e.key === "Backspace" && !e.target.value && index > 0) {
//       inputRefs.current[index - 1].focus();
//     }
//   };

//   return (
//     <div className="flex justify-between space-x-2">
//       {Array(4)
//         .fill()
//         .map((_, index) => (
//           <input
//             key={index}
//             type="text"
//             maxLength="1"
//             value={field.value[index] || ""}
//             onChange={(e) => handleChange(e, index)}
//             onKeyDown={(e) => handleKeyDown(e, index)}
//             ref={(el) => (inputRefs.current[index] = el)}
//             className="w-10 h-10 text-center bg-transparent border-0 border-b-2 border-gray-300 focus:border-yellow-500 focus:outline-none"
//           />
//         ))}
//     </div>
//   );
// };

// const OTPModal = ({ isOpen, onClose, onSubmitOTP }) => {
//   const formRef = useRef(null); // Ref to hold Formik form instance
//   const [timer, setTimer] = useState(60);

//   // Validation schema for Formik
//   const validationSchema = Yup.object().shape({
//     otp: Yup.string()
//       .matches(/^\d{4}$/, "OTP must be 4 digits")
//       .required("OTP is required"),
//   });

//   // Function to handle OTP submission
//   const handleSubmit = (values, { resetForm }) => {
//     alert("otp screen");
//     // Handle OTP submission logic here
//     onSubmitOTP(values.otp);
//     // Close modal (should be done after form reset)

//     onClose();
//     // Reset form using Formik's resetForm function
//     resetForm();
//   };

//   // Reset form on modal close
//   useEffect(() => {
//     if (!isOpen) {
//       formRef.current.resetForm(); // Access resetForm function via useRef
//       setTimer(60); // Reset the timer when modal closes
//     }
//   }, [isOpen]);

//   useEffect(() => {
//     let interval;
//     if (isOpen && timer > 0) {
//       interval = setInterval(() => {
//         setTimer((prevTimer) => prevTimer - 1);
//       }, 1000);
//     } else if (timer === 0) {
//       clearInterval(interval);
//     }
//     return () => clearInterval(interval);
//   }, [isOpen, timer]);

//   return (
//     <div
//       className={`fixed top-0 left-0 w-full h-full flex items-center justify-center ${
//         isOpen ? "" : "hidden"
//       }`}
//     >
//       {/* Dark transparent backdrop */}
//       <div
//         className="fixed top-0 left-0 w-full h-full bg-black opacity-50"
//         onClick={onClose}
//       ></div>

//       {/* Modal content */}
//       <div className="relative bg-white p-8 rounded-lg shadow-lg">
//         <button
//           className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
//           onClick={onClose}
//         >
//           {/* Close button */}
//           <svg
//             className="w-6 h-6"
//             fill="none"
//             stroke="orange"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M6 18L18 6M6 6l12 12"
//             ></path>
//           </svg>
//         </button>

//         {/* OTP Form */}
//         <Formik
//           initialValues={{ otp: "" }}
//           validationSchema={validationSchema}
//           onSubmit={handleSubmit}
//           innerRef={(form) => (formRef.current = form)} // Assign Formik form instance to ref
//         >
//           {({ isSubmitting }) => (
//             <Form>
//               <div className="mb-4">
//                 <label
//                   htmlFor="otp"
//                   className="block text-xl font-medium text-gray-700 text-center"
//                 >
//                   Please Enter OTP
//                 </label>
//                 <Field name="otp" component={OTPInput} />
//                 <ErrorMessage
//                   name="otp"
//                   component="p"
//                   className="text-red-500 text-sm mt-1 text-center"
//                 />
//               </div>

//               {/* Timer */}
//               <div className="text-center text-gray-600 mb-4">
//                 {`Time remaining: ${timer} seconds`}
//               </div>

//               {/* Submit Button */}
//               <div className="flex justify-center">
//                 <button
//                   type="submit"
//                   className="mt-4 w-40 flex justify-center bg-customOrange hover:bg-customOrange text-white font-semibold py-2 rounded-full focus:outline-none"
//                   disabled={isSubmitting}
//                 >
//                   Submit
//                 </button>
//               </div>
//             </Form>
//           )}
//         </Formik>
//       </div>
//     </div>
//   );
// };

// export default OTPModal;

import { useEffect, useRef, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const OTPInput = ({ field, form }) => {
  const inputRefs = useRef([]); // Ref to hold all input elements

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^\d?$/.test(value)) {
      const otp = field.value.split("");
      otp[index] = value;
      form.setFieldValue(field.name, otp.join(""));
      // Move focus to the next input if a digit is entered and it's not the last input
      if (value && index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <div className="flex justify-between space-x-2">
      {Array(4)
        .fill()
        .map((_, index) => (
          <input
            key={index}
            type="text"
            maxLength="1"
            value={field.value[index] || ""}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            ref={(el) => (inputRefs.current[index] = el)}
            className="w-10 h-10 text-center bg-transparent border-0 border-b-2 border-gray-300 focus:border-yellow-500 focus:outline-none"
          />
        ))}
    </div>
  );
};

const OTPModal = ({ isOpen, onClose, onSubmitOTP }) => {
  const formRef = useRef(null); // Ref to hold Formik form instance
  const [timer, setTimer] = useState(60);

  // Validation schema for Formik
  const validationSchema = Yup.object().shape({
    otp: Yup.string()
      .matches(/^\d{4}$/, "OTP must be 4 digits")
      .required("OTP is required"),
  });

  // Function to handle OTP submission
  const handleSubmit = (values, { resetForm }) => {
    onSubmitOTP(values.otp);
    resetForm();
    onClose();
  };

  // Reset form on modal close
  useEffect(() => {
    if (!isOpen && formRef.current) {
      formRef.current.resetForm(); // Access resetForm function via useRef
      setTimer(60); // Reset the timer when modal closes
    }
  }, [isOpen]);

  useEffect(() => {
    let interval;
    if (isOpen && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (timer === 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isOpen, timer]);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex items-center justify-center ${
        isOpen ? "" : "hidden"
      }`}
    >
      {/* Dark transparent backdrop */}
      <div
        className="fixed top-0 left-0 w-full h-full bg-black opacity-50"
        onClick={onClose}
      ></div>

      {/* Modal content */}
      <div className="relative bg-white p-8 rounded-lg shadow-lg">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          {/* Close button */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="orange"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>

        {/* OTP Form */}
        <Formik
          initialValues={{ otp: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          innerRef={(form) => (formRef.current = form)} // Assign Formik form instance to ref
        >
          {({ isSubmitting, handleSubmit }) => (
            <Form>
              <div className="mb-4">
                <label
                  htmlFor="otp"
                  className="block text-xl font-medium text-gray-700 text-center"
                >
                  Please Enter OTP
                </label>
                <Field name="otp" component={OTPInput} />
                <ErrorMessage
                  name="otp"
                  component="p"
                  className="text-red-500 text-sm mt-1 text-center"
                />
              </div>

              {/* Timer */}
              <div className="text-center text-gray-600 mb-4">
                {`Time remaining: ${timer} seconds`}
              </div>

              {/* Submit Button */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="mt-4 w-40 flex justify-center bg-customOrange hover:bg-customOrange text-white font-semibold py-2 rounded-full focus:outline-none"
                  disabled={isSubmitting}
                >
                  Submit
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default OTPModal;
