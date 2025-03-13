document.addEventListener('DOMContentLoaded', function() {
    // Add click event listener to the document
    document.addEventListener('click', function(event) {
        // Don't create paw prints when clicking on links or buttons
        if (event.target.tagName === 'A' || event.target.tagName === 'BUTTON' || 
            event.target.closest('a') || event.target.closest('button')) {
            return;
        }
        
        // Create a new paw print element
        const paw = document.createElement('div');
        paw.className = 'paw-print';
        
        // Randomly choose between dog and cat paw
        const isPawDog = Math.random() > 0.5;
        paw.classList.add(isPawDog ? 'dog-paw' : 'cat-paw');
        
        // Position the paw print at the click location
        paw.style.left = (event.pageX - 15) + 'px';
        paw.style.top = (event.pageY - 15) + 'px';
        
        // Randomly rotate the paw print
        const rotation = Math.floor(Math.random() * 360);
        paw.style.transform = `rotate(${rotation}deg)`;
        
        // Add the paw print to the document
        document.body.appendChild(paw);
        
        // Remove the paw print after animation completes
        setTimeout(() => {
            paw.classList.add('fade-out');
            setTimeout(() => {
                paw.remove();
            }, 1000);
        }, 2000);
    });
}); 