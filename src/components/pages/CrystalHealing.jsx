import React from 'react';
import { motion } from 'framer-motion';

const topics = [
  "Introduction to Crystal Healing",
  "Benefits of Crystal Healing",
  "Introduction to various Crystals",
  "Cleansing of Crystals",
  "Energizing of Crystals",
  "Programming of Crystals",
  "How to make a Crystal layout",
  "Preparation of the room for crystal healing",
  "Three Crystal healing techniques",
  "Dowsing by Pendulum",
  "How to check the Chakras using Crystal Pendulum",
  "Different crystals used for different Chakras",
  "Use of crystal bracelets",
  "Knowledge on crystals for Abundance and prosperity"
];

const CrystalHealing = () => {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-primary mb-8">Crystal Healing Course</h1>
          
          <div className="bg-white rounded-lg shadow-md p-8 mb-12">
            <p className="text-lg mb-6">
              Sanskruti Holistic Center conducts comprehensive Crystal Healing courses in Bangalore. Learn the ancient art of healing with crystals and their powerful energetic properties.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Course Topics</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  {topics.map((topic, index) => (
                    <li key={index}>{topic}</li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Course Details</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium">Duration:</h4>
                      <p>Two days × 3 hours each day</p>
                    </div>
                    <div>
                      <h4 className="font-medium">Course Fees:</h4>
                      <p>₹11,000 (including certification and materials)</p>
                    </div>
                    <div>
                      <h4 className="font-medium">Crystal Set (Optional):</h4>
                      <p>₹5,000 includes:</p>
                      <ul className="list-disc list-inside ml-4">
                        <li>49 tumbled crystals</li>
                        <li>2 clear quartz crystal towers</li>
                        <li>1 smoky quartz crystal tower</li>
                        <li>7 crystal pencils</li>
                        <li>1 pendulum</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium">Pre-requisite:</h4>
                      <p>Completion of Reiki Level 1 and 2</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-4">Register for the Course</h2>
            <p className="text-gray-700 mb-4">
              Call us to find out the next schedule or register for a 1:1 class.
            </p>
            <div className="flex gap-4">
              <a
                href="https://wa.me/919886332684?text=Hi,%20I'm%20interested%20in%20the%20Crystal%20Healing%20course"
                className="btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Enquire on WhatsApp
              </a>
              <a
                href="tel:+919886332684"
                className="btn-secondary"
              >
                Call Us
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CrystalHealing;