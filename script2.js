

//Ergebnisse für jede Dimnension
let section1Res = document.querySelector('.section-1-results')
let section2Res = document.querySelector('.section-2-results')
let section3Res = document.querySelector('.section-3-results')
let section4Res = document.querySelector('.section-4-results')
let section5Res = document.querySelector('.section-5-results')
let section6Res = document.querySelector('.section-6-results')
let section7Res = document.querySelector('.section-7-results')
let section8Res = document.querySelector('.section-8-results')
let sectionAllRes = document.querySelector('.section-All-results')

//Daten per URL extrahieren
let urlParams = new URLSearchParams(window.location.search);
let section1 = urlParams.get('section1'); //section1
let section2 = urlParams.get('section2'); //section2
let section3 = urlParams.get('section3'); //section3
let section4 = urlParams.get('section4'); //section4
let section5 = urlParams.get('section5'); //section5
let section6 = urlParams.get('section6'); //section6
let section7 = urlParams.get('section7'); //section7
let section8 = urlParams.get('section8'); //section8

//Array der Ergebnisse
var Ergebnisse = [Number(section1), Number(section2), Number(section3), Number(section4),
Number(section5), Number(section6), Number(section7), Number(section8)];

//Definition der Handlungsempfehlungen pro Dimension
var Empfehlung1 = 
["Stellen Sie zur Erreichung des nächsten Reifelevels sicher, dass die IT-Infrastruktur in Ihrem Unternehmen auf den Einsatz von KI vorbereitet ist. Legen Sie dabei besonderen Wert auf die benötigte Sicherheit und Rechenleistung der Infrastruktur. Eingeschränkte KI-Funktionen wie Robotic Process Automation oder Data Analytics stellen einen guten Einstieg für die Nutzung von KI-Funktionen im Unternehmen dar. Auch weitere Einsatzmöglichkeiten von KI in der Wirtschaftsprüfung sollten aktiv recherchiert werden.",
"Stellen Sie zur Erreichung des nächsten Reifelevels sicher, dass die IT-Infrastruktur in Ihrem Unternehmen bereits teilweise an den Einsatz von KI angepasst wurde und ein Konzept für eine zentralisierte KI-Plattform erstellt wird. Setzen Sie bspw. eingeschränkte KI-Funktionen wie Robotic Process Automation oder Data Analytics für spezifische Probleme ein, um von der Recherche zum Einsatz von KI überzugehen. Neue KI-Anwendungen sollten mit der Option für spätere Anpassungen und Erweiterungen gestaltet werden.",
"Stellen Sie zur Erreichung des nächsten Reifelevels sicher, dass die IT-Infrastruktur in Ihrem Unternehmen zum Großteil an den Einsatz von KI angepasst ist und eine zentralisierte KI-Plattform eingerichtet wird. In allen Bereichen des Unternehmens sollte mindestens eine fortgeschrittene KI- Funktion für den täglichen Betrieb eingesetzt werden. Eingesetzte KI sollte zur eigenständigen Weiterentwicklung befähigt werden. Weiterhin sollten Kontrollen die korrekte Funktionsweise und Qualität der meisten KI-Systeme sicherstellen.",
"Stellen Sie zur Erreichung des nächsten Reifelevels sicher, dass die IT-Infrastruktur in Ihrem Unternehmen vollständig an den Einsatz von KI angepasst ist und Ihr Unternehmen die aktuell führenden KI-Funktionen einsetzt. Ihre zentrale KI-Plattform sollte die schnelle Entwicklung neuer Anwendungsfälle ermöglichen und etablierte Kontrollen die korrekte Funktionsweise und Qualität aller KI-Systeme sicherstellen.",
"Die KI-Technologien in Ihrem Unternehmen haben bereits ein optimales Level erreicht!"]

