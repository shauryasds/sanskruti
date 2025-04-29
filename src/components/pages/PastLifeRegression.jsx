import React from 'react';
import { motion } from 'framer-motion';

const benefits = [
  'Release of fears and phobias',
  'Healing physical symptoms linked to past life trauma',
  'Gain clarity on current life challenges',
  'Improve relationships by understanding karmic connections',
  'Understanding life purpose through past life insights',
  'Spiritual growth and deeper understanding',
  'Healing ancestral trauma',
  'Breaking free from karmic patterns',
  'Understanding talents from past lives',
  'Integration of lessons for a balanced life'
];

const PastLifeRegression = () => {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-primary mb-8">Past Life Regression (PLR)</h1>
          
          <div className="bg-white rounded-lg shadow-md p-8 mb-12">
            <p className="text-lg mb-6">
              Past life regression (PLR) is a therapeutic technique that takes you back to your previous lives through hypnosis to heal current life issues. It helps understand the lessons to be learned in the present lifetime and your life's purpose.
            </p>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Benefits of Past Life Regression</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <p className="text-gray-700">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Our PLR Sessions</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Two-Day Intensive Program</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-lg mb-2">Day 1:</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>Initial consultation and discussion</li>
                      <li>Deep relaxation techniques</li>
                      <li>Aura cleansing session</li>
                      <li>Age regression therapy</li>
                      <li>Emotional blockage removal</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-2">Day 2:</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>Past life regression session</li>
                      <li>Memory exploration and healing</li>
                      <li>Energy exchange with past life characters</li>
                      <li>Integration and closure</li>
                      <li>Life purpose clarity session</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">About Your Therapist</h2>
              <p className="text-gray-700 mb-4">
                Dr. Neelam Kewlani has conducted over two thousand PLR sessions, helping people overcome fears, phobias, relationship issues, and gain clarity in their lives. Her expertise ensures a safe and transformative regression experience.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-4">Book Your PLR Session</h2>
            <p className="text-gray-700 mb-4">
              Take the first step towards understanding your soul's journey and healing past life trauma.
            </p>
            <div className="flex gap-4">
              <a
                href="https://wa.me/919886332684?text=Hi,%20I'm%20interested%20in%20booking%20a%20Past%20Life%20Regression%20session"
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

export default PastLifeRegression;