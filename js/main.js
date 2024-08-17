


let searchbtn = document.getElementById("search_btn");
let countryinp = document.getElementById("country_inp");

searchbtn.addEventListener("click",function(){
    let countryname = countryinp.value;
    let finalurl = `https://restcountries.com/v3.1/name/${countryname}?fullText=true`;
    console.log(finalurl)
    fetch(finalurl).then((Response) => Response.json())
    .then((data) => {
        // console.log(data)
        // console.log(data[0])
        // console.log(data[0].capital[0])
        // console.log(data[0].flags.svg)
        // console.log(data[0].name.common)
        // console.log(data[0].continents[0])
        // console.log(data[0].population)
        // console.log(Object.keys(data[0].currencies)[0])
        // console.log(data[0].currencies[Object.keys(data[0].currencies)].name)
        // console.log(Object.values(data[0].languages).toString().split(",").join(", "))

        result.innerHTML = `<img src= "${data[0].flags.svg}" class="flag-img">
        <h2> ${data[0].name.common} </h2>

            <div class="data_wrapper">
                <h4>*Capital:</h4>
                  <span> ${data[0].capital[0]} |</span>
                <h4>*Continent: </h4>
                  <span> ${data[0].continents[0]} |</span>
                <h4>*population: </h4>
                  <span> ${data[0].population} |</span>
                <h4>*Currency: </h4>
                  <span> ${data[0].currencies[Object.keys(data[0].currencies)].name} |</span>
                <h4>*Languages: </h4>
                  <span> ${Object.values(data[0].languages).toString().split(",").join(", ")}. </span>
            </div> `;

    }).catch(() => {
        if(countryname.length === 0)
        {
            result.innerHTML = `<h3>the input field cannot be empty </h3>`
        }
        else
        {
            result.innerHTML =  `<h3>please enter a valid country name </h3>`
        }
    })
});