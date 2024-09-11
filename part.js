function calculateTax(income, expenses) {

    if(income < 0 || expenses < 0 || income < expenses){
        return "Invalid Input";
    }

    const total = income - expenses;

    const tax = total * .20;

    return tax;
}

const menu = calculateTax(20000, 23000);
console.log('output',menu);

// problem-01-end


// problem-02-start



// function sendNotification(email) {
    
//     if(!email.includes("@")){
//         return "Invalid Email";
//     }

//     let main = email.split("@")
//     let res = main[0] + " sent you an email from " + main[1]
//     return res;

// }

// const item = sendNotification("nasiruddinanik54gmail.com");
// console.log('output : ',item);


// problem-02-end


// problem-03-start


// function checkDigitsInName(name) {
    
//     if(typeof name !== "string"){
//         return "Invalid Input"; 
//     }

//     for(let i = 0; i < name.length; i++){
//         if(name[i] >= "0" && name[i] <= "9" && !Array.isArray(name)){
//             return true;
//         }
//     }

//     return false;

// }

// const menu = checkDigitsInName("12345");
// console.log('output : ',menu);


// problem-03-end




// problem-04-start


// const menu1 = {
//     name: "Rajib",
//     testScore: 45,
//     schoolGrade: 25,
//     isFFamily : true
// }

// const menu2 = {
//     name: "Rajib",
//     testScore: 45,
//     schoolGrade: 25,
//     isFFamily : false
// }

// const menu3 = {
//     name: "Rajib",
//     testScore: 15,
//     schoolGrade: 25,
//     isFFamily : true
// }


// function calculateFinalScore(obj) {
    
//     if(typeof obj !== "object"){
//         return "Invalid Input";
//     }

//     let totalScore = obj.testScore + obj.schoolGrade;

//     if(obj.isFFamily){
//         totalScore = totalScore + 20;
//     }
//     console.log(totalScore);

//     if(obj.isFFamily && totalScore >= 80){
//         return true;
//     }

//     else if(obj.isFFamily && totalScore < 80){
//         return false;
//     }

//     else{
//         return false;
//     }
// }

// console.log(calculateFinalScore(1234));



// problem-04-end



// problem-05-start


// function  waitingTime(waitingTimes  ,serialNumber) {

//     if(!Array.isArray(waitingTimes) || typeof serialNumber !== "number"){
//         return "Invalid Input";
//     }
    
//     let sum = 0;
//     for(let i = 0; i < waitingTimes.length; i++){
//         sum = sum + waitingTimes[i];
//     }

//     const avarage = sum / waitingTimes.length;
    
//     const interviewTime = Math.round(avarage)
    
//     const beforeSerialNumber = serialNumber - 1;

//     const isLeftSerialNumber = beforeSerialNumber - waitingTimes.length;

//     const isratInterviewTime = interviewTime * isLeftSerialNumber;

//     return isratInterviewTime;


// }

// const item = waitingTime(true,5);
// console.log(item);

// problem-05-end





