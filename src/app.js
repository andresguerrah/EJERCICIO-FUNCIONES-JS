/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  const ranwho = who[Math.floor(Math.random() * who.length)];
  const ranact = action[Math.floor(Math.random() * action.length)];
  const ranwhat = what[Math.floor(Math.random() * what.length)];
  const ranwhen = when[Math.floor(Math.random() * when.length)];

  var random = ranwho + " " + ranact + " " + ranwhat + " " + ranwhen;

  var frase = (document.querySelector("p").innerHTML = random);
};
