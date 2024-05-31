import { API_BASE_URL } from "../config";

export async function getAllGames(category, params) {
  let endPoint = `${API_BASE_URL}/products?`;
  if (category) {
    endPoint = `${API_BASE_URL}/products/category/${category}?`;
  }
  for (const key in params) {
    endPoint = endPoint.concat(`${key}=${params[key]}&`);
  }
  try {
    const res = await fetch(endPoint);
    if (!res.ok) {
      throw new Error("Network response was not successful");
    }
    const data = await res.json();
    return data.products;
  } catch (err) {
    throw err;
  }
}

export async function getGameDetails(gameId) {
  let endPoint = `${API_BASE_URL}/products/${gameId}`;

  try {
    const res = await fetch(endPoint);
    if (!res.ok) {
      throw new Error("Network response was not successful");
    }
    const data = await res.json();
    return data;
  } catch (err) {
    throw err;
  }
}
