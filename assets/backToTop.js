(function() {
    const btn = document.querySelector('#toTop');
    
    btn.addEventListener('click', () => {
        window.scrollTo({
        top: 0,
        behavior: 'smooth',
        });
    });
  })();