import React, { useEffect, useState } from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import CopyButton from './components/CopyButton';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [username, setUsername] = useState('');
  const [websiteURL, setWebsiteURL] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [savedData, setSavedData] = useState([]);

  // Load data from localStorage on initial load
  useEffect(() => {
    const data = localStorage.getItem("userData"); // Use the correct key
    if (data) {
      const savedData = JSON.parse(data);
      setSavedData(savedData); // Use setSavedData instead of setTodos
    }
  }, []);

  const handleDelete = (password) => {
    const updatedData = savedData.filter((item) => item.password !== password);
    setSavedData(updatedData);
    localStorage.setItem('userData', JSON.stringify(updatedData)); // Update the correct key
    toast.success('Password deleted successfully!');
  };

  const handleEdit = (password, username, websiteURL) => {
    setPassword(password);
    setUsername(username);
    setWebsiteURL(websiteURL);
    const updatedData = savedData.filter((item) => item.password !== password);
    setSavedData(updatedData);
    localStorage.setItem('userData', JSON.stringify(updatedData)); // Update the correct key
  };

  const handleSave = () => {
    if (username.length > 3 && websiteURL.length > 3 && password.length > 3) {
      const newData = { username, websiteURL, password };
      const updatedData = [...savedData, newData];
      setSavedData(updatedData);
      setUsername('');
      setWebsiteURL('');
      setPassword('');
      toast.success('Password saved successfully!');
      localStorage.setItem('userData', JSON.stringify(updatedData)); // Save updated data
    } else {
      toast.error('Please fill in all fields correctly.');
    }
  };


  return (
    <>
      <div className="min-h-screen flex flex-col justify-between bg-gray-100">
        <Navbar />
        <main className="flex-grow bg-gray-300 p-5 items-center justify-center">
          <h1 className="text-2xl md:text-4xl font-bold text-center text-gray-800">Manage Your Passwords at One Place</h1>
          <div className="flex flex-col items-center mt-6 w-full space-y-3">
            <div className="md:flex w-full md:space-x-2">
              <div className='flex w-full space-x-1'>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Username"
                />
                <input
                  type="text"
                  value={websiteURL}
                  onChange={(e) => setWebsiteURL(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Website URL"
                />
              </div>
              <div className="flex gap-2 md:w-1/2 md:mt-0 mt-2">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="bg-blue-500 rounded-md px-2 h-10"
                >
                  {showPassword ? <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z" /></svg> : <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="m644-428-58-58q9-47-27-88t-93-32l-58-58q17-8 34.5-12t37.5-4q75 0 127.5 52.5T660-500q0 20-4 37.5T644-428Zm128 126-58-56q38-29 67.5-63.5T832-500q-50-101-143.5-160.5T480-720q-29 0-57 4t-55 12l-62-62q41-17 84-25.5t90-8.5q151 0 269 83.5T920-500q-23 59-60.5 109.5T772-302Zm20 246L624-222q-35 11-70.5 16.5T480-200q-151 0-269-83.5T40-500q21-53 53-98.5t73-81.5L56-792l56-56 736 736-56 56ZM222-624q-29 26-53 57t-41 67q50 101 143.5 160.5T480-280q20 0 39-2.5t39-5.5l-36-38q-11 3-21 4.5t-21 1.5q-75 0-127.5-52.5T300-500q0-11 1.5-21t4.5-21l-84-82Zm319 93Zm-151 75Z" /></svg>}
                </button>
              </div>
            </div>
            <div className="flex justify-center">
              <button
                onClick={handleSave}
                className="bg-blue-500 flex items-center gap-1 text-white px-5 py-1 rounded-full hover:bg-blue-600 transition duration-300"
              ><lord-icon
                src="https://cdn.lordicon.com/jgnvfzqg.json"
                trigger="hover"
                colors="primary:#ffffff">
                </lord-icon>
                Save
              </button>
            </div>
          </div>
          <div className="your-passwords mt-8">
            <h2 className="text-xl font-bold mb-4">Your Passwords</h2>
            {savedData.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="min-w-full md:table-auto md:text-lg text-sm bg-white rounded-lg shadow-md">
                  <thead className="bg-blue-500 text-white">
                    <tr>
                      <th className="text-center py-2">Username</th>
                      <th className="text-center py-2">Website</th>
                      <th className="text-center py-2">Password</th>
                      <th className="text-center py-2">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {savedData.map((item) => (
                      <tr key={item.password} className="bg-gray-100 hover:bg-gray-200 transition duration-200">
                        <td className="text-center py-2 border-b">{item.username} <CopyButton textToCopy={item.username} /></td>
                        <td className="text-center cursor-pointer py-2 border-b">
                          <a href={item.websiteURL} target="_blank" rel="noopener noreferrer">
                            {item.websiteURL}
                          </a>
                          <CopyButton textToCopy={item.websiteURL} />
                        </td>

                        <td className="text-center py-2 border-b">{item.password} <CopyButton textToCopy={item.password} /></td>
                        <td className="text-center py-2 border-b">
                          <button
                            className="text-blue-500 hover:text-blue-700"
                            title="Edit"
                            onClick={() => handleEdit(item.password, item.username, item.websiteURL)}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#2854C5"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z" /></svg>
                          </button>
                          <button
                            className="text-red-500 hover:text-red-700"
                            title="Delete"
                            onClick={() => handleDelete(item.password)} // Pass a function reference
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" height="21px" viewBox="0 -960 960 960" width="21px" fill="#EA3323"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" /></svg>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="text-gray-700">No Passwords to display</div>
            )}
          </div>
        </main>
        <Footer />
        <ToastContainer />
      </div>
    </>
  );
};

export default App;
