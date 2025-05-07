import React from "react";
import Lightbulb from "../assets/lightbulb.jpg";
import stopwatch from "../assets/stopwatch.jpg";
import lock from "../assets/lock.jpg";

const features = [
  {
    title: "SMART",
    image: Lightbulb,
    description:
      "PayBuddy Intelligent Services manages all aspects of group payments, including technical, economic, social, and psychological factors.",
  },
  {
    title: "FAST",
    image: stopwatch,
    description:
      "With PayBuddy, the process of managing expenses and making payments is lightning quick.",
  },
  {
    title: "SECURE",
    image: lock,
    description:
      "PayBuddy ensures that all your personal data and transactions are encrypted, and secured so what's yours remains only yours.",
  },
];

const About = () => {
  return (
    <div className="bg-white text-gray-800">
      <style>
        {`
          @keyframes fade-in-down {
            0% { opacity: 0; transform: translateY(-20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          @keyframes fade-in-up {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          @keyframes slide-up {
            0% { opacity: 0; transform: translateY(40px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .fade-in-down {
            animation: fade-in-down 0.8s ease-out forwards;
          }
          .fade-in-up {
            animation: fade-in-up 0.8s ease-out forwards;
          }
          .slide-up {
            animation: slide-up 0.6s ease-out forwards;
            opacity: 0;
          }
          .delay-0 { animation-delay: 0ms; }
          .delay-1 { animation-delay: 200ms; }
          .delay-2 { animation-delay: 400ms; }

          @keyframes zoom-fade-in {
            0% {
              opacity: 0;
              transform: scale(0.8) translateY(-30px);
              color: #999;
            }
            100% {
              opacity: 1;
              transform: scale(1) translateY(0);
              color: #1f2937;
            }
          }

          .animated-heading {
            animation: zoom-fade-in 1.2s ease-out forwards;
          }
        `}
      </style>

      {/* Section 1: We are Splitkaro */}
      <section className="py-16 px-4 sm:px-8 lg:px-24 text-center">
        <h2 className="text-4xl sm:text-5xl font-semibold mb-12 animated-heading">
          We are PayBuddy
        </h2>

        <div className="flex flex-wrap justify-center gap-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-white shadow-lg rounded-3xl p-8 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300 transform slide-up delay-${index} w-64 h-96`}
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="w-20 h-20 mb-6 hover:scale-110 transition-transform duration-300"
              />
              <h3 className="text-lg font-bold mb-4">{feature.title}</h3>
              <p className="text-base leading-relaxed text-gray-800">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 2: Our Vision */}
      <section className="bg-white py-16 px-4 sm:px-8 lg:px-48 text-center">
        <h2 className="text-3.5xl sm:text-5xl font-semibold mb-10 text-gray-800 fade-in-down">
          Our Vision
        </h2>
        <div className="text-gray-600 space-y-8 text-lg leading-relaxed fade-in-up">
          <p>
            At PayBuddy, our vision is to create a world where social spending
            is fair and seamless, regardless of how people choose to pay.
          </p>
          <p>
            Our goal is to provide a platform that simplifies the process of
            paying with friends, removes the awkwardness of asking for money,
            and allows people to settle debts on the go.
          </p>
          <p>
            With PayBuddy, our hope is to empower people to spend time with
            their loved ones without worrying about the financial logistics.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
