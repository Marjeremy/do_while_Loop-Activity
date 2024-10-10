function promptPassword (){
    const correctPassword = "ILoveyou3000";
    let userPassword;

    do {
        userPassword = prompt("Enter your password:");

        if(userPassword !== correctPassword) {
            alert("incorrect, try again.");  
        }
    }while (userPassword !== correctPassword);

    alert("Access granted.");
}