import React, { useState } from 'react';
import axios from 'axios';

export default function UploadForm({ setDependencies, setRevealScorecard }) {
  const [fileDrag, setFileDrag] = useState(false);

  function submitFile(files) {
    const form = new FormData();
    form.append('file', files[0]);
    return axios.post('/api', form, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then((res) => setDependencies(res.data))
      .catch((err) => console.log('Submit Err', err));
  }

  function handleDrag(e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setFileDrag(true);
    } else if (e.type === 'dragleave') {
      setFileDrag(false);
    }
  }

  function handleDrop(e) {
    e.preventDefault();
    e.stopPropagation();
    setFileDrag(false);
    setRevealScorecard(true);
    if (e.dataTransfer.files.length === 1) {
      submitFile(e.dataTransfer.files);
    }
  }

  return (
    <form className="mx-auto relative border-green-500 border-2" encType="multipart/form-data" onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag}>
      <input className="invisible absolute" type="file" name="file" id="file-upload-input" accept=".json" />
      <label id="file-upload-label" htmlFor="file-upload-input" className="relative border-blue-500 border-2">
        <div className="border-black border-2">
          Drop or Click
          <input
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              const { files } = document.querySelector('input[type=file]');
              submitFile(files);
            }}
          />
        </div>
      </label>
      {fileDrag && <div id="drop-target" onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop} className="absolute bg-orange-500 opacity-90 h-full w-full" />}
    </form>
  );
}
