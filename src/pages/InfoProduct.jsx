import { useEffect, useState } from 'react';
import { Header } from '../components/Header';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const ImageCard = styled.img`
  width:501px;
  height:669px;
  margin-left:60px;
  margin-top:90px;
`;

const TitleProduct = styled.h1`
  font-family:'Arial';
  font-weight:lighter;
  font-size:28px;
  color:#374151;
  position:absolute;
  margin-left:60%;
  margin-top:-64%;
  width:350px;
`;

const PriceProduct = styled.h1`
  font-family:'Arial';
  font-weight:700;
  font-size:40px;
  position:absolute;
  margin-left:60%;
  margin-top:-50%;
  color:#1F2937;
`;

const OldPrice = styled.h1`
  font-family:'Arial';
  font-weight:700;
  font-size:30px;
  position:absolute;
  margin-left:76%;
  color:#374151;
  margin-top:-49.5%;
`;

const ShowColor = styled.h1`
  font-family:'Arial';
  font-weight:300;
  font-size:30px;
  position:absolute;
  margin-left:60%;
  color:#374151;
  margin-top:-42%;
`;

const ChangeColorImage = styled.img`
  width:72px;
  height:92px;
  margin-left:60%;
`;

const ButtonSize = styled.button`
  border:1px solid black;
  border-radius:28.59px;
  background-color:white;
  width:72px;
  height:40px;
  margin-left:5px;
  cursor:pointer;
`;

const ButtonAddCart = styled.button`
  background-color:black;
  color:white;
  font-family:'Arial';
  margin-left:50px;
  border:none;
  border-radius:24px;
  padding:30px;
  position:absolute;
  margin-top:570px;
  cursor:pointer;
`;

const StarImg = styled.img`
  width: 33.68px;
  height: 30px;
  padding-right: 5px;
`;

const infoProduct = async (productId) => {
  const products = await fetch('https://raw.githubusercontent.com/stack-code-dev/devfashion/master/json/dados.json');
  const data = await products.json();
  const product = data.find(item => item.product.some(prod => prod.id === productId));
  return await product;
}

const InfoProduct = () => {
  const [optionSize, setOptionSize] = useState([]);
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  
  useEffect(() => {
    const getProduct = async () => {
      const product = await infoProduct(id);
      const newProduct = product.product;
      const findItemProduct = newProduct.find(item => id === item.id);
      const optionSize = findItemProduct.itens[0].part_sizes;
      setOptionSize(optionSize);
      setProduct(findItemProduct);
      return product;
    }
    getProduct();
  }, [id]);

  const itensProduct = product?.itens;
  const findColorProduct = itensProduct?.find(item => product?.image === item.image);

  const StarRating = findColorProduct?.stars;

  console.log(findColorProduct);

  return (
    <>
      <Header />
      <ImageCard src={findColorProduct?.image} alt={product?.product_name} />
      <TitleProduct >{product?.product_name}</TitleProduct>
      <ul style={{position:'absolute', top:'260px', right:'210px', display:'inline-flex'}}>
        {Array.from({length: StarRating}, (_, i) => 
           <li key={i} style={{display: 'inline-flex'}}>
              <StarImg src="https://pluspng.com/img-png/star-png-star-vector-png-transparent-image-2000.png" alt="" />
           </li>
        )}
        <p style={{marginTop:'10px', fontWeight:'lighter', color:'#374151', fontFamily:'Arial'}}>({findColorProduct?.assessments} Avaliações)</p>
      </ul>
      <PriceProduct>${product?.current_price}</PriceProduct>
      <OldPrice>$ <s>{product?.old_price}</s></OldPrice>
      <ShowColor>Cor: {findColorProduct?.color}</ShowColor>
      {<ul style={{display:'inline-flex', position:'absolute', marginTop:'380px', marginLeft:'20px', listStyle:'none'}}>
        {itensProduct?.map(item => 
          <li style={{marginLeft:'10px', cursor:'pointer'}} key={item?.id}>
            <ChangeColorImage src={item?.image} alt={item?.product_name} />
          </li>
        )}
      </ul>}
      {<ul style={{display:'inline-flex', position:'absolute', marginTop:'500px', marginLeft:'60px', listStyle:'none'}}>
        {optionSize.map(item => 
          <li key={item.size}>
            <ButtonSize><h1 style={{fontWeight:100}}>{item.size}</h1></ButtonSize>
          </li>  
        )}
      </ul>}
      <ButtonAddCart><h1>ADICIONAR AO CARRINHO</h1></ButtonAddCart> 
    </>
  );
}

export { InfoProduct };