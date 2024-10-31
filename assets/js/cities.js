let cities = [
  { 
      city: "Adana", 
      famousFor: "Kebap", 
      type: "food", 
      plateNumber: "01",
      image: "adana.jpg"
  },
  { 

      city: "Ankara", 
      famousFor: "Simidi", 
      type: "food", 
      plateNumber: "06",
      image: "simit.jpg"
  },
  { 
      city: "İstanbul", 
      famousFor: "Boğaz", 
      type: "place", 
      plateNumber: "34",
      image: "istanbul.jpg"
  },
  { 
      city: "İzmir", 
      famousFor: "Boyoz", 
      type: "food", 
      plateNumber: "35",
      image: "izmir.jpg"
  },
  { 
      city: "Bursa", 
      famousFor: "İskender Kebabı", 
      type: "food", 
      plateNumber: "16",
      image: "bursa.jpg"
  },
  { 
      city: "Antalya", 
      famousFor: "Düden Şelalesi", 
      type: "place", 
      plateNumber: "07",
      image: "antalya.jpg"
  },
  { 
      city: "Gaziantep", 
      famousFor: "Baklava", 
      type: "food", 
      plateNumber: "27",
      image: "gaziantep.jpg"
  },
  { 
      city: "Konya", 
      famousFor: "Etli Ekmek", 
      type: "food", 
      plateNumber: "42",
      image: "konya.jpg"
  },
  { 
      city: "Trabzon", 
      famousFor: "Hamsi", 
      type: "food", 
      plateNumber: "61",
      image: "trabzon.jpg"
  },
  { 
      city: "Kayseri", 
      famousFor: "Mantı", 
      type: "food", 
      plateNumber: "38",
      image: "kayseri.jpeg"
  },
  { 
      city: "Eskişehir", 
      famousFor: "Lületaşı", 
      type: "place", 
      plateNumber: "26",
      image: "eskisehir.jpg"
  },
  { 
      city: "Rize", 
      famousFor: "Çay", 
      type: "food", 
      plateNumber: "53",
      image: "rize.jpg"
  },
  { 
      city: "Erzurum", 
      famousFor: "Cağ Kebabı", 
      type: "food", 
      plateNumber: "25",
      image: "erzurum.jpg"
  },
  { 
      city: "Diyarbakır", 
      famousFor: "Karpuz", 
      type: "food", 
      plateNumber: "21",
      image: "diyarbakir.jpg"
  },
  { 
      city: "Mardin", 
      famousFor: "Taş Evler", 
      type: "place", 
      plateNumber: "47",
      image: "mardin.jpg"
  },
  { 
      city: "Van", 
      famousFor: "Van Kedisi", 
      type: "place", 
      plateNumber: "65",
      image: "van.jpg"
  },
  { 
      city: "Sivas", 
      famousFor: "Kangal Köpeği", 
      type: "place", 
      plateNumber: "58",
      image: "sivas.jpg"
  },
  { 
      city: "Şanlıurfa", 
      famousFor: "Balıklıgöl", 
      type: "place", 
      plateNumber: "63",
      image: "sanliurfa.jpg"
  },
  { 
      city: "Mersin", 
      famousFor: "Tantuni", 
      type: "food", 
      plateNumber: "33",
      image: "mersin.jpg"
  },
  { 
      city: "Muğla", 
      famousFor: "Turistik Yerleri", 
      type: "place", 
      plateNumber: "48",
      image: "mugla.jpg"
  },
  { 
      city: "Çanakkale", 
      famousFor: "Tarihi Gelibolu Yarımadası", 
      type: "place", 
      plateNumber: "17",
      image: "canakkale.jpg"
  },
  { 
      city: "Hatay", 
      famousFor: "Antakya Mozaikleri", 
      type: "place", 
      plateNumber: "31",
      image: "hatay.jpg"
  },
  { 
      city: "İzmir", 
      famousFor: "Efes Antik Kenti", 
      type: "place", 
      plateNumber: "35",
      image: "efes.jpg"
  },
  { 
      city: "Nevşehir", 
      famousFor: "Kapadokya", 
      type: "place", 
      plateNumber: "50",
      image: "nevsehir.jpg"
  },
  { 
      city: "Aydın", 
      famousFor: "Milet Antik Kenti", 
      type: "place", 
      plateNumber: "09",
      image: "aydin.jpg"
  }
];

function listCities(){
  for(let i = 0; i < cities.length; i++){
    citiesList.innerHTML += `<li><p class="plate-number">${cities[i].plateNumber}</p><p class="city-name">${cities[i].city}</p><p class="famous-for">${cities[i].famousFor}</p></li>`
  }
}

let foodFamousCities = [];
let placeFamousCities = [];

function sperateCities(){
  for(let i = 0; i < cities.length; i++){
    if(cities[i].type === 'food'){
      foodFamousCities.push(cities[i]);
    } else{
      placeFamousCities.push(cities[i]);
    }
  }
}

function listFamousforCities(){
  sperateCities();
  for(let i = 0; i < foodFamousCities.length; i++){
    foodFamousCitiesList.innerHTML += `<li>
        <p class="plate-number">${foodFamousCities[i].plateNumber}</p>
        <p class="city-name">${foodFamousCities[i].city}</p>
        <p class="famous-for">${foodFamousCities[i].famousFor}</p>
        <img src="assets/images/${foodFamousCities[i].image}">
      </li>`
  }
  for(let i = 0; i < placeFamousCities.length; i++){
    placeFamousCitiesList.innerHTML += `<li>
        <p class="plate-number">${placeFamousCities[i].plateNumber}</p>
        <p class="city-name">${placeFamousCities[i].city}</p>
        <p class="famous-for">${placeFamousCities[i].famousFor}</p>
        <img src="assets/images/${placeFamousCities[i].image}">
      </li>`
  }
}

let oddPlateNumbers = [];
let evenPlateNumbers = [];

function speratePlateNumbers(){
  for(let i = 0; i < cities.length; i++){
    if(Number(cities[i].plateNumber) % 2 !== 0){
      oddPlateNumbers.push(cities[i]);
    } else{
      evenPlateNumbers.push(cities[i]);
    }
  }
}

function listPlateNumbers(){
  speratePlateNumbers();
  for(let i = 0; i < oddPlateNumbers.length; i++){
    oddPlateNumbersList.innerHTML += `<li><p class="plate-number">${oddPlateNumbers[i].plateNumber}</p><p class="city-name">${oddPlateNumbers[i].city}</p></li>`
  }
  for(let i = 0; i < evenPlateNumbers.length; i++){
    evenPlateNumbersList.innerHTML += `<li><p class="plate-number">${evenPlateNumbers[i].plateNumber}</p><p class="city-name">${evenPlateNumbers[i].city}</p></li>`
  }
}

listCities();
listFamousforCities();
listPlateNumbers();