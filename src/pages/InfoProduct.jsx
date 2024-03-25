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
  }, []);

  console.log(product);

  return (
    <>
      <Header />
      <ImageCard src={product?.image} alt={product?.product_name} />
      <TitleProduct >{product?.product_name}</TitleProduct>
      <PriceProduct>${product?.current_price}</PriceProduct>
    </>
  );
}

export { InfoProduct };