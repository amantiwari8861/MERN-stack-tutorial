async function testFetchAPI() 
{
    let url = "https://github.com/";

    let response = await fetch(url);
    if (response.ok) { // if HTTP-status is 200-299
        // get the response body 
        let json = await response.json();
        console.log(json)
    }
    else {
        console.log("HTTP-Error: " + response.status);
    }
}
testFetchAPI();