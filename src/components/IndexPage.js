// components/IndexPage.js

import React, { useState } from 'react';
import Modal from './Modal';

const IndexPage = ({ onTrackPeriodClick }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleTrackPeriodClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
 
  const handleModalSubmit = (userName, userDob) => {
    // Perform any validation or additional logic here before passing the data
    onTrackPeriodClick(userName, userDob);
    setIsModalOpen(false);
  };

  return (
    <div>
      <h1>Index Page</h1>
      <button onClick={handleTrackPeriodClick}>Track Period</button>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleModalSubmit}
      />
    </div>
  );
};

export default IndexPage;
