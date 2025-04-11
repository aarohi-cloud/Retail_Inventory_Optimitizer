def optimize_inventory(data):
    inventory = data.get("inventory", [])
    optimized = []
    for item in inventory:
        stock = item.get("stock", 0)
        demand = item.get("demand", 0)
        suggestion = "Order More" if stock < demand else "Stock OK"
        item["suggestion"] = suggestion
        optimized.append(item)
    return {"optimized_inventory": optimized}