// Get references to HTML elements
const header = document.querySelector('header');
const main = document.querySelector('main');

// Change header background color when clicked
header.addEventListener('click', () => {
    header.style.backgroundColor = 'blue';
});
// Get references to HTML elements
const previewVideo = document.getElementById('previewVideo');
const library = document.querySelector('.library');

// Change video source based on library item clicked
library.addEventListener('click', (event) => {
    if (event.target.tagName === 'IMG') {
        const imagePath = event.target.getAttribute('src');
        previewVideo.src = imagePath.replace('image', 'video').replace('.jpg', '.mp4');
    }
});