var Empfehlung2 =
["Zur Verbesserung Ihrer aktuellen Reifestufe sollte damit begonnen werden, verschiedene Datenquellen miteinander zu verbinden. Die vorhandenen Unternehmensdaten sollten für erste rückblickende Datenanalysen genutzt und eine Untersuchung von Datenpipelines für die Übertragung und einheitliche Transformierung von Daten sollte durchgeführt werden.",
"Zur Verbesserung Ihrer aktuellen Reifestufe sollte die Verbindung von Datenquellen weitergeführt werden, um einen zentralen Zugriff auf Ihre Unternehmensdaten zu ermöglichen. Die Einrichtung von Datenpipelines kann die Qualität Ihrer Daten sicherstellen. Um besser von den Unternehmensdaten zu profitieren, ist ein Übergang von deskriptiven (beschreibenden) zu präskriptiven (vorausschauenden) Datenanalysen empfehlenswert.",
"Zur Verbesserung Ihrer aktuellen Reifestufe sollten eine automatische Sammlung und Analyse der Unternehmensdaten eingerichtet und die Datenpipelines direkt mit den KI-Instrumenten des Unternehmens verbunden werden. Beziehen Sie KI-basierte Datenanalysen in Unternehmensprozesse und Entscheidungsfindungen ein und stellen Sie zudem sicher, dass benötigte Daten problemlos zentral zugänglich sind.",
"Zur Verbesserung Ihrer aktuellen Reifestufe sollten alle Unternehmensdaten in Echtzeit zugänglich sein und zudem automatisch gesammelt und für Datenanalysen genutzt werden, bspw. für die Gestaltung und Optimierung von Unternehmensprozessen. ",
"Das Datenmanagement in Ihrem Unternehmen hat für die Nutzung von KI bereits ein optimales Level erreicht!"]

var Empfehlung3 = 
["Für eine Steigerung des Reifelevels sollten im Unternehmen erste Mitarbeiterschulungen durchgeführt werden, um eigene KI-Kompetenzen zu entwickeln und Mitarbeitern die Vorteile von KI näherzubringen. Mitarbeiterprofile sollten überarbeitet und um technologische Kompetenzen ergänzt werden. Um Unterstützung bei KI-Themen zu finden, sollte Ihr Unternehmen zudem mögliche Kooperationen mit externen KI-Partnern untersuchen.",
"Für eine Steigerung des Reifelevels sollten die Mitarbeiter Ihres Unternehmens aktiv im Umgang mit KI geschult und dazu befähigt werden, einfache, unterstützende KI-Instrumente einzusetzen. Kooperationen mit externen KI-Partnern können zudem den weiteren Aufbau von KI-Kompetenzen im Unternehmen unterstützen.",
"Für eine Steigerung des Reifelevels sollten sich unter den Mitarbeitern Ihres Unternehmens durch Schulungen oder Neueinstellungen eine wachsende Anzahl von Data Science- und KI-Experten befinden, die dazu in der Lage sind, eigenständig die Plausibilität von Ergebnissen eingesetzter KI-Instrumente zu überprüfen und spezifische KI-Themen der Wirtschaftsprüfung zu bearbeiten.",
"Für eine Steigerung des Reifelevels muss sichergestellt werden, dass in Ihrem Unternehmen ausreichende KI-Kenntnisse vorhanden sind, um die KI intern auszubauen. Zudem ist es wichtig, Mitarbeiter weiter zum Einsatz von KI zu motivieren und eine datengetriebene Denkweise zu fördern.",
"Das Personal Ihres Unternehmens ist bereits optimal auf den Einsatz von KI vorbereitet!"]

