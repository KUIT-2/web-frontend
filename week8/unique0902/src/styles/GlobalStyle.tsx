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
    }

    a {
        text-decoration:none;
    }
`;

export default globalStyles;
