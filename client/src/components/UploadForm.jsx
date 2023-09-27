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
      .then(() => {
        document.querySelector('input[type=file]').value = '';
      })
      .catch((err) => console.log('Submit Err', err));
  }

  function handleDrag(e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setFileDrag(true);
      document.querySelector('form').classList.add('file-drag');
    } else if (e.type === 'dragleave') {
      setFileDrag(false);
      document.querySelector('form').classList.remove('file-drag');
    }
  }

  function handleDrop(e) {
    e.preventDefault();
    e.stopPropagation();
    setFileDrag(false);
    setRevealScorecard(true);
    document.querySelector('form').classList.remove('file-drag');
    if (e.dataTransfer.files.length === 1) {
      submitFile(e.dataTransfer.files);
    }
  }

  function handleChange(e) {
    e.preventDefault();
    setRevealScorecard(true);
    if (e.target.files.length === 1) {
      submitFile(e.target.files);
    }
  }

  return (
    <form className="mx-auto relative border-slate-500 bg-slate-300 hover:bg-slate-100 border-dashed border-4 rounded-lg w-1/2 h-1/4 shadow-lt-gray shadow-even opacity-70 hover:bg-lt-gray hover:text-dk-blue hover:opacity-50 transition ease-in-out delay-150 hover:scale-105 duration-300" encType="multipart/form-data" onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag}>
      <input className="hidden" type="file" name="file" id="file-upload-input" accept=".json" onChange={handleChange} />
      <label id="file-upload-label" htmlFor="file-upload-input" className="block w-full h-full">
        <div className="flex flex-col justify-evenly items-center w-full h-full cursor-pointer">
          <div className="font-diph text-3xl">Drag & Drop or Click</div>
        </div>
      </label>
      {fileDrag && <div id="drop-target" onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop} className="absolute h-full w-full top-0 left-0" />}
    </form>
  );
}
