
    var number = document.getElementById('number')
    function add() {
      var add1 = parseFloat(number.textContent) + 1
      number.textContent = add1
      if (!isFinite(parseFloat(number.textContent))) {
        number.textContent="This number may be too big, too low or it may be imaginary.."
    }
    }
    function minus() {
    var minus1 = parseFloat(number.textContent) - 1
    number.textContent = minus1
    if (!isFinite(parseFloat(number.textContent))) {
        number.textContent="This number may be too big, too low or it may be imaginary."
      
    }
    }
    
    function mult() {
    var mult1 = parseFloat(number.textContent) * 2
    number.textContent = mult1
    if (!isFinite(parseFloat(number.textContent))) {
        number.textContent="This number may be too big, too low or it may be imaginary." 
    }
    }
    function div() {
    var div1 = parseFloat(number.textContent) / 2
    number.textContent = div1
    if (!isFinite(parseFloat(number.textContent))) {
        number.textContent="This number may be too big, too low or it may be imaginary."
    }
    }
    function reset() {
    number.textContent = 0
    }
    function squ() {
    var squ1 = Math.pow(parseFloat(number.textContent),2)
    number.textContent = squ1
    if (!isFinite(parseFloat(number.textContent))) {
        number.textContent="This number may be too big, too low or it may be imaginary."
    }
    }
    function squr() {
    var squr1 = Math.pow(parseFloat(number.textContent),0.5)
    number.textContent = squr1
    if (!isFinite(parseFloat(number.textContent))) {
        number.textContent="This number may be too big, too low or it may be imaginary."
    }
    function neg() {
    var neg1 = parseFloat(number.textContent)*(0-1)
    number.textContent = neg1
    if (!isFinite(parseFloat(number.textContent))) {
        number.textContent="This number may be too big, too low or it may be imaginary."
    }
    }
    }