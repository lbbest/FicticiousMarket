# Coding Challenge: Create a shopping list and a shopping cart

For this coding challenge we'd like you to implement a single page application in Javascript for a new online supermarket "FicticiousMarket" which offers it's users to order their groceries online.

Their requirements are:

* the shopping list should show all the items available row by row with: the image of the item on the left, the name of the item next to it and the price of the item as well as a button to purchase it (put it into the cart) on the far right end of the row
* the shopping list data is provided to you over this API: https://s3.eu-central-1.amazonaws.com/code-challenge-shopping-cart/cart.json, please assume it's a remote API you need to call on page load to receive the current stock
* there should be a search field (search for title only) above the item list, that updates the item list responsively
* on the same page (either next to it on the right or below the shopping list in a fixed container) there should be an overview over the current cart with: the amount of products you put in the cart, by product - as well as the total price
* items should be able to be removed from the cart individually

## Bonus
* show an option to sort the articles ascending by price

