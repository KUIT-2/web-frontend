export const getCart = async () => {
  const response = await fetch("http://localhost:8080/cart");
  const data = await response.json();
  return data;
};

export const updateCart = async (store, menus) => {
  return await fetch("http://localhost:8080/cart", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      store,
      menus,
    }),
  });
};
