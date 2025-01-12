import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api/",
    params: {
        key: "109225ae61e44da799c00fd123512ea3"
    }
})