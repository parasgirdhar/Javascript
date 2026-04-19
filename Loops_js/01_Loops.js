let data;
for(let i=0;i<10;i++){
     data = i;
    
}
console.log(data);

for(let i=0 ; i<=10;i++){
    for(let j=0;j<=10;j++){
      console.log(i + `*`+ j+ `=`+ + i*j);
    }
}

let myarr=[`paras`,`is `,`a`,`real`,`developer`]
for(let i=0;i<myarr.length;i++){
    console.log(`array length is:`+ + myarr.length)
let FetchData=myarr[i];
   console.log(FetchData);
}

// use of break statement.....

for(let i=1;i<=10;i++){
    if(i==5){
        console.log(`5 is detected`)
        // break;         // break helps to break the loop...
        continue;        // continue helps to continue loop.....
    }
    console.log(`value is ${i}`)
}