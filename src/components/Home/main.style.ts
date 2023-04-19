import styled from "styled-components";

export const ContainerMain = styled.div`
    background: rgb(25,24,24);
    background: linear-gradient(180deg, rgba(25,24,24,1) 15%, rgba(5,5,5,1) 59%);
    width: 75%;
    height: 150vh;
    position: absolute;
    right: 0;
    
    .navigate{
        margin-top: 20px;
        margin-left: 41px;
    }
    .container-top {
        margin-left: 41px;
        margin-top: 20px;
        color: white;
    }
    .group{
        margin-left: 20px;
        border-radius: 0px 5px 5px 0px;
        margin-top: 20px;
        display: flex;
        align-items: center;
        width: 350px;
        background: #303030;
    }
    .group h2{
        font-weight: 400;
        margin-left: 30px;
        font-size: 20px;
    }
    .items{
        display: flex;
        flex-wrap: wrap;
    }
    .content-bottom{
        flex-wrap: wrap;
        display: flex;
        margin-left: 41px;
        margin-top: 30px;
        color: white;
    }
    .group-simple img{
        margin-top: -20px;
        border-radius: 5px;
        
    }
    .group-simple{
        margin-top: 50px;
        flex-direction: column;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #181818;
        border-radius: 5px;
        padding: 20px;
        padding-inline: 30px;
        height: 200px;
        margin-right: 20px;
    }
    .group-simple h1{
        font-size: 18px;
        margin-top: 10px;
    }
`
