const searchInput = document.querySelector("button[type=submit]");

searchInput.addEventListener("click", (e) => {

    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${e.value}&appid=0bff33d091b03bf9de821297c822c60e`)
        .then((response) => {
            return response.json();
        })
        .then((response) => {
            console.log(response);
        })
        .catch()

});

