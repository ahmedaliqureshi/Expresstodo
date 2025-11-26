//why:- we are importing the express because we are 
// using the get,post and put method 

// where:- we are importing it before we write any code 
// because for the code to run we need those lib

//what;- we use the import key word and then name of the 
// library which is taking it form express in string 
import express from "express"; 

//why:-then we are importing the dotenv becuase it 
// keeps the information hidden and can be used with 
// variable to call that specific variable data 

// where:- again we are doing this before we write any 
// code because we need to use it in following code/program 

//what:- the way we import the libraries form other places 
// are universally same as other 

import dotenv from "dotenv"; 


//why;- now if the dotenv files are kept sperated form our main 
// code program or code cannot acess it, that will result in error 

// where:- that is when we write the dotenv.config() to load the data 
// form dotenv file

// what:- the dotenv will be followed with .config() to import thr 
// files form the dotenv 

dotenv.config(); 


//why:- we are taking a const app and assigning it to express function
// to ___, and making sure the name of the file is same as const here

//where:- we are doing this because we want app to have express libraries and methods 

// what:- const app will not change through out the program so it will remain same 

const app= express(); 

// why;- port are the keyword which help us to communicate between the client and server and keep it in env file 
// as it is an sensitve info 

// where:- we are doing it again before the main code is written and this will help us to make the program run effeceintly 

// what:- we will 1st declare it with const port, then process or take values form env file 

const PORT = process.env.PORT;


//why:- in creating our 1st api, we are going to use the file name and use get method 
// the reason we are using the get method is that to check if it is working or not 
// then with in the method we will be getting the data from the user as request and then 
// sending it back with response 

// where & what:- then we are going to use "/" as it is made for testing the api, they all will be 
// written with in the get method as the program will go to root of the borwser 
// then request to user and reponds to user and to reduce the complexity of the code 
// we will use arrow function and with in the function we will use try catch block 

// to test our api we are storing a variable with a value and then printing it 
app.get("/",(req,res)=>{
    try {
        let a=10; 
        console.log(a); 
        
    } catch (error) {
        console.log(error.message,error.name);
        // if the api did not work then we are sendig the user that there was internal server error 
        // the status method helps us to take the existing port number which are assigned for showing status of the server 
        //  then we are using the json method to show the erro to user, the json method only passes in object 
        // hence the message is kept in object 
        res.status(500).json({msg:error})

    }
})

//why:- but now we need to pass just a text message here, so we will make 
// another api 

//where and what:- so same file name, get method then with in the get method we are going to use 
// the two parameter one is the home root and other is request and response method wtih the arrow funciton 
// the arrow function will consist of try catch block method, with in the try catch block method 
// we will pass a simple text message in then in catch block will pass the error message and then res to user 

app.get("/class",(req,res)=>{
    try {
        console.log('this is my 1st api');
    } catch (error) {
        console.log(error.message, error.name);
        res.status(500).json({mssg:erro});
    }
})

// why;- to show the code is running or not on the client side, we will be using the listen method 
// the above proogram will only give us output in terminal but we cannot see it in post man 

// where:- listen method is witten becuase it tells us that the whole program is running with out any 
// errors 

// what:- the listen method will consist of the file name. listen where in the paratehisis 
// we will use the port which we are using, then a plain arrow funciton that consist of the simple 
// text message 

app.listen(PORT,()=>{
    console.log(`server is up and runnign http://localhost:${PORT}`);
})