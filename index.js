
const loadAllPhones = async(status) => {
    // console.log('wow 3 minutes gone')
    document.getElementById('spinner').style.display = 'none'

    // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
    // .then(res => res.json())
    // .then(data => console.log(data))

    const uri = 'https://openapi.programming-hero.com/api/phones?search=iphone'
    const res = await fetch(uri)
    const data = await res. json();

    if(status){
        displayAllPhones(data.data)
    }
    else{
    displayAllPhones(data.data.slice(0, 6))
    }
    
}

// for display those data 
displayAllPhones = (phones) => {
    console.log(phones)
}

const handleShowAll = () => {
    loadAllPhones(true)
}


//handle search button
const handleSearch = () => {
    document.getElementById('spinner').style.display = 'block'
    setTimeout(() => {
        loadAllPhones()
    }, 3000)
}


loadAllPhones()