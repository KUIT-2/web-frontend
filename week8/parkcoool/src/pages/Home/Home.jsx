import React from "react";
import { useNavigate } from "react-router-dom";

import styles from "./Home.module.css";
import cateogries from "../../models/categories";
import useUser from "../../user/user";

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
    const address = useUser((state) => state.address);
    return (
        <div>
            <div className="header">
                <h1 className={styles.title}>오늘은 무엇을 먹을까요?</h1>
                <button className={styles.addressBtn}>
                    {address}(으)로 배달 {">"}
                </button>
            </div>
            <div className={styles.categoryContainer}>
                {cateogries.map((category) => {
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
