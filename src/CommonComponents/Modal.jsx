import { useEffect, useRef } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const OTPModal = ({ isOpen, onClose, onSubmitOTP }) => {
  const formRef = useRef(null); // Ref to hold Formik form instance

  // Validation schema for Formik
  const validationSchema = Yup.object().shape({
    otp: Yup.string()
      .matches(/^\d{6}$/, "OTP must be 6 digits")
      .required("OTP is required"),
  });

  // Function to handle OTP submission
  const handleSubmit = (values, { resetForm }) => {
    // Handle OTP submission logic here
    onSubmitOTP(values.otp);
    // Close modal (should be done after form reset)

    onClose();
    // Reset form using Formik's resetForm function
    resetForm();
  };

  // Reset form on modal close
  useEffect(() => {
    if (!isOpen) {
      formRef.current.resetForm(); // Access resetForm function via useRef
    }
  }, [isOpen]);

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
            stroke="currentColor"
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
          {({ isSubmitting }) => (
            <Form>
              <div className="mb-4">
                <label
                  htmlFor="otp"
                  className="block text-sm font-medium text-gray-700"
                >
                  Enter OTP
                </label>
                <Field
                  type="text"
                  id="otp"
                  name="otp"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                <ErrorMessage
                  name="otp"
                  component="p"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="mt-4 w-full bg-orange-500 hover:bg-orange-600 text-yellow-dark font-semibold py-2 rounded-md focus:outline-none"
                disabled={isSubmitting}
              >
                Submit OTP
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default OTPModal;
