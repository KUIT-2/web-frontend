//스토어 전체 받아오기
export const getStores = async () => {
    const response = await fetch('http://localhost:8080/stores');
    //promise로 반환하기 때문에 await
    const data = await response.json();
    return data;
};

//한개의 스토어만
export const getStore = async (storeId) => {
    const response = await fetch(`http://localhost:8080/stores/${storeId}`);
    const data = await response.json();
    return data;
};