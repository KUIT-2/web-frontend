import React from "react";
import {Link} from "react-router-dom";
import * as S from "./Home.styles";

const Home = () => {
    return (
    <S.HomeForm>
        <Link to = '/Products' style={{ textDecoration: "none" }}>Click to Product</Link>
    </S.HomeForm>
    );
};

export default Home;