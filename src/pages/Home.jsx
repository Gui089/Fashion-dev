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

const TShirts = [
  {id:crypto.randomUUID(), name:'Blusas Impressão total Manga em Camadas',price:99.23,priceBefore:140.23, imgUrl:'https://s3-alpha-sig.figma.com/img/7999/798a/085727a2a7ce5a2544e261d5738f2a44?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AbRIox5acuF7FJcER-1Rkk4co~jsPUgJ9jDuYkWxs~XBd7u9GQ8t0R9MnMZf9Z6Xvu2eXQ570fdm9y~ozVlFghtvsxSVZx2cCvq-Y~URhtU42MMsNE4wClWeK~kF08beagzQ~LUzO83z-~x6vmNMaIoLvffMcjYgJf1atV8mqwFa-5Ss4OwqbyzXeEYsXGeKznWu4jGAow1Hbp9tCRNupWk4EYe1LqH7dW~CZyP6-PHCJjBcR5FDc2AswZc13ZsYmpNThwR9qZuhRW8bhV3VYsY8nj~6hWAXdR732ee8jmYu5Jb1D6c2BJavIR4WLYnq4FTqWPM0of7Y8rSNEEkKlw__'},
  {id:crypto.randomUUID(), name:'T-shirt Sólido Gola Redonda',price:67.59,priceBefore:99.00, imgUrl:'https://s3-alpha-sig.figma.com/img/b8da/363e/06ebf12a8984ea32d17f4aa28653ce4d?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NS0aKKt35mLD7yBn6adhOg5oFlnfIw6QciCJxGeyvAMFrJIDxnTuWr4Y96IOo1rzxdg8iJzSlCFqETj4EvteRpS53kVPsWqyeVhceRqEQXj5dxcnaBzGvH5D5uUrSbG2gWhHoZ~xeMbP2SY2WY8lZ2PJJcsAZenBCZGpY7oUJDh8drnszmxChGAHuhWNyeQuo6QeMlJFw2ZVCCWMJjaOR2RQ2NX4aOkYtIR6A~uubG55JiKvSUygqZ-qrKVap07kYZDK4dQQVh9pm9ZuqGlqoj9ChNLXYdAznjKito4Xg9sZaPMsj5EJp6bi65jWWXfDc2gDFC6aWFmcuIW86gM3qA__'},
  {id:crypto.randomUUID(), name:'T-shirt Top sólido manga bufante',price:74.99,priceBefore:115.86, imgUrl:'https://s3-alpha-sig.figma.com/img/d21e/db1b/7f145cb408de1bf3ab13d44f48ac03cb?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WBDBHeuuH02JDzjUax1wDCxzn8cwP0bVNzqudVCAMHnK7e0xOI1DNqZj8DA0xGX0sQ5O~euE6H9RzrI9U3tXN90abLbSeXK6FlPA4jhog89lFUyMMC~Z4Ua5tcNB1i-UWMfZFMOrHWyTUMqma8iMp6tsrNNx~XKsTITeX8EYH0IVVgFPmAr-1qZkNRrrMQWEFHcE2hP0JC4zWYfKuI6Gf8~HpsjmCKZ8c~HXg6nwarGR0UJopj8ZGwgDqWNKPWoFnWhROQEuThjlV4o6BQOfN6YCYvqKs6Kj8rNVLW6VpxT3geItZzWrbtE44RAhNPT8k8qRuxzA9gV-F~oBOBg~OQ__'},
  {id:crypto.randomUUID(), name:'T-shirt  gola quadrada manga bufante',price:109.99,priceBefore:299.78, imgUrl:'https://s3-alpha-sig.figma.com/img/1967/d5b6/3216760fa125e12469f879fa7b51bef2?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Lc-3Krb7wb1~Z7EAZEPxaAfj6ODDLTOWTbzEC4ol36PjFo-YGIrZfOm151hy-YljfpZrjaQJI2E6Jk-mW5SVBV96jQ7E~~zWxAS-wPpglEgcVZVFWovUwdHGh5nBXfQNuLl8mXr8xIWJS0K8FEXnAn3Bqf3pj0PttXIJ8Cy45S-ugxF8gkxrL7owWoVTV-swabpOlHySUiU5jo-EcbDZ5JiJ~WkfWlYb~e7ZNctFTYRSTqjyd3aIOqhnI87b~JpPG~xzGNk3ahLMGXA5OiGvAg8n2zy~3wzhC6OsN~7wTkkjqG0OImLtYaxFIIaP1lQLI0iLDVOUFvmNvI0u3YlyIQ__'}
];

