
var theList = JSON.parse(localStorage.getItem("todoList")) || []; // Get localStorage object

var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

var list = document.querySelectorAll('ul');
for (i = 0; i < list.length; i ++) {
  list[i].addEventListener('click', function(ev) {
      if (ev.target.tagName === 'LI') {
      ev.target.classList.toggle('checked');
    }
  }, false);
}

var listDiv = document.getElementsByClassName("list");
  for (i = 0; i < listDiv.length; i++){
    if (!listDiv[i].getElementsByTagName("li").length) {
        listDiv[i].style.display = "none";
      }
    }

function newElement() {
  var prioirity = document.getElementById("priority");
  var work = document.getElementById("work");
  var home = document.getElementById("home");
  var activity = document.getElementById("activity");
  var checkboxes = document.querySelectorAll("input[type=checkbox]:checked");
  var days = document.getElementById("day");
  var li = document.createElement("li");
  var inputValue = document.getElementById("newItem").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);

  if (inputValue === '') {
    alert("You must write something!");
  } else {
    if (days.value == "Monday") {
        document.getElementById("mon").style.display = "block";
        document.getElementById("tues").style.display = "none";
        document.getElementById("wed").style.display = "none";
        document.getElementById("thurs").style.display = "none";
        document.getElementById("fri").style.display = "none";
        document.getElementById("monday").appendChild(li);
        theList.push(li.textContent);
    }
    else if (days.value == "Tuesday"){
      document.getElementById("tues").style.display = "block";
      document.getElementById("mon").style.display = "none";
      document.getElementById("wed").style.display = "none";
      document.getElementById("thurs").style.display = "none";
      document.getElementById("fri").style.display = "none";
      document.getElementById("tuesday").appendChild(li);
      theList.push(li.textContent);
    }
    else if (days.value == "Wednesday"){
      document.getElementById("wed").style.display = "block";
      document.getElementById("mon").style.display = "none";
      document.getElementById("tues").style.display = "none";
      document.getElementById("thurs").style.display = "none";
      document.getElementById("fri").style.display = "none";
      document.getElementById("wednesday").appendChild(li);
      theList.push(li.textContent);
    }
    else if (days.value == "Thursday"){
      document.getElementById("thurs").style.display = "block";
      document.getElementById("mon").style.display = "none";
      document.getElementById("tues").style.display = "none";
      document.getElementById("wed").style.display = "none";
      document.getElementById("fri").style.display = "none";
      document.getElementById("thursday").appendChild(li);
      theList.push(li.textContent);
    }
    else if (days.value == "Friday"){
      document.getElementById("fri").style.display = "block";
      document.getElementById("mon").style.display = "none";
      document.getElementById("tues").style.display = "none";
      document.getElementById("wed").style.display = "none";
      document.getElementById("thurs").style.display = "none";
      document.getElementById("friday").appendChild(li);
      theList.push(li.textContent);
    }
  }

  localStorage.setItem("todoList", JSON.stringify(theList)); // Set localStorage object

  document.getElementById("newItem").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  if (checkboxes.length > 1) {
    alert("Please only check one box at a time.");
    return false;
  }

  var parent = document.getElementById("parent");
  if (prioirity.checked == true) {
    li.style.color = "red";
    li.style.fontWeight = "bold";
    clone = li.cloneNode(true);
    if (days.value == "Monday") {
      document.getElementById("monday").insertBefore(li, document.getElementById("monday").children[0]);
      }
    else if (days.value == "Tuesday") {
        document.getElementById("tuesday").insertBefore(li, document.getElementById("tuesday").children[0]);
      }
    else if (days.value == "Wednesday") {
        document.getElementById("wednesday").insertBefore(li, document.getElementById("wednesday").children[0]);
      }
    else if (days.value == "Thursday") {
      document.getElementById("thursday").insertBefore(li, document.getElementById("thursday").children[0]);
      }
    else if (days.value == "Friday") {
      document.getElementById("friday").insertBefore(li, document.getElementById("friday").children[0]);
      }
    }

  else if (work.checked == true) {
    li.style.color = "blue";
  }
  else if (home.checked == true) {
    li.style.color = "purple";
  }
  else if (activity.checked == true) {
    li.style.color = "orange";
  }

  for (i = 0; i < checkboxes.length; i++){
    checkboxes[i].checked = false;
  }

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
      }
    }
}
