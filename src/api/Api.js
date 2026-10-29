import axios from "axios";

export async function productsData() {
  const products = await axios.get(
    "https://3270-217-199-148-239.ngrok-free.app/laptopstore/react/products.php",
    { headers: { "ngrok-skip-browser-warning": "true" } }
  );
  return products.data;
}