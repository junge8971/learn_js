import axios from "axios";

export default class PostService {
  static async get_all_posts() {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    console.log(response);
    return response.data;
  }
}
