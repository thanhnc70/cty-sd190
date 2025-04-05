document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mainNav = document.querySelector('.main-nav');
    
    mobileMenuBtn.addEventListener('click', function() {
        mainNav.classList.toggle('active');
    });
    
    // Submenu Toggle for Mobile
    const hasSubmenuItems = document.querySelectorAll('.has-submenu');
    
    hasSubmenuItems.forEach(item => {
        const link = item.querySelector('a');
        const submenu = item.querySelector('.submenu');
        
        link.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                submenu.classList.toggle('active');
                
                // Toggle icon
                const icon = this.querySelector('.fa-chevron-down, .fa-chevron-right');
                if (icon) {
                    if (icon.classList.contains('fa-chevron-down')) {
                        icon.classList.remove('fa-chevron-down');
                        icon.classList.add('fa-chevron-up');
                    } else if (icon.classList.contains('fa-chevron-right')) {
                        icon.classList.remove('fa-chevron-right');
                        icon.classList.add('fa-chevron-left');
                    } else if (icon.classList.contains('fa-chevron-up')) {
                        icon.classList.remove('fa-chevron-up');
                        icon.classList.add('fa-chevron-down');
                    } else if (icon.classList.contains('fa-chevron-left')) {
                        icon.classList.remove('fa-chevron-left');
                        icon.classList.add('fa-chevron-right');
                    }
                }
            }
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 768 && mainNav.classList.contains('active')) {
            if (!e.target.closest('.main-nav') && !e.target.closest('.mobile-menu-btn')) {
                mainNav.classList.remove('active');
            }
        }
    });
});