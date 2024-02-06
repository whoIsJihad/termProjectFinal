// controllers/orderController.js
const db = require("../db");

exports.getAllOrders = async (req, res) => {
    try {
        const orders = await db.query("SELECT * FROM orders");
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
};

exports.getOrderById = async (req, res) => {
    try {
        const { id } = req.params;
        const order = await db.query("SELECT * FROM orders WHERE id = ?", [id]);
        if (order.length === 0) {
            return res.status(404).json({ error: "Order not found" });
        }
        res.status(200).json(order[0]);
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
};

exports.updateOrder = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;
        await db.query("UPDATE orders SET status = ? WHERE id = ?", [status, id]);
        res.status(200).json({ message: "Order updated successfully" });
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
};

exports.deleteOrder = async (req, res) => {
    try {
        const { id } = req.params;
        await db.query("DELETE FROM orders WHERE id = ?", [id]);
        res.status(200).json({ message: "Order deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
};
