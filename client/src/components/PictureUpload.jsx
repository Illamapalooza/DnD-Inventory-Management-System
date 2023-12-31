import React, { useState } from 'react';

const PictureUpload = () => {
 const [imagePreview, setImagePreview] = useState(null);

 const handleImageChange = (e) => {
  const file = e.target.files[0];
  if (file && file.type.substr(0, 5) === 'image') {
   setImagePreview(URL.createObjectURL(file));
  } else {
   setImagePreview(null);
  }
 };

 return (
  <div className="flex flex-col items-center justify-center bg-gray-800 p-8">
   {imagePreview ? (
    <img
     src={imagePreview}
     alt="Preview"
     className="mb-4 max-w-xs h-auto rounded"
    />
   ) : (
    <div className="mb-4 w-64 h-64 flex items-center justify-center bg-gray-700 rounded">
     <span className="text-gray-300">No image selected</span>
    </div>
   )}
   <input
    type="file"
    accept="image/*"
    className="file:mr-4 file:py-2 file:px-4
                   file:rounded-lg file:border-0
                   file:text-sm file:font-semibold
                   file:bg-kelly file:text-kelly
                   hover:file:bg-kelly-400
                   "
    onChange={handleImageChange}
   />
  </div>
 );
};

export default PictureUpload;
