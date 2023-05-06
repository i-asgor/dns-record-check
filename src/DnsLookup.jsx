/** @format */

import React, { useState } from "react";

const DnsLookup = () => {
  const [hostname, setHostname] = useState("");
  const [recordType, setRecordType] = useState("MX");
  const [dnsRecords, setDnsRecords] = useState([]);
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(
      `http://localhost/server/dnslookup.php?hostname=${hostname}&recordType=${recordType}`
    )
      .then((response) => response.json())
      .then((data) => setDnsRecords(data))
      .catch((error) => {
        console.error(error);
        setDnsRecords([]);
        setError("An error occurred while retrieving DNS records.");
      });
  };

  return (
    <div>
      <div className="isolate bg-white px-6 pt-24 pb-8 sm:pt-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center"></div>
        <form onSubmit={handleSubmit} className="mx-auto max-w-xl">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="domain-name"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Domain Name
              </label>
              <div className="mt-2.5">
                <input
                  id="hostname"
                  value={hostname}
                  onChange={(event) => setHostname(event.target.value)}
                  type="text" required placeholder="Enter Your Domain Name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="dns-record"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                DNS Record
              </label>
              <div className="relative mt-2.5">
                <div className="relative inset-y-0 left-0 flex items-center">
                  <label htmlFor="country" className="sr-only">
                    Country
                  </label>
                  <select
                    id="recordType"
                    value={recordType}
                    onChange={(event) => setRecordType(event.target.value)}
                    className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  >
                    <option value="MX">MX</option>
                    <option value="A">A</option>
                    <option value="AAAA">AAAA</option>
                    <option value="CNAME">CNAME</option>
                    <option value="NS">NS</option>
                    <option value="SOA">SOA</option>
                    <option value="TXT">TXT</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-2">
            <button
              type="submit"
              className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Lookup DNS Records
            </button>
          </div>
        </form>
      </div>

      {error && <div>{error}</div>}
      {/* <ul>
        {dnsRecords.map((record, index) => (
          <li key={index}>{JSON.stringify(record)}</li>
        ))}
      </ul> */}


      <div className="bg-white py-4">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">        
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {dnsRecords.map((record, index) => (
            <article key={index} className="flex max-w-xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs">  
                {JSON.stringify(record)}
                {console.log(Object.values(record))}
                 {/* {console.log(record1.map(({ key, value }) => ({ [key]: value })))} */}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default DnsLookup;
