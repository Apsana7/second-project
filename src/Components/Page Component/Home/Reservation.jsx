import React from 'react';
import { Formik,Form,Field,ErrorMessage } from 'formik';
import * as yup from "yup"

function Reservation() {
    const personDetail = [
        {
            name:"Name", type:"text", placeholder:"Your Name"
        },
        {
            name:"Phone", type:"number", placeholder:"Phone"
        },
        {
            name:"Time", type:"text", placeholder:"Time"
        },
        {
            name:"Email", type:"email", placeholder:"Your Email"
        },
        {
            name:"Address", type:"text", placeholder:"Your Address"
        },
        {
            name:"Person", type:"text", placeholder:"Person"
        }
    ]
    const schemas = yup.object().shape({
        Name: yup.string().required("Name is required"),
    Phone: yup
      .string()
      .required("Phone number is required")
      .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits"),
    Time: yup.string().required("Time is required"),
    Email: yup.string().email("Please provide a valid email").required("Email is required"),
    Address: yup.string().required("Address is required"),
    Person: yup.string().required("Number of persons is required"),

    })
  return (
    <div className=" relative h-screen w-full flex items-center justify-center my-10">
      <img
        src="coffee.jpg"
        alt=""
        className="w-full h-screen object-cover fixed -z-50 top-0 bottom-0"
      />
      <div>
        <Formik initialValues={{Name:"", Phone:"", Time:"", Email:"", Address:"", Person:""}}
         validationSchema={schemas}
        onSubmit={(value)=>{
            console.log(value);
            alert("submitted successfully!!");
        }}>
            <Form className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  p-6 rounded-lg  w-3/4 md:w-1/2 lg:w-1/3'>
            <div className='  h-lvh w-full flex items-center justify-center'>
                        <div className='h-fit bg-gray-300  w-full
                        flex items-center justify-center flex-col gap-6 py-8 shadow-lg rounded-lg '>

                            <h2 className='font-semibold text-4xl text-orange-600'>Book a table</h2>
                            <h2 className='text-3xl font-bold'>Make Reservation</h2>

                            <div className='grid grid-cols-2 w-full p-4    gap-4'>
                                {
                                    personDetail.map((val, i) => {
                                        return (
                                            <div key={i} className='flex flex-col w-full gap-2'>
                                                <div className='font-semibold text-gray-800 '>
                                                    {val.name}
                                                </div>
                                                <Field className=" p-2 w-full" name={val.name} type={val.type} placeholder={val.placeholder}
                                                ></Field>
                                                <ErrorMessage name={val.name} component={"div"} className='text-red-600'></ErrorMessage>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className='flex flex-row gap-2 justify-between'>
                                <button  className="text-2xl bg-orange-700 text-white w-fit h-fit p-3 rounded-lg shadow-lg transition duration-200" type="submit">
                                       Make a Reservation               
                                </button>
                                
                            </div>

                        </div>
                    </div>
                
            </Form>

        </Formik>
      </div>

      
    </div>
  );
}

export default Reservation;
