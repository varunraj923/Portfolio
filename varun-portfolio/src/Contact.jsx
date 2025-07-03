import React, { useState } from 'react';
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineEnvironment,
  AiOutlineClockCircle,
  AiFillLinkedin,
  AiFillGithub,
  AiFillYoutube,
  AiOutlineWhatsApp,
} from 'react-icons/ai';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section className="px-4 py-12 bg-[#0f172a] text-white">
      <div className="grid max-w-6xl grid-cols-1 gap-10 mx-auto md:grid-cols-2">
        
        {/* Left Panel - Contact Info */}
        <div>
          <h2 className="mb-4 text-3xl font-bold">Get In Touch</h2>
          <p className="mb-6 text-sm leading-relaxed text-gray-300 md:text-base">
            Whether you're starting a project or just want to chat, I'm available! I work with the MERN stack and love crafting scalable, responsive web apps.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4 bg-[#1e293b] p-4 rounded-md">
              <AiOutlineMail className="text-2xl text-blue-400" />
              <span className="text-sm md:text-base">varunraj1545@gmail.com</span>
            </div>
            <div className="flex items-center gap-4 bg-[#1e293b] p-4 rounded-md">
              <AiOutlinePhone className="text-2xl text-green-400" />
              <span className="text-sm md:text-base">(+91) 9508907725</span>
            </div>
            <div className="flex items-center gap-4 bg-[#1e293b] p-4 rounded-md">
              <AiOutlineEnvironment className="text-2xl text-purple-400" />
              <span className="text-sm md:text-base">Noida, UP • Available Worldwide</span>
            </div>
            <div className="flex items-center gap-4 bg-[#1e293b] p-4 rounded-md">
              <AiOutlineClockCircle className="text-2xl text-orange-400" />
              <span className="text-sm md:text-base">Response Time: Within 24 hours</span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex mt-8 space-x-4 text-2xl">
            <a href="https://linkedin.com/in/varunraj1545" target="_blank" rel="noreferrer">
              <AiFillLinkedin className="transition hover:text-blue-500" />
            </a>
            <a href="https://github.com/varunraj923" target="_blank" rel="noreferrer">
              <AiFillGithub className="transition hover:text-gray-300" />
            </a>
            <a href="https://www.youtube.com/@yourchannel" target="_blank" rel="noreferrer">
              <AiFillYoutube className="transition hover:text-red-500" />
            </a>
            <a href="https://wa.me/919508907725" target="_blank" rel="noreferrer">
              <AiOutlineWhatsApp className="transition hover:text-green-500" />
            </a>
          </div>
        </div>

        {/* Right Panel - Form */}
        <div className="bg-[#1e293b] p-6 md:p-8 rounded-lg shadow-lg">
          <h2 className="mb-4 text-2xl font-semibold">Contact Varun Raj</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full p-3 rounded bg-[#0f172a] text-white border border-gray-600 placeholder-gray-400 text-sm"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
              className="w-full p-3 rounded bg-[#0f172a] text-white border border-gray-600 placeholder-gray-400 text-sm"
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              required
              className="w-full p-3 rounded bg-[#0f172a] text-white border border-gray-600 placeholder-gray-400 text-sm"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="4"
              required
              className="w-full p-3 rounded bg-[#0f172a] text-white border border-gray-600 placeholder-gray-400 text-sm"
            ></textarea>

            <button
              type="submit"
              className="w-full py-3 font-medium text-white transition bg-blue-600 rounded hover:bg-blue-700"
            >
              Submit
            </button>

            {submitted && (
              <p className="mt-2 text-sm font-medium text-green-400">Message submitted successfully ✅</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;



