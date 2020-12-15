import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*,
*::after,
*::before {
    box-sizing: border-box;
}

:root {
    --color-bg: white;
    --fz-body: 16px;
    --violet: #5964E0;
    --dark-grey: #6E8098;
    --very-dark-blue: #19202D;
}

body {
    color: var(--dark-grey);
    font-family: Kumbh Sans, sans-serif;
    margin: 0;
    font-size: var(--fz-body);
    line-height: 16px;

    background: ${({theme})=>theme.body
    }

    ;
}


h2 {
    font-size: 20px;
    line-height: 20px;
    color: var(--very-dark-blue);
}

h4 {
    font-size: 14px;
    line-height: 18px;
    color: var(--violet);
}

.container {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
}

.section {
    width: 100%
}


@media (min-width: 1281px) {


    .section {
        margin: 0 0 120px 0px;
    }

    .container {
        margin: 145px 150px 30px 150px;
    }
}

@media (min-width: 1025px) and (max-width: 1280px) {

    .section {
        margin: 0 0 120px 0px;
    }

    .container {
        margin: 145px 130px 30px 130px;
    }

}

@media (min-width: 768px) and (max-width: 1024px) {
    .section {
        margin: 0 0 60px 0px;
    }


    .container {
        margin: 110px 40px 30px 40px;
    }

}

@media (min-width: 320px) and (max-width: 480px) {
    .section {
        margin: 0 0 104px 0px;
    }


    .container {
        margin: 97px 40px 30px 40px;
    }

}


.center-align {
    margin: 0 auto;
    display: block;
}
`;
