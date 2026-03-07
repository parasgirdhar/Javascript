const accountId=254241;

var  accountEmail= "parasy267@gmail.com";

let accountPassword="admin1267";

// we can change other varibales even after decalration but in the case of const we can't do that.. 



accounttype="student";

//    accountId=5   this is not allowed here beacuse js not allow to  change const...after we declare one time..


console.log(accountId);

accountEmail="adminchange@gmail.com";
accountPassword="1001";
accounttype="developer";
let accountState;


console.table([accountEmail,accountId,accountId,accountPassword,accounttype,accountState]); //this method of console allow us to print multiple things in a table form without too much hustle..