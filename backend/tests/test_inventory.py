def test_inventory_optimizer():
    from app.services.optimizer import optimize_inventory
    data = {"inventory": [{"id": 1, "stock": 10, "demand": 20}]}
    result = optimize_inventory(data)
    assert result["optimized_inventory"][0]["suggestion"] == "Order More"