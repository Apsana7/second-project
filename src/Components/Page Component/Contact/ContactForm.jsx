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
    <div className='h-screen bg-white flex items-center justify-center'>
      <div className='grid grid-cols-2 gap-8 w-3/4  rounded-lg '>
        {/* Left Section */}
        <div className='bg-gray-200 flex items-center justify-center shadow-xl'>
          <div className='flex flex-col gap-4 items-center justify-center mx-10'>
            <div className='text-4xl text-gray-500'>
              <BsFillExclamationCircleFill />
            </div>
            <div className='text-2xl text-gray-500 font-semibold'>
              Oops! Something went wrong.
            </div>
            <div className='text-center text-gray-500'>
              This page didn't load Google Maps correctly. See the JavaScript
              console for technical details.
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className='flex items-center justify-center p-8 shadow-xl'>
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
                <h1 className='text-3xl font-semibold mb-6 text-center'>
                  Contact Us
                </h1>

                {personDetail.map((field, index) => (
                  <div key={index} className='flex flex-col items-center'>
                  
                    <Field
                      as={field.type === 'textarea' ? 'textarea' : 'input'}
                      name={field.name}
                      type={field.type}
                      placeholder={field.placeholder}
                      className={`p-3 border border-gray-500 resize-none rounded-md ${
                        field.type === 'textarea' ? 'h-32' : ''
                      } w-3/4`}
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
                  className='bg-hora text-white p-3 rounded-md font-semibold hover:bg-white hover:text-black  transition-all w-3/4 self-center'
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
