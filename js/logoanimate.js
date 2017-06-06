// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   logoanimate.js                                     :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: scollet <marvin@42.fr>                     +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2017/06/05 18:24:21 by scollet           #+#    #+#             //
//   Updated: 2017/06/05 18:24:22 by scollet          ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

//function  animate() {

//}

function logo_display() {
  var canvas = document.getElementById('jgravlogo');
  var orbit = canvas.getContext('2d');
  var width = canvas.width;
  var height = canvas.height;
  orbit.globalAlpha = 0.5

  /* OUTER RING */
  draw(orbit, 90, width / 2, height / 2, Math.PI * 1.40, Math.PI * 1.2, 'white', 10, 1);
  /* PLANET */
  draw(orbit, 60, width / 2, height / 2, 0, Math.PI * 2, 'white', 10, 1);
  /* INNER SATELLITE */
  draw(orbit, 10, 126, 136, 0, Math.PI * 2, '#0B104B', 10, 1);
  /* OUTER SATELLITE */
  draw(orbit, 20, 46.8, 26, 0, Math.PI * 2, 'white', 1, 1);
  /* INNER RING */
  draw(orbit, 45, width / 2, height / 2, 0, Math.PI * 2, '#0B104B', 5, 1);
}

function  draw(orbit, radius,
  x, y,
    start, end,
      color, thickness, alpha) {
  //var   i = 0;
  //var   j = 0;
  //while ()
  for (var i = 0; i < 1; i++) {
    for (var j = 0; j < 1; j++) {
      orbit.beginPath();
      //var x = width; // x coordinate
      //var y = height; // y coordinate
      //var radius = 75; // Arc radius
      //var startAngle = 0; // Starting point on circle
      //var endAngle = Math.PI * 1.85/* + (Math.PI * j) / 2*/; // End point on circle
      var anticlockwise = i % 2 !== 0; // clockwise or anticlockwise
      orbit.globalAlpha = alpha;
      orbit.fillStyle = color;
      orbit.strokeStyle = color;
      orbit.lineWidth = thickness;
      orbit.arc(x, y, radius, start, end, anticlockwise);
      if (radius === 20 || radius === 10 || radius === 60) {
        orbit.fill()
      } else {
        orbit.stroke();
      }
    }
  }
}


/*
**  Test Function(s):
*/

/*

function draw() {
  var canvas = document.getElementById('jgravlogo');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    ctx.fillRect(25, 25, 100, 100);
    ctx.clearRect(45, 45, 60, 60);
    ctx.strokeRect(50, 50, 50, 50);
  }
}

*/
