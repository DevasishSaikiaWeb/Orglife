"use client";
import React, { useState } from "react";

function Form() {
  const [selectedService, setSelectedService] = useState<string[]>([]);
  const [selectedSubService, setSelectedSubService] = useState<string[]>([]);
  const services = [
    "Brand Foundation Design",
    "Content & Communication Design",
    "Animation Concept Development",
    "Digital Asset Strategy",
  ];

  const subServices = {
    "Brand Foundation Design": [
      "Brand Identity Design",
      "Brand Narrative Strategy",
      "Brand Guidelines and Manual",
      "Rebranding Strategy",
    ],
    "Content & Communication Design": [
      "Brand Content Architecture",
      "Brand Literature, Stories and Narratives",
      "Visual Content Strategy",
      "Digital and Social Media Content",
    ],
    "Animation Concept Development": [
      "Animated Mascot and Character Design",
      "Animated Visual Assets and Storytelling",
      "3D Product Modelling and Process Demonstrations",
      "AR/VR Assets for Immersive Experience",
    ],
    "Digital Asset Strategy": [
      "UI/UX Design and Development",
      "Web Tools and Mobile Applications",
      "Innovation and Tech Integration",
      "Customized Digital Services",
    ],
  };
  return (
    <div className="w-1/2 flex flex-col gap-6">
      <div className="grid grid-cols-2 gap-6">
        <input
          type="text"
          className="border-white/60 focus:border-white border-1 outline-none h-10 px-4"
          placeholder="Name"
        />
        <input
          type="text"
          className="border-white/60 focus:border-white border-1 outline-none h-10 px-4"
          placeholder="Organization name"
        />
      </div>
      <div className="grid grid-cols-2 gap-6">
        <input
          type="text"
          className="border-white/60 focus:border-white border-1 outline-none h-10 px-4"
          placeholder="Email"
        />
        <input
          type="text"
          className="border-white/60 focus:border-white border-1 outline-none h-10 px-4"
          placeholder="Phone"
        />
      </div>

      <div>
        <p className="font-small-body">Select services (required) *</p>
        <div className="flex flex-wrap gap-4 mt-2">
          {services.map((service, index) => (
            <div
              onClick={() =>
                setSelectedService((prev) => {
                  if (prev.includes(service)) {
                    return prev.filter((s) => s !== service);
                  } else {
                    return [...prev, service];
                  }
                })
              }
              key={index}
              className={`cursor-pointer flex items-center gap-2 px-4 py-2 border-white/60 border-1 w-fit rounded-full ${
                selectedService.includes(service) && "bg-[#fff8de] text-black"
              }`}
            >
              {service}
            </div>
          ))}
        </div>
      </div>

      {selectedService.length > 0 && (
        <div>
          <p className="font-small-body">Select subservices (optional) *</p>
          <div className="flex flex-wrap gap-4 mt-2">
            {selectedService.map((service, index) =>
              subServices[service].map((subService, subIndex) => (
                <div
                  onClick={() =>
                    setSelectedSubService((prev) => {
                      if (prev.includes(subService)) {
                        return prev.filter((s) => s !== subService);
                      } else {
                        return [...prev, subService];
                      }
                    })
                  }
                  key={index}
                  className={`cursor-pointer flex items-center gap-2 px-4 py-2 border-white/60 border-1 w-fit rounded-full ${
                    selectedSubService.includes(subService) &&
                    "bg-[#fff8de] text-black"
                  }`}
                >
                  {subService}
                </div>
              ))
            )}
          </div>
        </div>
      )}

      <input
        type="text"
        className="border-white/60 focus:border-white border-1 outline-none h-10 px-4"
        placeholder="Subject"
      />

      <textarea
        rows={4}
        className="border-white/60 focus:border-white border-1 outline-none pt-4 px-4"
        placeholder="Message"
      />

      <button className="bg-white text-black w-40 h-12 rounded-full mt-4">
        Submit
      </button>
    </div>
  );
}

export default Form;
