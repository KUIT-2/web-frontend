import React, { useEffect, useState } from "react";
import StoreListComponent from './StoreListComponent';
//import stores from '../../models/stores';

const StoreList = () => {
    const [stores,setStores] = useState();

    useEffect(() => {
        if (stores) {
            setStores(stores);
          }
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

