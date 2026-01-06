import React from "react";
import Container from "../../components/layout/Container";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="bg-neutral text-secondary py-20">
      <Container>

        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h1 className="text-5xl font-semibold mb-6">
            Contact <span className="text-primary">FinEase</span>
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            We’re here to help. Reach out to FinEase for support, inquiries, or
            partnership opportunities.
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Contact Info */}
          <div className="bg-base-100 rounded-2xl p-10 shadow-md space-y-8">
            <h2 className="text-3xl font-semibold">Get in Touch</h2>
            <p className="text-gray-600 leading-relaxed">
              If you have any questions about FinEase, need assistance with your
              account, or want to explore collaboration opportunities, our team
              is ready to assist you.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <FaEnvelope className="text-primary text-xl mt-1" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-gray-600 text-sm">
                    support@finease.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaPhoneAlt className="text-primary text-xl mt-1" />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-gray-600 text-sm">
                    +880 1234-567809
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-primary text-xl mt-1" />
                <div>
                  <p className="font-medium">Office</p>
                  <p className="text-gray-600 text-sm">
                    Dhaka, Bangladesh
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-base-100 rounded-2xl shadow-md p-10">
            <h3 className="text-2xl font-semibold mb-6">
              Send Us a Message
            </h3>

            <form className="space-y-5">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border border-accent rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary outline-primary"
              />

              {/* border border-accent rounded-lg px-4 py-3 w-full sm:w-72 focus:outline-none focus:ring-2 focus:ring-primary dark:bg-neutral dark:border-gray-600 dark:text-accent-content */}

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-accent rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary outline-primary"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full border border-accent rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary outline-primary"
              />

              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full border border-accent rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary outline-primary resize-none"
              ></textarea>

              <button
                type="submit"
                className="btn w-full rounded-full bg-primary text-white text-lg font-semibold hover:bg-primary transition"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>

      </Container>
    </section>
  );
};

export default Contact;
