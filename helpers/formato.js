const formatoNumero = (num) => {
  return num.toString().slice(0,5);
}


const formatodetalle = (num) => {
  return num.toString().slice(0,11);
}


const formatocalidad= (num) => {
  return num.toString().slice(0,3);
}

export {
    formatoNumero,
    formatodetalle,
    formatocalidad
}



