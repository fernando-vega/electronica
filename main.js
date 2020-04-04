$(document).ready(function () {
  
  $('select').niceSelect();
  let colorName = ['Negro', 'Cafe', 'Rojo', 'Naranja', 'Amarillo', 'Verde', 'Azul', 'Violeta', 'Gris', 'Blanco']
  let c1 = 0,
      c2 = 0,
      c3 = 0,
      btnCalcular = $('#btn-calcular');

  function selectColor() {
    /* Color 1 */
     wrapColor1 = $('.select-color-1 .list')
    wrapColor1.click(function () {
      setTimeout(function () {
        color1 = $('.select-color-1 .current').text()
        c1 = forColors(color1);
      }, 300)
    })
    /* Color 2 */
    let wrapColor2 = $('.select-color-2 .list')
    wrapColor2.click(function () {
      setTimeout(function () {
        color2 = $('.select-color-2 .current').text()
        c2 = forColors(color2)
      }, 300)
    })
    /* Color 3 */
    let wrapColor3 = $('.select-color-3 .list')
    wrapColor3.click(function () {
      setTimeout(function () {
        color3 = $('.select-color-3 .current').text()
        c3 = forColors(color3)
      }, 300)
    })
  }

  function forColors(color) {
    for (let i = 0; i < colorName.length; i++) {
      if (color === colorName[i]) {
        color = i
        return color
      }
    }
  }

  function calcularResistencia(color1, color2, color3) {
    console.log(color1, color2, color3)
    let number1 = "" + color1 + color2
    let number2 = "" + 1 + ("0").repeat(color3)
    console.log(number1, number2)
    resultado = number1 * number2
    $('.resultado').html(resultado)
  }


  btnCalcular.click(function() {
    calcularResistencia(c1, c2, c3)
  });

  selectColor();

});