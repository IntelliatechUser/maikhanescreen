import { useState } from "react";
import OTPModal from "./CommonComponents/Modal"; // Adjust the import path according to your file structure

const ParentComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmitOTP = (otp) => {
    setIsModalOpen(false);
    // Handle OTP submission logic here
    console.log("OTP submitted:", otp);
  };

  return (
    <div>
      <button
        onClick={handleOpenModal}
        className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-yellow-dark font-semibold py-2 rounded-md focus:outline-none"
      >
        Open OTP Modal
      </button>

      <OTPModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmitOTP={handleSubmitOTP}
      />
    </div>
  );
};

export default ParentComponent;
