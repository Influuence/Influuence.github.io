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
		}, false);
	}
})();

// Scroll Suave
(function(){
    const clickScroll = document.querySelector('a[href^="#servicos"]');

    if (clickScroll ){
        clickScroll.addEventListener('click', scrollToIdOnClick);

    function scrollToIdOnClick(e){
        e.preventDefault();
        const to = getScrollTopByHref(e.target);
    
        scrollToPosition(to);
    }
    
    function scrollToPosition(to){
        // window.scroll({
        //     top: to,
        //     behavior: "smooth"
        // });
    
        smoothScrollTo(0, to);
    }
    
    function getScrollTopByHref(element){
        const id = element.getAttribute('href');
        return document.querySelector(id).offsetTop;
    }
    
    // Função scroll suave para navegadores antigos
    function smoothScrollTo(endX, endY, duration) {
        const startX = window.scrollX || window.pageXOffset;
        const startY = window.scrollY || window.pageYOffset;
        const distanceX = endX - startX;
        const distanceY = endY - startY;
        const startTime = new Date().getTime();
      
        duration = typeof duration !== 'undefined' ? duration : 400;
      
        // Easing function
        const easeInOutQuart = (time, from, distance, duration) => {
          if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
          return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
        };
      
        const timer = setInterval(() => {
          const time = new Date().getTime() - startTime;
          const newX = easeInOutQuart(time, startX, distanceX, duration);
          const newY = easeInOutQuart(time, startY, distanceY, duration);
          if (time >= duration) {
            clearInterval(timer);
          }
          window.scroll(newX, newY);
        }, 1000 / 60); // 60 fps
      };
        
    }

    
})();

// Desabilitandp Botão
(function(){
    const buttonDistabled = document.querySelectorAll('.disabled');

    if(buttonDistabled.length){
        buttonDistabled.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
            })         
        });
    }
})();
