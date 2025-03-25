document.querySelectorAll('.container').forEach(container => {
    let next = container.querySelector('.next');
    let prev = container.querySelector('.prev');
    let slide = container.querySelector('.slide');

    next.addEventListener('click', function(){
        let items = slide.querySelectorAll('.item');
        slide.appendChild(items[0]);
    });

    prev.addEventListener('click', function(){
        let items = slide.querySelectorAll('.item');
        slide.prepend(items[items.length - 1]);
    });
});
