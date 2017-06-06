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

function  draw(){
  var   canvas;
  var   ctx;
  //var   radius;

  canvas = document.getElementById('jgravlogo');
  if (canvas.getContext) {ctx = canvas.getContext('2d')}
  //for (var i = 0; i < 1; i++) {
    //for (var j = 0; j < 1; j++) {
      ctx.beginPath();
      ctx.arc(75, 75, 50, 0, Math.PI * 2, true);
      ctx.stroke();
      /*var x = 25 + j * 50; // x coordinate
      var y = 25 + i * 50; // y coordinate
      var radius = 20; // Arc radius
      var startAngle = 0; // Starting point on circle
      var endAngle = Math.PI + (Math.PI * j) / 2; // End point on circle
      var anticlockwise = i % 2 !== 0; // clockwise or anticlockwise

      ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);*/
      /*if (i > 1) {
        ctx.fill();
      } else {
        ctx.stroke();
      }*/
    //}
  //}
}
