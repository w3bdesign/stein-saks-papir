import React from 'react';

import Modal from 'react-bootstrap/Modal';

function ShowWinner(Winner) {
  // const handleClose = () => setShow(false);
  const show = true;

  return (
    <Modal show={show}>
      <Modal.Header>
        <Modal.Title>{Winner}</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, youre reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        Test
      </Modal.Footer>
    </Modal>
  );
}

export default ShowWinner;
