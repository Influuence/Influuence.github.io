// Acordeon
(function(){
    const $elementHide = document.querySelectorAll('[data-actext]');
    const $clickButton = document.querySelectorAll('[data-acclick]');
    const visibleClass = 'visible';
    const animationClass = 'rotate';
    
    if($elementHide.length && $clickButton.length) {
        for (let i = 0; i < $clickButton.length; i++) {
            $clickButton[i].addEventListener('click', function(){
        
                const $text = $elementHide[i];
                if(this.classList.contains(animationClass) && $text.classList.contains(visibleClass)){
                    this.classList.remove(animationClass);
                    $text.classList.remove(visibleClass);
                    return;
                }
        
                for (let ind = 0; ind < $clickButton.length; ind++) {
                    $clickButton[ind].classList.remove(animationClass);
                    $elementHide[ind].classList.remove(visibleClass);
                }
        
                this.classList.add(animationClass);
                $elementHide[i].classList.add(visibleClass);
            });
        }
    }
})();