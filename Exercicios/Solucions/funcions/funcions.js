function pasarNumAAbsoluto(numero){
  
    let numAbsoluto;
    let valorConvertido;

    const isNumNegativo = numero < 0;

  
    if(isNumNegativo){
      valorConvertido = -1 * numero;
      numAbsoluto = valorConvertido;
    }else{
      numAbsoluto = numero;
    }

  return numAbsoluto
}

export {
  pasarNumAAbsoluto
}