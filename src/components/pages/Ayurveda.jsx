import React from 'react';
import { motion } from 'framer-motion';

const treatments = [
  {
    name: 'Ayurvedic Consultation',
    description: 'Personalized health assessment and treatment planning based on your unique constitution.',
    duration: '60 minutes',
    price: '₹1,500'
  },
  {
    name: 'Abhyanga',
    description: 'Traditional full-body massage with warm herbal oils to promote relaxation and healing.',
    duration: '90 minutes',
    price: '₹2,500'
  },
  {
    name: 'Shirodhara',
    description: 'Continuous flow of warm oil on the forehead to calm the mind and nervous system.',
    duration: '45 minutes',
    price: '₹3,000'
  }
];

const packages = [
  {
    name: 'Wellness Package',
    description: 'Includes consultation, abhyanga, and follow-up session',
    duration: '1 week',
    price: '₹5,000'
  },
  {
    name: 'Detox Package',
    description: 'Complete cleansing program with specialized treatments',
    duration: '7 days',
    price: '₹15,000'
  },
  {
    name: 'Rejuvenation Package',
    description: 'Comprehensive program for total mind-body renewal',
    duration: '14 days',
    price: '₹25,000'
  }
];

const Ayurveda = () => {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-primary mb-8">Ayurveda Treatments</h1>
          
          <div className="bg-white rounded-lg shadow-md p-8 mb-12">
            <p className="text-lg mb-6">
              Experience the ancient wisdom of Ayurveda with our comprehensive range of treatments and therapies. Our experienced practitioners provide personalized care based on your unique constitution and health needs.
            </p>

            <h2 className="text-2xl font-semibold mb-6">Individual Treatments</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {treatments.map((treatment) => (
                <div key={treatment.name} className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">{treatment.name}</h3>
                  <p className="text-gray-600 mb-4">{treatment.description}</p>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-500">Duration: {treatment.duration}</p>
                      <p className="font-medium">{treatment.price}</p>
                    </div>
                    <a
                      href={`https://wa.me/919886332684?text=Hi,%20I'm%20interested%20in%20${treatment.name}`}
                      className="btn-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-semibold mb-6">Treatment Packages</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {packages.map((pkg) => (
                <div key={pkg.name} className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">{pkg.name}</h3>
                  <p className="text-gray-600 mb-4">{pkg.description}</p>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-500">Duration: {pkg.duration}</p>
                      <p className="font-medium">{pkg.price}</p>
                    </div>
                    <a
                      href={`https://wa.me/919886332684?text=Hi,%20I'm%20interested%20in%20${pkg.name}`}
                      className="btn-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Enquire Now
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-4">Book a Consultation</h2>
            <p className="text-gray-700 mb-4">
              Start your Ayurvedic wellness journey with a personalized consultation with our experts.
            </p>
            <div className="flex gap-4">
              <a
                href="https://wa.me/919886332684?text=Hi,%20I'd%20like%20to%20book%20an%20Ayurvedic%20consultation"
                className="btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book on WhatsApp
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

      {/* WhatsApp Float Button */}
      <a
        href="https://wa.me/919886332684"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="sr-only">Chat on WhatsApp</span>
        📱
      </a>
    </div>
  );
};

export default Ayurveda;