import Button from 'react-bootstrap/Button';

import useScoreBoardStore from '@/state/ScoreBoardStore';

/**
 * Funksjon for å nullstille spillet og sette score for spillerne til 0.
 * Kaller reset funksjonen fra Zustand store.
 */

interface ResetGameButtonProps {
  sethavewonThreeRounds: (value: string | null) => void;
}

function ResetGameButton({ sethavewonThreeRounds }: ResetGameButtonProps) {
  const resetGame = useScoreBoardStore((state) => state.reset);

  const handleResetClick = () => {
    resetGame();
    sethavewonThreeRounds(null);
  };

  return (
    <Button variant="danger" className="mt-0 mb-4" onClick={handleResetClick}>
      Restart spill
    </Button>
  );
}

export default ResetGameButton;
