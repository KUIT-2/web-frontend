// Gl
import { createGlobalStyle } from 'styled-components';

const globalStyles = createGlobalStyle`
    // css 초기값 정의

    // 따로 스타일링
    h1,h2,h3,h4,p {
        margin:0;
    }

    *{
        box-sizing:border-box;
        font-family: Pretendard;
        line-height: normal;
    }

    a {
        text-decoration:none;
    }
    button {
        border:none;
        background:none;
        cursor: pointer;
    }
`;

export default globalStyles;
