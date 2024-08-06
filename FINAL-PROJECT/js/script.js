filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}
// Hide elements that are not selected
function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);
      }
    }
    element.className = arr1.join(" ");
  }
  
  // Add active class to the current control button (highlight it)
  var btnContainer = document.getElementById("myBtnContainer");
  var btns = btnContainer.getElementsByClassName("btn");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }
  // year-month
//   document.getElementById('btn-monthly').addEventListener('click', function() {
//     document.getElementById('monthly-plans').classList.remove('hidden');
//     document.getElementById('yearly-plans').classList.add('hidden');
//     this.classList.add('btn-primary');
//     this.classList.remove('btn-secondary');
//     document.getElementById('btn-yearly').classList.remove('btn-primary');
//     document.getElementById('btn-yearly').classList.add('btn-secondary');
// });

// document.getElementById('btn-yearly').addEventListener('click', function() {
//     document.getElementById('yearly-plans').classList.remove('hidden');
//     document.getElementById('monthly-plans').classList.add('hidden');
//     this.classList.add('btn-primary');
//     this.classList.remove('btn-secondary');
//     document.getElementById('btn-monthly').classList.remove('btn-primary');
//     document.getElementById('btn-monthly').classList.add('btn-secondary');
// });
window.scrollTo({
  top: 100,
  left: 100,
  behavior: "smooth",
});
let counts = setInterval(updated);
  let upto = 1000;
  function updated() {
      let count1 = document.getElementById("counter1");
      count1.innerHTML = --upto;
      let count2 = document.getElementById("counter2");
      count2.innerHTML = --upto;
      let count3 = document.getElementById("counter3");
      count3.innerHTML = --upto;
      let count4 = document.getElementById("counter4");
      count4.innerHTML = --upto;
      if (upto === 0) {
          clearInterval(counts);
      }
  }
