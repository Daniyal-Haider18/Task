function checkInput() {
  var inputValue = document.getElementById('item-3_item-2').value;
  if (inputValue.trim() === '') {
    document.getElementById('message').innerHTML="Please fill this field";
    return false;
  }
  else{
    return true;
  }
}

