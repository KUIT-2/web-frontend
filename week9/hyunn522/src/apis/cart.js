export const getCart = async () => {
  const response = await fetch('http://localhost:8080/cart');
  const data = await response.json();
  return data;
};

export const updateCart = async (store, menus) => {
  const totalPrice = menus.reduce((acc, menu) => acc + menu.price * menu.cnt, 0);

  await fetch('http://localhost:8080/cart', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      store,
      menus,
      sum: totalPrice,
    }),
  });

  return totalPrice;
};

export const getSum = async () => {
  const response = await fetch('http://localhost:8080/cart');
  const data = await response.json();
  return data.sum;
};

export const clearCart = async (store, menus) => {
  await fetch('http://localhost:8080/cart', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      store,
      menus,
    }),
  });

  await fetch('http://localhost:8080/cart', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      sum: 0,
    }),
  });
};
