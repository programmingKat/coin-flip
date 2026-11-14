document.querySelector('.user-guess').addEventListener('click', flipCoin)
function flipCoin(e){
  //console.log("inside the function")
  let face = e.target.id
  fetch(`/api/coinFlip?face=${face}`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      //based on getting 0 or 1 
      //make coin change color
      //add H or T
    });

}