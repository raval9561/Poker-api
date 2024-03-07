console.log("Starting Promise Codes");

//  what if we want MAKE a promise

const randomNumberPromise = new Promise( function(resolve, reject) {
    // return a random number
    const randomNumber = Math.random();
    console.log("Our random number is: " + randomNumber);

    setTimeout(function() {
        if(randomNumber > 0.5) {
            console.log("Larger than 0.5!");
            const result = "resolved";
            resolve(result);
        } else {
            console.log("Smaller than 0.5!");
            const result = "error message";
            reject(result);
        }
    }, 2000);
});

randomNumberPromise.then((result) => {
    console.log("we got the then");
    console.log(result);
}).catch((error) => {
    console.log("we got the catch");
    console.log(error);
});



