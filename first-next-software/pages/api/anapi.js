export default (req,res)=> {
    // res.end("Salamoon Salama from An API From Next Js 13");
    res.statusCode==200
    res.setHeader('Content-Type','application/json');
    res.end(JSON.stringify({name:"Rabbil Hasan"}))
}