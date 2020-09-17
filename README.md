[![CircleCI](https://circleci.com/gh/w3bdesign/stein-saks-papir.svg?style=svg)](https://circleci.com/gh/w3bdesign/stein-saks-papir)

<img src="https://github.com/w3bdesign/stein-saks-papir/blob/master/screenshot/screenshot.jpg" alt="screenshot">

# Stein Saks Papir

Prosjekt av Daniel laget for NovaCare.

## Prosjektbeskrivelse

Lag en interaktiv side der man kan spille stein-saks-papir (reglene finner du her: http://agilekatas.co.uk/katas/RockPaperScissors-Kata) og en tilleggsregel er at vinneren er den som er «best av 3».

## Teknologier / verktøy brukt

- React
- Typescript
- Jest 
- React testing library
- React Bootstrap
- Context og Reducer
- CircleCI integrasjon
- ESLint med AirBnB
- Vektorbilder (SVG) fra FontAwesome

## Hva jeg ville gjort annerledes i en profesjonell setting 

- Jeg ville brukt god tid på planleggingsfasen. Hatt et lengre møte hvor målet er å få utarbeidet en detaljert kravspesifikasjon, diskutere budsjett, tidsramme, valg av teknologier, langsiktige mål med siden. Det vil gjøre at man kan velge riktig teknologi for i dag og for fremtiden.
- Jeg ville også satt opp `branch protection` på master og krevd minimum 1 code review fra en annen.
- Enighet om felles Git commit message template innad for kunden.

### Resonnering og tanker
- Jeg har valgt React ettersom jeg ikke så noe stort behov for å bruke Gatsby eller NextJS i dette prosjektet.
- Jeg valgte React Bootstrap for UI ettersom det er et populært bibliotek som er enkelt å bruke. Dessuten fungerer det bra med Typescript.
- Jeg valgte å bruke Typescript med ESLint og Airbnb for å opprettholde kodekvaliteten og gjøre utvikling enklere. Det fungerer også bra med integrert IDE støtte i VSCode. Det vil også gjøre videreutvikling og "maintainability" enklere på sikt.
- Jeg har brukt SVG bilder fra FontAwesome for å sørge for at bildene ser bra ut uavhengig av oppløsning. 
- Jeg har satt opp testing foreløpig med Jest, React-testing-library og integrasjon overfor CircleCI. Får jeg tid skal jeg også sette opp Cypress. 
- Jeg bruker hooks med Context og Reducer ettersom det er innebygd i React og er et bra verktøy for state management i React. Redux er unødvendig (overkill) i dette prosjektet. 

