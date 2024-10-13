fetch("https://api.thecatapi.com/v1/images/search?limit=9&breed_ids=beng&api_key=live_6y7vvqKf7mKESa6BfZMaF62qvlNutjUrt1iwm3oI3WS43CygbmomM6T3nfu1GCHY")

            .then((data) => {
                return data.json();
                // console.log(data);
            })

            .then((fullData) => {
                console.log(fullData);
                let mydata = "";
                fullData.map((value) => {
                    mydata += `<div class="card" >
                    
        <img src="${value.url}" class="card-img-top" alt="...">
        <div class="card-body">

          <h5 class="card-title">${value.breeds[0].name}</h5>
          <p class="card-text">${value.breeds[0].description}</p>
        </div>

        <ul class="list-group list-group-flush">
          <li class="list-group-item"><span>Life Span:</span>${value.breeds[0].life_span} years</li>
          <li class="list-group-item"><span>Weight:</span>${value.breeds[0].weight.imperial} lb</li>
          <li class="list-group-item"><span>Temperament:</span>${value.breeds[0].temperament}</li>
        </ul>
        
      </div>`
                })

                document.getElementById("card").innerHTML = mydata;
            })

            .catch((error) => {
                console.log(error);
            })