
const piece= document.querySelectorAll('.piece');
const drop = document.querySelectorAll('.drop');

let draggedPiece = null;

for (let i = 0; i < piece.length; i++) {
    const items = piece[i];

    items.addEventListener('dragstart', function() {
        draggedPiece = items;
        setTimeout(function () {
            items.style.display = 'none';
        }, 0);
        
    });

    items.addEventListener('dragend', function() {
        setTimeout(function () {
            draggedPiece.style.display = 'block'
            draggedPiece = null;
        }, 0);
    });

    for (let j = 0; j < drop.length; j++) {
        const drops = drop[j];

        drops.addEventListener('dragover', function (e) {
            e.preventDefault();
        });
        drops.addEventListener('dragenter', function (e) {
            e.preventDefault();
        });
        drops.addEventListener('drop', function (e) {
            console.log('drop');
            this.append(draggedPiece);
        });
    }
}