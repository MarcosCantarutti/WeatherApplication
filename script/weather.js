// Data from https://developer.accuweather.com/
const apiKey = 'SICk77UnDv3CB5GdKLOSCuVqRjaNP8Li'
const baseUrl = 'http://dataservice.accuweather.com/'

//url city
const getCityUrl = cityName => 
`${baseUrl}locations/v1/cities/search?apikey=${apiKey}&q=${cityName}`

//weather info
const getWeatherUrl = cityKey => 
`${baseUrl}currentconditions/v1/${cityKey}?apikey=${apiKey}&language=pt-br`


const fetchData = async (url) => {
    // trying Catch infos from url
    try {
     const response = await fetch(url)

     if(!response.ok){
         throw new Error('Não foi possivel obeter os dados')
     }
    // response converted to JSON
     return response.json()

    } 
    //error
    catch({name, message}) {
        alert(`${name}: ${message}`)
    }
}

// Data from city
const getCityData = cityName => fetchData(getCityUrl(cityName))

//Data from weather on city
const getCityWeather = cityKey => fetchData(getWeatherUrl(cityKey))

