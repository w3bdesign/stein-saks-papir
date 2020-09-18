import React from 'react';

import PropTypes from 'prop-types';

import Modal from 'react-bootstrap/Modal';

function ShowWinner({ show, setShow, winner }) {
  const handleClose = () => { setShow(false); };

  return (
    <Modal show={show} onClick={handleClose} onHide={handleClose} centered>
      <Modal.Header closeButton />
      <Modal.Title>
        {' '}
      </Modal.Title>
      <Modal.Body>
        <h3 className="text-center">
          Vinner:
          {' '}
          {winner && winner.toString()}
        </h3>
      </Modal.Body>

    </Modal>
  );
}

ShowWinner.defaultProps = {
  show: PropTypes.bool,
  setShow: PropTypes.func,
  winner: PropTypes.string,
};

ShowWinner.propTypes = {
  show: PropTypes.bool,
  setShow: PropTypes.func,
  winner: PropTypes.string,
};

export default ShowWinner;
