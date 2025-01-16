function validation(){
    var name = document.getElementById("name");

    var valid_name_regex = /^[A-Za-a]+$/;


    var age = document.getElementById("age");

    var valid_age_regex = /^[0-9]+$/;

    //if(valid_name_regex.test(name)){
        //return true;

    //}else{
       // document.getElementById("name-error").style.visibility="visible";
       // document.getElementById("name").style.borderColor="red";
      //  return false;
    //}


//}

if(!(name.matches(valid_name_regex)) || !(age.matches(valid_age_regex)) || (city="")){
    if(!(name.matches(valid_name_regex))){
        document.getElementById("name_error").style.visibility="visible";
        document.getElementById("name").style.borderColor="red";
    }
    else{
        document.getElementById("name_error").style.visibility="hidden";
        document.getElementById("name").style.borderColor="black";
        
    }

    if(!(age.matches(valid_age_regex))){
        document.getElementById("age_error").style.visibility="visible";
        document.getElementById("age").style.borderColor="red";
    }
    else{
        document.getElementById("age_error").style.visibility="hidden";
        document.getElementById("age").style.borderColor="black";
        
    }

    if(city == ""){
        document.getElementById("city_error").style.visibility="hidden";
        document.getElementById("city").style.borderColor="age";
    }else{
        document.getElementById("city_error").style.visibility="hidden";
        document.getElementById("city").style.borderColor="black";
        
    }
    return false;

}else{
    document.getElementById("name_error").style.visibility="visible";
    document.getElementById("name").style.borderColor="red";
    document.getElementById("age_error").style.visibility="visible";
    document.getElementById("age").style.borderColor="red";
    return true;
}