var Empfehlung4 = 
["Um das nächste Reifelevel zu erreichen, sollten Einbindungsmöglichkeiten von KI in verschiedenen Unternehmensabteilungen und -prozessen untersucht werden. Zudem sollten klare Richtlinien für den Ausbau von KI im Unternehmen entwickelt werden.", 
"Um das nächste Reifelevel zu erreichen, sollte der abteilungsübergreifende Einsatz von KI untersucht werden. Zudem sollten klare Richtlinien für die Umsetzung von KI-Ideen zu praktischen Lösungen im Unternehmen entwickelt werden. Es muss damit begonnen werden, KI auch in den Kernprozess der Wirtschaftsprüfung zu integrieren.", 
"Um das nächste Reifelevel zu erreichen, sollten die KI-Kompetenzen in Ihrem Unternehmen in spezifischen Abteilungen oder Teams gebündelt werden. Einzelne Prozesse sollten automatisiert und KI in die Kern- und unterstützenden Prozesse der Wirtschaftsprüfung integriert werden.", 
"Um das nächste Reifelevel zu erreichen, sollte eine zentrale KI-Abteilung im Unternehmen eingerichtet und der Einsatz von KI-Instrumenten weiter im Unternehmen verbreitet werden. Zudem sollte die vollständige Automatisierung von Unternehmensprozessen verfolgt werden.", 
"Die KI bezogene Organisation und die zugehörigen Prozesse sind in Ihrem Unternehmen bereits optimal an den Einsatz von KI angepasst!"]

var Empfehlung5 =
["Um den Reifegrad Ihres Unternehmens zu erhöhen, sollte das Management sich mit potentiellen Auswirkungen und Vorteilen durch den Einsatz von KI auseinandersetzen. Dabei ist es auch hilfreich, Zielvorstellungen für den Einsatz von KI zu formulieren.",
"Um den Reifegrad Ihres Unternehmens zu erhöhen, sollten in Ihrem Unternehmen eine KI-Strategie entwickelt und ein Konzept für die Einführung und Implementierung von KI formuliert werden. Stellen Sie sicher, dass die Zielsetzungen für den Einsatz von KI mit den Geschäftszielen des Managements vereinbar sind.",
"Um den Reifegrad Ihres Unternehmens zu erhöhen, sollten Ihre KI-Strategie zu einem festen Bestandteil der unternehmensübergreifenden Strategie und KI in der strategischen Planung des Unternehmens berücksichtigt werden.",
"Um den Reifegrad Ihres Unternehmens zu erhöhen, sollte KI genutzt werden, um die Entscheidungsfindung des Unternehmens zu optimieren und zu automatisieren und neue Geschäftsmodelle zu entwickeln.",
"Die Anwendung von KI ist bereits optimal in Ihre Unternehmensstrategie und die Entscheidungen des Managements integriert!"]

var Empfehlung6 = 
["Damit Ihr Unternehmen die nächste Reifestufe erreichen kann, sollte ein geringes, initiales KI-Budget angelegt werden. Dieses kann bspw. durch andere Budgets des Unternehmens gestützt werden.",
"Damit Ihr Unternehmen die nächste Reifestufe erreichen kann, sollte ein mittleres KI-Budget fest im Unternehmen etabliert werden. Dieses kann bspw. aus anderen Budgets gespeist werden oder zu einem Bestandteil anderer, bereits etablierter Budgets werden.",
"Damit Ihr Unternehmen die nächste Reifestufe erreichen kann, sollten das KI-Budget im Unternehmen erhöht und Unternehmensbereichen spezielle KI-Budgets zur Verfügung gestellt werden.",
"Damit Ihr Unternehmen die nächste Reifestufe erreichen kann, sollte für das gesamte Unternehmen ein spezifisches KI-Budget angelegt werden, welches ausreicht, um die Weiterentwicklung und Verbesserung von KI-Lösungen zu ermöglichen.",
"Das KI-Budget Ihres Unternehmens wird bereits optimal eingesetzt!"]

