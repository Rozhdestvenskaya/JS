let ipUrl='https://api.ipify.org?format=json';

async function getInfo() {
  let response = await fetch(ipUrl);
  let jsonResponse =  await response.json();
  let ip = jsonResponse.ip;
 
  document.getElementById("myIP").innerHTML = ip;

	const YOUR_ACCESS_KEY = '5a1c135f7c066b131bf3d79ef8d96da9';
	let IP = document.getElementById('myIP').innerText;
	let dataUrl = 'http://api.ipstack.com/' + IP + '?access_key=' + YOUR_ACCESS_KEY + '&language=ru';
	let response2 = await fetch(dataUrl);
	let jsonResponse2 = await response2.json();

	const country_name = jsonResponse2.country_name;
	const city = jsonResponse2.city;
    const zip = jsonResponse2.zip;
    
    
	document.getElementById("country_name").innerHTML = country_name;
	document.getElementById("city").innerHTML = city;
    document.getElementById("zip").innerHTML = zip;
}