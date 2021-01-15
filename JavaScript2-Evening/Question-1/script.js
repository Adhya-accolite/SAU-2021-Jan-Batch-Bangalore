class input {
    constructor(param) {
        this.input = param;
    }
    calculateLength() {
        return this.input.length;
    };
    getUpperCase() {
        return this.input.toUpperCase();
    };
    getLowerCase() {
        return this.input.toLowerCase();
    };
    getVowel(){
        return (this.input.match(/[aeiou]/gi)||[]).length;
    };
    getConsonant(){
          return (this.input.match(/[^aeiou]/gi)||[]).length;
    };
    getPresent()
{
     var flag=/\d/.test(this.input); 
    if(flag){
        alert("String contains number")
return;
    }
   return true;
};
}

function callFunction() {
    var inputValue = document.getElementById("inputTxt").value;
    let inputObject = new input(inputValue);
    document.getElementById("lengthOp").innerHTML = inputObject.calculateLength();
    document.getElementById("ucOp").innerHTML = inputObject.getUpperCase();
    document.getElementById("lcOp").innerHTML = inputObject.getLowerCase();
    document.getElementById("vowel").innerHTML = inputObject.getVowel();
    document.getElementById("conso").innerHTML = inputObject.getConsonant();
     inputObject.getPresent();
    
}