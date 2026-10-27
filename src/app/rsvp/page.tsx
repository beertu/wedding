"use client";

import { useState } from "react";

export default function RSVPPage() {
  const [submitted, setSubmitted] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [plusOne, setPlusOne] = useState("");

  const confirmSubmission = () => {
    // TODO:
    // Send data to Google Apps Script here

    setShowConfirmation(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <main className="min-h-screen bg-[#FAF8F5] flex items-center justify-center p-6">
        <div className="bg-white rounded-3xl shadow-lg p-10 text-center max-w-lg">
          <div className="text-6xl mb-4">🤍</div>

          <h1 className="text-4xl font-bold text-[#2F2F2F] mb-3">
            Thank You!
          </h1>

          <p className="text-gray-600">
            Thank you for RSVPing!
            <br />
            We can't wait to celebrate with you.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#FAF8F5] py-12 px-4">
      <div className="max-w-3xl mx-auto">

        {/* Header */}

        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-[#2F2F2F]">
            Wedding RSVP
          </h1>

          <p className="mt-3 text-gray-600">
            We'd be honored to celebrate with you.
          </p>
        </div>

        {/* RSVP Deadline */}

        <div className="bg-[#EADFD8] rounded-2xl p-4 text-center mb-10">
          <p className="font-medium text-[#2F2F2F]">
            Please RSVP by February 1, 2027
          </p>
        </div>

        <form
          className="bg-white p-8 rounded-3xl shadow-sm border border-[#E8E3DD] space-y-10"
          onKeyDown={(e) => {
            if (
              e.key === "Enter" &&
              e.target instanceof HTMLInputElement
            ) {
              e.preventDefault();
            }
          }}
          onSubmit={(e) => {
            e.preventDefault();

            const form = e.currentTarget;

            if (!form.checkValidity()) {
              form.reportValidity();
              return;
            }

            setShowConfirmation(true);
          }}
        >
          {/* Guest Information */}

          <section>
            <h2 className="text-xl font-semibold mb-4">
              Guest Information
            </h2>

            <div className="space-y-4">
              <input
                type="text"
                required
                name="fullName"
                placeholder="Full Name *"
                className="w-full border rounded-xl p-3"
              />

              <input
                type="email"
                required
                name="email"
                placeholder="Email Address *"
                className="w-full border rounded-xl p-3"
              />

              <input
                type="tel"
                required
                name="phone"
                placeholder="Phone Number *"
                className="w-full border rounded-xl p-3"
              />
            </div>
          </section>

          {/* Attendance */}

          <section>
            <h2 className="text-xl font-semibold mb-4">
              Attendance
            </h2>

            <div className="space-y-3">
              <label className="flex items-center gap-3">
                <input
                  required
                  type="radio"
                  name="attendance"
                  value="accept"
                />
                Joyfully Accepts
              </label>

              <label className="flex items-center gap-3">
                <input
                  required
                  type="radio"
                  name="attendance"
                  value="decline"
                />
                Regretfully Declines
              </label>
            </div>
          </section>

          {/* Plus One */}

          <section>
            <h2 className="text-xl font-semibold mb-4">
              Plus One
            </h2>

            <select
              required
              value={plusOne}
              onChange={(e) => setPlusOne(e.target.value)}
              className="w-full border rounded-xl p-3"
            >
              <option value="">
                Select an option
              </option>

              <option value="yes">
                Yes, bringing a guest
              </option>

              <option value="no">
                No, attending alone
              </option>
            </select>

            {plusOne === "yes" && (
              <input
                required
                type="text"
                name="guestName"
                placeholder="Guest Full Name *"
                className="w-full border rounded-xl p-3 mt-4"
              />
            )}
          </section>

          {/* Dietary */}

          <section>
            <h2 className="text-xl font-semibold mb-4">
              Dietary Restrictions
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">

              <label>
                <input
                  type="checkbox"
                  name="dietary"
                  value="Vegetarian"
                  className="mr-2"
                />
                Vegetarian
              </label>

              <label>
                <input
                  type="checkbox"
                  name="dietary"
                  value="Vegan"
                  className="mr-2"
                />
                Vegan
              </label>

              <label>
                <input
                  type="checkbox"
                  name="dietary"
                  value="Gluten-Free"
                  className="mr-2"
                />
                Gluten-Free
              </label>

              <label>
                <input
                  type="checkbox"
                  name="dietary"
                  value="Nut Allergy"
                  className="mr-2"
                />
                Nut Allergy
              </label>

              <label>
                <input
                  type="checkbox"
                  name="dietary"
                  value="Halal"
                  className="mr-2"
                />
                Halal
              </label>

              <label>
                <input
                  type="checkbox"
                  name="dietary"
                  value="Kosher"
                  className="mr-2"
                />
                Kosher
              </label>

            </div>

            <input
              type="text"
              name="otherDietary"
              placeholder="Other Dietary Requirements"
              className="w-full border rounded-xl p-3 mt-4"
            />
          </section>

          {/* Accessibility */}

          <section>
            <h2 className="text-xl font-semibold mb-4">
              Accessibility Requirements
            </h2>

            <textarea
              rows={4}
              placeholder="Accessibility Requirements / Special Assistance Needed"
              className="w-full border rounded-xl p-3"
            />
          </section>

          {/* Travel */}

          <section>
            <h2 className="text-xl font-semibold mb-4">
              Travel & Logistics
            </h2>

            <div className="space-y-4">
              <div>
                <label className="block mb-2">
                  Need Guest Shuttle?
                </label>

                <select
                  className="w-full border rounded-xl p-3"
                >
                  <option value="">
                    Select
                  </option>

                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>

              <div>
                <label className="block mb-2">
                  Hotel Reservation Status
                </label>

                <select
                  className="w-full border rounded-xl p-3"
                >
                  <option value="">
                    Select
                  </option>

                  <option>Yes</option>
                  <option>No</option>
                  <option>Undecided</option>
                </select>
              </div>
            </div>
          </section>

          {/* Fun Section */}

          <section>
            <h2 className="text-xl font-semibold mb-4">
              A Personal Touch
            </h2>

            <input
              type="text"
              placeholder="Song Request"
              className="w-full border rounded-xl p-3 mb-4"
            />

            <textarea
              rows={5}
              placeholder="Leave a warm wish or message for the couple"
              className="w-full border rounded-xl p-3"
            />
          </section>

          {/* Submit */}

          <button
            type="submit"
            className="w-full bg-[#7A8C75] text-white py-4 rounded-xl hover:opacity-90 transition"
          >
            Submit RSVP
          </button>
        </form>
      </div>

      {/* Confirmation Modal */}

      {showConfirmation && (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-5">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-xl">

            <h2 className="text-2xl font-bold mb-3">
              Confirm RSVP
            </h2>

            <p className="text-gray-600 mb-6">
              Please review your details before submitting
              your RSVP.
            </p>

            <div className="flex gap-3 justify-end">

              <button
                type="button"
                onClick={() => setShowConfirmation(false)}
                className="px-5 py-3 border rounded-xl"
              >
                Go Back
              </button>

              <button
                type="button"
                onClick={confirmSubmission}
                className="px-5 py-3 bg-[#7A8C75] text-white rounded-xl"
              >
                Confirm RSVP
              </button>

            </div>
          </div>
        </div>
      )}
    </main>
  );
}