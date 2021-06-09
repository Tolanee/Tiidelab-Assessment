const button = document.querySelector('button');
const inputs =document.getElementsByClassName('inputLine')
button.addEventListener('click', displayAlert);
function displayAlert(){
  names  = [].map.call(inputs, function( input ) {
    return input.value;
}) ;

alert(names);

}
