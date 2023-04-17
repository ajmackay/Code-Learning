 // # TODO animate showhide transitions

let content;
let header;
let reportBody;
let navList;
let navItems;
let sections;
let hidetoggles;
let tabGroups = [];


document.addEventListener("DOMContentLoaded", function() {
loaded();
});

function loaded(){

sections = document.getElementsByClassName("section");
content = document.getElementById("content");

header = document.getElementById("myheader");
reportBody = document.getElementById("content");
navItems = document.getElementsByClassName("tab");
hidetoggles = document.getElementsByClassName("showhide");

let navDiv = document.getElementById("myNav");

let navList = document.createElement("UL");
  navList.id = "navList";

for(let i = 0; i < sections.length; i++){

    let sectionName = sections[i].id;
    let listItem = document.createElement("LI");
    let navText = document.createElement("A");

    navText.classList.add("tab");
  navText.innerHTML = sectionName;

  if(i > 0){
    sections[i].classList.add("invisible");
  }else{
    navText.classList.add("active");
  }
  listItem.appendChild(navText);
  navList.appendChild(listItem);
}
navDiv.appendChild(navList);



for(let i = 0; i < navItems.length; i++){
  navItems[i].addEventListener("click",function(){

   let selectedSection = this.innerHTML;

      for(let j = 0; j < navItems.length; j++){navItems[j].classList.remove("active");}
      for(let j = 0; j < sections.length; j++){sections[j].classList.add("invisible");}

      this.classList.add("active");
      document.getElementById(selectedSection).classList.remove("invisible");
      window.dispatchEvent(new Event('resize'));
    })

}


for(let i = 0; i < hidetoggles.length; i++){

  let currentToggle = hidetoggles[i];
  let state = currentToggle.getAttribute("data-state");

  if (state == "show"){
     currentToggle.innerHTML = "hide &#x25BC;";
     currentToggle.setAttribute("data-state", "hide");
   }else{
     currentToggle.innerHTML = "show &#x25B2;";
     currentToggle.setAttribute("data-state", "show");
   }

  let forToggling = currentToggle.parentElement.parentElement.children;

    for(let j = 0; j < forToggling.length; j++){
      if(!forToggling[j].classList.contains("titlediv")){
        if(state == "hide"){
          forToggling[j].classList.add("minimised");
        }else{
          forToggling[j].classList.remove("minimised");
        }

      }

    }

  currentToggle.addEventListener("click", function(ev){
    let forToggling = this.parentElement.parentElement;
    let currentState = this.getAttribute("data-state");

        if(currentState == "hide"){
          forToggling.classList.add("minimised");
        }else{
          forToggling.classList.remove("minimised");
        }




   if (currentState == "show"){
     this.innerHTML = "hide &#x25BC;";
     this.setAttribute("data-state", "hide");

   }else{
     this.innerHTML = "show &#x25B2;";
     this.setAttribute("data-state", "show");
   }




  })
}


let height = header.offsetHeight.toString().concat("px");
reportBody.style.top = height;


setupTabGroups();

window.dispatchEvent(new Event('resize'));
}



setupTabGroups = function(){

let  groups = document.getElementsByClassName("tabgroup");


  for(let i = 0; i < groups.length; i++){
var currentGroup = groups[i];
var section = currentGroup.parentElement.parentElement.id;
var sectionSidebar = document.getElementById(section.concat("Sidebar"))

if(sectionSidebar == null){

sectionSidebar = document.createElement("div");
sectionSidebar.classList.add("sideBar");
sectionSidebar.id = section.concat("Sidebar");

document.getElementById(section).appendChild(sectionSidebar);

}


var newTabName = currentGroup.getAttribute("dataname");
var newTabGroupId = currentGroup.getAttribute("dataGroupId");
var newTabId = newTabName.concat(newTabGroupId);


if(!tabGroups.includes(newTabId)){

var newSideTab = document.createElement("div");
newSideTab.classList = "SideTab";

newSideTab.innerHTML = newTabName
newSideTab.addEventListener("click", sideTabClicked);
sectionSidebar.appendChild(newSideTab);

tabGroups.push(newTabId);


}


  }

var sideBars = document.getElementsByClassName("sideBar");
  for(let i = 0; i < sideBars.length; i++){
  sideBars[i].firstChild.click();
  }

}

sideTabClicked = function(tab){


var clicked = tab.target;

var siblingTabs = clicked.parentElement.children;
var tabGroups = clicked.parentElement.parentElement.getElementsByClassName("tabgroup");


for(let i = 0; i < siblingTabs.length; i++){

if(siblingTabs[i].innerHTML == clicked.innerHTML){
  siblingTabs[i].classList.add("active");
}else{
  siblingTabs[i].classList.remove("active");
}


}

for(let i = 0; i < tabGroups.length; i++){
  if(tabGroups[i].getAttribute("dataName") == clicked.innerHTML){
   tabGroups[i].classList.remove("invisible");
  }else{
     tabGroups[i].classList.add("invisible");
  }


  window.dispatchEvent(new Event('resize'));

}








}

window.onresize = function(){
let height = header.offsetHeight.toString().concat("px");
reportBody.style.top = height;

}



document.addEventListener("keydown", function (event) {

if(event.ctrlKey && event.altKey && event.key == "i" ){
    document.getElementById("session-info").classList.toggle("invisible");
  }

});



