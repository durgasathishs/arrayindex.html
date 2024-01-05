//1. solving problems using array functions on the rest countries data
//a. Get all the countries from the asia continent/ region using the filterfunction
// step1:create a XXHR objects
var request = new XMLHttpRequest();
// step2:API URL
//.open method
// 2 parameters
request.open ("GET","https://restcountries.com/v2/all");
// step3: establishing the bridge
request.send();
//step4: once the data sucessfully received from server
// onload is an event
// when we used : once the data/ server is showing 200 sataus code
request.onload=function(){
    var result =JSON.parse(request.response);
    result.filter((countries)=>{
        return countries.region ==="Asia";
    })
    console.log(result);
}
---------------------------------------------------------------------
//b.Get all the countries with a population of less than 2 lakhs using filter functions
//step1 : create a XHRobject
var request1 = new XMLHttpRequest();
// step2 : API URL
//. open method
//2 parameters
request1.open ("GET","https://restcountries.com/v2/all");
// step3: establishing the bridge
request.send();
//step4: once the data sucessfully received from server
// onload is an event
// when we used : once the data/ server is showing 200 sataus code
request1.onload=function(){
    var result =JSON.parse(request1.response);
    const pop = result.filter ((element)=>{
        return element.population<200000;
    })
    console.log(pop);}
    -------------------------------------------------------------
    //c. print the following details name,capital,flag using foreach function
    step1 : create a XHRobject
var requestt= new XMLHttpRequest();
// step2 : API URL
//. open method
//2 parameters
request1.open ("GET","https://restcountries.com/v2/all");
// step3: establishing the bridge
request.send();
//step4: once the data sucessfully received from server
// onload is an event
// when we used : once the data/ server is showing 200 sataus code
requestt.onload=function(){
    var result =JSON.parse(requestt.response);
    Resultt.forEach(element =>{
        console.log(element.name);
        console.log(element.capital);
        console.log(element.flag);
    });
}
----------------------------------------------------------------------
//d. print the total population of countries using reduce function
// step1:create a XXHR objects
var request = new XMLHttpRequest();
// step2:API URL
//.open method
// 2 parameters
request.open ("GET","https://restcountries.com/v2/all");
// step3: establishing the bridge
request.send();
//step4: once the data sucessfully received from server
// onload is an event
// when we used : once the data/ server is showing 200 sataus code
reques.onload=function(){
    var resul=JSON.parse(reques.response);
    var total = resul.reduce((acc,curr) =>{
        return acc+curr.population;
    },0);
    console.log(total);
}
---------------------------------------------------------
//e. print the country which uses US Dollars as currency
step1:create a XXHR objects
var request = new XMLHttpRequest();
// step2:API URL
//.open method
// 2 parameters
request.open ("GET","https://restcountries.com/v2/all");
// step3: establishing the bridge
req.send();
//step4: once the data sucessfully received from server
// onload is an event
// when we used : once the data/ server is showing 200 sataus code
req.onload=function(){
    var res =JSON.parse(req.response);
    var currency = res.filter((element) =>{
        for (let key in element.currencies){
            if (element.currencies[key].code ==="USD"){
                return element;
    })
    console.log(currency);
}