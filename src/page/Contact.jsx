import React from 'react'
import Footer from '../component/Footer'

const Contact = () => {
  return (
    <>
      <section className="bg-gray-50 py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center">
            {/* Contact Information */}
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Contact Us
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                We’d love to hear from you! Whether you have questions, feedback, or just want to say hello, feel free to reach out to us.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                <strong>Email:</strong> umarofficial0121@gmail.com
              </p>
              <p className="text-lg text-gray-700 mb-4">
                <strong>Phone:</strong> +92 317 2472531
              </p>
              <p className="text-lg text-gray-700">
                <strong>Address:</strong> Orangi Town Karachi
              </p>
            </div>

            {/* Contact Form */}
            <div className="md:w-1/2">
              <form
                action="#"
                method="POST"
                className="bg-white p-8 rounded-lg shadow-lg border border-gray-300"
              >
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 text-lg mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full p-3 border border-gray-400 rounded-lg focus:border-blue-500 focus:outline-none"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 text-lg mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full p-3 border border-gray-400 rounded-lg focus:border-blue-500 focus:outline-none"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-700 text-lg mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="w-full p-3 border border-gray-400 rounded-lg focus:border-blue-500 focus:outline-none"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-blue-900 text-white text-lg py-3 px-6 rounded-lg shadow-lg hover:bg-blue-800 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Contact
