const url = "https://cat-fact.herokuapp.com/facts";

fetch(url).then( (response) => {
    console.log("We got the response!")
    return response.json();
}).then( (jsonObject) => {
    console.log("Look we have JSON now!");
    console.log(jsonObject);
    doStuffWithJSON(jsonObject);
}).catch( (response) => {
    console.log("something went wrong");
    console.log(response);
})

function doStuffWithJSON(data) {
    document.getElementById("api-title").textContent = "Cat Facts! 😻";
    
    let output = "";
    for(let i = 0; i < data.length; i++) {
        output = output + data[i].text + "<br>";
        console.log(data[i]);
    }
    document.getElementById("data").innerHTML = output;
}
