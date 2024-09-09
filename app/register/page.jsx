// RegistrationForm.js
'use client'
import React, { useState } from 'react';
import { db } from '../services/firebase';
import { collection, addDoc } from 'firebase/firestore';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    companyEmail: '',
    companyWebsite: '',
    companyAddress: '',
    companySize: '',
    pitchTitle: '',
    pitchDescription: '',
    marketOpportunity: '',
    competitiveAdvantage: '',
    fundingNeeds: '',
    contactName: '',
    contactPhone: '',
    contactLinkedIn: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, 'registrations'), formData);
      alert('Registration submitted successfully!');
      setFormData({
        companyName: '',
        companyEmail: '',
        companyWebsite: '',
        companyAddress: '',
        companySize: '',
        pitchTitle: '',
        pitchDescription: '',
        marketOpportunity: '',
        competitiveAdvantage: '',
        fundingNeeds: '',
        contactName: '',
        contactPhone: '',
        contactLinkedIn: '',
      });
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 border rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Company Registration</h2>
      
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1" htmlFor="companyName">Company Name</label>
        <input
          type="text"
          id="companyName"
          value={formData.companyName}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1" htmlFor="companyEmail">Company Email</label>
        <input
          type="email"
          id="companyEmail"
          value={formData.companyEmail}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1" htmlFor="companyWebsite">Company Website</label>
        <input
          type="url"
          id="companyWebsite"
          value={formData.companyWebsite}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1" htmlFor="companyAddress">Company Address</label>
        <input
          type="text"
          id="companyAddress"
          value={formData.companyAddress}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1" htmlFor="companySize">Company Size</label>
        <input
          type="number"
          id="companySize"
          value={formData.companySize}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1" htmlFor="pitchTitle">Pitch Title</label>
        <input
          type="text"
          id="pitchTitle"
          value={formData.pitchTitle}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1" htmlFor="pitchDescription">Pitch Description</label>
        <textarea
          id="pitchDescription"
          value={formData.pitchDescription}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1" htmlFor="marketOpportunity">Market Opportunity</label>
        <textarea
          id="marketOpportunity"
          value={formData.marketOpportunity}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1" htmlFor="competitiveAdvantage">Competitive Advantage</label>
        <textarea
          id="competitiveAdvantage"
          value={formData.competitiveAdvantage}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1" htmlFor="fundingNeeds">Funding Needs</label>
        <textarea
          id="fundingNeeds"
          value={formData.fundingNeeds}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1" htmlFor="contactName">Contact Name</label>
        <input
          type="text"
          id="contactName"
          value={formData.contactName}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1" htmlFor="contactPhone">Contact Phone</label>
        <input
          type="tel"
          id="contactPhone"
          value={formData.contactPhone}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1" htmlFor="contactLinkedIn">Contact LinkedIn</label>
        <input
          type="url"
          id="contactLinkedIn"
          value={formData.contactLinkedIn}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>

      <button type="submit" className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600">
        Submit
      </button>
    </form>
  );
};

export default RegistrationForm;
