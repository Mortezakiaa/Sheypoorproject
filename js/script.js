document.getElementById("dropdown-btn").addEventListener("click" , ()=>{
  let over = document.getElementById("over");
  let menu = document.getElementById("menu-dropdown");
  if(menu.style.display != "block"){
     menu.style.display = "block";
     over.style.display = "block";
  }else{
    over.style.display = "none";
    menu.style.display = "none";
  }
});
document.getElementById("over").addEventListener("click" , ()=>{
  let over = document.getElementById("over");
  let menu = document.getElementById("menu-dropdown");
  over.style.display ="none";
  menu.style.display = "none";
});

document.getElementById("estekhdam-link").addEventListener("click" , ()=>{
    let menu = document.getElementById("estekhdam-menu");
    let over = document.getElementById("over2");
    if(menu.style.visibility != "visible"){
      menu.style.visibility = "visible";
      over.style.display = "block";
      document.body.style.overflowY = "hidden";
    }else{
      menu.style.visibility = "hidden";
      over.style.display = "none";
      document.body.style.overflowY = "scroll";
    }
    over.onclick = function(){
      over.style.display = "none";
      menu.style.visibility = "hidden";
      document.body.style.overflowY = "scroll";
    }
});
document.getElementById("close-btn").addEventListener("click" , ()=>{
  let menu = document.getElementById("estekhdam-menu");
  let over = document.getElementById("over2");
  menu.style.visibility = "hidden";
  over.style.display = "none";
  document.body.style.overflowY = "scroll";
});

document.getElementById("tool-link").addEventListener("click" , ()=>{
  let menu = document.getElementById("tool-menu");
  let over = document.getElementById("over2");
   if(menu.style.visibility != "visible"){
       menu.style.visibility = "visible";
       over.style.display = "block";
       document.body.style.overflowY = "hidden";
   }else{
       menu.style.visibility = "hidden";
      over.style.display = "none";
      document.body.style.overflowY = "scroll";
  }

  over.onclick = function(){
    menu.style.visibility = "hidden";
    over.style.display = "none";
    document.body.style.overflowY = "scroll";
  }
});
document.getElementById("close-btn-tool").addEventListener("click" , ()=>{
  let menu = document.getElementById("tool-menu");
  let over = document.getElementById("over2");
  menu.style.visibility = "hidden";
  over.style.display = "none";
  document.body.style.overflowY = "scroll";
});

document.getElementById("box-text").addEventListener("keydown" , ()=>{
  let btn = document.getElementById("clear-btn");
  btn.style.visibility = "visible";
});

document.getElementById("box-text").addEventListener("keyup" , ()=>{
  let btn = document.getElementById("clear-btn");
  let box = document.getElementById("box-text");
  if(box.value === "" && btn.style.visibility === "visible"){
    btn.style.visibility = "hidden";
  }
})

document.getElementById("clear-btn").addEventListener("click" , ()=>{
  let box = document.getElementById("box-text");
  let btn = document.getElementById("clear-btn");
  box.value = "";
  btn.style.visibility = "hidden";
});

document.getElementById("btn-ir").addEventListener("click" , ()=>{
  let menu = document.getElementById("city-box");
  let over = document.getElementById("over2");
  if(menu.style.visibility != "visible"){
    menu.style.visibility = "visible";
    over.style.display = "block";
    document.body.style.overflowY = "hidden";
  }else{
    menu.style.visibility = "hidden";
    over.style.display = "none";
    document.body.style.overflowY = "scroll";
  }
  over.onclick = function(){
    menu.style.visibility = "hidden";
    over.style.display = "none";
    document.body.style.overflowY = "scroll";
  }
})

document.getElementById("close-btn-city").addEventListener("click" , ()=>{
  let menu = document.getElementById("city-box");
  let over = document.getElementById("over2");
  menu.style.visibility = "hidden";
  over.style.display = "none";
  document.body.style.overflowY = "scroll";
});

document.getElementById("tool-menu-link").addEventListener("click" , ()=>{
  let menu = document.getElementById("tool-menu");
  let over = document.getElementById("over2");
  if(menu.style.visibility != "visible"){
    menu.style.visibility = "visible";
    over.style.display = "block";
    document.body.style.overflowY = "hidden";
  }else{
    menu.style.visibility = "hidden";
    over.style.display = "none";
    document.body.style.overflowY = "scroll";
  }
  over.onclick = function(){
    menu.style.visibility = "hidden";
    over.style.display = "none";
    document.body.style.overflowY = "scroll";
  }
});

document.getElementById("employ-menu-link").addEventListener("click" , ()=>{
  let menu = document.getElementById("estekhdam-menu");
  let over = document.getElementById("over2");
  if(menu.style.visibility != "visible"){
    menu.style.visibility = "visible";
    over.style.display = "block";
    document.body.style.overflowY = "hidden";
  }else{
    menu.style.visibility = "hidden";
    over.style.display = "none";
    document.body.style.overflowY = "scroll";
  }
  over.onclick = function(){
    menu.style.visibility = "hidden";
    over.style.display = "none";
    document.body.style.overflowY = "scroll";
  }
});

