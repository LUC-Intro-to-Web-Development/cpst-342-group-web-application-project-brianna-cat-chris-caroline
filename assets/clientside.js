/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function dropShow(element) {
    element.classList.toggle("show");
  }

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

function loadLocation(element){
    var table = document.getElementById('info-table');
    var location = element.value;
    // Send a POST request to the server with Form data
    fetch('/neighborhood', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ neighborhood: location }),
    }).then((response) => {
        let reader = response.body.getReader();
        let decoder = new TextDecoder('utf-8');
     
        return reader.read().then(function (result) {
            return decoder.decode(result.value);
        });
    }).then((html) => {
        table.innerHTML= html;
    });
}

function loadCuisine(element){
    var table = document.getElementById('info-table');
    var style = element.value;
    // Send a POST request to the server with Form data
    fetch('/cuisine', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ cuisine: style }),
    }).then((response) => {
        let reader = response.body.getReader();
        let decoder = new TextDecoder('utf-8');
     
        return reader.read().then(function (result) {
            return decoder.decode(result.value);
        });
    }).then((html) => {
        table.innerHTML= html;
    });
}

function expandRest(name, location, id){
    var element = document.getElementById("rest"+id);
     // Send a POST request to the server with Form data
fetch('/restaurant', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name: name, location: location}),
}).then((response) => {
    let reader = response.body.getReader();
    let decoder = new TextDecoder('utf-8');
 
    return reader.read().then(function (result) {
        return decoder.decode(result.value);
    });
}).then((html) => {
    element.innerHTML = html;
    element.style.display='block';
});
}

function makeRating(name, location, element){
    var stars = element.querySelectorAll('input[name="rate"]');
    var score = 0;
    // Loop through each radio input to find the checked one
    for (var i = 0; i < stars.length; i++) {
        if (stars[i].checked) {
            console.log("stars: ", stars[i].value);
            score = stars[i].value;
        }
    }
    if (score==0){
        return; //just to keep the pretty css stars
    }
    // Send a POST request to the server with Form data
    fetch('/rate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name:name, neighborhood: location, rating: score }),
    }).then(() => {
        console.log("updated", name, location, score);
    });
        //action complete
        var allRows = document.getElementsByClassName('expand');
        for (var i = 0; i < allRows.length; i++) {
            if (allRows[i].classList.contains('show')) {
                allRows[i].innerHTML = " ";
                allRows[i].classList.remove('show');
            }
        }
}