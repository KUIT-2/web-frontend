export const getCart = async () => {
    const reponse = await fetch("http://localhost:8080/cart");
    const data = await reponse.json();
    return data;
};

export const updateCart = async (store, menus) => {
    const reponse = await fetch("http://localhost:8080/cart", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ store, menus }),
    });
    const data = await reponse.json();
    return data;
};
