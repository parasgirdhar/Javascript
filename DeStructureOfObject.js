
// Destructuring  of  Objects......

const course={

name: "java-course",
Duration : "6 month",
cost : 2200,
place : "Delhi"
}


console.log(course.name);

const {Duration : time, cost : price, place : Area}=course;  // also known as concept of Props used in react..

console.log(time);
console.log(price);
console.log(Area);


                        // pehla values andeya si xml de form vich hun andey json de form vich...

                        