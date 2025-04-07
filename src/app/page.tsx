// pages/index.js

"use client";
import Head from "next/head";
import { useState } from "react";
import {
  ChevronRight,
  Monitor,
  Server,
  Code,
  MapPin,
  ArrowRight,
  Menu,
  X,
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Head>
        <title>NDM Infotech - IT Solutions & Services</title>
        <meta
          name="description"
          content="NDM Infotech provides cutting-edge IT solutions, software development, and digital transformation services to businesses worldwide."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <span className="text-2xl font-bold text-blue-600">NDM</span>
                <span className="text-2xl font-semibold text-gray-800">
                  Infotech
                </span>
              </div>
              <div className="hidden md:ml-10 md:flex md:space-x-8">
                <a
                  href="#home"
                  className="text-blue-600 font-medium border-b-2 border-blue-600 px-1 pt-1"
                >
                  Home
                </a>
                <a
                  href="#services"
                  className="text-gray-500 hover:text-blue-600 font-medium px-1 pt-1 border-b-2 border-transparent hover:border-blue-300"
                >
                  Services
                </a>
                <a
                  href="#about"
                  className="text-gray-500 hover:text-blue-600 font-medium px-1 pt-1 border-b-2 border-transparent hover:border-blue-300"
                >
                  About Us
                </a>
                <a
                  href="#testimonials"
                  className="text-gray-500 hover:text-blue-600 font-medium px-1 pt-1 border-b-2 border-transparent hover:border-blue-300"
                >
                  Testimonials
                </a>
                <a
                  href="#contact"
                  className="text-gray-500 hover:text-blue-600 font-medium px-1 pt-1 border-b-2 border-transparent hover:border-blue-300"
                >
                  Contact
                </a>
              </div>
            </div>
            <div className="hidden md:flex items-center">
              <a
                href="#contact"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Get a Quote
                <ChevronRight className="ml-2 h-4 w-4" />
              </a>
            </div>
            <div className="flex items-center md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-500 hover:bg-gray-100 focus:outline-none"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <a
                href="#home"
                className="block pl-3 pr-4 py-2 border-l-4 border-blue-500 bg-blue-50 text-blue-700 font-medium"
              >
                Home
              </a>
              <a
                href="#services"
                className="block pl-3 pr-4 py-2 border-l-4 border-transparent hover:bg-gray-50 hover:border-blue-300 text-gray-600 hover:text-blue-700 font-medium"
              >
                Services
              </a>
              <a
                href="#about"
                className="block pl-3 pr-4 py-2 border-l-4 border-transparent hover:bg-gray-50 hover:border-blue-300 text-gray-600 hover:text-blue-700 font-medium"
              >
                About Us
              </a>
              <a
                href="#testimonials"
                className="block pl-3 pr-4 py-2 border-l-4 border-transparent hover:bg-gray-50 hover:border-blue-300 text-gray-600 hover:text-blue-700 font-medium"
              >
                Testimonials
              </a>
              <a
                href="#contact"
                className="block pl-3 pr-4 py-2 border-l-4 border-transparent hover:bg-gray-50 hover:border-blue-300 text-gray-600 hover:text-blue-700 font-medium"
              >
                Contact
              </a>
            </div>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex items-center px-4">
                <a
                  href="#contact"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                >
                  Get a Quote
                  <ChevronRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div id="home" className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <div className="pt-10 mx-auto max-w-7xl px-4 sm:pt-12 sm:px-6 md:pt-16 lg:pt-20 lg:px-8 xl:pt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block">Transform Your Business</span>
                  <span className="block text-blue-600">With NDM Infotech</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  We deliver innovative IT solutions tailored to your business
                  needs. From custom software development to digital
                  transformation, we help you stay ahead in the digital world.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a
                      href="#contact"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
                    >
                      Get Started
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a
                      href="#services"
                      className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-blue-700 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                    >
                      Our Services
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <svg
              className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <Image
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="/images/profile2.jpg"
            alt="NDM Infotech team working"
            width={300}
            height={300}
          />
        </div>
      </div>

      {/* Services Section */}
      <section id="services" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Services
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Comprehensive IT solutions to power your business growth
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-blue-500 rounded-md shadow-lg">
                        <Code
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                      Custom Software Development
                    </h3>
                    <p className="mt-5 text-base text-gray-500">
                      Tailored software solutions designed to meet your specific
                      business requirements and streamline your operations.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-blue-500 rounded-md shadow-lg">
                        <Monitor
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                      Web Application Development
                    </h3>
                    <p className="mt-5 text-base text-gray-500">
                      Dynamic, responsive web applications with intuitive user
                      interfaces and robust backend functionality.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-blue-500 rounded-md shadow-lg">
                        <Server
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                      IT Infrastructure Management
                    </h3>
                    <p className="mt-5 text-base text-gray-500">
                      End-to-end infrastructure solutions including cloud
                      services, network management, and security.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                About NDM Infotech
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-gray-500">
                NDM Infotech is a leading IT solutions provider with over a
                decade of experience delivering innovative technology solutions
                to businesses across various industries.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                      <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">
                      Expert Team
                    </h4>
                    <p className="mt-2 text-base text-gray-500">
                      Our team consists of skilled professionals with expertise
                      in various domains of information technology.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                      <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">
                      Client-Centric Approach
                    </h4>
                    <p className="mt-2 text-base text-gray-500">
                      We prioritize our ${`clients'`} needs and work closely with
                      them to deliver solutions that exceed expectations.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                      <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">
                      Innovative Solutions
                    </h4>
                    <p className="mt-2 text-base text-gray-500">
                      We stay at the forefront of technology to provide
                      cutting-edge solutions that drive business growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              What Our Clients Say
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Hear from businesses that have transformed with our solutions
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-gray-50 rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-4">
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">
                    Sarah Johnson
                  </h4>
                  <p className="text-gray-500">CEO, TechStart Inc.</p>
                </div>
              </div>
              <p className="text-gray-600">
                &quot;NDM Infotech transformed our business operations with their
                custom software solution. Their team understood our requirements
                perfectly and delivered beyond our expectations.&quot;
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-4">
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">
                    Michael Chen
                  </h4>
                  <p className="text-gray-500">CTO, GlobalServe Solutions</p>
                </div>
              </div>
              <p className="text-gray-600">
                &quot;Working with NDM Infotech has been a game-changer for our IT
                infrastructure. Their expertise and professionalism have helped
                us scale our operations efficiently.&quot;
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-4">
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">
                    Jessica Martinez
                  </h4>
                  <p className="text-gray-500">
                    Marketing Director, Innovate Retail
                  </p>
                </div>
              </div>
              <p className="text-gray-600">
                &quot;The web application developed by NDM Infotech has significantly
                improved our customer engagement and sales. Their ongoing
                support has been exceptional.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to transform your business?</span>
            <span className="block text-blue-100">
              Get in touch with us today.
            </span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
              >
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Contact Us
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Have questions or ready to start your project? Get in touch with
              our team.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <form
                action="#"
                method="POST"
                className="grid grid-cols-1 gap-y-6"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Full name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      autoComplete="name"
                      className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                      placeholder="John Doe"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      autoComplete="tel"
                      className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                      placeholder="+1 (555) 987-6543"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="message"
                      name="message"
                      className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                      placeholder="Tell us about your project or inquiry"
                    ></textarea>
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
            <div className="bg-white p-8 shadow-md rounded-lg">
              <h3 className="text-lg font-medium text-gray-900">
                Contact Information
              </h3>
              <p className="mt-2 text-base text-gray-500">
                Reach out to us directly or visit our office.
              </p>
              <div className="mt-6 space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-blue-500 mt-1" />
                  <span className="ml-3 text-gray-500">
                    312 W 2ND St,
                    <br />
                    Casper, WY,
                    <br />
                    United States
                  </span>
                </div>
              </div>
              <div className="mt-8">
                <h4 className="text-md font-medium text-gray-900">
                  Business Hours
                </h4>
                <div className="mt-2 text-sm text-gray-500">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday - Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div>
              <div className="flex items-center">
                <span className="text-2xl font-bold text-blue-400">NDM</span>
                <span className="text-2xl font-semibold text-white">
                  Infotech
                </span>
              </div>
              <p className="mt-2 text-base text-gray-300">
                Your trusted partner for innovative IT solutions and digital
                transformation.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Quick Links
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a
                    href="#home"
                    className="text-base text-gray-300 hover:text-white"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-base text-gray-300 hover:text-white"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-base text-gray-300 hover:text-white"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-base text-gray-300 hover:text-white"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
