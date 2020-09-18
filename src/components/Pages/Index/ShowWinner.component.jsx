import React from 'react';

import PropTypes from 'prop-types';

import Modal from 'react-bootstrap/Modal';

/**
 * Viser hvem som har vunnet hver runde med en modal man kan lukke via show
 * @param {Boolean} show Skal vi vise modal eller ikke?
 * @param {Function} setShow Funksjon for å endre show til false (og lukke)
 * @param {String} winner Hvem som har vunnet
 */
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
