const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array){
  let foundObj = array.find( element =>{  return element.result === "W" })
  if (foundObj){ 
    return foundObj.year
  } else {
    return undefined
  }
}