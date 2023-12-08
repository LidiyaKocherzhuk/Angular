const baseURl = 'https://jsonplaceholder.typicode.com';

const users = `${baseURl}/users`
const posts = `${baseURl}/posts`

const urls = {
  users: {
    base: users,
    byId: (id: number): string => `${users}/${id}`,
    posts: (id: number | string): string => `${users}/${id}/posts`,
  },
  posts: {
    base: posts,
    byId: (id: number): string => `${posts}/${id}`,
  }
}

export {
  urls,
}
