/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

import 'bootstrap';

console.log('Hello World from Webpacker')

// let gradient = document.querySelector(".flex-wrapper")

const cursorFunction = (event) => {
  let x = event.screenX
  let y = event.screenY
  let degree = x * y
  // console.log(degree)
  return degree
};


document.addEventListener("mousemove", (event) => {
  let gradient = document.querySelector(".flex-wrapper");
  gradient.setAttribute("style", `background-image: linear-gradient(${cursorFunction(event)}deg, pink, white);`)
  // console.log(gradient)
});





