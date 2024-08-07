import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";

function payment() {
  return (
    <div className="  px-5 flex  flex-col items-center h-screen justify-center border-2  w-screen">
      <div className="mb-4  flex  flex-col items-center">
        <h2 className="text-2xl font-bold">Confirm order and pay</h2>
        <span className="text-gray-700 text-center">
          Please make the payment, after that you can enjoy all the features and
          benefits.
        </span>
      </div>

      <div className=" md:grid-cols-3 gap-4  w-fit ">
        <div className="md:col-span-2">
          <div className="bg-white p-4 rounded-lg shadow">
            <h6 className="text-sm font-semibold uppercase">Payment details</h6>

            <div className="mt-3">
              <input
                type="text"
                name="name"
                className="form-input mt-1 block w-full"
                placeholder="Name on card"
                required
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4 mt-3">
              <div>
                <div className="relative">
                  <input
                    type="text"
                    name="card-number"
                    className="form-input mt-1 block w-full pl-10"
                    placeholder="Card Number"
                    required
                  />
                  <FontAwesomeIcon
                    icon={faCreditCard}
                    className="absolute top-3 left-3 text-gray-500"
                  />
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-1">
                  <input
                    type="text"
                    name="expiry"
                    className="form-input mt-1 block w-full"
                    placeholder="Expiry"
                    required
                  />
                </div>
                <div className="flex-1">
                  <input
                    type="text"
                    name="cvv"
                    className="form-input mt-1 block w-full"
                    placeholder="CVV"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="mt-4 mb-4">
              <h6 className="text-sm font-semibold uppercase">
                Billing Address
              </h6>
              <div className="grid md:grid-cols-2 gap-4 mt-3">
                <div>
                  <input
                    type="text"
                    name="street-address"
                    className="form-input mt-1 block w-full"
                    placeholder="Street Address"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="city"
                    className="form-input mt-1 block w-full"
                    placeholder="City"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mt-2">
                <div>
                  <input
                    type="text"
                    name="state"
                    className="form-input mt-1 block w-full"
                    placeholder="State/Province"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="zip"
                    className="form-input mt-1 block w-full"
                    placeholder="Zip code"
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4   flex flex-row-reverse">
            <button className="bg-[#738065] text-white px-4 py-2 rounded-full">
              Pay $840
            </button>
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
}

export default payment;
