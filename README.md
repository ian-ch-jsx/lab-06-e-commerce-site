# e-commerce site
## data model
* separate file for product list
* data: name, image, price, something else...
* unique ID

example...
``` id: '1', name: 'Irn Bru', img: 'url', calories: 250, price: 2 ```

## html elements
* product list
* product card

# TDD
* elements -- right click -- copy outer HTML 

-----------------------------------------------------------------

# Local Storage
## addItem (id)
* check if the item exists
* product ID
* increment the qty - for now, always increment by 1
* save it in localStorage

* get the cart from local storage
* parse it from JSON to javascript
* use findByID to find a matching cartItem with the ID
* if cartItem is found, increment by 1
* else create a new cartItem with the id and qty = 1
* stringify the cart back to JSON
* set the cart to localStorage

## getCart
* get JSON string from local storage
* parse into JS
* return it

## clearCart
* remove item