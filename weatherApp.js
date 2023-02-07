    
    const country=document.querySelector('.country')
    const city=document.querySelector('.city')
    const input=document.querySelector('.input')
    const btn=document.querySelector('.btn')
    const clouds=document.querySelector('.cloudly')
    const wind=document.querySelector('.wind')
    const humidity=document.querySelector('.humidity')
    const temperature=document.querySelector('.temperature')
   const description=document.querySelector('.description')
   const date=document.querySelector('.date')
   const container=document.querySelector('.container')
    

   
function Fetchdata(inp) {
 const APIKEY='ec1bcac162b08d6ab2b15ffa0a307128';
 const url=`https://api.openweathermap.org/data/2.5/weather?q=${inp}&units=metric&appid=${APIKEY}`;
  fetch(url).then(res=>res.json())
  .then(data=>{
    city.innerHTML=data.name+"," 
    country.innerHTML=data.sys.country;
temperature.innerHTML=data.main.temp+"°C"
description.innerHTML=data.weather[0].description
clouds.src="https://openweathermap.org/img/wn/" +data.weather[0].icon + "@2x.png";
humidity.innerHTML="Humidity:"+data.main.humidity+"%"
wind.innerHTML="Wind speed:"+data.wind.speed+"m/s"
let datte=new Date()
var weekday=new Array(7);
weekday[0]="Sunday";
weekday[1]="Monday";
weekday[2]="Tuesday";
weekday[3]="Wednesday";
weekday[4]="Thursday";
weekday[5]="Friday";
weekday[6]="Saturday";
date.innerHTML="Date:"+ weekday[datte.getDay(data.sys.sunrise)]+"/"+(datte.getMonth(data.sys.sunrise)+1)+"/"+datte.getFullYear(data.sys.sunrise)
container.classList.add('containershow')   
} )
  .catch(()=>{
    container.classList.remove('containershow')  
 
   
  })
}
   btn.addEventListener('click',()=>{
 
Fetchdata(input.value)
input.value=""

    })  
  document.body.addEventListener('keydown',(e)=>{

    if(e.key==='Enter'){
    Fetchdata(input.value)
    input.value=""  
  }
     
    }
   

    )