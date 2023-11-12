import React from "react";
import { useParams } from "react-router-dom";

import categories from "../../models/categories";
import stores from "../../models/stores";

const Stores = () => {
    const { categoryId } = useParams();
    const category = categories.find((s) => s.id.toString() === categoryId);

    if (!category) {
        return <div>카테고리를 찾을 수 없어요 🥺</div>;
    }

    return <div>Stores</div>;
};

export default Stores;
