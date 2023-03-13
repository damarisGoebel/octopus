export const getProduct = () => {
  return fetch(
    "http://localhost:3001/graphql?query=%7B%0A%20%20Product(id%3A%201)%20%7B%0A%20%20%20%20id%0A%20%20%20%20name%0A%20%20%20%20power%0A%20%20%20%20description%0A%20%20%20%20price%0A%20%20%20%20quantity%0A%20%20%20%20brand%0A%20%20%20%20weight%0A%20%20%20%20height%0A%20%20%20%20width%0A%20%20%20%20length%0A%20%20%20%20model_code%0A%20%20%20%20colour%0A%20%20%20%20img_url%0A%20%20%7D%0A%7D%0A"
  ).then((resp) => {
    if (resp.status === 200) return resp.json();
    else throw new Error("Invalid response");
  });
};
