import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from "yup"

function Reservation() {
    const personDetail = [
        {
            name: "Name", type: "text", placeholder: "Your Name"
        },
        {
            name: "Phone", type: "number", placeholder: "Phone"
        },
        {
            name: "Time", type: "text", placeholder: "Time"
        },
        {
            name: "Email", type: "email", placeholder: "Your Email"
        },
        {
            name: "Address", type: "text", placeholder: "Your Address"
        },
        {
            name: "Person", type: "text", placeholder: "Person"
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
        <div className=" relative h-lvh w-full flex items-center justify-center my-10">
            <img
                src="coffee.jpg"
                alt=""
                className="w-full h-screen object-cover fixed -z-50 top-0 bottom-0"
            />
            <div>
                <Formik initialValues={{ Name: "", Phone: "", Time: "", Email: "", Address: "", Person: "" }}
                    validationSchema={schemas}
                    onSubmit={(value) => {
                        console.log(value);
                        alert("submitted successfully!!");
                    }}>
                    <Form className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2   rounded-lg w-10/12 lg:w-6/12'>
                        <div className='   h-lvh w-full flex items-center justify-center '>
                            <div className='h-fit py-6 lg:px-4 bg-gray-200 w-full  lg:w-fit 
                              flex items-center justify-center flex-col gap-4 shadow-lg rounded-lg '>

                                <div className='flex items-center -mt-14  justify-center'>
                                    <h2 className=" relative lg:text-7xl text-5xl capitalize font-cursive pt-4 text-hora">
                                        Book a table
                                    </h2>
                                    <h2 className="absolute z-10 mt-14 font-bold text-2xl text-gray-800">
                                        Make Reservation
                                    </h2>
                                </div>
                                <div className='lg:grid lg:grid-cols-2 w-full lg:p-4  p-4  lg:w-full mt-6 items-center justify-center   gap-6'>
                                    {
                                        personDetail.map((val, i) => {
                                            return (
                                                <div key={i} className='flex flex-col w-full lg:w-full gap-2'>
                                                    <div className='font-semibold text-gray-800  '>
                                                        {val.name}
                                                    </div>
                                                    <Field className=" p-2 rounded-md placeholder:text-sm  w-full " name={val.name} type={val.type} placeholder={val.placeholder}
                                                    />
                                                    <ErrorMessage name={val.name} component={"div"} className='text-red-600'></ErrorMessage>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <div className='flex flex-row gap-2  justify-between'>
                                    <button className="text-base hover:bg-white hover:text-orange-700 transition-all duration-700 delay-75 ease-in-out  bg-orange-700 border  border-orange-700 text-white w-fit h-fit p-3 px-14 
                                     rounded-lg shadow-lg" type="submit">
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
