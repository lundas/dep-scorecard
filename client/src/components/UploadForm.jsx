import React from 'react';

export default function UploadForm() {
  function handleSubmit(files) {
    console.log('Files submitted', files);
  }
  return (
    <form>
      <input type="file" />
      <input
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          const { files } = document.querySelector('input[type=file]');
          handleSubmit(files);
        }}
      />
    </form>
  );
}
