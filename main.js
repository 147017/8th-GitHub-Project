var guests = [];
var guests_display = [];
var results_display = [];
var a;
var b;
var c;
var items = [];

function list() {
    document.getElementById("input").innerHTML="";
    guests_display = [];
    guests.push(document.getElementById("input").value);
    guests.sort();
    for (var i = 0; i < guests.length; i++) {
        guests_display.push("<h4>" + guests[i] + "</h4>");        
    }
    
    document.getElementById("list").innerHTML= guests_display.join(" ");
}
function search() {
    document.getElementById("search").innerHTML="";
    a = "";
    b = "";
    c = "";
    items = [];
    results_display = [];
    var search_value = document.getElementById("search").value;
    for (var i = 0; i < guests.length; i++) {
        a = guests[i];
        b = a.toLowerCase();
        c = search_value.toLowerCase();
        if (b.includes(c)){
            items.push(search_value);
        }
    }
    for (var i = 0; i < guests.length; i++) {
       results_display.push("<h4>" + items[i] + "</h4>");        
    }
}