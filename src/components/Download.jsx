import React, { useState } from 'react';
import data from '../components/data.csv';

const DownloadButton = () => {
  const downloadCSV = async () => {
    try {
      // Fetch the CSV file using its path in the public folder
      const response = await fetch(data);

      // Get the blob (binary data) from the response
      const blob = await response.blob();

      // Create a link and initiate the download
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = 'downloaded_data.csv';
      document.body.appendChild(link);

      // Trigger the download and remove the link
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error fetching or downloading CSV file:', error);
    }
  };

  return (
    <div>
      <button onClick={downloadCSV}>Download CSV</button>
    </div>
  );
};

export default DownloadButton;

