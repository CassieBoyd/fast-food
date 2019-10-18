// You need to write code to represent the process of ordering food at a fast food joint. Your restaurant is Bob's Burgers, and you have some starter code below. The object will have two behaviors that you must define.

// X1. The object should have a property named orders that is an array. You will need to define this.
// X2. Define a function to represent the behavior of placing an order. It should accept one argument named meal. This argument will be an object. There is starter code provided.
// 3. Define a function to represent the behavior of getting all orders. It should return the order property (hint: this). You will need to define this.
// X4. Each meal object should have three properties: sandwichType, fries (true or false), and drinkSize.



const restaurant = {
    name: "Bob's Burgers",
    placeOrder: function (meal) {
        this.orders.push(meal)
    },
    orders: [],
    getAllOrders: function () {
        return this.orders
    }
}

const chickenComboMeal = {
    sandwichType: "chicken",
    fries: true,
    drinkSize: "medium"
}

const burgerComboMeal = {
    sandwichType: "beef",
    fries: true,
    drinkSize: "medium"
}

const tofuComboMeal = {
    sandwichType: "tofu",
    fries: true,
    drinkSize: "medium"
}

// Place an order
restaurant.placeOrder(chickenComboMeal)
restaurant.placeOrder(burgerComboMeal)
restaurant.placeOrder(tofuComboMeal)


// Invoke the function to return the list of all orders
restaurant.getAllOrders()

// Output all orders to the console using console.table()
console.table(restaurant.getAllOrders())