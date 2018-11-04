class User {
    constructor(firstName, lastName,birthDate, role) {
    this.firstName = firstName;
    this.lastName = lastName;
   // this.gender=gender;
    this.birthDate=birthDate;
    //this.image=image;
    this.role = role;
    }
    displayUser(){
        console.log(this.firstName,this.lastName,this.birthDate, this.role);
    }
     getAllValidationErrors(){
        var errorMessages = [];
        var errorMessage = "";
        //1. validate firstname
        errorMessage = User.commonRulesValidationForName(this.firstName,30);

        if(errorMessage){
            errorMessages.push(errorMessage);
            errorMessage = "";
        }
        errorMessage = User.commonRulesValidationForName(this.lastName,30);

        if(errorMessage){
            errorMessages.push(errorMessage);
            errorMessage = "";
        }
        errorMessage = User.validateBirthDate(this.birthDate);

        if(errorMessage){
            errorMessages.push(errorMessage);
            errorMessage = "";
        }
        errorMessage = User.validateRole(this.role);

        if(errorMessage){
            errorMessages.push(errorMessage);
            errorMessage = "";
        }
   
        return errorMessages;
    }
    static commonRulesValidationForName(name,len){
        var errorMessage="";
        var str=name.length;
        var ch=String(name);
     
        if(str!=0)
        {
            if((/[0-9]/.test(ch)))
            {
                errorMessage="Only alpha characters are allowed!";
            }
            else
            if(str<=2)
            {
                errorMessage ="Minimum required characters is 3!";
            }
            else
            if(str>=len)
            {
                errorMessage="Maximum allowed characters is "+len+"!";
            }
            else
            if(str>=2 && str<len && !(/[0-9]/.test(ch)) )
            {
                errorMessage="";
            }
    
        }
        return errorMessage;
    }
    static validateBirthDate(birthDateArg){
     
        var errorMessage="";
        if(birthDateArg=="")
        {
            var errorMessage="Birth Date is required!";
        }
        else  if(birthDateArg!="")
        {
            var today = new Date();
            var dd = today.getDate();
            var mm = today.getMonth()+1;
            var yyyy = today.getFullYear();
            if(dd<10) {
            dd = '0'+dd
            } 
            if(mm<10) {
            mm = '0'+mm
            } 
            today = mm + '/' + dd + '/' + yyyy;
            var birthYear = new Date(birthDateArg);
            var year = birthYear.getFullYear();
            var difference=yyyy-year;
            if(difference<=18)
            {
                 errorMessage="The minimum age is 18 years!";
            }
            else
            if(difference>=45)
            {
                 errorMessage="The maximum age is 45 years!";
            }
            else
            if(difference>=18 &&difference<=45)
            {
                 errorMessage="";
            }
        }
        return errorMessage;
    }

    static validateGender(maleArg,femaleArg)
    {
        var errorMessage="";
        if(maleArg.checked==false && femaleArg.checked==false)
        {
            document.getElementById("genderMessage").innerHTML="Select a gender!";
        }
        else
        {
            document.getElementById("genderMessage").innerHTML="";
        }
        return errorMessage;
    }
    static validateRole(roleArg){
        var errorMessage="";
        if(roleArg=="")
        {
             errorMessage="Role is required!";
        }
        else
        {
             errorMessage="";
        }
        return errorMessage;
    }
    static validatefilleInput(fileInputArg){
        var errorMessage="";
        if(fileInputArg==="")
        {
            errorMessage="Image is required!";
        }
        else
        {
            errorMessage="";
        }
        return errorMessage;
    }
}





