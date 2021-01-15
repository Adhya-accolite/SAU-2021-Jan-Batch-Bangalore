function Student(rollNo,firstName,lastName,gender,dob,occupation,course) {
    this.rollNo=rollNo;
    this.name = {
        firstName: firstName,
        lastName: lastName
    };
    
    this.dob= dob;
    this.gender = gender;
    this.course = course;
    this.occupation=occupation;
    
    }
    var ar=[];
    function callValidation(){
    
        var rollNo=document.getElementById("rollNo").value;
        var firstName=document.getElementById("firstName").value;
        var lastName=document.getElementById("lastName").value;
        var gender=document.data.gender.value;
        var dob=document.getElementById("dob").value;
        var occupation=document.getElementById("occ").value;
        var course=document.data.course.value
      
        var student= new Student(rollNo,firstName,lastName,gender,dob,occupation,course);
        ar.push(student)
        console.log(student);
    } 
    function getDetails(){
        var inputValue =document.getElementById("rollNo").value;
        for(var i=0;i<ar.length;i++){
            if(ar[i].rollNo==inputValue)
            {
                console.log(ar[i]);
                
                break;
            }
       
    }}