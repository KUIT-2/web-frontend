export const getStores = async () => {
    const response = await fetch("http://localhost:8080/stores");
    const data = await response.json();
    return data;
};

export const getStore = async (storeId) => {
    const response = await fetch(`http://localhost:8080/stores/${storeId}`);
    const data = await response.json();
    return data;
};

