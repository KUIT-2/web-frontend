import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./Home.module.css";
import useUser from "../../user/user";

import { getCategories } from "../../apis/categories";

const CategoryBtn = ({ category }) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/stores/${category.id}`);
    };

    const imgPath = category.eng === "more" ? "/img/more.svg" : `/img/${category.eng}.png`;
    return (
        <button className={styles.categoryBtn} onClick={handleClick} key={category.eng}>
            <img src={imgPath} alt={category.kor} />
            <span>{category.kor}</span>
        </button>
    );
};

const Home = () => {
    const [categories, setCategories] = useState([]);
    const address = useUser((state) => state.address);
    useEffect(() => {
        getCategories().then((data) => {
            setCategories(data);
        });
    }, []);
    return (
        <div>
            <div className="header">
                <div className={styles.titleContainer}>
                    <h1 className={styles.title}>오늘은 무엇을 먹을까요?</h1>
                </div>
                <div className={styles.addressContainer}>
                    <button className={styles.addressBtn}>
                        {address}(으)로 배달 {">"}
                    </button>
                </div>
            </div>
            <div className={styles.categoryContainer}>
                {categories.map((category) => {
                    return <CategoryBtn category={category} key={category.id} />;
                })}
                <CategoryBtn
                    category={{
                        id: 0,
                        kor: "더보기",
                        eng: "more",
                    }}
                />
            </div>
        </div>
    );
};

export default Home;
