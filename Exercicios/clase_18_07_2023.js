/*let cats = ['Bill','Jeff','Pete','Biggles','Jasmin']
let myInfo = 'My cats are called '
//console.log(cats.length)

for(let contador = 0;contador < cats.length;contador ++){
  myInfo += cats[contador] + ',';
  console.log('O contador é: ',contador);
  console.log(myInfo)
}*/

let casa = {
  xanelas:10,
  portas:5,
  camas:10,
  cociña:{
    conxelador: 1,
    armarios:10,
    sillas:20
  }
}

console.log(casa.xanelas,casa.portas,casa.camas);
console.log(casa.cociña.sillas)


for(let propiedade in casa){
  console.log(`A propiedade é: ${propiedade}, e o valor ${casa[propiedade]}`)
  console.log(typeof casa[propiedade])
  if(typeof casa[propiedade] == "object"){
    console.log('entra')
    for(let propi in casa[propiedade]){
      console.log(`o valor do novo ${propi} é ${casa[propiedade][propi]}`)
    }
  }
  
}