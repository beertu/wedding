"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What time should I arrive?",
    answer:
      "Please arrive at least 30 minutes before the ceremony begins to allow time for seating and registration.",
  },
  {
    question: "Where is the wedding venue?",
    answer:
      "The ceremony and reception locations can be found on the Wedding Details page, including maps and directions.",
  },
  {
    question: "Is there parking available?",
    answer:
      "Yes, complimentary parking will be available for all guests at the venue.",
  },
  {
    question: "Can I bring a guest or plus-one?",
    answer:
      "Only guests whose names are included on the invitation or RSVP are able to attend.",
  },
  {
    question: "Can I bring my children?",
    answer:
      "We kindly ask that only children specifically included in the invitation attend our celebration.",
  },
  {
    question: "What is the dress code?",
    answer:
      "Our wedding dress code is Garden Formal. Please wear elegant attire suitable for an outdoor celebration.",
  },
  {
    question: "What colors should guests avoid?",
    answer:
      "To allow the bride and wedding party to stand out, kindly avoid wearing white, ivory, or colors specifically reserved for the entourage.",
  },
  {
    question: "Will the ceremony be indoors or outdoors?",
    answer:
      "The ceremony will take place outdoors. We recommend comfortable footwear and preparing for warm weather.",
  },
  {
    question: "What if I have dietary restrictions?",
    answer:
      "You may indicate dietary requirements during RSVP so our catering team can make accommodations where possible.",
  },
  {
    question: "What if I have accessibility requirements?",
    answer:
      "Please provide any mobility or accessibility needs in the RSVP form and we'll do our best to assist you.",
  },
  {
    question: "Can I take photos during the ceremony?",
    answer:
      "We kindly request an unplugged ceremony. Please keep phones and cameras away until after the ceremony has concluded.",
  },
  {
    question: "Will transportation be provided?",
    answer:
      "Transportation details will be shared closer to the wedding date if guest shuttle services are available.",
  },
  {
    question: "Can I leave early?",
    answer:
      "Of course. We understand guests may have other commitments, though we'd love for you to celebrate with us throughout the evening.",
  },
  {
    question: "What should I do if I cannot attend?",
    answer:
      "Please let us know through the RSVP form as soon as possible so we can finalize our seating and catering arrangements.",
  },
  {
    question: "Do you have a gift registry?",
    answer:
      "Your presence is the greatest gift. If you'd still like to bless us with a gift, details will be provided closer to the wedding day.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <main className="min-h-screen bg-[#FAF8F5] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}

        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-[#2F2F2F] mb-4">
            Frequently Asked Questions
          </h1>

          <p className="text-gray-600 text-lg">
            We've gathered answers to some common questions.
            If you need further assistance, please feel free to
            reach out to us.
          </p>
        </div>

        {/* FAQ Cards */}

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-[#E8E3DD] shadow-sm overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpenIndex(
                    openIndex === index ? null : index
                  )
                }
                className="w-full p-5 flex justify-between items-center text-left"
              >
                <span className="font-medium text-lg text-[#2F2F2F]">
                  {faq.question}
                </span>

                <span className="text-2xl text-[#7A8C75]">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <div className="px-5 pb-5 text-gray-600 leading-relaxed border-t border-[#F0ECE7]">
                  <div className="pt-4">
                    {faq.answer}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Box */}

        <div className="mt-12 bg-[#EADFD8] rounded-3xl p-8 text-center">
          <h2 className="text-2xl font-semibold text-[#2F2F2F] mb-3">
            Still Have Questions?
          </h2>

          <p className="text-gray-700">
            Don't hesitate to reach out to us. We'd be happy
            to help make your experience as smooth as possible.
          </p>
        </div>
      </div>
    </main>
  );
}