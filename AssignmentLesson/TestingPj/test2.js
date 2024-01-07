document.addEventListener('DOMContentLoaded', function () {
    // Image URL
    const imageUrl = 'https://pixabay.com/illustrations/domain-names-domain-extension-domain-1772243/';

    // Create an image element
    const imageElement = document.createElement('img');

    // Set the image source
    imageElement.src = imageUrl;

    // Set additional attributes if needed
    imageElement.alt = 'https://pixabay.com/illustrations/domain-names-domain-extension-domain-1772243/';

    // Append the image to the container
    const imageContainer = document.getElementById('image-container');
    imageContainer.appendChild(imageElement);
});
