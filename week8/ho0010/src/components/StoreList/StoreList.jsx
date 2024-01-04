import React, { useEffect, useState } from "react";
import StoreListComponent from './StoreListComponent';
//import stores from '../../models/stores';
import { getStores } from "../../apis/stores";
const StoreList = () => {
    
    const [stores,setStores] = useState([]);
//초기 상태를 빈 배열로 해줘야함
    useEffect(() => {
    getStores().then(value => setStores(value))
    }, []);


    return (
        <div>
            {stores.map((store) => (
                <StoreListComponent
                    key={store.id}
                    store={store}
                />
            ))}
        </div>
    );
}

export default StoreList;

