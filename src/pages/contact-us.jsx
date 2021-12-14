import React from 'react'
import Layout from 'layouts/layout'

const ContactUs = () => (
    <Layout>
        <section className="body-font relative">
            <div className="container mx-auto">
                <div className="flex flex-col w-5/6 md:w-4/6 lg:w-3/6 mx-auto my-16">
                    <h1 className="text-center text-2xl md:text-3xl font-extrabold my-8">
                        Contact US
                    </h1>
                    <p className="leading-relaxed mb-5 text-gray-200 capitalize">For Request, A New Course or any other reason fill your details to contact us. </p>
                    <div className="relative mb-4">
                        <label htmlFor="name" className="leading-7 text-sm text-gray-300">Name</label>
                        <input type="text" id="name" name="name" className="w-full bg-gray-700 rounded border border-gray-800 text-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="email" className="leading-7 text-sm text-gray-300">Email</label>
                        <input type="email" id="email" name="email" className="w-full  focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out bg-gray-700 rounded border border-gray-800 text-gray-200" />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="message" className="leading-7 text-sm text-gray-300">Message</label>
                        <textarea id="message" name="message" className="w-full  focus:border-green-500 focus:ring-2 focus:ring-green-200 h-32 text-base outline-none bg-gray-700 rounded border border-gray-800 text-gray-200 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" />
                    </div>
                    <button className="text-white bg-green-400 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Button</button>
                </div>
            </div>
        </section>
    </Layout>
)

export default ContactUs;