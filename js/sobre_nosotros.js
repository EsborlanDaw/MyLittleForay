let pag1 = function(){
  document.getElementById("luis").classList.remove("collapse")
  document.getElementById("fani").classList.add("collapse")
  document.getElementById("mario").classList.add("collapse")
};

let pag2 = function(){
  document.getElementById("luis").classList.add("collapse")
  document.getElementById("fani").classList.remove("collapse")
  document.getElementById("mario").classList.add("collapse")
};

let pag3 = function(){
  document.getElementById("luis").classList.add("collapse")
  document.getElementById("fani").classList.add("collapse")
  document.getElementById("mario").classList.remove("collapse")
};