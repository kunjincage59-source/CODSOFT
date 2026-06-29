function append(x) {
  a = document.getElementById("result").value;
  b = a + x;
  document.getElementById("result").value = b;
}

function cal1() {
  a = document.getElementById("result").value;
  document.getElementById("result").value = eval(a);
}

function clr() {
  document.getElementById("result").value = "";
}