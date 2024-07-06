var str1, str2;

function getValues(){
    str1 = document.getElementById('firstName').value.toUpperCase() ;
    str2 = document.getElementById('secName').value.toUpperCase() ;
    
    // console.log(str1, str2);
}

function calculate(){
   //got names 
   //now remove common letters
   
    if(/^[a-zA-Z]+$/.test(str1) && /^[a-zA-Z]+$/.test(str2)){
    var char1= str1.split('');
    var char2= str2.split('');
    
    var newChar1 = char1.filter(char=> !char2.includes(char));
    var newChar2 = char2.filter(char=> !char1.includes(char));
    console.log(newChar1, newChar2);

    //counting no of characters left
    var count=0;
    for(let c of newChar1){
     count++;
    }
    for(let c of newChar2){
     count ++;
    }
    // console.log(count);
   
    //flame calculation
    var flames = 'FLAMES';
    var index =0;
    while (flames.length > 1) {
         index = (index + count - 1) % flames.length;
        flames = replaceAt(flames, index, '');
        flames = flames.replace(/ /g, ''); // Remove spaces if any
    }
    // console.log(flames);
    
    switch (flames) {
        case 'F':
          flames = "FRIENDS";
          break;
        case 'L':
          flames = "LOVE";
          break;
        case 'A':
          flames = "AFFECTION";
          break;
        case 'M':
          flames = "MARRIAGE";
          break;
        case 'E':
          flames = "ENEMIES";
          break;
        case 'S':
          flames = "SIBLING";
          break;
      }
      console.log(flames);
      document.getElementById('result').innerText= "YOU GOT "+ flames;}
      else{
        alert("ENTER VALID VALUES");
      }
    } 

function replaceAt(string, index, replace) {
    return string.substring(0, index) + replace + string.substring(index + 1);
  }

function clearAll(){
    document.getElementById('firstName').value = '' ;
    document.getElementById('secName').value = '' ;
    document.getElementById('result').innerText = '';
    str1='';
    str2='';
    
}
