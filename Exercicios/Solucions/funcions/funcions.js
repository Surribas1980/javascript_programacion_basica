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

const calcularPrecioTotal = (cantidad) => {
  
  let precioTotal;
  
  if(cantidad == 1){
    precioTotal = cantidad * 1;
  }
  
  if(cantidad == 2){
    precioTotal = cantidad * 0.8;
  }
  
  if(cantidad == 3){
    precioTotal = cantidad * 0.75;
  }
  
  if(cantidad >= 4){
    precioTotal = cantidad * 0.7;
  }


  return precioTotal;
}

export {
  pasarNumAAbsoluto,
  calcularPrecioTotal
}