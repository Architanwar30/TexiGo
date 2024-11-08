"use client";

import React, { useEffect, useState } from 'react';

interface Address {
  full_address: string;
}

interface AddressListResponse {
  suggestions: Address[];
}

function AutocompleteAddress() {
  const [source, setSource] = useState<string>(''); // User's input value for "Where From?"
  const [destination, setDestination] = useState<string>(''); // User's input value for "Where To?"
  const [addressListSource, setAddressListSource] = useState<AddressListResponse | null>(null); // Suggestions for "Where From?"
  const [addressListDestination, setAddressListDestination] = useState<AddressListResponse | null>(null); // Suggestions for "Where To?"
  const [selectedAddressSource, setSelectedAddressSource] = useState<string>(''); // Track selected "Where From?" address
  const [selectedAddressDestination, setSelectedAddressDestination] = useState<string>(''); // Track selected "Where To?" address

  // Trigger the API call when source or destination (user input) changes
  useEffect(() => {
    if (source.trim() === '') {
      setAddressListSource(null);  // Clear suggestions if "Where From?" is empty
      return;
    }
    const delayDebounceFn = setTimeout(() => {
      getAddressList('source');
    }, 1000); // Debounce for 1 second

    return () => clearTimeout(delayDebounceFn); // Cleanup timeout on change
  }, [source]);

  useEffect(() => {
    if (destination.trim() === '') {
      setAddressListDestination(null);  // Clear suggestions if "Where To?" is empty
      return;
    }
    const delayDebounceFn = setTimeout(() => {
      getAddressList('destination');
    }, 1000); // Debounce for 1 second

    return () => clearTimeout(delayDebounceFn); // Cleanup timeout on change
  }, [destination]);

  // Fetch address suggestions based on the field (source or destination)
  const getAddressList = async (field: 'source' | 'destination') => {
    const query = field === 'source' ? source : destination;
    try {
      const res = await fetch(`/api/search-address?q=${query}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        throw new Error('Failed to fetch address suggestions');
      }

      const result = await res.json();

      if (result?.serachResult?.suggestions && Array.isArray(result.serachResult.suggestions)) {
        if (field === 'source') {
          setAddressListSource({ suggestions: result.serachResult.suggestions });
        } else {
          setAddressListDestination({ suggestions: result.serachResult.suggestions });
        }
      } else {
        console.error('Unexpected response structure:', result);
        if (field === 'source') {
          setAddressListSource(null);
        } else {
          setAddressListDestination(null);
        }
      }
    } catch (error) {
      console.error('Error fetching address list:', error);
      if (field === 'source') {
        setAddressListSource(null);
      } else {
        setAddressListDestination(null);
      }
    }
  };

  // Handle address selection for either field (source or destination)
  const handleAddressSelect = (address: string, field: 'source' | 'destination') => {
    if (field === 'source') {
      setSource(address);
      setSelectedAddressSource(address);  // Set the selected address
      setAddressListSource(null); // Hide dropdown
    } else {
      setDestination(address);
      setSelectedAddressDestination(address); // Set the selected address
      setAddressListDestination(null); // Hide dropdown
    }
  };

  return (
    <div className="mt-5 relative">
      {/* Where From? */}
      <div>
        <label>Where From?</label>
        <input
          type="text"
          className="bg-black text-white p-1 border-[1px] w-full rounded-md outline-none focus:bg-gray-500"
          value={source}
          onChange={(e) => setSource(e.target.value)}
        />

        {/* Suggestion Dropdown for "Where From?" */}
        {addressListSource?.suggestions && addressListSource.suggestions.length > 0 && !selectedAddressSource && (
          <div className="absolute mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10">
            <ul className="max-h-60 overflow-y-auto">
              {addressListSource.suggestions.map((item, index) => (
                <li
                  key={index}
                  onClick={() => handleAddressSelect(item.full_address, 'source')}
                  className="cursor-pointer p-2 hover:bg-gray-200 text-black"
                >
                  {item.full_address}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Where To? */}
      <div className="mt-3">
        <label>Where To?</label>
        <input
          type="text"
          className="bg-black text-white p-1 border-[1px] w-full rounded-md outline-none focus:bg-gray-500"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />

        {/* Suggestion Dropdown for "Where To?" */}
        {addressListDestination?.suggestions && addressListDestination.suggestions.length > 0 && !selectedAddressDestination && (
          <div className="absolute mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10">
            <ul className="max-h-60 overflow-y-auto">
              {addressListDestination.suggestions.map((item, index) => (
                <li
                  key={index}
                  onClick={() => handleAddressSelect(item.full_address, 'destination')}
                  className="cursor-pointer p-2 hover:bg-gray-200 text-black"
                >
                  {item.full_address}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default AutocompleteAddress;
