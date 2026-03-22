// Project - Restaurant v1.0
// Menu show karo
// User item choose kare
// Quantity puche
// Price add karo total me
// Pucho: aur order karna hai?
// Agar haan → repeat
// Nahi → final bill print

function Restaurant() {
    let menu = [
        { item: "Dal Fry", price: 120 },
        { item: "Masala Paneer", price: 200 },
        { item: "Noodles", price: 150 },
        { item: "Soup", price: 100 },
        { item: "Chicken Curry", price: 250 },
        { item: "Biryani", price: 220 }
    ];

    let totalBill = 0;
    let choice;

    do {
        let order = prompt(`Menu:
Dal Fry (120)
Masala Paneer (200)
Noodles (150)
Soup (100)
Chicken Curry (250)
Biryani (220)

What do you want to order?`);

        if (!order) {
            alert("Please enter an item");
            continue;
        }

        order = order.trim().toLowerCase();

        const foundItem = menu.find(
            m => m.item.toLowerCase() === order
        );

        if (!foundItem) {
            alert("Item not available");
            continue;
        }

        let qty = Number(prompt("Enter quantity:"));

        if (isNaN(qty) || qty <= 0) {
            alert("Invalid quantity");
            continue;
        }

        let itemTotal = foundItem.price * qty;
        totalBill += itemTotal;

        alert(`Added ₹${itemTotal} to bill`);

        choice = prompt("Do you want to order more? (yes/no)");

    } while (choice && choice.toLowerCase() === "yes");

    alert(`Your total bill is ₹${totalBill}\nThank you for ordering!`);
}

Restaurant();