document.getElementById("apartment-menu-link").addEventListener("click" , ()=>{
  let menu = document.getElementById("apartment-menu");
  let over = document.getElementById("over2");
  if(menu.style.visibility != "visible"){
    menu.style.visibility = "visible";
    over.style.display = "block";
    document.body.style.overflowY = "hidden";
  }else{
    menu.style.visibility = "hidden";
    over.style.display = "none";
    document.body.style.overflowY = "scroll";
  }
  over.onclick = function(){
    menu.style.visibility = "hidden";
    over.style.display = "none";
    document.body.style.overflowY = "scroll";
  }
});
document.getElementById("amlak-btn").addEventListener("click" , ()=>{
    let menu = document.getElementById("apartment-menu");
    let over = document.getElementById("over2");
    menu.style.visibility = "hidden";
    over.style.display = "none";
    document.body.style.overflowY = "scroll";
});

document.getElementById("car-menu-link").addEventListener("click" , ()=>{
    let menu = document.getElementById("car-menu");
    let over = document.getElementById("over2");
  if(menu.style.visibility != "visible"){
    menu.style.visibility = "visible";
    over.style.display = "block";
    document.body.style.overflowY = "hidden";
  }else{
    menu.style.visibility = "hidden";
    over.style.display = "none";
    document.body.style.overflowY = "scroll";
  }
  over.onclick = function(){
    menu.style.visibility = "hidden";
    over.style.display = "none";
    document.body.style.overflowY = "scroll";
  }
});
document.getElementById("btn-car-menu").addEventListener("click" , ()=>{
  let menu = document.getElementById("car-menu");
  let over = document.getElementById("over2");
  menu.style.visibility = "hidden";
  over.style.display = "none";
  document.body.style.overflowY = "scroll";
});

document.getElementById("btn-scroll-left").addEventListener("click" , ()=>{
  let div = document.getElementById("card-box");
  div.scrollLeft += -200 ;
    if(div.scrollLeft < 0){
      let btn = document.getElementById("div-scroll-right");
      btn.style.visibility = "visible";
    }
});

document.getElementById("btn-scroll-right").addEventListener("click" , ()=>{
  let btn = document.getElementById("div-scroll-right");
  let div = document.getElementById("card-box");
  div.scrollLeft +=200;
  if(div.scrollLeft >= 0){
    btn.style.visibility = "hidden";
  }
});

document.getElementById("btn-cancle-inp").addEventListener("click" , ()=>{
  let input = document.getElementById("input-gr");
  input.value = "";
  let btn = document.getElementById("btn-cancle-inp");
  btn.style.visibility = "hidden";
});

document.getElementById("input-gr").addEventListener("keydown" ,()=>{
  let btn = document.getElementById("btn-cancle-inp");
  let input = document.getElementById("input-gr");
  btn.style.visibility = "visible";
  if(input.value === "" && btn.style.visibility === "visible"){
    btn.style.visibility = "hidden";
  }
});

document.getElementById("es-inp").addEventListener("keydown" , ()=>{
  let btn = document.getElementById("es-cancle-btn");
  let input = document.getElementById("es-inp") ;
  btn.style.visibility = "visible";
  if(input.value === "" && btn.style.visibility === "visible"){
    btn.style.visibility = "hidden";
  }
});

document.getElementById("es-cancle-btn").addEventListener("click" , ()=>{
  let btn = document.getElementById("es-cancle-btn");
  btn.style.visibility = "hidden";
  let input = document.getElementById("es-inp") ;
  input.value = "";
});

document.getElementById("tool-input").addEventListener("keydown" , ()=>{
  let btn = document.getElementById("tool-cancle-btn");
  let input = document.getElementById("tool-input");
  btn.style.visibility = "visible";
  if(input.value === "" && btn.style.visibility === "visible"){
    btn.style.visibility = "hidden";
  }
});

document.getElementById("tool-cancle-btn").addEventListener("click" , ()=>{
  let input = document.getElementById("tool-input");
  let btn = document.getElementById("tool-cancle-btn");
  input.value = "";
  btn.style.visibility = "hidden";
});

document.getElementById("amlak-inp").addEventListener("keydown" , ()=>{
  let btn = document.getElementById("amlak-cancle-btn");
  let input = document.getElementById("amlak-inp");
  btn.style.visibility = "visible";
  if(input.value === "" && btn.style.visibility === "visible"){
    btn.style.visibility = "hidden";
  }
});

document.getElementById("amlak-cancle-btn").addEventListener("click" , ()=>{
  let input = document.getElementById("amlak-inp");
  let btn = document.getElementById("amlak-cancle-btn");
  input.value = "";
  btn.style.visibility = "hidden";
});

document.getElementById("car-input").addEventListener("keydown" , ()=>{
  let btn = document.getElementById("car-cancle-btn");
  let input = document.getElementById("car-input");
  btn.style.visibility = "visible";
  if(input.value === "" && btn.style.visibility === "visible"){
    btn.style.visibility = "hidden";
  }
});

document.getElementById("car-cancle-btn").addEventListener("click" , ()=>{
  let input = document.getElementById("car-input");
  let btn = document.getElementById("car-cancle-btn");
  input.value = "";
  btn.style.visibility = "hidden";
});


