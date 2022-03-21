import React from 'react';

import PropTypes from 'prop-types';

import Modal from 'react-bootstrap/Modal';

/**
 * Viser hvem som har vunnet hver runde med en modal man kan lukke via show
 * @param {Boolean} show Skal vi vise modal eller ikke?
 * @param {Function} setShow Funksjon for å endre show til false (og lukke)
 * @param {String} computerSelected Hva CPU har valgt
 * @param {String} winner Hvem som har vunnet
 */
function ShowWinner({
  showWinnerModal,
  setShowWinnerModal,
  computerSelected,
  winner,
}) {
  const handleClose = () => {
    setShowWinnerModal(false);
  };

  return (
    <Modal
      show={showWinnerModal}
      onClick={handleClose}
      onHide={handleClose}
      centered
    >
      <Modal.Header closeButton />
      <Modal.Title>
        <h3 className="text-center">
          Vinner:
          {' '}
          {winner && winner.toString()}
        </h3>
      </Modal.Title>
      <Modal.Body>
        <h3 className="text-center">
          Motstander valgte:
          {' '}
          {computerSelected}
        </h3>
      </Modal.Body>
    </Modal>
  );
}

ShowWinner.defaultProps = {
  showWinnerModal: PropTypes.bool,
  setShowWinnerModal: PropTypes.func,
  computerSelected: PropTypes.string,
  winner: PropTypes.string,
};

ShowWinner.propTypes = {
  showWinnerModal: PropTypes.bool,
  setShowWinnerModal: PropTypes.func,
  computerSelected: PropTypes.string,
  winner: PropTypes.string,
};

export default ShowWinner;
