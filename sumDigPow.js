function sumDigPow(a, b) {
  let finalArray = []

  for(let i = a; i <= b; i++){
    let digits = i.toString().length
    // handle case of single digit
    if (digits === 1){
       finalArray.push(i)
    } else {
      let arrStr = i.toString().split("")
      let arrNum = arrStr.map(Number)
      let sum = 0
      for(let k = 0; k < arrNum.length; k++){
        sum += Math.pow(arrNum[k], k+1)
      }
        if(sum === i){
          finalArray.push(sum)
        }
      }
    }
    return finalArray
  }
