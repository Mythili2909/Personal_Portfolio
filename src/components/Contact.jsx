import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);  // <-- loading state

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    const { from_name, from_email, message } = formData;

    if (!from_name || !from_email || !message) {
      alert('Please fill all fields');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(from_email)) {
      alert('Please enter a valid email address');
      return;
    }

    setLoading(true);  // start loading

    try {
      const result = await emailjs.send(
        'service_egof2rz',
        'template_6wsx75c',
        { from_name, from_email, message_html: message },
        'EUGPo8s6cwc4n5EN0'
      );

      alert('Message sent successfully!');
      setFormData({ from_name: '', from_email: '', message: '' });
    } catch (error) {
      alert(`Failed to send message: ${error.text || 'Unknown error'}`);
    } finally {
      setLoading(false);  // stop loading
    }
  };

  return (
    <div className="py-20" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1 mb-8 md:mb-0">
            <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 mb-4">
              Let's Talk
            </h3>
            <p className="text-black mb-8">
              I'm open to discussing web development projects or partnership opportunities.
            </p>
            <div className="flex items-center mb-4">
              <FaEnvelope className="text-green-400 mr-2" />
              <a href="mailto:mythilikumar29092005@gmail.com" className="hover:underline text-black">
                mythilikumar29092005@gmail.com
              </a>
            </div>
            <div className="flex items-center">
              <FaPhone className="text-green-400 mr-2" />
              <span className="text-black">7395959199</span>
            </div>
          </div>

          <div className="flex-1 w-full">
            <form onSubmit={sendEmail} className="space-y-4">
              <div>
                <label className="block mb-2 text-white">Your Name</label>
                <input
                  type="text"
                  name="from_name"
                  value={formData.from_name}
                  onChange={handleChange}
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400 text-white"
                  placeholder="Enter Your Name"
                  required
                  disabled={loading}  // disable during loading
                />
              </div>
              <div>
                <label className="block mb-2 text-white">Email</label>
                <input
                  type="email"
                  name="from_email"
                  value={formData.from_email}
                  onChange={handleChange}
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400 text-white"
                  placeholder="Enter Your Email"
                  required
                  disabled={loading}
                />
              </div>
              <div>
                <label className="block mb-2 text-white">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400 text-white"
                  rows="5"
                  placeholder="Enter Your Message"
                  required
                  disabled={loading}
                />
              </div>
              <button
                type="submit"
                className={`bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full ${
                  loading ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Send'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
