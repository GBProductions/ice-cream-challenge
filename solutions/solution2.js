$(document).ready(function() {
    const array = iceCreamFlavors
    let flavorList = [];

    for (let i = 0; i <= array.length; i  +=1) {
        flavorList.push("<li>" + array[i] + "</li>" + "<br>")
    }

    // let final = flavorList.toString();
    console.log(flavorList);
    
    $(".ice-cream-list").append(flavorList);
 })
