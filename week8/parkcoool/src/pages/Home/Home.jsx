import React from "react";

import styles from "./Home.module.css";
import useCartStore from "../../store/cartStore";

const FoodBtn = (food) => {
    const imgPath = food.eng === "more" ? "/img/more.svg" : `/img/${food.eng}.png`;
    return (
        <button className="foodBtn" key={food.eng}>
            <img src={imgPath} alt={food.kor} />
            <span>{food.kor}</span>
        </button>
    );
};

const Home = () => {
    const address = useCartStore((state) => state.address);
    return (
        <div>
            <div className="header">
                <h1>오늘은 무엇을 먹을까요?</h1>
                <button>
                    {address}(으)로 배달 {">"}
                </button>
            </div>
            <div className="foodContainer">
                {[
                    { eng: "pizza", kor: "피자" },
                    { eng: "salad", kor: "샐러드" },
                    { eng: "hamburger", kor: "햄버거" },
                    { eng: "korean", kor: "한식" },
                    { eng: "casual", kor: "분식" },
                    { eng: "chicken", kor: "치킨" },
                    { eng: "sushi", kor: "초밥" },
                    { eng: "sandwich", kor: "샌드위치" },
                    { eng: "pasta", kor: "파스타" },
                    { eng: "dessert", kor: "디저트" },
                    { eng: "coffee", kor: "커피" },
                ].map(FoodBtn)}
                <FoodBtn eng="more" kor="더보기" />
            </div>
        </div>
    );
};

export default Home;
