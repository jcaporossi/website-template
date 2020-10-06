const myHeading = document.querySelector('h1');
myHeading.textContent = 'Bitcoin is cool!';

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/galaxy2.jpg') {
      myImage.setAttribute('src','images/bitcoin.jpg');
    } else {
      myImage.setAttribute('src','images/galaxy2.jpg');
    }
}