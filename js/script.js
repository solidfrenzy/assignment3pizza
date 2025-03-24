document.addEventListener("DOMContentLoaded", function() {
    // Add student info dynamically
    const studentInfo = document.getElementById("studentInfo");
    const studentId = "12345678"; // Replace with actual student ID
    const studentName = "John Doe"; // Replace with actual student name
    studentInfo.textContent = `Student ID: ${studentId}, Name: ${studentName}`;

    // Form handling
    document.getElementById("pizzaForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent page reload

        const customerName = document.getElementById("customerName").value;
        const size = document.getElementById("size").value;
        const toppings = [...document.querySelectorAll("input[name='toppings']:checked")].map(el => el.value);
        const instructions = document.getElementById("instructions").value;

        // Create Pizza object
        class Pizza {
            constructor(customerName, size, toppings, instructions) {
                this.customerName = customerName;
                this.size = size;
                this.toppings = toppings;
                this.instructions = instructions;
            }

            getDescription() {
                return `${this.customerName} ordered a ${this.size} pizza with ${this.toppings.length > 0 ? this.toppings.join(", ") : "no toppings"}${this.instructions ? ` and special instructions: ${this.instructions}` : ""}.`;
            }
        }

        const pizzaOrder = new Pizza(customerName, size, toppings, instructions);
        document.getElementById("orderSummary").textContent = pizzaOrder.getDescription();
    });
});
