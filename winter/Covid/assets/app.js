url = "https://api.rootnet.in/covid19-in/stats/latest"

bodyBlock = document.querySelector("#bodyBox")
searchText = document.querySelector("#searchText")
searchButton = document.querySelector("#searchButton")
console.log(bodyBlock,searchButton);


box = (x) => {
    return `<div style="min-width:161px" id = ${x.loc} class="flexClassForDivs">
    <h3>${x.loc}<h3>
    <h6 >Confirmed Cases : ${x.confirmedCasesIndian}</h6>
    <h6>Deaths : ${x.deaths}</h6>
    <h6>Discharged : ${x.discharged}</h6>
</div>`
}



const filterElements = async() => {
    const res = await fetch(url)
    resData = await res.json()
    searchData = searchText.value
    console.log(resData.data.regional);
    if(searchData in resData.data.regional){
        alert("Found")
    } 
    else {
        alert("Not Found")
    }
}


const info = async() =>{
    const res= await fetch(url)
    data = await res.json()
    for(i in data.data.regional){
        // console.log(data.data.regional[i]);
        x=box(data.data.regional[i])
        bodyBlock.insertAdjacentHTML("beforeend", x)
    }
}

searchButton.addEventListener('click', filterElements);
info()