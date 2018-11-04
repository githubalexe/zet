(function () {
    var firstName=document.getElementById("firstName");
    var lastName=document.getElementById("lastName");
    var birthDate=document.getElementById("birthDate");
    var role=document.getElementById("role");
    var fileInput=document.getElementById("fileInput");
    var firstNameErrorMessage=document.getElementById("firstNameMessage");
    var lastNameErrorMessage=document.getElementById("lastNameMessage");
    var birthDateErrorMessage=document.getElementById("birthDateMessage");
    var roleErrorMessage=document.getElementById("roleMessage");
    var pictureErrorMessage=document.getElementById("pictureMessage");
    var saveButton=document.getElementById("save");
  



    firstName.addEventListener("focusout", function(){
        var errorMessage =User.commonRulesValidationForName(firstName.value,30);
        firstNameErrorMessage.innerHTML=errorMessage;
    });
    lastName.addEventListener("focusout", function(){
        var errorMessage =User.commonRulesValidationForName(lastName.value,50);
        lastNameErrorMessage.innerHTML=errorMessage;
    });
    role.addEventListener("focusout", function(){
        var errorMessage = User.validateRole(role.value);
        roleErrorMessage.innerHTML=errorMessage;
    });
    birthDate.addEventListener("focusout", function(){
       
        var errorMessage = User.validateBirthDate(birthDate.value);
        birthDateErrorMessage.innerHTML=errorMessage;
    });
    fileInput.addEventListener("click", function(){
        var errorMessage = User.validatefilleInput(fileInput.value);
        pictureErrorMessage.innerHTML=errorMessage;
    });
    saveButton.addEventListener("click", function(){

        
        var errorMessage =User.commonRulesValidationForName(firstName.value,30);
        alert(firstName.value);
        firstNameErrorMessage.innerHTML=errorMessage;
         

    });
})();

