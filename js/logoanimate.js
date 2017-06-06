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

function  animate() {

}

function logo_display() {
  var canvas = document.getElementById('jgravlogo');
  var orbit = canvas.getContext('2d');
  var width = canvas.width;
  var height = canvas.height;

  draw(orbit, 100, width, height);
  draw(orbit, 50, width, height);
  draw(orbit, 75, width, height);
  draw(orbit, 10, width, height);
}

function  draw(orbit, radius, width, height) {
  //var   i = 0;
  //var   j = 0;
  //while ()
  for (var i = 0; i < 1; i++) {
    for (var j = 0; j < 1; j++) {
      orbit.beginPath();
      var x = width / 2; // x coordinate
      var y = height / 2; // y coordinate
      //var radius = 75; // Arc radius
      var startAngle = 0; // Starting point on circle
      var endAngle = Math.PI * 1.85/* + (Math.PI * j) / 2*/; // End point on circle
      var anticlockwise = i % 2 !== 0; // clockwise or anticlockwise

      orbit.arc(x, y, radius, startAngle, endAngle, anticlockwise);
      orbit.stroke();
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
