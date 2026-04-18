// Switch case........

const Userdata=3;

switch (Userdata) {
    case 1:
        console.log("Password incorrect")
        break;
    case 2:
        console.log("Data-Fetched")
        break;
    case 3:
        console.log("Real-Data-Accessed")
        break;
    case 4:
        console.log("Data-Incorrect")
        break;

    default:
        console.log("This is default case");
        break;
}


// also used in another way.....
let data = "UserAccess";

switch(data){
     
    case "AdminAccess":
        console.log("data fetched");
        break;
    case "ClientAccess":
        console.log("data fetched");
        break;
    case "DeveloperAccess":
        console.log("data fetched");
        break;
   
    default:
        console.log("Access Denied")
        break;
}


// Testing Truthy or Flase....
// here are some symbol or things which js assume false always...
// " " , Empty string , false , 0 , -0 , null , Nan , undefined ,    BigInt On 

const DataChecked = [] // it run data is fetched beacuse it assume this true....

if(DataChecked){
console.log("Data is fetched")
}
else{
    console.log("There is no data")
}