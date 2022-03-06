const express=require('express');  //in express variable data is stored whihc was exported from the express that exist in the node module.

//console.log(express);

const app=express();    // express is function which is invoked here.

//console.log(app);

app.get("/home",function (req,res){  // get is used to get data from the server.
    res.send("home");
})

app.get("/books",(req,res)=>{  // here get is function which takes two arguments one routs and other is call back function which also take two auguments i.e request and Responce
    res.send("{Book1:Mathematics,Book2:Physics,Book3:Chemistry,Book4:Biology");
})
app.listen(4000,()=>{       // it is having port and call back function.  port is a logical address.
    console.log("Listening on port 4000");
})

// Important Notes--- express always looks methods +Rout   so what is rouut in wesite the thing that comes after .com that is rout and till .com DNS IS DOMAIN NAME SYSTEM.

// METHOD IS get-->is used to get data from the server

//           post-->save data to the server.

//     put/patch---->update data in the server

     // delete is used to delete the data from the server.

     // lets understand what is loalhost and port---->   so our computer is local host which havin all the information and port is logical address so whenever cliet reqest then express goes to the local host and tries to find the port when port is found then sees what methos and what routs  acoording to that excutes.