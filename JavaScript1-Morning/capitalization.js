function capital(stmt){
    var new_String="";
for(var i=0;i<stmt.length;i++){
    if(stmt[i]==stmt[i].toLowerCase()){
        new_String= new_String+ stmt[i].toUpperCase();

    }
    else{
        new_String=new_String+ stmt[i].toLowerCase();
    }
}
return new_String;
}
capital('heLLO');