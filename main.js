let elSearchInput = document.querySelector(".search__input")
let elWrapper = document.querySelector(".country-list")
let elCountrySelect = document.querySelector(".country-select")

let elModulWrapper = document.querySelector(".modul-wrapper")
let elModulInner = document.querySelector(".modul-inner")
let elModulContant = document.querySelector(".modal-contant")
let likeCount = document.querySelector(".like-count")
let savedCount = document.querySelector(".saved-count")
const countrys = [
    {
        id: 1,
        name: "Wallis and Futuna",
        capital: "Mata-Utu",
        population: 11750,
        flag: "https://flagcdn.com/wf.svg",
        isLiked: false,
        isBasket: false
    },
    {
        id: 2,
        name: "Iceland",
        capital: "Reykjavik",
        population: 366425,
        flag: "https://flagcdn.com/is.svg",
        isLiked: false,
        isBasket: false
    },
    {
        id: 3,
        name: "Luxembourg",
        capital: "Luxembourg",
        population: 632275,
        flag: "https://flagcdn.com/lu.svg",
        isLiked: false,
        isBasket: false
    },
    {
        id: 4,
        name: "Mali",
        capital: "Bamako",
        population: 20250834,
        flag: "https://flagcdn.com/ml.svg",
        isLiked: false,
        isBasket: false
    },
    {
        id: 5,
        name: "Comoros",
        capital: "Moroni",
        population: 869595,
        flag: "https://flagcdn.com/km.svg",
        isLiked: false,
        isBasket: false
    },
    {
        id: 6,
        name: "Australia",
        capital: "Canberra",
        population: 25687041,
        flag: "https://flagcdn.com/au.svg",
        isLiked: false,
        isBasket: false
    },
    {
        id: 7,
        name: "Estonia",
        capital: "Tallinn",
        population: 1331057,
        flag: "https://flagcdn.com/ee.svg",
        isLiked: false,
        isBasket: false
    },
    {
        id: 8,
        name: "Canada",
        capital: "Ottawa",
        population: 38005238,
        flag: "https://flagcdn.com/ca.svg",
        isLiked: false,
        isBasket: false
    },
    {
        id: 9,
        name: "Belarus",
        capital: "Minsk",
        population: 9398861,
        flag: "https://flagcdn.com/by.svg",
        isLiked: false,
        isBasket: false
    },
    {
        id: 10,
        name: "Guyana",
        capital: "Georgetown",
        population: 786559,
        flag: "https://flagcdn.com/gy.svg",
        isLiked: false,
        isBasket: false
    }
]
function renderCountrys(arr) {
    elWrapper.innerHTML = null
    arr.map(item => {
        let countrysItem = document.createElement("li")
        countrysItem.className = "w-[270px] p-3 bg-slate-300 rounded-lg"
        countrysItem.innerHTML =`
        <img class = "w-full h-[170px] object-cover" src=${item.flag} alt="">
        <h2 class = "mt-[5px] text-lg font-semibold text-teal-800"> Country: ${item.name}</h2>
        <p class = "mt-[2px] text-base font-normal text-teal-700"> Capital: ${item.capital}</p>
        <p class = "mt-[2px] text-base font-normal text-teal-700"> Population: ${item.population}</p>
        <strong class = "text-cyan-950 text-lg ">ID : ${item.id}</strong>
        <div class = "mt-[8px] w-[60%] flex items-center justify-between">
            <button onclick ="handleLikeBtnClick(${item.id})" class = "${item.isLiked ? "bg-red-600" : "bg-transparent"} w-[40px] border-[#64748B] border flex items-center justify-center rounded-[10px]">
                <img  src="./images/like2.svg" alt="" width="30" height="30">
            </button>
            <button onclick ="handleSavedBtnClick(${item.id})" class = " ${item.isBasket ? "bg-green-600" : "bg-transparent"} w-[40px] bg-transparent border-[#64748B] border flex items-center justify-center rounded-[10px]">
                <img  src="./images/saved2.svg" alt="" width="30" height="30">
            </button>
            <a onclick="handleMoreBtnClick(${item.id})" id = "more" class = "more p-1 w-[40px] bg-transparent border-[#64748B] border hover:bg-[#64748B] transition duration-300 cursor-pointer flex items-center justify-center rounded-[10px]">
                More                
            </a> 
        </div>  
        `
        elWrapper.appendChild(countrysItem)
    })
    likeCount.textContent = arr.filter(item => item.isLiked == true).length
    savedCount.textContent = arr.filter(item => item.isBasket == true).length
}
renderCountrys(countrys)

