
function Validation(email){
    var email=document.data.email.value;
    var first_name=document.getElementById("first_name").value;
    var last_name=document.getElementById("last_name").value;;
    var gender=document.data.gender.value;
    var batch=document.data.batch.value;
    
    console.log(first_name);
    console.log(last_name);
    console.log(gender);
    console.log(email);
    console.log(batch);
  
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))
  {

    return true;
  }else{
    alert("Invalid email");
  }   
}