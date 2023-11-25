export const getCategories = async () => {
    const reponse = await fetch("http://localhost:8080/categories");
    const data = await reponse.json();
    return data;
};

export const getCategoryById = async (id) => {
    const reponse = await fetch(`http://localhost:8080/categories/${id}`);
    const data = await reponse.json();
    return data;
};
