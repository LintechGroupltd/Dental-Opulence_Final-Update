// import useAxios from "@/app/(root)/contact/hooks/useAxios";
// import useAxios from "../../../../hooks/useAxios";
import Link from "next/link";
import { useState } from "react";

const ContactForm = ({ handleStepChange }: { handleStepChange: (step: string) => void; }) => {
  // const [formData, handleInputChange, handleSubmit] = useAxios();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState('form');

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setCurrentStep('success');
      setIsSubmitting(false);
    }, 1000); // Simulating a delay for user experience
  };

  if (currentStep === 'success') {
    return <FormSuccess handleStepChange={handleStepChange} />;
  }

  return (
    <>
      <section className="absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-5">
        <div className="content w-full flex flex-col xl:flex-row gap-5 xl:gap-24">
          <div>
            <h1 className="bold text-lg md:text-[32px] text-white text-center md:text-left xl:text-[56px] leading-[65px]">
              Input your personal info
            </h1>
          </div>
          <div className="thin text-xl w-full">
            <form onSubmit={onSubmit} className="space-y-2 md:space-y-5">
              <div className="flex gap-2 sm:gap-5 flex-col md:flex-row">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name *"
                  className="bg-[#41414159] text-white border border-[#454545] h-[56px] w-full p-2 sm:p-4 tracking-widest rounded-md focus:outline-none placeholder:text-sm"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name *"
                  className="bg-[#41414159] text-white border border-[#454545] h-[56px] w-full p-2 sm:p-4 tracking-widest rounded-md focus:outline-none placeholder:text-sm"
                  required
                />
              </div>
              <div className="flex gap-2 sm:gap-5 flex-col md:flex-row">
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone [optional]"
                  className="bg-[#41414159] text-white border border-[#454545] h-[56px] w-full p-2 sm:p-4 tracking-widest rounded-md focus:outline-none placeholder:text-sm"
                />
                <input
                  type="text"
                  name="email"
                  placeholder="Email*"
                  className="bg-[#41414159] text-white border border-[#454545] h-[56px] w-full p-2 sm:p-4 tracking-widest rounded-md focus:outline-none placeholder:text-sm"
                  required
                />
              </div>
              <div className="flex flex-col gap-2 sm:gap-5 items-end justify-center">
                <textarea
                  name="message"
                  placeholder="Your message here...."
                  className="bg-[#41414159] text-white border border-[#454545] w-full md:min-h-[100px] tracking-[0.3rem] rounded-md px-6 py-3 text-md focus:outline-none placeholder:text-sm"
                ></textarea>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="regular bg-transparent tracking-widest rounded-full text-white text-xs md:text-base border border-[#fff] w-[100px] h-[35px] md:w-[200px] md:h-[51px] flex items-center justify-center"
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

const FormSuccess = ({ handleStepChange }: { handleStepChange: (step: string) => void }) => {
  return (
    <div className="flex flex-col gap-20 text-center" data-aos="fade-left">
      <div className="flex flex-col gap-2">
        <h1 className="bold text-lg md:text-4xl xl:text-7xl text-white">
          {'Your inquiry has been '}
        </h1>
        <h1 className="bold text-lg md:text-4xl xl:text-7xl text-white">
          {'received'} {'Thank You!'}
        </h1>
      </div>
      <div>
        <Link href={'/'} onClick={() => {
          handleStepChange('formOne');
          // handleOptionSelect('option', 'title') // Assuming this is required, uncomment if needed
        }} type='button' className="text-black bg-white font-medium text-xs md:text-base rounded-full px-4 md:px-12 py-2 md:py-4 border-white border">Home page</Link>
      </div>
    </div>
  );
};

export default ContactForm;