const Casacos = [
  {id:crypto.randomUUID(), name:'Casaco Sólido Manga de Bishop Frente Aberta', price:120.23, priceBefore:200.23, imgUrl:'https://s3-alpha-sig.figma.com/img/7c93/4196/105206f54c6fac913f4b5bc2eea49b9f?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VMKs2RcGwnLD9X96N930MUssjzy1RMZL2tflOlGTzF2boafaPjlGX16gV2k6Xp80ySM8Qgc7gevn1hQynYGs39Wu2TXL36DFLfRt~~oGQYDD8IfOckUZnwG3O0pAGaeZsCedb4KmSC03yXBDD-bgJd-2SF-PRZ2EdeG13eZlpvuck5MmPpS4KEm66rqlyaRuNrYHJnxvrL6WMhdfZLmtQMU6EE7suCxfvgIvP5F~fOuR2pgNCx76Pt-6U68W~KQheFBMgeG62jkDcqeLIzgh-9BWQ8MOBlBmQug5QcBK3GQMtmhE0lJ-N8hD~Nk1P~g7DqM6TeaqH-Y6PZfT9GrRaQ__'},
  {id:crypto.randomUUID(), name:'Casaco Frente Aberta Ombro caído', price:79.90, priceBefore:120.23, imgUrl:'https://s3-alpha-sig.figma.com/img/1abc/7096/c09dd33024fb1b6a05359b0716d01dfb?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VZVo1J19FM75TwHXh-iEFpsp93O0-pm3cK8nYGADzxujSwesSkGZhgCTsVYF5I12PpmgUk0Xq4kgwndcwQ7INn3auFDvifu3t9VMonW0PvEN5aiO4O-MvLFNLmLjsJT7YOpPMcBOZmItuusI1LPxNBCdpCmdjSJZZqfRA8b8Wz~8f4OtBEaVlytJzvYE01Z5rqtBPYtI5DArRMW5kczoCpd7oExQvwGEJdC3n5s7-Klpn5Hk~sxifXvW6jqoYiQ-o2ztX37eyZTHb13BRAiD8dqJioQ1AjK0S7y2zzd8PINZEYPuai2gho0TOPrWTvDlXquJ5MDKosdYyiN44YcQyw__'},
  {id:crypto.randomUUID(), name:'Sobretudos Trespassado com cinto', price:205.23, priceBefore:350.30, imgUrl:'https://s3-alpha-sig.figma.com/img/e4df/1142/0824bed14a0ec87f93b1528bbf85cc86?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mdGpMfAWYGoUK1M7-tEWwAXkYgajrvVBVjmtNUeufUjdttbDyakh4sPJM7b2JYTH~8y0HVNBmGy~gDlIZNKdqALrY8-bcyIGKpQTJMFSyibxaEJq~3PJY1K1OxmR3mDq4mMm~gggtMPhB7witE7iTtFSm9zyrOk29DR4q8yyMaFnYQW8es9eakFNJbQvMkRGyRrz64rVPpGlyGj4m4wLo~jUtSTq0F2ht1vY4reWnGqNRHLBGuxDLi5vsunla~4tDf0E8ioMK~2ZT~UtxcoALMjFuT0AFtA6nCH7er~q1m1vou~zpwjvGTYVc0A5j0c6VLZNgFGglhiCVSmrGnNbaA__'},
  {id:crypto.randomUUID(), name:'Sobretudos femininos Bolso Simples elegante ', price:346.99, priceBefore:599.78, imgUrl:'https://s3-alpha-sig.figma.com/img/a6fe/7888/838c4bdbd2b385618087f3e08a12d9a6?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K63C5wMAOaIWcP3j3KWddmKgqdzagKC0c3zm9R8zGoRlCz5IPl6oNJHzow4cv7EUqcNnY72y~7eV7KCyX4WLwuj5wDzGhI1leMvL6H0BCBO-weL2xZtWUMNqiTkMM6pFue4Dj-BudxZtOe-oR7aS9MfKp8wVMgBbqhGukkJJxm64d78GckfsAeuzbMmiZdKri~Cgs3nljzbz2pklV9GdYDy-1VPhsMWYZHFbQqoCL4gvxqqgPXowXNS6iB-LM2RHwxzqqBG7JyAh7i9j15AcxMJDImaKuCZyrk9yRnIjBLh3BTIe~su4~u~N1oNkZpNmxlXbkQL41Qpngaqbq3M5JA__'}
];



const Products = styled.div`
  margin-top:670px;
  wight:100%;
  height:1750px;
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
  margin-right:15px;
  background-color:#FFF;
  margin-top:130px;
  color:#374151;
  font-family: Arial, Helvetica, sans-serif;
  margin-left:-12%;
`;

const ImgProduct = styled.img`
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

  &:hover {
    padding:15px;
    transition:0.3s;
  }
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
        <ul style={{display:'inline-flex', listStyle:'none'}}>
          {TShirts.map(product =>  <li key={product.id}>
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
        <TitleProducts style={{marginTop:'530px'}}>T-Shirts</TitleProducts>
        <TitleProducts style={{marginTop:'1030px'}}>Casacos</TitleProducts>
        <ul style={{display:'inline-flex', listStyle:'none'}}>
          {Casacos.map(product =>  <li key={product.id}>
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