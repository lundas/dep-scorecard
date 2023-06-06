import React from 'react';
import axios from 'axios';

export default function UploadForm() {
  function handleSubmit(files) {
    const form = new FormData();
    form.append('file', files[0]);
    return axios.post('/api', form, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  }
  return (
    <form encType="multipart/form-data">
      <input type="file" name="file" />
      <input
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          const { files } = document.querySelector('input[type=file]');
          handleSubmit(files)
            .then((res) => console.log('Submit res', res))
            .catch((err) => console.log('Submit Err', err));
        }}
      />
    </form>
  );
}