elSearchInput.addEventListener("keyup", function(evt){
    const searchValue = evt.target.value.toLowerCase()
    const filteredCountry = countrys.filter(item => item.name.toLowerCase().includes(searchValue) || item.population.toString().includes(searchValue))
    console.log(filteredCountry);
    renderCountrys(filteredCountry)
})

function handleMoreBtnClick(id){
    elModulWrapper.classList.remove("scale-0") 
    const findObj = countrys.find(item => item.id == id)
    elModulContant.innerHTML =`
        <div class = "w-[350px] bg-slate-300 rounded-lg top-[70px] flex flex-col items-center absolute left-0 right-0 m-auto">
            <img class = "w-[320px] h-[170px] object-cover rounded-lg mt-[20px]" src=${findObj.flag} alt="">
            <div class = "w-[320px]">
                <h2 class = "mt-[5px] text-[25px] font-bold text-teal-800"> Country: ${findObj.name}</h2>
                <p class = "mt-[2px] text-[18px] font-samibold text-teal-600"> Capital: ${findObj.capital}</p>
                <p class = "mt-[2px] text-[18px] font-samibold text-teal-600"> Population: ${findObj.population}</p>
                <strong class = "text-cyan-950 text-[30px] ">${findObj.id}</strong>
            </div>
        </div>
    `
}
// Modul start
elModulWrapper.addEventListener("click", function(evt){
    if(evt.target.id == "wrapper"){
        elModulWrapper.classList.add("scale-0")
    }
})
function closeBtnClick(){
    elModulWrapper.classList.add("scale-0")
}
// Modul end

// Like and Saved  Btn Click start
function handleLikeBtnClick(id){
    const findedObj = countrys.find(item => item.id == id)
    findedObj.isLiked = !findedObj.isLiked
    renderCountrys(countrys);
}
function handleSavedBtnClick(id){
    const findedObj = countrys.find(item => item.id == id)
    findedObj.isBasket = !findedObj.isBasket
    renderCountrys(countrys);
}
// Like and Saved  Btn Click end

function handleLikeCountBtnClick(){
    const filterArr = countrys.filter(item => item.isLiked == true)
    renderCountrys(filterArr)
}
function handleSavedCountBtnClick(){
    const filterArr = countrys.filter(item => item.isBasket == true)
    renderCountrys(filterArr)
}

// Select start
countrys.forEach(item => {
    let elOption = document.createElement("option")
    elOption.value = item.capital
    elOption.textContent = item.capital
    elCountrySelect.appendChild(elOption)
})
elCountrySelect.addEventListener("change", function(evt){
    if(evt.target.value == "all"){
        renderCountrys(countrys)
    }
    else{
        const filteredCaptial = countrys.filter(item => item.capital == evt.target.value)
        renderCountrys(filteredCaptial) 
    }
})
// Select end

let moon = document.querySelector("#moon")
let sun = document.querySelector("#sun")
let body = document.querySelector("body")

moon.addEventListener("click", function(){
    body.classList.add("dark_bg");
    moon.style.display = "none"
    sun.style.display = "block"
})
sun.addEventListener("click", function(){
    body.classList.remove("dark_bg");
    moon.style.display = "block"
    sun.style.display = "none"
})