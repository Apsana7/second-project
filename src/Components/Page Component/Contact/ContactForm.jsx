import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { BsFillExclamationCircleFill } from 'react-icons/bs';

function ContactForm() {
  const personDetail = [
    { name: 'Name', type: 'text', placeholder: 'Your Name' },
    { name: 'Email', type: 'email', placeholder: 'Your Email' },
    { name: 'Subject', type: 'text', placeholder: 'Your Subject' },
    { name: 'Message', type: 'textarea', placeholder: 'Your Message' },
  ];

  const validationSchema = yup.object().shape({
    Name: yup.string().required('Name is required'),
    Email: yup
      .string()
      .email('Please provide a valid email')
      .required('Email is required'),
    Subject: yup.string().required('Subject is required'),
    Message: yup.string().required('Message is required'),
  });

  return (
    <div className='min-h-screen bg-white flex items-center justify-center p-4'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 w-full md:w-3/4 rounded-lg'>
      
        <div className='bg-gray-200 flex items-center justify-center shadow-xl '>
         
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28264.184208113948!2d83.4568192!3d27.685683199999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3996867f2a0f034f%3A0xa163a7718b56eed0!2sNew%20Horizon%20English%20Boarding%20Secondary%20School!5e0!3m2!1sen!2snp!4v1739179231206!5m2!1sen!2snp" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='w-full h-full'></iframe>
        
        </div>

        <div className='flex items-center justify-center p-6 shadow-xl w-full'>
          <Formik
            initialValues={{
              Name: '',
              Email: '',
              Subject: '',
              Message: '',
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              console.log(values);
              alert('Form submitted successfully!');
            }}
          >
            {({ isSubmitting }) => (
              <Form className='w-full flex flex-col gap-6'>
                <h1 className='text-3xl font-semibold text-center'>
                  Contact Us
                </h1>

                {personDetail.map((field, index) => (
                  <div key={index} className='flex flex-col items-center w-full'>
                    <Field
                      as={field.type === 'textarea' ? 'textarea' : 'input'}
                      name={field.name}
                      type={field.type}
                      placeholder={field.placeholder}
                      className={`p-3 border border-gray-500 resize-none rounded-md w-full max-w-md $ {
                        field.type === 'textarea' ? 'h-32' : ''
                      }`}
                    />
                    <ErrorMessage
                      name={field.name}
                      component='div'
                      className='text-red-600 text-sm mt-1'
                    />
                  </div>
                ))}

                <button
                  type='submit'
                  disabled={isSubmitting}
                  className='bg-hora text-white p-3 rounded-md font-semibold hover:bg-white hover:text-black transition-all w-full max-w-md self-center'
                >
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
