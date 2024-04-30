const express= require('express');
const cors= require('cors');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(cors({origin: "http://localhost:8000",
methods: ["GET,PUT,POST"],}));

app.get("/",(req,res)=>{
res.send('<h2>hi node✌️</h2>')
})


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get("/getdata",(req,res)=>{
fetch('https://coinoneglobal.in/template/webappGeneral.asmx/FnGetTemplateList?PrmCmpId=1&PrmGroupId=18&PrmSubGrpId=0&PrmDesc=&PrmType=All')
.then((res)=> res.json())

  .then((response) => res.json(response));

// .catch(err=>console.log(err))

})

app.get("/getresponse",(req,res)=>{
fetch('https://coinoneglobal.in/TERESA_PRD/webapplog.asmx/FnGetUserLogIn?PrmUserName=superadmin&PrmPassword=SuperAdmin@123')
.then((res)=>res.json())
.then((response)=>res.json(response))
})


app.listen(8000,function(){
console.log('connected😊');
})

