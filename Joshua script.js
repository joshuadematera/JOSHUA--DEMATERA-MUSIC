function selectAlbum(element) {
    // Deselect previously selected album
    const selectedAlbum = document.querySelector('.album.selected');
    if (selectedAlbum) {
        selectedAlbum.classList.remove('selected');
    }

    // Select the clicked album
    element.classList.add('selected');
}