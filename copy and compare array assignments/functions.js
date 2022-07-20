
// include function
function includes (item,array) {
    for (let i = 0; i < array.length;i++) {
    if (array[i] === item)
        return true;
    }
    return false;
}
//index of

function indexOf(item,array) {
    for (let i = 0; i < array.length;i++) {
        if (array[i] === item)
        return i
    }
    return -1
}
// reverse array
function reverse(array) {
    let output = []
   for ( i = array.length - 1 ; i>-1; i--) {
        output.push(array[i])
   }
   return output
}
//slice function
function slice(start,stop,array) {
    let output =  []
    for (let i =start ;  i <stop ;i++) {
        output.push(array[i])
    }

return output
}
// concat
function concat(array1,array2) {
  
    for (let i=0; i < array2.length; i++){
      array1.push(array2[i])

    }
    return array1

}
function join(sep,array) {
     let newarray = "";
    for (let i = 0; i < array.length; i++){
     if   (i < array.length - 1) {
            newarray  += array[i] + sep;
     }
     else{
        newarray += array[i]  ; 

     }
    }
    
    return newarray
}

// max numbers
function max(array){
    let maxvalue = array[0]
    for ( i = 0; i < array.length; i++){
        if (array[i] > maxvalue) {
            maxvalue = array[i]
        }
    }
    return maxvalue
}
