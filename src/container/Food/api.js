import axios from "axios"

export const getFoodListAPI = () => axios.get("http://temp.dash.zeta.in/food.php")
