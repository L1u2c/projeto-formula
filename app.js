function showDescription(formulaId) {
    const descriptionElement = document.getElementById(`desc-${formulaId}`);
    const isVisible = descriptionElement.style.display === 'block';
    
    // Toggle the display of the description
    descriptionElement.style.display = isVisible ? 'none' : 'block';
}
