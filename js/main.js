var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
   
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    }  
});


// $(document).ready(function () {
//   $(".plus").click(function(){
//     if($(this).prev().val()<20)
//     {
//       $(this).prev().val(+$(this).prev().val() + 1);
//     }
//   });
//   $(".minus").click(function(){
//     if($(this).next().val()<20)
//     {
//       $(this).next().val(+$(this).next().val() - 1);
//     }
//   });
// });



$(document).ready(function () {
  let cartCount = 0; // For tracking the cart count
  let totalPrice = 0; // For total price calculation

  $(".add-to-cart").click(function () {
    const foodItem = $(this).closest(".modal-content");
    const foodName = foodItem.find(".modal-title").text().trim();
    const quantity = parseInt(foodItem.find(".quantity-input").val()); 
    const unitPrice = parseFloat(foodItem.find(".food-price").text().trim()); 
    const itemPrice = unitPrice * quantity; 

    // Show notification
    
    $(".bag .count").fadeIn();

    // Update Cart Items
    const cartList = $(".cart-list");
    const existingItem = cartList.find(`li[data-food="${foodName}"]`);

    if (existingItem.length) {
      // If the item already exists in the cart, update the quantity and price
      const currentQuantity = parseInt(existingItem.data("quantity"));
      const newQuantity = currentQuantity + quantity; // Increase quantity by the amount selected
      existingItem.data("quantity", newQuantity);
      existingItem.find(".item-quantity").text(newQuantity);
      existingItem.find(".item-price").text((unitPrice * newQuantity).toFixed(2));
    } else {
      // If the item doesn't exist in the cart, add it to the cart
      cartList.append(`
        <li class="list-group-item d-flex justify-content-between align-items-center" data-food="${foodName}" data-quantity="${quantity}">
          <div>
            ${foodName} - Quantity: <span class="item-quantity">${quantity}</span>
          </div>
          <span>$<span class="item-price">${itemPrice.toFixed(2)}</span></span>
        </li>
      `);
    }

    // Update Cart Total and Notification Count
    cartCount += quantity; // Add the selected quantity to the cart count
    totalPrice += itemPrice; // Add the price of the selected quantity to the total price

    // Update the notification count and total price display
    $(".bag .count").text(cartCount); 
    $(".cart-total").text(`$${totalPrice.toFixed(2)}`);

    // Close the modal after adding to cart
    $(this).closest(".modal").modal("hide");
  });

  // Increment quantity
  $(".plus").click(function (e) {
    e.preventDefault();
    const input = $(this).siblings(".quantity-input");
    const currentVal = parseInt(input.val());
    if (!isNaN(currentVal)) {
      input.val(currentVal + 1); // Increase quantity by 1
    }
  });

  // Decrement quantity
  $(".minus").click(function (e) {
    e.preventDefault();
    const input = $(this).siblings(".quantity-input");
    const currentVal = parseInt(input.val());
    if (!isNaN(currentVal) && currentVal > 1) {
      input.val(currentVal - 1); // Decrease quantity by 1
    }
  });
});




