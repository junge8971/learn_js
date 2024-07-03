import axios from "axios";

export default class PostService {
  static async get_all_posts(limit = 10, page = 1) {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`, {
      params: {
        _limit: limit,
        _page: page,
      },
    });
    console.log(response);
    return response;
  }

  static async get_post_by_id(post_id) {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${post_id}`
    );
    console.log(response);
    return response;
  }

  static async get_comments_by_post_id(post_id) {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${post_id}/comments`
    );
    console.log(response);
    return response;
  }
}
