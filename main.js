// שאלה 5
var car = {
  model: "mazda",
  price: 120000,
  year: 2020,
};
a
car.price;
 b
var theDate = new Date();
car.year = theDate.getFullYear();

// שאלה  a 7
var btnExe8 = document.getElementById("btnExe8");
var pElement = document.getElementById("pElement");
var PelementNum2 = document.getElementById("PelementNum2");
var theArray = [(43, 5, 7, 12, 50)];
pElement.innerHTML += `${theArray.length}`;

// שאלה 7 B
for (let i = 0; i < theArray.length; i++) {
  for (let j = 0; j < theArray.length; j++) {
    var result;
    PelementNum2.innerHTML += theArray[i] + theArray[j];
  }
}


// שאלה 8
var theForm = document.getElementById("theForm");
theForm.onsubmit = function FormValidation(event) {
  event.preventDefault();
  var InputName = document.getElementById("InputName").value;
  var inputAge = document.getElementById("inputAge").value;
  var inputEmail = document.getElementById("inputEmail").value;
  var inputPassword = document.getElementById("inputPassword").value;
  var isIn = "#"
  var users = [];
  console.log(users);

  if (inputPassword.length > 8 && inputPassword.length < 15 && !inputPassword.indexOf(isIn)) {
    var newUser = {
      name: InputName,
      age: inputAge,
      email: inputEmail,
      password: inputPassword,
    };
    users.push(newUser);
  } else {
      return false;
  }
};
// שאלה 9 a
// var inputExe9 = document.getElementById("inputExe9");
// var btnExe9 = document.getElementById("btnExe9");
// inputExe9.oninput = () => {
//   console.log(inputExe9.value.toUpperCase());
// };
// שאלה 9 b
// btnExe9.onclick = () => {
//   console.log(inputExe9.value.toLowerCase());
// };

// שאלה 9 b
// btnExe9.onclick = () => {
//   alert(inputExe9.value);
// };

// שאלה 10
// var pElementExe10 = document.getElementById("pElementExe10");
// var theArray = [
//   {
//     title: "some text 1",
//     writer: "some text 2 ",
//     date: "some text 3",
//   },
// ];
// for (let i = 0; i < theArray.length; i++) {
//   pElementExe10.innerHTML += `the title:${theArray[i].title},<br> the writer: ${theArray[i].writer},<br> the date:${theArray[i].date}.`;
// }
