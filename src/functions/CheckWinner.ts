import type { Weapon } from '@/const/WEAPONS';

/**
 * Funksjon som er ansvarlig for å sjekke hvem som vinner.
 * Sammenligner selection.beats med name fra WEAPONS (feks stein slår saks osv)
 * @param selection Våpenet som spiller 1 har valgt
 * @param opponentSelection Våpenet som CPU har valgt
 * @return Returnerer true eller false avhengig av om valg 1 slår valg 2
 */

function CheckWinner(selection: Weapon, opponentSelection: Weapon): boolean {
  return selection.beats === opponentSelection.name;
}

export default CheckWinner;
