[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/w3bdesign/stein-saks-papir.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/w3bdesign/stein-saks-papir/context:javascript)
[![Codecov](https://codecov.io/gh/w3bdesign/stein-saks-papir/branch/master/graph/badge.svg)](https://codecov.io/gh/w3bdesign/stein-saks-papir)
[![CircleCI](https://circleci.com/gh/w3bdesign/stein-saks-papir.svg?style=svg)](https://circleci.com/gh/w3bdesign/stein-saks-papir)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=w3bdesign_stein-saks-papir&metric=alert_status)](https://sonarcloud.io/dashboard?id=w3bdesign_stein-saks-papir)
[![Maintainability](https://api.codeclimate.com/v1/badges/b47c7e7226d07b29018b/maintainability)](https://codeclimate.com/github/w3bdesign/stein-saks-papir/maintainability)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c211fd2414342fba90652a01aa15377)](https://www.codacy.com/gh/w3bdesign/stein-saks-papir/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=w3bdesign/stein-saks-papir&amp;utm_campaign=Badge_Grade)

<img src="https://github.com/w3bdesign/stein-saks-papir/blob/master/screenshot/screenshot.jpg" alt="screenshot">

Live URL: <https://steinsakspapir.dfweb.no>

<img src="https://github.com/w3bdesign/stein-saks-papir/blob/master/screenshot/screenshot.jpg" alt="screenshot">

# Stein Saks Papir

Prosjekt/hjemmeoppgave av Daniel.

Se gjerne [TODO](#todo) punktet lenger ned i README hvor jeg har listet opp en rekke idèer og tanker for refaktorering av kode og forbedringer.

## Prosjektbeskrivelse

Lag en interaktiv side der man kan spille stein-saks-papir (reglene finner du her: <http://agilekatas.co.uk/katas/RockPaperScissors-Kata>) og en tilleggsregel er at vinneren er den som er «best av 3».

## Teknologier / verktøy brukt

-   React 17 med hooks (useState og useEffect)

### UI / design

-   React Bootstrap
-   Animate.css for animasjoner
-   Responsivt design
-   Vektorbilder (SVG) fra FontAwesome
-   Aria-label på nødvendige elementer (WCAG standard)

### Testing / kodekvalitet

-   Cypress for E2E testing
-   Testdekninganalyse via CodeCov
-   Jest og React Testing Library
-   Scanning av koden via SonarCloud og DeepScan
-   Prop types validering
-   ESLint med AirBnB
-   CircleCI som er integrert med CodeCov for opplasting av testdekningsrapport
-   JSDoc for kode-dokumentering

### State management

-   Easy Peasy for å håndtere global state
-   useState med prop drilling (holde state så lokal som mulig)

## Hva jeg ville gjort annerledes i en profesjonell setting

-   Jeg ville brukt god tid på planleggingsfasen. Hatt et lengre møte hvor målet er å få utarbeidet en detaljert kravspesifikasjon, diskutere budsjett, tidsramme, valg av teknologier, langsiktige mål med siden. Det vil gjøre at man kan velge riktig teknologi for i dag og for fremtiden.
-   Jeg ville også satt opp `branch protection` på master og krevd minimum 1 code review fra en annen.
-   Enighet om felles Git commit message template innad for kunden.
-   Implementert React-Helmet for bedre kontroll over SEO
-   Hadde dette vært et større prosjekt hvor flere andre skulle samarbeidet ville jeg sannsynligvis implementert Typescript.

### Resonnering og tanker

-   Jeg har valgt React ettersom jeg ikke så noe stort behov for å bruke Gatsby eller NextJS i dette prosjektet.
-   Jeg valgte React Bootstrap for UI ettersom det er et populært bibliotek som er enkelt å bruke.
-   Jeg har brukt ESLint og Airbnb for å opprettholde kodekvaliteten og gjøre utvikling enklere. Det fungerer også bra med integrert IDE støtte i VSCode. Det vil også gjøre videreutvikling og "maintainability" enklere på sikt. Jeg vurderte Typescript, men føler jeg må få mer erfaring med det først.
-   Jeg har brukt JSDoc for å dokumentere koden etter best mulig evne. Dette har jeg også gjort fordi jeg ikke har brukt Typescript.
-   Jeg har brukt SVG bilder fra FontAwesome for å sørge for at bildene ser bra ut uavhengig av oppløsning.
-   Jeg har satt opp testing foreløpig med Jest, React-testing-library. Har også satt opp testing med Cypress. Alt er koblet oppimot CircleCI.
-   Jeg bruker hooks med Easy Peasy ettersom det er enkelt å bruke og jeg har erfaring med det fra før av. I tillegg bruker det Redux "under the hood" så jeg har tilgang til Redux dev tools.
-   Jeg har implementert animasjoner med Animate.css fordi det er lettvint å implementere og jeg har brukt det før.
-   Jeg har forsøkt å holde state "ren" ved å bare ha score, increaseScore og reset der. Jeg vurderer å refaktorere koden til å bruke Easy Peasy state for å eliminere propdrilling.

### <a id="todo">TODO med fremtidige potensielle/mulige forbedringer for refaktorering</a>

-   Refaktorere kode med skalering i bakhodet. Dette kan enklest gjøre ved å lagre hardkodet data i state og loope over feks våpen/spillere med forEach eller map slik at vi kan legge til flere spillere/våpen enkelt i fremtiden. Altså, gjøre data som skal skaleres dynamisk fremfor statisk og lagre denne i state. Det gjør skalering og fremtidig oppdatering enklere ved å holde alt på ett sted.
-   Fullfør arbeid med å separare ut state og actions i mindre filer i `/state/model` og slå de sammen. Gjør skalering og struktur bedre.
-   Implementere tester for hver enkelt komponent (med React Testing Library) separat istedenfor sånn som vi har de nå?
-   Implementere beskrivelse av reglene. Bruk <https://react-bootstrap.github.io/components/accordion/>
-   Vurder å bytte ut useState med <https://easy-peasy.now.sh/docs/api/create-component-store.html>
-   Vurder om Suspense og dynamisk rendering av komponenter ved behov bør implementeres.
-   Lagre finalWinner via `computed` i state og hente ut denne senere? Vil cache verdien og gi oss en performance fordel (<https://easy-peasy.now.sh/docs/api/computed.html>)?
-   Se på muligheten for å erstatte setTimeOut i ListWeapons med actionOn thunk/async listener. (<https://easy-peasy.now.sh/docs/tutorial/using-listeners.html>)
-   Erstatte Animate.css med GSAP eller React-spring? Tillater mer kompliserte animasjoner men krever mer koding.
-   Oppgradere kodebasen til Typescript?
-   Se om jeg kan redusere prop drilling i komponenter ved å lagre mer informasjon i global state. Fordel er at komponenter blir "renere" fordi de ikke er avhengig av props. Ulempe er at det går imot det å holde state så "lavt" som mulig.
-   Se om jeg kan separere mer kode i enda mindre komponenter for å gjøre koden ryddigere og enklere å vedlikeholde/oppdatere? (Allerede påbegynt).
