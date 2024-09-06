const express = require('express');
const cors = require('cors');
const path = require('path');  // Import the path module to resolve file paths
const app = express();
const port = 3000; // Define the port number

app.use(cors()); // Enable CORS to allow frontend requests
app.use(express.json());

// Serve the invoice.html file when accessing /invoice
app.get('/invoice', (req, res) => {
    res.sendFile(path.join(__dirname,'invoice.html')); // Adjust the path to where your invoice.html is located
});

// Invoice API endpoint
app.get('/api/invoice', (req, res) => {
    console.log("Invoice API hit");
    const invoiceData = {
        sellerDetails: {
            name: "Varasiddhi Silk Exports",
            address: "75, 3rd Cross, Lalbagh Road",
            city: "BENGALURU",
            state: "KARNATAKA",
            pincode: "560027",
            panNo: "AACFV3325K",
            gstNo: "29AACFV3325K1ZY"
        },
        billingDetails: {
            name: "Madhu B",
            address: "Eurofins IT Solutions India Pvt Ltd., 1st Floor, Maruti Platinum, Lakshminarayana Pura, AECS Layout",
            city: "BENGALURU",
            state: "KARNATAKA",
            pincode: "560037",
            stateCode: "29"
        },
        shippingDetails: {
            name: "Madhu B",
            address: "Eurofins IT Solutions India Pvt Ltd., 1st Floor, Maruti Platinum, Lakshminarayana Pura, AECS Layout",
            city: "BENGALURU",
            state: "KARNATAKA",
            pincode: "560037",
            stateCode: "29"
        },
        orderDetails: {
            orderNo: "403-3225714-7676307",
            orderDate: "28.10.2019"
        },
        invoiceDetails: {
            invoiceNo: "IN-761",
            invoiceDate: "28.10.2019",
            reverseCharge: "No"
        },
        items: [
            {
                description: "Varasiddhi Silks Men's Formal Shirt (SH-05-42, Navy Blue, 42)",
                unitPrice: 338.10,
                qty: 1,
                discount: 0,
                taxRate: 5
            },
            {
                description: "Varasiddhi Silks Men's Formal Shirt (SH-05-40, Navy Blue, 40)",
                unitPrice: 338.10,
                qty: 1,
                discount: 0,
                taxRate: 5
            }
        ]
    };

    res.json(invoiceData);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${3000}`); // Use the 'port' variable here
});
