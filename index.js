var form = document.querySelector('[name="coffeeOrderForm"]');
var containersArray = [];
var ordersList = document.querySelector('.orders-list');
var url = 'https://dc-coffeerun.herokuapp.com/api/coffeeorders';


containersArray.forEach(function(container) {
    $.ajax({
        url: url,
        type: 'DELETE',
        success: function (result) {
            container.remove()
        }
    });
})

// var updateLocalStorage = function() {
//     localStorage.setItem('orders', JSON.stringify(containersArray));
// };

var createOrder = function(orders) {
    orders = document.createElement('li');
};

var updateOrders = function() {
    containersArray.forEach(function(order) {
        var unorderedList = document.createElement('ul');
        unorderedList.classList.add('unorderedList');
        var coffeeContainer = document.createElement('li');
        var emailContainer = document.createElement('li');
        var sizeContainer = document.createElement('li');
        var flavorShotContainer = document.createElement('li');
        var caffeineRatingContainer = document.createElement('li');

        coffeeContainer.textContent = order.coffee;
        emailContainer.textContent = order.emailAddress;
        sizeContainer.textContent = order.size;
        flavorShotContainer.textContent = order.flavor;
        caffeineRatingContainer.textContent = order.strength;

        unorderedList.appendChild(coffeeContainer);
        unorderedList.appendChild(emailContainer);
        unorderedList.appendChild(sizeContainer);
        unorderedList.appendChild(flavorShotContainer);
        unorderedList.appendChild(caffeineRatingContainer);

        ordersList.appendChild(unorderedList);
        var closeButton = document.createElement('button');
        unorderedList.appendChild(closeButton);

        closeButton.addEventListener('click', function(e) {
            unorderedList.remove();
        });
    });
};

var getfromLocalStorage = function() {
    var getOrders = localStorage.getItem('orders');
    var ordersObj = JSON.parse(getOrders);
    if (ordersObj !== null) {
        ordersObj.forEach(function(order) {
            containersArray.push(order);
        });
    }
};

var clearOrders = function() {
    var pendingOrders = document.querySelectorAll('.unorderedList');
    pendingOrders.forEach(function(order) {
        order.remove();
    });
};

form.addEventListener('submit', function(e) {
    e.preventDefault();
    var coffeeOrder = document.querySelector('[name="coffeeOrder"]');
    var email = document.querySelector('[name="email"]');
    var size = document.querySelector('[name="size"]');
    var flavorShot = document.querySelector('[name="flavorShot"]');
    var caffeineRating = document.querySelector('[name="caffeineRating"]');

    var orders = {
        coffee: coffeeOrder.value,
        emailAddress: email.value,
        size: size.value,
        flavor: flavorShot.value,
        strength: caffeineRating.value
    };

    containersArray.push(orders);
    // updateLocalStorage();
    clearOrders();
    updateOrders();

    $.post(url, orders);
});

getfromLocalStorage();
updateOrders();



$.ajax({
    url: 'https://dc-coffeerun.herokuapp.com/api/coffeeorders',
    success: function(orders) {
        for (var key in orders) {
            createOrder(orders[key]);
            containersArray.push(orders[key]);
        }
    }
});

