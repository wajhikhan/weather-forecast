const apikey = "c221208438e410cc3934b6d5e66558f5";
const apiurl = 'https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}';

async function chechweather(){
    const response = await fetch(apiurl + '&appid=${apikey}');
    var data = await response.json();

    console.log(data);

    function myfunction(){
        var x= document.getElementById("icon");
        x.disabled=true;   
    }
}
chechweather();