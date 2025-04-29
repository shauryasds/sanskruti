import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ReikiCourses = [
  {
    level: "Level 1",
    duration: "Five hours",
    fees: "5,000",
    topics: [
      "History of Reiki",
      "Concept of Reiki",
      "Principles of Reiki",
      "What is attunement?",
      "How to do 21-day cleansing process",
      "Auras and Chakras",
      "Seven Main Chakras",
      "Whom to heal with Reiki",
      "How to heal somebody",
      "General diseases treated with Reiki",
      "Benefits of Reiki",
      "Attunement",
      "Practical session (One hour)"
    ]
  },
  {
    level: "Level 2",
    duration: "Five hours",
    fees: "5,000",
    topics: [
      "Three symbols of Reiki 2nd degree",
      "Distant Healing symbols",
      "Emotional and mental healing symbols",
      "The power symbol",
      "Hands on Reiki treatment with symbols",
      "Distant healing",
      "Programming Reiki",
      "Protective pyramid",
      "Use of colour in healing"
    ]
  },
  {
    level: "Level 3A",
    duration: "Four hours",
    fees: "5,000",
    topics: [
      "The Usui master symbol",
      "The Reiki grid",
      "Psychic surgery",
      "Reiki meditation",
      "How to become a powerful healer",
      "Five pillars of refining your energy body",
      "Antahkarana symbol"
    ]
  }
];

const Reiki = () => {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-primary mb-8">Reiki Healing & Training</h1>
          
          <div className="bg-white rounded-lg shadow-md p-8 mb-12">
            <p className="text-lg mb-6">
              We undertake courses in all levels of Reiki. The courses are taken by Dr. Neelam, who is trained Reiki Grand Master and has been taking Reiki courses for over 18 years in Bangalore. She has trained thousands of people for different levels of Reiki.
            </p>

            {ReikiCourses.map((course, index) => (
              <motion.div
                key={course.level}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="mb-8 p-6 bg-gray-50 rounded-lg"
              >
                <h3 className="text-2xl font-semibold mb-4">Reiki {course.level}</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-2">Course Topics:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      {course.topics.map((topic, i) => (
                        <li key={i}>{topic}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="bg-white p-4 rounded-lg shadow">
                      <p className="mb-2"><strong>Duration:</strong> {course.duration}</p>
                      <p className="mb-2"><strong>Fees:</strong> ₹{course.fees}</p>
                      <p className="mb-4"><strong>Class Type:</strong> Online & Physical classroom sessions (Individual/Group)</p>
                      <a
                        href="https://wa.me/919886332684?text=Hi,%20I'm%20interested%20in%20Reiki%20courses"
                        className="btn-primary inline-block text-center w-full"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Enquire Now
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <p className="text-gray-700">
              For details, class schedule & queries, contact us:<br />
              Phone: +91-9886332684 / +91-7338631681<br />
              Email: sanskrutiholistic@gmail.com
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Reiki;