alert('The page you will see is GREAT!');


myForm.onSubmit = function(){
    let myForm = document.forms.myForm;
    let message = document.getElementById("message");
    
    if(myForm.favSportsTeam.value == "") {
        message.innerHTML = "Enter a value in one of the boxes";
        return false;
    } else{
        message.innerHTML = "";
        return true;
    }
};

myForm.name.onFocus = function(){
    myForm.name.style.border = "3px dashed cyan"
};