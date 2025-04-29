import React from 'react';
import { motion } from 'framer-motion';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      phone: Yup.string().required('Required'),
      service: Yup.string().required('Required'),
      message: Yup.string().required('Required')
    }),
    onSubmit: (values) => {
      console.log(values);
      // Handle form submission
    },
  });

  const services = [
    'Ayurveda Consultation',
    'Panchakarma',
    'Yoga Classes',
    'Reiki Healing',
    'Crystal Healing',
    'Card Reading',
    'Past Life Regression',
    'Feng Shui'
  ];

  const locations = [
    {
      name: 'HSR Layout',
      address: '#1770, 1st Cross, HSR Layout Sector 1',
      city: 'Bangalore - 560102',
      landmark: 'Next to HSR RTO office',
      phone: '+91-9886332684, +91-7338631681',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.8884247930635!2d77.6473813!3d12.914689699999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1496bb038803%3A0x4c990b27b467b4d8!2sHSR%20Layout%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1650901234567!5m2!1sen!2sin'
    }
  ];

  return (
    <div className="min-h-screen bg-background py-16 ">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-black mb-8 text-center">Contact Us</h1>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-md p-8 relative">
              <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
              <form onSubmit={formik.handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                      id="name"
                      type="text"
                      {...formik.getFieldProps('name')}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                    />
                    {formik.touched.name && formik.errors.name && (
                      <div className="text-red-600 text-sm">{formik.errors.name}</div>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                      id="email"
                      type="email"
                      {...formik.getFieldProps('email')}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                    />
                    {formik.touched.email && formik.errors.email && (
                      <div className="text-red-600 text-sm">{formik.errors.email}</div>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                    <input
                      id="phone"
                      type="tel"
                      {...formik.getFieldProps('phone')}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                    />
                    {formik.touched.phone && formik.errors.phone && (
                      <div className="text-red-600 text-sm">{formik.errors.phone}</div>
                    )}
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700">Service</label>
                    <select
                      id="service"
                      {...formik.getFieldProps('service')}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                    {formik.touched.service && formik.errors.service && (
                      <div className="text-red-600 text-sm">{formik.errors.service}</div>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                    <textarea
                      id="message"
                      {...formik.getFieldProps('message')}
                      rows={4}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                    />
                    {formik.touched.message && formik.errors.message && (
                      <div className="text-red-600 text-sm">{formik.errors.message}</div>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full"
                  >
                    Send Message
                  </button>
                </div>

              </form>
              
            </div>

            {/* Contact Information */}
            <div>
              {locations.map((location) => (
                <div key={location.name} className="bg-white rounded-lg shadow-md p-8 mb-8">
                  <h2 className="text-2xl font-semibold mb-4">{location.name}</h2>
                  <div className="space-y-4">
                    <p className="text-gray-700">
                      {location.address}<br />
                      {location.city}<br />
                      {location.landmark}<br />
                      Phone: {location.phone}
                    </p>
                    <div className="aspect-w-16 aspect-h-9">
                      <iframe
                        src={location.mapUrl}
                        width="100%"
                        height="300"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title={`Map - ${location.name}`}
                        className="rounded-lg"
                      ></iframe>
                    </div>
                  </div>
                </div>
              ))}
<div className={`bg-white rounded-lg mt-3 shadow-md p-8 w-full`}>
                <h2 className="text-2xl font-semibold mb-6">Quick Connect</h2>
                <div className="space-y-4">
                  <a
                    href="https://wa.me/919886332684"
                    className="btn-primary w-full flex items-center justify-center gap-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Chat on WhatsApp</span>
                  </a>
                  <a
                    href="mailto:sanskrutiholistic@gmail.com"
                    className="btn-secondary w-full flex items-center justify-center gap-2"
                  >
                    <span>Send Email</span>
                  </a>
                </div>
              </div>
             
            </div>
          </div>
        </motion.div>
      </div>

      {/* WhatsApp Float Button */}
      {/* <a
        href="https://wa.me/919886332684"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="sr-only">Chat on WhatsApp</span>
        📱
      </a> */}
    </div>
  );
};

export default Contact;