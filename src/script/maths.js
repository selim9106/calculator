export function computeResult(str){
  
    return Function('return ' + str)()
  }