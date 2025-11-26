//why:- we are importing express because we need to use 
// methods like the port,put and get 

//where:- we are doing this at the start of the program 
//so we can use it through out the program 

// what:- we are goig to use import key word and pass the 
// package name in strin 

// how:- 1st we will write import keyword, then use express word 
// from express 
import express from "express"; 

//why:- instlaling dotenv file to keep the sensitive data safe and acess 
// the data from 

//where;- we keeping it too be used later on by the 
// the program 

//what:- we are uising import key word to import and rest are same 
// as previous import patten 

import dotenv from "dotenv"; 


//why:- then we are keeping the express function in the app variable 

//where:- we are keeping it in the initial part of the code 
// this to make sure to be used later on 

// what:- we using content key word to make the variable 
// constent and that will not be changed through out the program 

const app= express(); 


//why:- to use the http methods in our code we need to use express and json 
// method where the express is creating things in json 

// where:- this line of code is written in the intial phase as it will be used 
// later down the line

// what:- the express function in app will use the express function in parathesis and 
// take the input data and store it in json

app.use(express.json());


// why:- then to check everything we are creating test api 

// where:- this will be made right after the import code 

// what:- we wil make a demi api 

app.get("/",(req,res)=>{
 try {
       //pass a string or any thing to check 
    console.log('this api is working'); 
    // pasing the response with the working port number 
    res.status(200).json({"message":"api is working some how"})
 } catch (error) {
    console.log(error.message, error.name); 
    res.status(500).json({"messgae":"error"});
 }
})
// why:- now to get the data form the user, we need to 
// use post, post help takes the data form the user and 
// then send it back to server 

//where:- this will be our 1st api after testing 
// this will help us to get the data from the user 

//what:- the post mehtod will be written same as previous ones
// and the method name will be post 

app.post('/login',(req,res)=>{
    try {
        // we are making a variable that will acess the body of the json file 
        let userData = req.body;
        //then we are going to show the data 
        console.log(userData); 
        //then we are going to acess the data of email and password form the body 
        let email= userData.email;
        let password= userData.pass;
        res.status(200).json({msg:"accunt is created"})
    } catch (error) {
        cosnsole.log(error.message, error.name);// printing normal error message
        res.status(500).json({mssg:error})// showing output as internal error in object format
    }
})
// why:- put is used to update the exisiting data, this will update the user data 
// that already existsted 

// where:- this is written after post, so we can update the existing data, this cannot be written 
// before post becuase there is noting to update 

// what:- we are going to use put method, in it same req and res with arrow function 
// and then try catch block 

app.put("/update",(res,req)=>{
    try {
        //we are updating the data present in the body, for it we are going to use let 
        // variable andd update the data form the body

        let updateData=req.body; 
        console.log(updateData);
        res.status(200).json({msg:"Account updated"})
        
    } catch (error) {
        console.log(error.message, error.name); 
        res.status(500).json({message:error});
    }
})

//why;- now if the user decided to delete the account we need to create an api for it as well 
// this will remove the account form the database 

//where:- we are writing this at the end of the code as it help us to maintain it and keep the code 
// organised 

// what:- it is a method that deletes the account detials 

app.delete("/delete",(req,res)=>{
    try {
        //we are going to delete the email and then we are going to delete the data as well 
        let userData = req.body; 
        let userEmail = userData.email;
        res.status(200).json({"account deleted"});
    } catch (error) {
        console.log(error.message,error.name);
        res.status(500).json({message:error})
    }
})

app.listen(PORT,()=>{
    console.log(`server is runnign at http://localhost:${PORT}`);
})