var Empfehlung7 = 
["Der aktuelle Reifegrad Ihres Unternehmens kann erhöht werden, indem Sie erste Fälle von KI in der Wirtschaftsprüfung für die interne Anwendung identifizieren, austesten und den Bedarf im Unternehmen kommunizieren.",
"Der aktuelle Reifegrad Ihres Unternehmens kann erhöht werden, indem Sie zusätzlich zu der internen Anwendung erste Fälle von KI in der Wirtschaftsprüfung für die Anwendung in externen Produkten und Dienstleistungen identifizieren, Ihren Kunden gegenüber kommunizieren und umsetzen. Weiterhin sollte die Auswirkung der KI-Anwendung für Leistungen der Wirtschaftsprüfung auf Kundenverträge identifiziert werden.",
"Der aktuelle Reifegrad Ihres Unternehmens kann erhöht werden, indem Sie KI als kritischen Bestandteil der Produkt- und Dienstleistungsentwicklung für Kunden implementieren und in internen und externen Produkten oder Dienstleistungen einsetzen. Die Anwendung von KI sollte zudem in bestehende und neu geschlossene Kundenverträge eingebunden werden.",
"Der aktuelle Reifegrad Ihres Unternehmens kann erhöht werden, indem Sie den Einfluss von KI auf alle Produkte und Dienstleistungen des Unternehmens ausweiten. Alle potentiellen internen sowie externen B2C und B2B Anwendungen sollten wahrgenommen werden.",
"KI wird bereits optimal für die Produkte und Dienstleistungen Ihres Unternehmens eingesetzt!"]

var Empfehlung8 = 
["Um eine Steigerung des Reifegrades zu erreichen, sollte in Ihrem Unternehmen mit der Entwicklung von Konzepten für die Einhaltung ethischer Grundsätze sowie von Maßnahmen für die Einhaltung von Regulatorik und Datenschutzrichtlinien bei der Anwendung von KI begonnen werden.", 
"Um eine Steigerung des Reifegrades zu erreichen, sollten bei der Entwicklung von KI-Systemen in Ihrem Unternehmen definierte Maßnahmen zur Einhaltung der Regulatorik befolgt werden und ethische Grundsätze für die Anwendung von KI identifiziert und kommuniziert werden. Weiterhin sollten erste Untersuchungen von Dokumentation, Transparenz, Fairness und Nachhaltigkeit von KI im Unternehmen durchgeführt werden.", 
"Um eine Steigerung des Reifegrades zu erreichen, sollte die KI in Ihrem Unternehmen sich zuverlässig an regulatorische Anforderungen und ethische Grundsätze halten. Weiterhin sollte die Nutzung von KI dokumentiert, transparent, fair und nachhaltig erfolgen.", 
"Um das optimale Reifelevel zu erreichen, muss die Einhaltung von Regularien und ethischen Grundsätzen nicht nur ein fester Bestandteil der KI sein, sondern Ihr Unternehmen muss zudem dazu in der Lage sein, die KI-Systeme schnell und flexibel an Änderungen der Regulatorik anzupassen. Ein hohes Maß an Transparenz und Erklärbarkeit der KI-Systeme muss erreicht werden, damit sie von Mitarbeitern, Kunden und Aufsichtsbehörden als vertrauenswürdig eingeschätzt werden.", 
"Die KI in Ihrem Unternehmen folgt bereits optimal ethischen und regulatorischen Grundsätzen!"]

//Anzeige der Handlungsempfehlungen
function ErgebnisEmpfehlung1() {
	if (Ergebnisse[0] < 1) {
		document.querySelector('.Empfehlung-1').innerHTML = Empfehlung1[0]
	} else if (1 <= Ergebnisse[0] && Ergebnisse[0] < 2) {
		document.querySelector('.Empfehlung-1').innerHTML = Empfehlung1[1]
	} else if (2 <= Ergebnisse[0] && Ergebnisse[0] < 3) {
		document.querySelector('.Empfehlung-1').innerHTML = Empfehlung1[2]
	} else if (3 <= Ergebnisse[0] && Ergebnisse[0] < 4) {
		document.querySelector('.Empfehlung-1').innerHTML = Empfehlung1[3]
	} else if (Ergebnisse[0] = 4) {
		document.querySelector('.Empfehlung-1').innerHTML = Empfehlung1[4]
}}

