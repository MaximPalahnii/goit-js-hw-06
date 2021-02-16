function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;
  // Пиши код ниже этой строки
orderedItems.forEach((orderedItem) => {
        totalPrice += orderedItem;
    })
  
    // for (let i = 0; i < orderedItems.length; i += 1) {
    //   totalPrice += orderedItems[i];
    // }
  // Пиши код выше этой строки
  return totalPrice;
}