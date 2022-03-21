[![CircleCI](https://circleci.com/gh/w3bdesign/stein-saks-papir.svg?style=svg)](https://circleci.com/gh/w3bdesign/stein-saks-papir)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=w3bdesign_stein-saks-papir&metric=alert_status)](https://sonarcloud.io/dashboard?id=w3bdesign_stein-saks-papir)

<img src="https://github.com/w3bdesign/stein-saks-papir/blob/master/screenshot/screenshot.jpg" alt="screenshot">

Live URL: <a href="https://nova.dfweb.no/">https://nova.dfweb.no/</a>

# Stein Saks Papir

Prosjekt/hjemmeoppgave av Daniel for NovaCare.

## Prosjektbeskrivelse

Lag en interaktiv side der man kan spille stein-saks-papir (reglene finner du her: http://agilekatas.co.uk/katas/RockPaperScissors-Kata) og en tilleggsregel er at vinneren er den som er «best av 3».

## Teknologier / verktøy brukt

- React med hooks (useState og useEffect)
- Jest og React testing library for unit testing
- React Bootstrap
- Cypress for E2E testing
- Animate.css for animasjoner
- Easy Peasy for state management
- JSDoc for kode-dokumentering
- Responsivt design
- CircleCI integrasjon
- ESLint med AirBnB
- Vektorbilder (SVG) fra FontAwesome
- Aria-label på nødvendige elementer (WCAG standard)
- Prop types validering
- Scanning av koden via SonarCloud quality cloud

## Hva jeg ville gjort annerledes i en profesjonell setting 

- Jeg ville brukt god tid på planleggingsfasen. Hatt et lengre møte hvor målet er å få utarbeidet en detaljert kravspesifikasjon, diskutere budsjett, tidsramme, valg av teknologier, langsiktige mål med siden. Det vil gjøre at man kan velge riktig teknologi for i dag og for fremtiden.
- Jeg ville også satt opp `branch protection` på master og krevd minimum 1 code review fra en annen.
- Enighet om felles Git commit message template innad for kunden.
- Hadde dette vært et større prosjekt hvor flere andre skulle samarbeidet ville jeg sannsynligvis implementert Typescript.

### Resonnering og tanker

- Jeg har valgt React ettersom jeg ikke så noe stort behov for å bruke Gatsby eller NextJS i dette prosjektet.
- Jeg valgte React Bootstrap for UI ettersom det er et populært bibliotek som er enkelt å bruke.
- Jeg har brukt ESLint og Airbnb for å opprettholde kodekvaliteten og gjøre utvikling enklere. Det fungerer også bra med integrert IDE støtte i VSCode. Det vil også gjøre videreutvikling og "maintainability" enklere på sikt. Jeg vurderte Typescript, men føler jeg må få mer erfaring med det først.
- Jeg har brukt JSDoc for å dokumentere koden etter best mulig evne. Dette har jeg også gjort fordi jeg ikke har brukt Typescript.
- Jeg har brukt SVG bilder fra FontAwesome for å sørge for at bildene ser bra ut uavhengig av oppløsning. 
- Jeg har satt opp testing foreløpig med Jest, React-testing-library. Har også satt opp testing med Cypress. Alt er koblet oppimot CircleCI.
- Jeg bruker hooks med Easy Peasy ettersom det er enkelt å bruke og jeg har erfaring med det fra før av. I tillegg bruker det Redux "under the hood" så jeg har tilgang til Redux dev tools.
- Jeg har implementert animasjoner med Animate.css fordi det er lettvint å implementere og jeg har brukt det før.
- Jeg har forsøkt å holde state "ren" ved å bare ha score, increaseScore og reset der. Ulempen er at jeg bruker prop drilling der hvor jeg trenger å videresende variabler i state (useState).

### TODO med potensielle/mulige forbedringer

- Erstatte useState med useReducer i ListWeapons for å forenkle kodebasen (ettersom jeg bruker flere useState kall her).
- Vurder Suspense og dynamisk rendering av komponenter ved behov.
- Lagre finalWinner via `computed` i state og hente ut denne senere? Vil cache verdien og gi oss en performance fordel (https://easy-peasy.now.sh/docs/api/computed.html).
- Se på muligheten for å erstatte setTimeOut i ListWeapons med actionOn thunk/async listener. (https://easy-peasy.now.sh/docs/tutorial/using-listeners.html)
- Erstatte Animate.css med GSAP eller React-spring? Tillater mer kompliserte animasjoner men krever mer koding.
- Oppgradere kodebasen til Typescript?
- Erstatte hardkodet spillernavn ved å lagre det dynamisk i state. Det gjør skalering og fremtidig oppdatering enklere ved å holde alt på ett sted.
- Se om jeg kan redusere prop drilling i komponenter ved å lagre mer informasjon i state (eller om jeg bør beholde prop drilling?).
- Vurder å erstatte useEffect med useCallback for å forhindre at den kalles flere ganger. (Ser ikke ut som at det vil ha noen stor fordel i performance)
- Se om jeg kan separere mer kode i enda mindre komponenter for å gjøre koden ryddigere og enklere å vedlikeholde/oppdatere? (Allerede påbegynt)
