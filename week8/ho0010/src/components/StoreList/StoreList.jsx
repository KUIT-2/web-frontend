import React from 'react';
import StoreListComponent from './StoreListComponent';
import stores from '../../models/stores';

const StoreList = () => {
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
