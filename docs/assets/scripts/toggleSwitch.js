function toggleSwitch(element) {
  var x = document.getElementById("uploadFile");
  var y = document.getElementById("population");
  if (x.style.display === "none") {
    x.style.display = "block";
    y.readOnly = true;
    window.alert("This feature is still in development.")
  } else {
    x.style.display = "none";
    y.readOnly = false;
  }
}
