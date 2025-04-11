export const getOptimization = async (payload) => {
  const response = await fetch('http://127.0.0.1:5000/api/inventory/optimize', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  return await response.json();
};