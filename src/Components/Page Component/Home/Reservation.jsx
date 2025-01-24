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
    <div className=" relative h-screen w-full bg-red-200 flex items-center justify-center my-10">
      <img
        src="coffee.jpg"
        alt=""
        className="w-full h-screen object-cover"
      />
      <div>
        <Formik initialValues={{Name:"", Phone:"", Time:"", Email:"", Address:"", Person:""}}
         validationSchema={schemas}
        onSubmit={(value)=>{
            console.log(value);
            alert("submitted successfully!!");
        }}>
            <Form className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg w-3/4 md:w-1/2 lg:w-1/3'>
                <h1>Book a table</h1>
                <h1>Make Reservation</h1>
                <div>
                    {
                        personDetail.map((val,i)=>{
                            return(
                                <div key={i} className='flex flex-col w-full gap-2'>
                                <div className='font-semibold text-gray-800 '>
                                {val.name}
                                </div>
                                  <Field className=" p-2  w-full" name={val.name} type={val.type} placeholder={val.placeholder}
                                  ></Field>
                                  <ErrorMessage name={val.name} component={"div"} className='text-red-600'></ErrorMessage>
                              </div>
                            )
                        })
                    }
                </div>
                <button type="submit">Make a Reservation</button>
            </Form>

        </Formik>
      </div>

      
    </div>
  );
}

export default Reservation;
