import React from 'react';
import { motion } from 'framer-motion';

const CardReading = () => {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-primary mb-8">Egyptian Cartouche Card Reading</h1>
          
          <div className="bg-white rounded-lg shadow-md p-8 mb-12">
            <p className="text-lg mb-6">
              Sanskruti Holistic Center conducts sessions and classes for Egyptian card reading. Learn about all the Egyptian cards, their meanings and how to interpret them in horoscope reading and star spread.
            </p>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">What are Egyptian Cards?</h2>
              <p className="text-gray-700">
                Egyptian or Cartouche cards are a set of 25 cards used for fortune telling and receiving messages from the higher self. Each card contains ancient Egyptian symbols that capture universal energies. The deck includes major archetypes, elements, and general energies.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Card Reading Course</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Learn about all 25 cards and their meanings</li>
                  <li>Understand horoscope and star spread interpretations</li>
                  <li>Practical hands-on experience</li>
                  <li>Course material and Egyptian card deck included</li>
                  <li>Small group sessions (max 3 students)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Reading Sessions</h3>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <ul className="space-y-3">
                    <li><strong>Duration:</strong> 60 minutes</li>
                    <li><strong>Cost:</strong> ₹2,000</li>
                    <li><strong>Mode:</strong> In-person or phone</li>
                    <li><strong>Coverage:</strong> Health, relationships, career, finances, education</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-4">Book a Session</h2>
            <p className="text-gray-700 mb-4">
              Contact us to book a reading session or enquire about the course.
            </p>
            <div className="flex gap-4">
              <a
                href="https://wa.me/919886332684?text=Hi,%20I'm%20interested%20in%20Egyptian%20Card%20Reading"
                className="btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book on WhatsApp
              </a>
              <a
                href="mailto:sanskrutiholistic@gmail.com"
                className="btn-secondary"
              >
                Email Us
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CardReading;