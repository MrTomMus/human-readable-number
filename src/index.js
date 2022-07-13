module.exports = function toReadable (number) {
  let arrayUnits = ['','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', ' thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let arrayTens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
  let tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  let hundred = ['hundred']
  let word = ''
  let arr = number.toString();

  if(arr.length == 3){
    for(let i = 0; i<arr.length; i++){
        if(i == 0){
            word += arrayUnits[arr[i]] + ` ${hundred[0]}`;

        }else if(i == 1){
            if(arr[i] == 1){
                word += ` ${arrayTens[arr[2]]}`;

                return word
            }
            arr[i] == 0 ? '' : word += ` ${tens[arr[i]]}`;
        }else{
            arr[2] == 0 ? word += `${arrayUnits[arr[i]]}` : word += ` ${arrayUnits[arr[i]]}`;
        }
    }
  }else if(arr.length == 2){
    for(let i = 0; i<arr.length; i++){
        if(arr[i] == 1 && i == 0){
            word += arrayTens[arr[1]]

            return word;

        }else if(i == 0){
            word += tens[arr[i]];
        }else{
            arr[1] == 0 ? word : word += ` ${arrayUnits[arr[i]]}`

            return word;
        }
    }
  }else if(arr.length == 1){
    if(number === 0){
        word += 'zero'
    }
    word += arrayUnits[number]

    return word;
  } 
  return word;
}
