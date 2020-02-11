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

// Menu Mobile
(function(){
    var $menuBtn =  document.querySelector('[data-menu="menu-button"]');
    var $menuMobile = document.querySelector('[data-menu="menu-mobile"]');

    if($menuBtn && $menuMobile){
        $menuBtn.addEventListener('click', function(){
            this.classList.toggle('animate');
            $menuMobile.classList.toggle('visible');
        });
        
        $menuMobile.addEventListener('click', function(e){
            if(e.target.nodeName === 'A'){
                $menuBtn.classList.remove('active');
                this.classList.remove('animate');
            }
        });

    } 
    
})();

// Dropdown menu
(function(){
	const buttonDropdown = document.querySelector('[data-dropclick="dropdown-button"]');
	const dropdown = document.querySelector('[data-dropdown="dropdown"]');
    const classAtcive = "active";
    const rotateClass = 'rotate'

	if(buttonDropdown && dropdown){
		buttonDropdown.addEventListener('click', function(){
            if(!buttonDropdown.classList.contains(rotateClass) && !dropdown.classList.contains(classAtcive)){
                buttonDropdown.classList.add(rotateClass);
                dropdown.classList.add(classAtcive);
            }else {
                buttonDropdown.classList.remove(rotateClass);
                dropdown.classList.remove(classAtcive);
            }
		});
	}
})();