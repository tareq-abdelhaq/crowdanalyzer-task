import { API_BASE_URL } from "../config";

export async function getAllProducts(category, queryString) {
  let endPoint = `${API_BASE_URL}/products`;
  if (category) {
    endPoint = `${API_BASE_URL}/products/category/${category}`;
  }
  if (queryString) {
    endPoint = endPoint.concat(`?${queryString}`);
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
