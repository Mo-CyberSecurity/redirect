function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}

function changeLink(text) {
  document.getElementById("input").value = text;
}

function redirect() {
  let inputValue = document.getElementById("input").value
  if (inputValue) {
    fetch('/api/?link=' + inputValue)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        if (data.status === 'horoshiy url') {
          window.location.replace('https://' + inputValue)
        }
        if (data.status === 'okey') {
          window.location.replace(data.link)
        }
        if (data.status === 'flag') {
          document.getElementById("flag").textContent = data.flag
          document.getElementById("dop_message").textContent = data.dop_message
        }
      });
  }
}
