
var cardPics = {
  1: 'cartas-de-loteria/1gallo.jpg',
  2: 'cartas-de-loteria/2diablito.jpg',
  3: 'cartas-de-loteria/3dama.jpg',
  4: 'cartas-de-loteria/4catrin.jpg',
  5: 'cartas-de-loteria/5paraguas.jpg',
  6: 'cartas-de-loteria/6sirena.jpg',
  7: 'cartas-de-loteria/7escalera.jpg',
  8: 'cartas-de-loteria/8botella.jpg',
  9: 'cartas-de-loteria/9barril.jpg',
  10: 'cartas-de-loteria/10arbol.jpg',
  11: 'cartas-de-loteria/11melon.jpg',
  12: 'cartas-de-loteria/12valiente.jpg',
  13: 'cartas-de-loteria/13gorrito.jpg',
  14: 'cartas-de-loteria/14muerte.jpg',
  15: 'cartas-de-loteria/15pera.jpg',
  16: 'cartas-de-loteria/16bandera.jpg',
  17: 'cartas-de-loteria/17bandolon.jpg',
  18: 'cartas-de-loteria/18violoncello.jpg',
  19: 'cartas-de-loteria/19garza.jpg',
  20: 'cartas-de-loteria/20pajaro.jpg',
  21: 'cartas-de-loteria/21mano.jpg',
  22: 'cartas-de-loteria/22bota.jpg',
  23: 'cartas-de-loteria/23luna.jpg',
  24: 'cartas-de-loteria/24cotorro.jpg',
  25: 'cartas-de-loteria/25borracho.jpg',
  26: 'cartas-de-loteria/26negrito.jpg',
  27: 'cartas-de-loteria/27corazon.jpg',
  28: 'cartas-de-loteria/28sandia.jpg',
  29: 'cartas-de-loteria/29tambor.jpg',
  30: 'cartas-de-loteria/30camaron.jpg',
  31: 'cartas-de-loteria/31jaras.jpg',
  32: 'cartas-de-loteria/32musico.jpg',
  33: 'cartas-de-loteria/33arana.jpg',
  34: 'cartas-de-loteria/34soldado.jpg',
  35: 'cartas-de-loteria/35estrella.jpg',
  36: 'cartas-de-loteria/36cazo.jpg',
  37: 'cartas-de-loteria/37mundo.jpg',
  38: 'cartas-de-loteria/38apache.jpg',
  39: 'cartas-de-loteria/39nopal.jpg',
  40: 'cartas-de-loteria/40alacran.jpg',
  41: 'cartas-de-loteria/41rosa.jpg',
  42: 'cartas-de-loteria/42calavera.jpg',
  43: 'cartas-de-loteria/43campana.jpg',
  44: 'cartas-de-loteria/44cantarito.jpg',
  45: 'cartas-de-loteria/45venado.jpg',
  46: 'cartas-de-loteria/46sol.jpg',
  47: 'cartas-de-loteria/47corona.jpg',
  48: 'cartas-de-loteria/48chalupa.jpg',
  49: 'cartas-de-loteria/49pino.jpg',
  50: 'cartas-de-loteria/50pescado.jpg',
  51: 'cartas-de-loteria/51palma.jpg',
  52: 'cartas-de-loteria/52maceta.jpg',
  53: 'cartas-de-loteria/53arpa.jpg',
  54: 'cartas-de-loteria/54rana.jpeg'
};

function getTableCart() {
  var numberOfCarts = document.getElementById('numberOfCarts').value;
  console.log('number of carts: ' + numberOfCarts);
  var cardNumbers = [];
  while (cardNumbers.length < 16) {
    var number = Math.floor((Math.random() * 54) + 1);
    if (cardNumbers.includes(number)) {
      continue
    } else {
        cardNumbers.push(number)
    }
  }
  console.log(cardNumbers);
  cardNumbers[6] = cardNumbers[5]
  console.log(cardNumbers)

  let j;
    for (j = 0; j < 16; j++) {
      image = document.getElementById("space" + j);
      //console.log(image)
      //console.log(cardNumbers[j])
      image.src = cardPics[cardNumbers[j]];
      //console.log(cardPics[cardNumbers[j]]);
    }
  cleanCart();
    
}

function selectSpace(id) {
  //console.log(id.style.backgroundColor);
  if (id.style.backgroundColor == 'rgb(211, 207, 207)') {
    id.style.backgroundColor = 'red'
  } else { 
      id.style.backgroundColor = 'rgb(211, 207, 207)'
  }
  //console.log(id.style.backgroundColor);
};

function cleanCart() {
  var i;
  var j;
  for (i = 0; i < 4; i++) {
    x = document.getElementById("carta").rows[i].cells;
      for (j = 0; j < 4; j++) {
        x[j].style.backgroundColor = 'rgb(211, 207, 207)';
      }
  } 
};


function getMultipleCarts() {
  table0_exist = document.getElementById('table0');
  table1_exist = document.getElementById('table1');
  table2_exist = document.getElementById('table2');
  table3_exist = document.getElementById('table3');

  table_exist_list = [table0_exist, table1_exist, table2_exist, table3_exist];
  console.log(table_exist_list)
  console.log(table_exist_list[0])

  for (let i=0; i<4; i++) {
    if (table_exist_list[i] != null) {
      document.getElementById('table' + i).remove();
    } else {
      continue;
    }
  }
  
  var numberOfCarts = Number(document.getElementById('numberOfCarts').value);
  console.log('number of carts: ' + numberOfCarts);
  var carts = [];
  let i;
  for (i=0; i < numberOfCarts; i++) {
    var cardNumbers = [];
    while (cardNumbers.length < 16) {
      var number = Math.floor((Math.random() * 54) + 1);
      if (cardNumbers.includes(number)) {
        continue
      } else {
          cardNumbers.push(number)
          //console.log(cardNumbers)
      }
    }
    cardNumbers[6] = cardNumbers[5]
    carts.push(cardNumbers);
  }
  console.log(carts);

  let j = 0
  let pictureNumber = 0
  numberList = 0
  var body = document.body;
  for (let list of carts) {
    let table = document.createElement('table');
    table.setAttribute("id", "table" + j);
    //console.log(table);
    j += 1;
    for (k=0; k < 4; k++) {
      let row = table.insertRow();
      for (l=0; l < 4; l++) {
        var td = row.insertCell();
        td.addEventListener('click', function() {
          selectSpace(this);
        })
        image = document.createElement('img');
        image.src = cardPics[carts[numberList][pictureNumber]];
        image.addEventListener('click', function() {
          selectSpace(this);
        })
        td.appendChild(image);
        row.appendChild(td);
        if (pictureNumber == 15) {
          pictureNumber = 0
        } else {
          pictureNumber += 1
        }
          
      }
    }
    body.appendChild(table);
    
    numberList += 1
  }
  

} 



