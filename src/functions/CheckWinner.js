/**
 * Funksjon som er ansvarlig for å sjekke hvem som vinner.
 * Sammenligner selection.beats med name fra WEAPONS (feks stein slår saks osv)
 * @param {Object} selection Våpenet som spiller 1 har valgt
 * @param {Object} opponentSelection Våpenet som CPU har valgt
 * @return {Boolean} Returnerer true eller false avhengig av om valg 1 slår valg 2
 */

function CheckWinner(selection, opponentSelection) {

  return selection.beats === opponentSelection.name;

}

export default CheckWinner;
