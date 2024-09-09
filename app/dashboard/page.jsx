// Dashboard.js
'use client'
import React, { useEffect, useState } from 'react';
import { db } from '../services/firebase';
import { collection, getDocs } from 'firebase/firestore';

const Dashboard = () => {
  const [registrations, setRegistrations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'registrations'));
        const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setRegistrations(data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr>
              <th className="border px-4 py-2">Company Name</th>
              <th className="border px-4 py-2">Email</th>
              <th className="border px-4 py-2">Website</th>
              <th className="border px-4 py-2">Address</th>
              <th className="border px-4 py-2">Size</th>
              <th className="border px-4 py-2">Pitch Title</th>
              <th className="border px-4 py-2">Pitch Description</th>
              <th className="border px-4 py-2">Market Opportunity</th>
              <th className="border px-4 py-2">Competitive Advantage</th>
              <th className="border px-4 py-2">Funding Needs</th>
              <th className="border px-4 py-2">Contact Name</th>
              <th className="border px-4 py-2">Phone</th>
              <th className="border px-4 py-2">LinkedIn</th>
            </tr>
          </thead>
          <tbody>
            {registrations.map((reg) => (
              <tr key={reg.id}>
                <td className="border px-4 py-2">{reg.companyName}</td>
                <td className="border px-4 py-2">{reg.companyEmail}</td>
                <td className="border px-4 py-2">
                  <a href={reg.companyWebsite} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    {reg.companyWebsite}
                  </a>
                </td>
                <td className="border px-4 py-2">{reg.companyAddress}</td>
                <td className="border px-4 py-2">{reg.companySize}</td>
                <td className="border px-4 py-2">{reg.pitchTitle}</td>
                <td className="border px-4 py-2">{reg.pitchDescription}</td>
                <td className="border px-4 py-2">{reg.marketOpportunity}</td>
                <td className="border px-4 py-2">{reg.competitiveAdvantage}</td>
                <td className="border px-4 py-2">{reg.fundingNeeds}</td>
                <td className="border px-4 py-2">{reg.contactName}</td>
                <td className="border px-4 py-2">{reg.contactPhone}</td>
                <td className="border px-4 py-2">
                  <a href={reg.contactLinkedIn} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    LinkedIn
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
