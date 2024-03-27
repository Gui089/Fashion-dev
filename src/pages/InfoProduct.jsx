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

const infoProduct = async (productId) => {
  const products = await fetch('https://raw.githubusercontent.com/stack-code-dev/devfashion/master/json/dados.json');
  const data = await products.json();
  const product = data.find(item => item.product.some(prod => prod.id === productId));
  return await product;
}

const InfoProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  
  useEffect(() => {
    const getProduct = async () => {
      const product = await infoProduct(id);
      const newProduct = product.product;
      const findItemProduct = newProduct.find(item => id === item.id);
      setProduct(findItemProduct);
      return product;
    }
    getProduct();
  }, [id]);

  const itensProduct = product?.itens;
  const findColorProduct = itensProduct?.find(item => product?.image === item.image);

  console.log(itensProduct);
  return (
    <>
      <Header />
      <ImageCard src={findColorProduct?.image} alt={product?.product_name} />
      <TitleProduct >{product?.product_name}</TitleProduct>
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
      {/* {<ul style={{display:'inline-flex', position:'absolute', marginTop:'500px', marginLeft:'60px', listStyle:'none'}}>
        {itensProduct[0]?.part_sizes?.map(item => 
          <li key={item.size}>
            <ButtonSize>{item.size}</ButtonSize>
          </li>  
        )}
      </ul>} */}
    </>
  );
}

export { InfoProduct };