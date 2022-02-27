$(document).ready(function() {
    const array = iceCreamFlavors
    let flavorList = [];
    array.forEach(function(element) {
        flavorList.push("<li>" + element + "</li>" + "<br>");
    });

    // let final = flavorList.toString();
    console.log(flavorList);
    
    $(".ice-cream-list").append(flavorList);
 })
