// Primitive data types are stored in Stack memory.
// When we assign a primitive value to another variable,
// JavaScript creates a COPY of that value.
// So if we change the new variable, the original value does NOT change.

let user = "paras girdhar";

let newUser = user;  // copy of the value is created

newUser = "coder";

console.log(newUser);
console.log(user); 
// Output shows that the original value is unchanged
// because only the copied value was modified.



// Non-primitive data types (Objects, Arrays, Functions) are stored in Heap memory.
// When we assign them to another variable, JavaScript does NOT create a copy.
// Instead, it gives a REFERENCE to the same object in memory.
// That means both variables point to the same data.
// If we modify the object using one variable, the change will reflect in the other.

let mypin = {
    age: "22",
    email: "parasadmin@123",
    college: "cgc,landran",
}

let UpdatedPin = mypin;  // reference to the same object

UpdatedPin.email = "parasy219@gmail.com";  // modifying the object

console.log(mypin);      
console.log(UpdatedPin); 
// Both outputs show the updated email
// because both variables reference the same object in heap memory.