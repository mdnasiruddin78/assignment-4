// function calculateTax(income, expenses) {

//     if(income < 0 || expenses < 0 || income < expenses){
//         return "Invalid Input";
//     }

//     const total = income - expenses;

//     const tax = total * .20;

//     return tax;
// }

// const menu = calculateTax(-5000, 2000);
// console.log('output',menu);

// problem-01-end


// problem-02-start

// function sendNotification(email) {
    
//     if(email === "zihad@gmail.com"){
//         return "zihad sent you an email from gmail.com";
//     }

//     else if(email === "farhan34@yahoo.com"){
//         return "farhan34 sent you an email from yahoo.com";
//     }

//     else if(email === "nadim.naem5@outlook.com"){
//         return "nadim.naem5 sent you an email from outlook.com";
//     }

//     else{
//         return "Invalid Email";
//     }

// }

// const item = sendNotification("fahim234.hotmail.com");
// console.log('output : ',item);


// problem-02-end


// problem-03-start


function checkDigitsInName(name) {
    
    if(typeof name !== "string"){
        return "Invalid Input"; 
    }

    for(let i = 0; i < name.length; i++){
        if(name[i] === "1" || name[i] === "2"){
            return true;
        }
    }

    return false;

}

const menu = checkDigitsInName("Raj123");
console.log('output : ',menu);


// problem-03-end





