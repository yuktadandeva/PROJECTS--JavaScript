var height, weight, bmi;

function getValues(){
  height = document.getElementById("height").value;
  console.log(height);
  weight = document.getElementById("weight").value;
  console.log(weight);
  
}

function calculate(){
    if(isNaN(height)||isNaN(weight)|| height ==0|| weight==0){
        alert("Enter valid values.");
        document.getElementById("output").value = "";
       }
       else{
      bmi = weight/(height*height);
        bmi=bmi.toFixed(1);

    if(bmi)
    console.log(bmi);
    document.getElementById("output").value = bmi;
    checkBmi();}
  
}
function checkBmi(){
    if(bmi <= 18.5){
        document.getElementById("statement").innerText = 'Underweight';
    }
    else if(bmi < 24.9 && bmi > 18.5){
        document.getElementById("statement").innerText = 'Normal Weight';
    }
    else if(bmi < 29.9 && bmi > 25){
        document.getElementById("statement").innerText = 'Overweight';
    }
    else{
        document.getElementById("statement").innerText = 'Obesity';
    }
}
//Underweight = <18.5
//Normal weight = 18.5–24.9
//Overweight = 25–29.9
//Obesity = BMI of 30 or greater