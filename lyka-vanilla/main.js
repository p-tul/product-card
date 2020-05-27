window.onload = () => {
    const colorPickerItems = document.querySelectorAll('.colorPicker-list-item')

    const removeActive = () => {
        colorPickerItems.forEach(item => {
            item.classList.remove('active')
        })
    }
    
    colorPickerItems.forEach(item => {
        item.addEventListener('click', () => {
            removeActive()
            item.classList.add('active')
            // fetch new images
            // ...
        })
    })
}