function ErgebnisEmpfehlung2() {
	if (Ergebnisse[1] < 1) {
		document.querySelector('.Empfehlung-2').innerHTML = Empfehlung2[0]
	} else if (1 <= Ergebnisse[1] && Ergebnisse[1] < 2) {
		document.querySelector('.Empfehlung-2').innerHTML = Empfehlung2[1]
	} else if (2 <= Ergebnisse[1] && Ergebnisse[1] < 3) {
		document.querySelector('.Empfehlung-2').innerHTML = Empfehlung2[2]
	} else if (3 <= Ergebnisse[1] && Ergebnisse[1] < 4) {
		document.querySelector('.Empfehlung-2').innerHTML = Empfehlung2[3]
	} else if (Ergebnisse[1] = 4) {
		document.querySelector('.Empfehlung-2').innerHTML = Empfehlung2[4]
}}

function ErgebnisEmpfehlung3() {
	if (Ergebnisse[2] < 1) {
		document.querySelector('.Empfehlung-3').innerHTML = Empfehlung3[0]
	} else if (1 <= Ergebnisse[2] && Ergebnisse[2] < 2) {
		document.querySelector('.Empfehlung-3').innerHTML = Empfehlung3[1]
	} else if (2 <= Ergebnisse[2] && Ergebnisse[2] < 3) {
		document.querySelector('.Empfehlung-3').innerHTML = Empfehlung3[2]
	} else if (3 <= Ergebnisse[2] && Ergebnisse[2] < 4) {
		document.querySelector('.Empfehlung-3').innerHTML = Empfehlung3[3]
	} else if (Ergebnisse[2] = 4) {
		document.querySelector('.Empfehlung-3').innerHTML = Empfehlung3[4]
}}

function ErgebnisEmpfehlung4() {
	if (Ergebnisse[3] < 1) {
		document.querySelector('.Empfehlung-4').innerHTML = Empfehlung4[0]
	} else if (1 <= Ergebnisse[3] && Ergebnisse[3] < 2) {
		document.querySelector('.Empfehlung-4').innerHTML = Empfehlung4[1]
	} else if (2 <= Ergebnisse[3] && Ergebnisse[3] < 3) {
		document.querySelector('.Empfehlung-4').innerHTML = Empfehlung4[2]
	} else if (3 <= Ergebnisse[3] && Ergebnisse[3] < 4) {
		document.querySelector('.Empfehlung-4').innerHTML = Empfehlung4[3]
	} else if (Ergebnisse[3] = 4) {
		document.querySelector('.Empfehlung-4').innerHTML = Empfehlung4[4]
}}

function ErgebnisEmpfehlung5() {
	if (Ergebnisse[4] < 1) {
		document.querySelector('.Empfehlung-5').innerHTML = Empfehlung5[0]
	} else if (1 <= Ergebnisse[4] && Ergebnisse[4] < 2) {
		document.querySelector('.Empfehlung-5').innerHTML = Empfehlung5[1]
	} else if (2 <= Ergebnisse[4] && Ergebnisse[4] < 3) {
		document.querySelector('.Empfehlung-5').innerHTML = Empfehlung5[2]
	} else if (3 <= Ergebnisse[4] && Ergebnisse[4] < 4) {
		document.querySelector('.Empfehlung-5').innerHTML = Empfehlung5[3]
	} else if (Ergebnisse[4] = 4) {
		document.querySelector('.Empfehlung-5').innerHTML = Empfehlung5[4]
}}

function ErgebnisEmpfehlung6() {
	if (Ergebnisse[5] < 1) {
		document.querySelector('.Empfehlung-6').innerHTML = Empfehlung6[0]
	} else if (1 <= Ergebnisse[5] && Ergebnisse[5] < 2) {
		document.querySelector('.Empfehlung-6').innerHTML = Empfehlung6[1]
	} else if (2 <= Ergebnisse[5] && Ergebnisse[5] < 3) {
		document.querySelector('.Empfehlung-6').innerHTML = Empfehlung6[2]
	} else if (3 <= Ergebnisse[5] && Ergebnisse[5] < 4) {
		document.querySelector('.Empfehlung-6').innerHTML = Empfehlung6[3]
	} else if (Ergebnisse[5] = 4) {
		document.querySelector('.Empfehlung-6').innerHTML = Empfehlung6[4]
}}

