const btn = document.querySelectorAll(".btn");

btn.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    // console.log(e.currentTarget);
    // e.currentTarget.style.color = "green";
    console.log("target", e.target);
  });
});
