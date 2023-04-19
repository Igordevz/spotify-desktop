import styled from "styled-components";

export const Container = styled.div`
    background: #000000;
    position: fixed;
    height: 100vh;
    width: 25%;
    display: flex;
    align-items: center;

    nav{
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    nav a{
        border-radius: 6px;
        padding: 10px 80px 10px 10px;
        width: 100%;
        font-weight: 500;
        font-size: 15px;
        display: flex;
        color: white;
        text-decoration: none;
    }
    nav a img{
        margin-right:10px;
    }
    nav:nth-child(3){
        gap: 2px;
    }
`
export const ContentTop = styled.div`

    position: absolute;
    top: 32px;
    left: 29px;

`