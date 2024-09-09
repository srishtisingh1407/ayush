// RegistrationForm.js
import React, { useState } from 'react';
import { db } from '../services/firebase';
import { collection, addDoc } from 'firebase/firestore';

const RegistrationForm = () => {
  const [companyName, setCompanyName] = useState('');
  const [companyInfo, setCompanyInfo] = useState('');
  const [pitchIdeas, setPitchIdeas] = useState('');
  const [implementation, setImplementation] = useState('');
  const [contactInfo, setContactInfo] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, 'registrations'), {
        companyName,
        companyInfo,
        pitchIdeas,
        implementation,
        contactInfo,
      });
      alert('Registration submitted successfully!');
      setCompanyName('');
      setCompanyInfo('');
      setPitchIdeas('');
      setImplementation('');
      setContactInfo('');
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
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1" htmlFor="companyInfo">Company Info</label>
        <textarea
          id="companyInfo"
          value={companyInfo}
          onChange={(e) => setCompanyInfo(e.target.value)}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1" htmlFor="pitchIdeas">Pitch Ideas</label>
        <textarea
          id="pitchIdeas"
          value={pitchIdeas}
          onChange={(e) => setPitchIdeas(e.target.value)}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1" htmlFor="implementation">Implementation</label>
        <textarea
          id="implementation"
          value={implementation}
          onChange={(e) => setImplementation(e.target.value)}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1" htmlFor="contactInfo">Contact Info</label>
        <input
          type="text"
          id="contactInfo"
          value={contactInfo}
          onChange={(e) => setContactInfo(e.target.value)}
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
