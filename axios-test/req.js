const out = document.getElementById('out');
function req(){
  axios
    .get("http://numbersapi.com/2/trivia")
    .then(function(response) {
      console.log(response.data);
      out.innerHTML = response.data;
    })
    .catch(function(error) {
      console.log(error);
    });
  

}