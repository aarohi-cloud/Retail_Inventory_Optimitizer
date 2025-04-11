from flask import Blueprint, jsonify, request
from app.services.optimizer import optimize_inventory

inventory_bp = Blueprint('inventory', __name__)

@inventory_bp.route('/optimize', methods=['POST'])
def optimize():
    data = request.json
    optimized_data = optimize_inventory(data)
    return jsonify(optimized_data)