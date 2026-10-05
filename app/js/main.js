document.querySelector('#coin').addEventListener('click', flipCoin)
function flipCoin(){
  console.log("inside the function")
  fetch(`/api/coinFlip`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      //based on getting 0 or 1 
      //make coin change color
      //add H or T
    });

}