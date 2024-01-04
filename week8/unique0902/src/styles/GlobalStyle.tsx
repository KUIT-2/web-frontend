// Gl
import { createGlobalStyle } from 'styled-components';
import Pretendard from '../asset/fonts/PretendardVariable.woff2';

const globalStyles = createGlobalStyle`
    // css 초기값 정의

    // 따로 스타일링

    @font-face {
	font-family: 'Pretendard';
	font-weight: 45 920;
	font-style: normal;
	font-display: swap;
	src: url(${Pretendard}) format('woff2-variations');
}

    h1,h2,h3,h4,p {
        margin:0;
    }

    *{
        box-sizing:border-box;
        font-family: Pretendard;
        line-height: normal;
    }
    ul {
        list-style:none;
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
