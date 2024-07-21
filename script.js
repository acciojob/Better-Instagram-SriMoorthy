//your code here
document.addEventListener('DOMContentLoaded', () => {
    const draggables = document.querySelectorAll('.draggable');
    
    draggables.forEach(draggable => {
        draggable.addEventListener('dragstart', handleDragStart);
        draggable.addEventListener('dragover', handleDragOver);
        draggable.addEventListener('drop', handleDrop);
    });
});

let draggedElement = null;

function handleDragStart(event) {
    draggedElement = this;
    event.dataTransfer.effectAllowed = 'move';
}

function handleDragOver(event) {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
}

function handleDrop(event) {
    event.stopPropagation();
    
    if (draggedElement !== this) {
        let draggedBackground = draggedElement.style.backgroundImage;
        draggedElement.style.backgroundImage = this.style.backgroundImage;
        this.style.backgroundImage = draggedBackground;
    }
    
    return false;
}

