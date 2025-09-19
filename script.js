let place="";
async function get_report(place){
    const apikey=`82b370d3cf559759d72a96f54caaadf8`;
    const apiurl=`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${place}&appid=`;
    const response= await fetch (apiurl +apikey);
    var data=await response.json();
    console.log(data);
    display(data);
}
function weather()
{
place=document.querySelector("input").value;
get_report(place);
}
function display(data){
    document.querySelector(".deg").innerText=`${data.main.temp} degC`;
    document.querySelector(".place").innerText=data.name;
    document.querySelector(".humidity h4").innerText=`${data.main.humidity}%`;
    document.querySelector(".wind_speed h4").innerText=`${data.wind.speed} km/hr`;
}
