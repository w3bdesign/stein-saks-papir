import Modal from 'react-bootstrap/Modal';

import HandScissors from '@/assets/HandScissors';
import HandRock from '@/assets/HandRock';
import HandPaper from '@/assets/HandPaper';

/**
 * Viser hvem som har vunnet hver runde med en modal man kan lukke via show
 */

interface ShowWinnerProps {
  readonly showWinnerModal: boolean;
  readonly setShowWinnerModal: (show: boolean) => void;
  readonly computerSelected: string | null;
  readonly winner: string | null;
}

function ShowWinner({ showWinnerModal, setShowWinnerModal, computerSelected, winner }: Readonly<ShowWinnerProps>) {
  const handleClose = () => {
    setShowWinnerModal(false);
  };

  return (
    <Modal
      data-testid="modalId"
      show={showWinnerModal}
      onClick={handleClose}
      onHide={handleClose}
      centered
    >
      <Modal.Header closeButton />
      <Modal.Title>
        <h4 data-cy="winnermodaltext" className="text-center mt-2">
          Vinner: {winner?.toString()}
        </h4>
      </Modal.Title>
      <Modal.Body>
        <h4 className="text-center">
          Motstander valgte:
          <br />
          <br />
          {computerSelected === 'Stein' && <HandRock />}
          {computerSelected === 'Saks' && <HandScissors />}
          {computerSelected === 'Papir' && <HandPaper />}
        </h4>
      </Modal.Body>
    </Modal>
  );
}

export default ShowWinner;
