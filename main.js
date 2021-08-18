// Defining Table
// Input(s): Recieve weather info
// Processing: Compute which shoe is best for the weather given
// Output(s): Display the best wear type for the given weather

function wearType() {
    let answer = document.getElementById("weather").value
    let footwear = document.getElementById("footwear")
    if (answer.toLowerCase() == "hot") {
        footwear.innerHTML = "sandals"
    } else if (answer.toLowerCase() == "rain") {
        footwear.innerHTML = "galoshes"
    } else if (answer.toLowerCase() == "snow") {
        footwear.innerHTML = "boots"
    } else if (answer.toLowerCase() == "humid" || answer.toLowerCase() == "wind") {
        footwear.innerHTML = "shoes"
    } else {
        footwear.innerHTML = "!!Error, Please enter a corect weather type"
    }

}
