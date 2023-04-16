import express from 'express';
const app = express();
const students=[
    {
        id:1,
        name:"Esraa",
        city:"cairo",
    },
    {
        id:2,
        name:"Basma",
        city:"GIZA",
    },
    {
     id:3,
     name:"Alaa",
     city:"Alexandria",
    },
    {
        id:4,
        name:"Noran",
        city:"Giza",
       },
       {
        id:5,
        name:"Eman",
        city:"Cairo",
       },
       {
        id:6,
        name:"Alaa",
        city:"Alexandria",
       },
       {
        id:7,
        name:"Esraa",
        city:"ALX",
       },
       {
        id:8,
        name:"Esraa",
        city:"Alexandria",
       },
       {
           id:9,
           name:"Noran",
           city:"Giza",
      },
     {
           id:10,
           name:"Eman",
           city:"Cairo",
     },
     {
           id:11,
           name:"Aya",
           city:"Alexandria",
     },
     {
           id:12,
           name:"Esraa",
           city:"ALX",
     },
];
const student =(request,response) =>{
   
    let output = "<ul>"
    for (let i = 0; i < students.length; i++) {
        const student =students[i];
        output += "<li>" + student.name + "</li>";
    }
    output += "</ul>"
    response.send(output)
}




app.get("/students",student)
app.listen(3000);