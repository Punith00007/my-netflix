// Email validation and form handling
document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.querySelector('.email-input');
    const getStartedBtn = document.querySelector('.get-started-btn');

    getStartedBtn.addEventListener('click', function() {
        const email = emailInput.value.trim();
        
        if (email === '') {
            alert('Please enter your email address');
            emailInput.focus();
            return;
        }

        if (!isValidEmail(email)) {
            alert('Please enter a valid email address');
            emailInput.focus();
            return;
        }

        // Here you would typically send the email to your backend
        console.log('Email submitted:', email);
        alert('Thank you! Your email has been submitted.');
    });

    emailInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            getStartedBtn.click();
        }
    });

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});

// Trending section scroll functions
function scrollTrendingLeft() {
    const container = document.getElementById('trendingContainer');
    const scrollAmount = -(160 + 12) * 5;
    container.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
    });
    setTimeout(updateScrollButtons, 300);
}

function scrollTrendingRight() {
    const container = document.getElementById('trendingContainer');
    const scrollAmount = (160 + 12) * 5;
    container.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
    });
    setTimeout(updateScrollButtons, 300);
}
// Update scroll button visibility
function updateScrollButtons() {
    const container = document.getElementById('trendingContainer');
    const leftBtn = document.querySelector('.scroll-btn-left');
    const rightBtn = document.querySelector('.scroll-btn-right');
    
    // Hide left button if at start
    if (container.scrollLeft <= 10) {
        leftBtn.style.display = 'none';
    } else {
        leftBtn.style.display = 'flex';
    }
    
    // Hide right button if at end
    const maxScroll = container.scrollWidth - container.clientWidth;
    if (container.scrollLeft >= maxScroll - 10) {
        rightBtn.style.display = 'none';
    } else {
        rightBtn.style.display = 'flex';
    }
}

// Initialize scroll buttons on page load
document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('trendingContainer');
    
    // Update buttons on scroll
    container.addEventListener('scroll', updateScrollButtons);
    
    // Initial update
    updateScrollButtons();
});

// Modal functions
function openModal(id, image, title, match, year, rating, description) {
    const modal = document.getElementById('movieModal');
    document.getElementById('modalImage').src = image;
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalMatch').textContent = match;
    document.getElementById('modalYear').textContent = year;
    document.getElementById('modalRating').textContent = rating;
    document.getElementById('modalDescription').textContent = description;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('movieModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('movieModal');
    if (event.target == modal) {
        closeModal();
    }
}
