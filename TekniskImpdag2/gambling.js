	var number = document.querySelector('.number');
	var upArrow = document.querySelector('.up');
	var downArrow = document.querySelector('.down');
	var currentNumber = 1;

	upArrow.addEventListener('click', function() {
		if (currentNumber < 70) {
			currentNumber++;
			number.innerHTML = currentNumber;
		}
	});

	downArrow.addEventListener('click', function() {
		if (currentNumber > 0) {
			currentNumber--;
			number.innerHTML = currentNumber;
		}
	});
    

    var number2 = document.querySelector('.number');
	var upArrow2 = document.querySelector('.up');
	var downArrow2 = document.querySelector('.down');
	var currentNumber2 = 1;

	upArrow2.addEventListener('click', function() {
		if (currentNumber2 < 40) {
			currentNumber2++;
			number2.innerHTML = currentNumber2;
		}
	});

	downArrow2.addEventListener('click', function() {
		if (currentNumber2 > 0) {
			currentNumber2--;
			number2.innerHTML = currentNumber2;
		}
	});

    var number = document.querySelector('.number');
	var upArrow = document.querySelector('.up');
	var downArrow = document.querySelector('.down');
	var currentNumber = 1;

	upArrow.addEventListener('click', function() {
		if (currentNumber < 3) {
			currentNumber++;
			number.innerHTML = currentNumber2;
		}
	});

	downArrow.addEventListener('click', function() {
		if (currentNumber > 1) {
			currentNumber--;
			number.innerHTML = currentNumber;
		}
	});

    function generateNumbers() {
        var numbers = [];
        var min = 1;
        var max = 70;
      
        for (var i = 0; i < 12; i++) {
          var num = Math.floor(Math.random() * (max - min + 1)) + min;
          numbers.push(num);
        }
      
        var output = "";
        for (var j = 0; j < 3; j++) {
          for (var k = 0; k < 4; k++) {
            var index = j * 4 + k;
            output += numbers[index] + " ";
          }
          output += "<br>";
        }
      
        var numbersDiv = document.getElementById("numbers");
        numbersDiv.innerHTML = output;
      }
      
      var maxNum = 70; 
var rows = 3;
var cols = 4;

function generateNumbers() {
  var numbers = [];
  var min = 1;
  var max = maxNum;


  for (var i = 0; i < rows * cols; i++) {
    var num = Math.floor(Math.random() * (max - min + 1)) + min;
    numbers.push(num);
  }

 
  var output = "";
  for (var j = 0; j < rows; j++) {
    for (var k = 0; k < cols; k++) {
      var index = j * cols + k;
      output += numbers[index] + " ";
    }
    output += "<br>";
  }


  var numbersDiv = document.getElementById("numbers");
  numbersDiv.innerHTML = output;

  
  if (maxNum === 70) {
    maxNum = 40;
    rows = 2;
    cols = 2;
  } else {
    maxNum = 70;
    rows = 3;
    cols = 4;
  }
}
