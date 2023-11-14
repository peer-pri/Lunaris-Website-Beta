// Add animation to the header
const header = document.querySelector('header');
header.addEventListener('mouseover', () => {
    header.style.transform = 'scale(1.1)';
});
header.addEventListener('mouseout', () => {
    header.style.transform = 'scale(1)';
});

// Add animation to the download links
const downloadLinks = document.querySelectorAll('a');
downloadLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.color = '#ffcc00';
    });
    link.addEventListener('mouseout', () => {
        link.style.color = '#fff';
    });
});
