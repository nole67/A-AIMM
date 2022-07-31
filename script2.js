

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
var Empfehlung1 = ["D1R1", "D1R2", "D1R3", "D1R4", "D1R5"]
var Empfehlung2 = ["D2R1", "D2R2", "D2R3", "D2R4", "D2R5"]
var Empfehlung3 = ["D3R1", "D3R2", "D3R3", "D3R4", "D3R5"]
var Empfehlung4 = ["D4R1", "D4R2", "D4R3", "D4R4", "D4R5"]
var Empfehlung5 = ["D5R1", "D5R2", "D5R3", "D5R4", "D5R5"]
var Empfehlung6 = ["D6R1", "D6R2", "D6R3", "D6R4", "D6R5"]
var Empfehlung7 = ["D7R1", "D7R2", "D7R3", "D7R4", "D7R5"]
var Empfehlung8 = ["D8R1", "D8R2", "D8R3", "D8R4", "D8R5"]

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
