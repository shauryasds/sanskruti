import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const founderImage = "https://images.pexels.com/photos/5214995/pexels-photo-5214995.jpeg";
  
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-black mb-8">About Sanskruti Holistic Center</h1>
          
          <div className="bg-white rounded-lg shadow-md p-8 mb-12">
            <p className="text-lg mb-6">
              Sanskruti Holistic Center in Bangalore provides best in class Holistic and alternative therapies and solutions to its clientele since 2004. The underlying mission of the institute is to promote a Holistic way of living a healthy life.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
              <img
                src={founderImage}
                alt="Dr. Neelam Kewlani"
                className="rounded-lg shadow-md h-[80%]"
              />
              <div>
                <h2 className="text-2xl font-semibold mb-4">Dr. Neelam Kewlani</h2>
                <p className="text-gray-700">
                  As the Head of Sanskruti Holistic Ayurveda Center, Dr. Neelam Kewlani brings extensive experience in Ayurvedic consultations, Panchkarma therapies, and Ayurveda training. With an M.D. in Dravyaguna and a B.A.M.S. degree, she is dedicated to providing holistic healing solutions.
                </p>
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-4">Why Choose Us</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Over 18 years of experience in holistic healing</li>
              <li>Comprehensive range of healing modalities</li>
              <li>Personalized treatment approaches</li>
              <li>Certified and experienced practitioners</li>
              <li>Modern facilities with traditional wisdom</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-semibold mb-4">Our Locations</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold mb-2">HSR Layout</h4>
                <p className="text-gray-700">
                  #1770, 1st Cross, HSR Layout Sector 1<br />
                  Bangalore - 560102<br />
                  Next to HSR RTO office
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Marathahalli</h4>
                <p className="text-gray-700">
                  #201, Harsha's Nest, Srinivas Reddy Layout<br />
                  AECS Layout, Bangalore - 560037<br />
                  Landmark: Asha Tiffins
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;