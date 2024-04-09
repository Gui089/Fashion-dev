import styled from 'styled-components';

 export const Painel = styled.section`
  width: 100%;
  height: 708px;
  background-image: 
    linear-gradient(90deg, rgba(121,66,40,0.8), rgba(255,255,255,0.2)),
    url('https://s3-alpha-sig.figma.com/img/5fc9/6618/bf4af5de736405bcb54eb1c88ec9636a?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QCmwaQ064DUrq0N36fbOD4gfeYNgIxGqZeagGuw-NNDzT84Y571gOQVRKcf092Qye~yUvXMU~yzKM2nTDf9Eww2hyjLT41EjNKA3D5n8O385BxXIvlUoNJta1Hcc22lAaUo2vukHE223ebeqjgv07-nminpuejnUTq3xH3bq5sdeEno2MQQvVETSV97lyq0rBXFTASXBktuiOzft-LRRAGkkTJtU8FVx0NfXFFMeKe1f~Rji24-7o3nIKA~~Xd6N1uiUnHS8m2sOnP-vZxudYxI6lIpojgeS0jdhmMrW6zUN3YqywanDG78NSzounuNZ4cjuI4TF2zVqZxZhCdQ5JA__');
  background-size: cover;
  background-position: center;
  position:absolute;
`;

 export const CardSection = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  color:white;
  margin-top:170px;
`;

 export const OfferOne = styled.h1`
  font-size:100px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 300;
  margin-right:20px;
`;

 export const OfferTwo = styled.h1`
  font-size:200px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 700;
`;

 export const OfferThree = styled.span`
  font-size:100px;
  color:#fff;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 700;
  margin-left:55%;
`;

 export const Products = styled.div`
  margin-top:670px;
  wight:100%;
  height:1750px;
  background-color:#F5F5F5;
  padding:50px;
  color:#374151;
`;

 export const TitleProducts = styled.h1`
  position:absolute;
  top:89%;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 100;
  margin-left:0%;
`;

 export const ProductCard = styled.div`
  width:240px;
  height:380px;
  margin-right:15px;
  background-color:#FFF;
  margin-top:130px;
  color:#374151;
  font-family: Arial, Helvetica, sans-serif;
  margin-left:-12%;
`;

 export const ImgProduct = styled.img`
  width:240px;
  height:272px;
  cursor:pointer;

  &:hover {
    width:250px;
    height:282px;
    transition:0.3s;
    margin-left:-5px;
    border-radius:5px;
    border:0.5px solid gray;
  }
`;

 export const TitleCard = styled.h5`
  font-weight: lighter;
  padding:15px;
`;

 export const PriceInfo = styled.div`
  display:inline-flex;
  padding:15px;
  margin-top:-15px;
  font-size:14px
`;

 export const ButtonAddToCart = styled.button`
  border:none;
  background-color:black;
  color:#FFF;
  border-radius:60%;
  padding:10px;
  font-size:18px;
  margin-top:-15px;
  margin-left:50px;
  cursor:pointer;

  &:hover {
    padding:15px;
    transition:0.3s;
  }
`;

 export const Footer = styled.div`
  display:flex;
  width:100%;
  height:600px;
  background-color:#F9FAFB;
  justify-content:center;
  /* align-items:center; */
`;

 export const Section = styled.section`
  display:inline-flex;
`;

 export const CardInfo = styled.div`
 /*  border:1px solid red; */
  height:120px;
  width:auto;
  margin-top:80px;
  margin-right:60px;
`;

 export const TitleInfo = styled.h3`
  color:#1F2937;
  font-wight:700;
  font-family:'Arial';
  padding:5px
`;

 export const ParagraphInfo = styled.p`
  color:#6B7280;
  font-family:'Arial';
  font-weight:400;
  padding:3px;
  font-size:13px;
`;