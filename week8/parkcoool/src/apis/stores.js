export const getStores = async () => {
    const reponse = await fetch("http://localhost:8080/stores");
    const data = await reponse.json();
    return data;
};

export const getStoreById = async (id) => {
    const reponse = await fetch(`http://localhost:8080/stores/${id}`);
    const data = await reponse.json();
    return data;
};

export const getStoreByCategoryId = async (categoryId) => {
    const data = await getStores();
    const filteredData = data.filter((store) => store.categoryId === categoryId);
    return filteredData;
};
