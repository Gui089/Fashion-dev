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

const conjuntos = [
  {id:crypto.randomUUID(), name:"Conjunto Alfaiataria Short e Cropped de Alça", price:150.99, priceBefore:205.60, imgUrl:'https://s3-alpha-sig.figma.com/img/72d0/83ec/745a4702b58e4a67d18f8b560521feec?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jL7tEHcMyCHHxUhstKElmLNYPla5vgZfiGxKVX4TGBM0nj2LttJ9TQo3paJmwOCidrwfee1rPESnwXtc6nYVuICXqKb0OcNw91wHruiKGZcZPgN8Wal8YLyRQn2rNaGUY9Zqv9kNJewqYY7auyypFKO8g51G8WIdDWqrgPN0lgZ9x7PRzHbzb0PAzXDOLYgIm0Oir~KBm1lkdCCMjaEjIYuxjeI3Ni9WHIaBWi31hhbURum7yXk2vnH4oP~L~1LwKCxoRcK9TByAD0QTwWFrXTAtYWMzunN8PekXu-3OgBSaOl9IkAiC8MawU4P35TGzRBi62~uNVRR~9FID-gvjfQ__'},
  {id:crypto.randomUUID(), name:"Conjunto Alfaiataria Calça e Blazer Moderno", price:179.53, priceBefore:260.25, imgUrl:'https://s3-alpha-sig.figma.com/img/abb2/b816/9f17392d64d267837057ed8ace1bdda5?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UrBavhuc3GiR5z8Qhqa6QYsoeXaLoyyTWL0-Cr4u5cjriyrjRwX5yIACpQHkcbVGjU3kyRV-1KDfzYcKgQ4iQMJv~-uM-KkJqVXz4qDMczQ-QUQ9OyfJOOWQz~b5bpWDMPsu0xhGMQX0C2vD3NoRV0bd6f5BlQm~h04IvNEJ~OtqhfV7iyHLEWa-2zulffIGYElC58l3w5sKdCAkrP6J-5ovSZWB981mtOAeTLetJ7lX0S55qZl7m01C~ao5rcbZgrax7mPRUQtWqsf1Jkg5gdtmbqQMusQ7tH9po5TivK~otoNYPR0u6Id~RMlm0yzX60-E-Ntu56RR64dW1D6LvA__'},
  {id:crypto.randomUUID(), name:"Conjunto alfaiataria  xadrez Tweed Jaqueta & Saia", price:190.70, priceBefore:250.89, imgUrl:'https://s3-alpha-sig.figma.com/img/8a1e/9527/a754c89239629092e41455d286dc32e2?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K-3tYJIKyrlWVj1gX9-v6L3DyoDz5NIvtc8o3kM9a82dtDfmNnIJFmeG6UQW3zR2srCfye2v4K1L9vsnXUlr-q-Z14xWvZhnVPJ0SzgjhSrY~B~BUBP9sxmbh5jrxLtsb4yEcR13PrSRKxjZ-Erqhjdu~3CcUuWyeJsHT4yWYqgTWCc6vHjzc8BDEfQFOcE7-t4oaObREp4IJQXfcwjJy33jtI0SX1a~psoPrM08iLsJHykjgscTe5mlaSSeMEIMtTcx7LFq4ntXxSYnPYn5YX0iWhdheZJqzoxCTLYZILTLnF2MjDxdrqmRPG1JV7YL-I6U2ovjbdRc88hJybqw8Q__'},
  {id:crypto.randomUUID(), name:"Jaqueta Manga Sino, Ombros Caídos E Vestido", price:140.68, priceBefore:293.78, imgUrl:'https://s3-alpha-sig.figma.com/img/93c1/ac27/cccd08a1c5f16d4a0ba2ebadf77fa793?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pXpch7Fm4XSjkI4SmHQ9s9ZPuKpAukoLkWPjns0wIk3OxK7c1MktZKfZP-vR8-gtARyE5sjCEC6F51MhFTohgM6mFEPrFDHc8jha7qv6dHPpFIQ4iCt8ht3VNPx9vMQGUlE9QNqzJwcGnQTIij8D-28QHh4w4SgYmDWZAOb3cpN7IfHfuR51lynBDY34HXMPAKfnMXSy6or3p7lKj6xpf9iaWbvUBaiTH4vfVIaN2YvgNL~OjdNqPW4VSFoDml80Kjtdbr2S5ffdEXYO4b3xaGToacDlgHE-5U7QK3uaGYUPtwaebY4CG2OV9vE24VoAZZToRB0A25NBB0cwwP1ucQ__'}
];

const Products = styled.div`
  margin-top:670px;
  wight:100%;
  height:1200px;
  background-color:#F5F5F5;
  padding:50px;
  color:#374151;
`;

const TitleProducts = styled.h1`
  position:absolute;
  top:89%;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 100;
  margin-left:0%;
`;

const ProductCard = styled.div`
  width:240px;
  height:380px;
  margin-right:10px;
  background-color:#FFF;
  margin-top:130px;
  color:#374151;
  font-family: Arial, Helvetica, sans-serif;
  margin-left:-10%;
`;

const ImgProduct = styled.img`
  width:240px;
  height:272px;
`;

const TitleCard = styled.h5`
  font-weight: lighter;
  padding:15px;
`;

const PriceInfo = styled.div`
  display:inline-flex;
  padding:15px;
  margin-top:-15px;
  font-size:14px
`;

const ButtonAddToCart = styled.button`
  border:none;
  background-color:black;
  color:#FFF;
  border-radius:60%;
  padding:10px;
  font-size:18px;
  margin-top:-15px;
  margin-left:50px;
  cursor:pointer;
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
      <Products>
      <TitleProducts>Conjuntos</TitleProducts>
        <ul style={{display:'inline-flex', listStyle:'none'}}>
          {conjuntos.map(product => 
            <li key={product.id}>
               <ProductCard>
                <ImgProduct src={product.imgUrl} alt={product.name} />
                <TitleCard>{product.name}</TitleCard>
                <PriceInfo>
                  <p><strong>${product.price}</strong></p>
                  <p style={{marginLeft:'20px', fontWeight:'bold',color:"#9CA3AF" }}>$<s>{product.priceBefore}</s></p>
                  <ButtonAddToCart>+</ButtonAddToCart>
                </PriceInfo>
               </ProductCard>
            </li>)}
        </ul>
      </Products>
    </>
  )
}

export {Home};