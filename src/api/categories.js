import { API_BASE_URL } from "../config";

export async function getAllCategories() {
  try {
    const res = await fetch(`${API_BASE_URL}/products/category-list`);
    if (!res.ok) {
      throw new Error("Network response was not successful");
    }
    const data = await res.json();
    return data;
  } catch (err) {
    throw err;
  }
}