function ErgebnisEmpfehlung7() {
	if (Ergebnisse[6] < 1) {
		document.querySelector('.Empfehlung-7').innerHTML = Empfehlung7[0]
	} else if (1 <= Ergebnisse[6] && Ergebnisse[6] < 2) {
		document.querySelector('.Empfehlung-7').innerHTML = Empfehlung7[1]
	} else if (2 <= Ergebnisse[6] && Ergebnisse[6] < 3) {
		document.querySelector('.Empfehlung-7').innerHTML = Empfehlung7[2]
	} else if (3 <= Ergebnisse[6] && Ergebnisse[6] < 4) {
		document.querySelector('.Empfehlung-7').innerHTML = Empfehlung7[3]
	} else if (Ergebnisse[6] = 4) {
		document.querySelector('.Empfehlung-7').innerHTML = Empfehlung7[4]
}}

function ErgebnisEmpfehlung8() {
	if (Ergebnisse[7] < 1) {
		document.querySelector('.Empfehlung-8').innerHTML = Empfehlung8[0]
	} else if (1 <= Ergebnisse[7] && Ergebnisse[7] < 2) {
		document.querySelector('.Empfehlung-8').innerHTML = Empfehlung8[1]
	} else if (2 <= Ergebnisse[7] && Ergebnisse[7] < 3) {
		document.querySelector('.Empfehlung-8').innerHTML = Empfehlung8[2]
	} else if (3 <= Ergebnisse[7] && Ergebnisse[7] < 4) {
		document.querySelector('.Empfehlung-8').innerHTML = Empfehlung8[3]
	} else if (Ergebnisse[7] = 4) {
		document.querySelector('.Empfehlung-8').innerHTML = Empfehlung8[4]
}}


ErgebnisEmpfehlung1()
ErgebnisEmpfehlung2()
ErgebnisEmpfehlung3()
ErgebnisEmpfehlung4()
ErgebnisEmpfehlung5()
ErgebnisEmpfehlung6()
ErgebnisEmpfehlung7()
ErgebnisEmpfehlung8()

//Ergebnisse in den Dimensionen aufschreiben
section1Res.innerHTML = section1
section2Res.innerHTML = section2
section3Res.innerHTML = section3
section4Res.innerHTML = section4
section5Res.innerHTML = section5
section6Res.innerHTML = section6
section7Res.innerHTML = section7
section8Res.innerHTML = section8
sectionAllRes.innerHTML = ((Number(section1) + Number(section2) + Number(section3) + Number(section4) +
						Number(section5) + Number(section6) + Number(section7) + Number(section8)) / 8).toFixed(2)



// Radar Chart
const data = {
  labels: [
    'Technologien',
    'Daten',
    'Personal & Kompetenzen',
    'Organisation & Prozesse',
    'Strategie & Management',
    'Budget',
    'Produkte & Dienstleistungen',
    'Ethik & Regulatorik'
  ],
  datasets: [{
    label: 'Reifegrad',
    data: Ergebnisse,
    fill: true,
    backgroundColor: 'rgb(2, 83, 136, 0.2)',
    borderColor: 'rgb(2, 83, 136)',
    pointBackgroundColor: 'rgb(2, 83, 136)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(2, 83, 136)'
  }]
};

const config = {
  type: 'radar',
  data: data,
  options: {
	    plugins: {
	      legend: {
	        display: false
	      }, 
	    },
	   	elements: {
      	line: {
        	borderWidth: 3
      }
    },
    	scales: {
        r: {
            angleLines: {
                display: false
            },
            suggestedMin: 0,
            suggestedMax: 4
        }
    },
  },
};

const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );
