
var cookie = Cookies.get('chip');
var cookie = Cookies.get('sugar');
var coookie= Cookies.get('lem');

if(!cookie) {
   Cookies.set("chip", 0);
   console.log(Cookies.get('chip'));
   Cookies.set("sugar", 0);
   console.log(Cookies.get('sugar'));
   Cookies.set('lem', 0);
   console.log(Cookies.get('lem'));
   


}






   document.querySelector("#chip").onclick = function(){
       console.log(Cookies.get("chip"));
       Cookies.get("chip");
       var amt = Cookies.get("chip");
       console.log(1, 2, amt)
       amt++;
       Cookies.set("chip", amt);
       document.querySelector("#buy").textContent = amt;
   }



   document.querySelector("#sugar").onclick = function(){
    console.log(Cookies.get("sugar"));
    Cookies.get("sugar");
    var amt = Cookies.get("sugar");
    console.log(1, 2, amt)
    amt++;
    Cookies.set("sugar", amt);
    document.querySelector("#buy2").textContent = amt;
}


document.querySelector("#lem").onclick = function(){
    console.log(Cookies.get("lem"));
    Cookies.get("lem");
    var amt = Cookies.get("lem");
    console.log(1, 2, amt)
    amt++;
    Cookies.set("lem", amt);
    document.querySelector("#buy3").textContent = amt;
}


document.querySelector("#weight-watchers").onclick = function(){
    Cookies.set("chip", 0);
    document.querySelector("#buy").textContent = 0;
    Cookies.set("sugar", 0);
    document.querySelector("#buy2").textContent = 0;
    Cookies.set("lem", 0);
    document.querySelector("#buy3").textContent = 0;
}