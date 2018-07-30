var form = document.querySelector('[name="coffeeOrderForm"]');

form.addEventListener('submit', function(e) {
    var coffeeOrder = document.querySelector('[name="coffeeOrder"]');
    var email = document.querySelector('[name="email"]');
    var size = document.querySelector('[name="size"]');
    var flavorShot = document.querySelector('[name="flavorShot"]');
    var caffeineRating = document.querySelector('[name="caffeineRating"]');

    e.preventDefault();

    var coffeeContainer = document.createElement('li');
    var emailContainer = document.createElement('li');
    var sizeContainer = document.createElement('li');
    var flavorShotContainer = document.createElement('li');
    var caffeineRatingContainer = document.createElement('li');

    

    var unorderedList = document.createElement('ul');
    var order = document.createElement('li');

    unorderedList.classList.add('unorderedList')

    coffeeContainer.textContent = coffeeOrder.value;
    emailContainer.textContent = email.value;
    sizeContainer.textContent = size.value;
    flavorShotContainer.textContent = flavorShot.value;
    caffeineRatingContainer.textContent = caffeineRating.value;

    unorderedList.appendChild(coffeeContainer);
    unorderedList.appendChild(emailContainer);
    unorderedList.appendChild(sizeContainer);
    unorderedList.appendChild(flavorShotContainer);
    unorderedList.appendChild(caffeineRatingContainer);

    order.appendChild(unorderedList);

    document.querySelector('.orders-list').appendChild(order);
    
});
