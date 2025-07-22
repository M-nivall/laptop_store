import axios from "axios";

export async function productsData() {
    const products = await axios.get("http://localhost/laptopstore/react/products.php");
    return products.data;
}
