export const getStores = async () => {
  const response = await fetch('http://localhost:8081/stores');
  const data = await response.json();
  return data;
};
export const getStore = async (storeId: string) => {
  const response = await fetch(`http://localhost:8081/stores/${storeId}`);
  const data = await response.json();
  return data;
};
