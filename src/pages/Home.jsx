import { Header } from '../components/Header';
import styled from 'styled-components';

const Painel = styled.section `
  width: 100%;
  height: 708px;
  background-image: 
    linear-gradient(90deg, rgba(121,66,40,0.8), rgba(255,255,255,0.2)),
    url('fashionDevCapa.jpeg');
  background-size: cover;
  background-position: center;
  position:absolute;
`;

const CardSection = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  color:white;
  margin-top:170px;
`;

const OfferOne = styled.h1`
  font-size:100px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 300;
  margin-right:20px;
`;

const OfferTwo = styled.h1`
  font-size:200px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 700;
`;

const OfferThree = styled.span`
  font-size:100px;
  color:#fff;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 700;
  margin-left:55%;
`;

const Home = () => {
  return (
    <>
      <Header />
      <Painel>
         <CardSection>
          <OfferOne>ATÉ </OfferOne>
          <OfferTwo>80%</OfferTwo>
         </CardSection>
         <OfferThree><s>OFF</s></OfferThree>
      </Painel>
    </>
  )
}

export {Home};