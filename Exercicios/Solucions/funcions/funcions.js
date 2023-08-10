const operoNeg = (num) => {
  return -1 * num
}

function pasarNumAAbsoluto(numero){
    const isNumNegativo = numero < 0;
    return isNumNegativo ? operoNeg(numero) : numero; 
}

const multiplica = (num1,num2)=>{
  return num1 * num2
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