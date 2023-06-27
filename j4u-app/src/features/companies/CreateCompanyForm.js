import React, { useState } from 'react';
import axios from 'axios';
import { base_url } from '../config/baseUrl';

function CompanyForm() {

    const POSTS_URL = `${base_url}/company/save`;


  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [jobOpening, setJobOpening] = useState('');
  const [file, setFile] = useState(null);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('file', file);
    formData.append('name', name);
    formData.append('description', description);
    formData.append('address', address);
    formData.append('phone', phone);
    formData.append('email', email);
    formData.append('jobOpening', jobOpening);

    try {
      await axios.post(POSTS_URL, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      // Reset form fields after successful submission
      setName('');
      setDescription('');
      setAddress('');
      setPhone('');
      setEmail('');
      setJobOpening('');
      setFile(null);
      alert('Company created successfully!');
    } catch (error) {
      console.error(error);
      alert('Error creating company. Please try again.');
    }
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div>
      <h2>Create Company</h2>
      <form onSubmit={handleFormSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Description:
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
        <br />
        <label>
          Address:
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
        </label>
        <br />
        <label>
          Phone:
          <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Job Opening:
          <input type="number" value={jobOpening} onChange={(e) => setJobOpening(e.target.value)} />
        </label>
        <br />
        <label>
          Logo:
          <input type="file" onChange={handleFileChange} />
        </label>
        <br />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default CompanyForm;
