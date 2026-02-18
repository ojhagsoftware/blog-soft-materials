function openGallery(evt, tabName) {
  var i, content, tabs;
  content = document.getElementsByClassName("gallery-content");
  for (i = 0; i < content.length; i++) {
    content[i].classList.remove("active");
  }
  tabs = document.getElementsByClassName("gallery-btn");
  for (i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove("active");
  }
  document.getElementById(tabName).classList.add("active");
  evt.currentTarget.classList.add("active");
}

