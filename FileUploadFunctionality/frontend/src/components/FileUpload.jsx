// frontend/src/components/FileUpload.jsx
import { useState } from 'react';
import axios from 'axios';

function FileUpload() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');

  const handleChange = (e) => setFile(e.target.files[0]);

  const handleUpload = async (e) => {
    e.preventDefault();

    if (!file) return setMessage('Please select a file.');

    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await axios.post('http://localhost:5000/api/upload', formData);
      setMessage(res.data.message + ` → ${res.data.filePath}`);
    } catch (err) {
      setMessage('Upload failed', err.message);
    }
  };

  return (
    <div>
      <h2>Upload a File</h2>
      <form onSubmit={handleUpload}>
        <input type="file" onChange={handleChange} />
        <button type="submit">Upload</button>
      </form>
      <p>{message}</p>
    </div>
  );
}

export default FileUpload;
