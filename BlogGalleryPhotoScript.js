function viewPhoto(imgUrl, caption, element) {
  // Update the main image and caption
  const mainImg = document.getElementById('mainDisplay');
  const mainCaption = document.getElementById('photoCaption');
  
  mainImg.src = imgUrl;
  mainCaption.innerText = caption;

  // Update active state in sidebar
  const items = document.querySelectorAll('.thumb-item');
  items.forEach(item => item.classList.remove('active'));
  element.classList.add('active');
}

