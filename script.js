function displayRadioValue() {
  let section1 = document.querySelectorAll('.Boxen1 > input[type="radio"]')
  let section2 = document.querySelectorAll('.Boxen2 > input[type="radio"]')
  let section3 = document.querySelectorAll('.Boxen3 > input[type="radio"]')
  let section4 = document.querySelectorAll('.Boxen4 > input[type="radio"]')
  let section5 = document.querySelectorAll('.Boxen5 > input[type="radio"]')
  let section6 = document.querySelectorAll('.Boxen6 > input[type="radio"]')
  let section7 = document.querySelectorAll('.Boxen7 > input[type="radio"]')
  let section8 = document.querySelectorAll('.Boxen8 > input[type="radio"]')
  let section9 = document.querySelectorAll('.Boxen9 > input[type="radio"]')
  let section10 = document.querySelectorAll('.Boxen10 > input[type="radio"]')
  let section11 = document.querySelectorAll('.Boxen11 > input[type="radio"]')
  let section12 = document.querySelectorAll('.Boxen12 > input[type="radio"]')
  let section13 = document.querySelectorAll('.Boxen13 > input[type="radio"]')
  let section14 = document.querySelectorAll('.Boxen14 > input[type="radio"]')
  let section15 = document.querySelectorAll('.Boxen15 > input[type="radio"]')
  let section16 = document.querySelectorAll('.Boxen16 > input[type="radio"]')
  let section17 = document.querySelectorAll('.Boxen17 > input[type="radio"]')
  let section18 = document.querySelectorAll('.Boxen18 > input[type="radio"]')
  let section19 = document.querySelectorAll('.Boxen19 > input[type="radio"]')
  let section20 = document.querySelectorAll('.Boxen20 > input[type="radio"]')
  let section21 = document.querySelectorAll('.Boxen21 > input[type="radio"]')
  let section1Total = 0
  let section2Total = 0
  let section3Total = 0
  let section4Total = 0
  let section5Total = 0
  let section6Total = 0
  let section7Total = 0
  let section8Total = 0
  let section9Total = 0
  let section10Total = 0
  let section11Total = 0
  let section12Total = 0
  let section13Total = 0
  let section14Total = 0
  let section15Total = 0
  let section16Total = 0
  let section17Total = 0
  let section18Total = 0
  let section19Total = 0
  let section20Total = 0
  let section21Total = 0
  let section1Question = 0
  let section2Question = 0
  let section3Question = 0
  let section4Question = 0
  let section5Question = 0
  let section6Question = 0
  let section7Question = 0
  let section8Question = 0
  let section9Question = 0
  let section10Question = 0
  let section11Question = 0
  let section12Question = 0
  let section13Question = 0
  let section14Question = 0
  let section15Question = 0
  let section16Question = 0
  let section17Question = 0
  let section18Question = 0
  let section19Question = 0
  let section20Question = 0
  let section21Question = 0

  //Section 1.1
  section1.forEach(function(radio, index) {
    if (radio.checked) {
      section1Question++
      section1Total += +radio.value
    }
  })

  //Section 1.2
  section2.forEach(function(radio, index) {
    if (radio.checked) {
      section2Question++
      section2Total += +radio.value
    }
  })

   //Section 1.3
  section3.forEach(function(radio, index) {
    if (radio.checked) {
      section3Question++
      section3Total += +radio.value
    }
  })

  //Section 2.1
  section4.forEach(function(radio, index) {
    if (radio.checked) {
      section4Question++
      section4Total += +radio.value
    }
  })

  //Section 2.2
  section5.forEach(function(radio, index) {
    if (radio.checked) {
      section5Question++
      section5Total += +radio.value
    }
  })

   //Section 2.3
  section6.forEach(function(radio, index) {
    if (radio.checked) {
      section6Question++
      section6Total += +radio.value
    }
  })
    //Section 3.1
  section7.forEach(function(radio, index) {
    if (radio.checked) {
      section7Question++
      section7Total += +radio.value
    }
  })

  //Section 3.2
  section8.forEach(function(radio, index) {
    if (radio.checked) {
      section8Question++
      section8Total += +radio.value
    }
  })

   //Section 3.3
  section9.forEach(function(radio, index) {
    if (radio.checked) {
      section9Question++
      section9Total += +radio.value
    }
  })

    //Section 4.1
  section10.forEach(function(radio, index) {
    if (radio.checked) {
      section10Question++
      section10Total += +radio.value
    }
  })

  //Section 4.2
  section11.forEach(function(radio, index) {
    if (radio.checked) {
      section11Question++
      section11Total += +radio.value
    }
  })

   //Section 4.3
  section12.forEach(function(radio, index) {
    if (radio.checked) {
      section12Question++
      section12Total += +radio.value
    }
  })


    //Section 5.1
  section13.forEach(function(radio, index) {
    if (radio.checked) {
      section13Question++
      section13Total += +radio.value
    }
  })

  //Section 5.2
  section14.forEach(function(radio, index) {
    if (radio.checked) {
      section14Question++
      section14Total += +radio.value
    }
  })

    //Section 6.1
  section15.forEach(function(radio, index) {
    if (radio.checked) {
      section15Question++
      section15Total += +radio.value
    }
  })

  //Section 6.2
  section16.forEach(function(radio, index) {
    if (radio.checked) {
      section16Question++
      section16Total += +radio.value
    }
  })

   //Section 6.3
  section17.forEach(function(radio, index) {
    if (radio.checked) {
      section17Question++
      section17Total += +radio.value
    }
  })


    //Section 7.1
  section18.forEach(function(radio, index) {
    if (radio.checked) {
      section18Question++
      section18Total += +radio.value
    }
  })

  //Section 7.2
  section19.forEach(function(radio, index) {
    if (radio.checked) {
      section19Question++
      section19Total += +radio.value
    }
  })


    //Section 8.1
  section20.forEach(function(radio, index) {
    if (radio.checked) {
      section20Question++
      section20Total += +radio.value
    }
  })

  //Section 8.2
  section21.forEach(function(radio, index) {
    if (radio.checked) {
      section21Question++
      section21Total += +radio.value
    }
  })

//Abspeicherung der Daten
  //Dimension 1
  let sect1 = encodeURIComponent(((section1Total + section2Total + section3Total) / 3).toFixed(2)) 

  //Dimension 2
  let sect2 = encodeURIComponent(((section4Total + section5Total + section6Total) / 3).toFixed(2))

   //Dimension 3
  let sect3 = encodeURIComponent(((section7Total + section8Total + section9Total) / 3).toFixed(2))

   //Dimension 4
  let sect4 = encodeURIComponent(((section10Total + section11Total + section12Total) / 3).toFixed(2))

   //Dimension 5
  let sect5 = encodeURIComponent(((section13Total + section14Total) / 2).toFixed(2))

   //Dimension 6
  let sect6 = encodeURIComponent(((section15Total + section16Total + section17Total) / 3).toFixed(2))

   //Dimension 7
  let sect7 = encodeURIComponent(((section18Total + section19Total) / 2).toFixed(2))

   //Dimension 8
  let sect8 = encodeURIComponent(((section20Total + section21Total) / 2).toFixed(2))

  //Weiterleitung zu den Ergebnissen
  window.location.href = "result.html?section1="+sect1+"&section2="+sect2+"&section3="+sect3+
  "&section4="+sect4+"&section5="+sect5+"&section6="+sect6+"&section7="+sect7+"&section8="+sect8;
}