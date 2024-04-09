import { Header } from '../components/Header';
import { Form, Link, useLoaderData} from 'react-router-dom';
import { Toaster} from 'sonner';
import { 
  Painel, 
  CardSection, 
  OfferOne, 
  OfferThree, 
  OfferTwo, 
  PriceInfo, 
  Products, 
  ProductCard, 
  TitleProducts, 
  TitleCard, 
  TitleInfo, 
  ImgProduct, 
  ButtonAddToCart, 
  Footer, 
  Section,
  CardInfo, 
  ParagraphInfo} from '../styles/styleHome';

const Home = () => {
  const products = useLoaderData();

  const productsConjuntos = products.filter(item => item.class === 'Conjunto');
  const Conjuntos = productsConjuntos[0].product;

  const productTshirts = products.filter(item => item.class === 'T-shirts');
  const TShirts = productTshirts[0].product;

  const productCasacos = products.filter(item => item.class === 'Casacos');
  const  Casacos = productCasacos[0].product; 

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
          {Conjuntos.map((product) => 
           
            <li key={product.id}>
               <ProductCard>
            <Link style={{textDecoration:'none'}} to={`infoproduct/${product.id}`}>
                <ImgProduct src={product.image} alt={product.name} />
            </Link>
                <TitleCard>{product.product_name}</TitleCard>
                <PriceInfo>
                  <p><strong>${product.current_price}</strong></p>
                  <p style={{marginLeft:'20px', fontWeight:'bold',color:"#9CA3AF" }}>$<s>{product.old_price}</s></p>
                  <div>
                    <Toaster toastOptions={{
                      style: {
                        padding:'12px',
                      }
                    }} position='top-right'/> 
                      <ButtonAddToCart>+</ButtonAddToCart>
                  </div>
                </PriceInfo>
               </ProductCard>
            </li>
            )}
        </ul>
        <ul style={{display:'inline-flex', listStyle:'none'}}>
          {TShirts.map(product =>  
          
            <li key={product.id}>
               <ProductCard>
              <Link style={{textDecoration:'none'}}to={`infoproduct/${product.id}`}>
                <ImgProduct src={product.image} alt={product.name} />
              </Link>
                <TitleCard>{product.product_name}</TitleCard>
                <PriceInfo>
                  <p><strong>${product.current_price}</strong></p>
                  <p style={{marginLeft:'20px', fontWeight:'bold',color:"#9CA3AF" }}>$<s>{product.old_price}</s></p>
                  <div>
                    <Toaster toastOptions={{
                      style: {
                        padding:'12px',
                      }
                    }} position='top-right'/> 
                      <ButtonAddToCart >+</ButtonAddToCart>
                  </div>
                </PriceInfo>
               </ProductCard>
            </li>

          )}
        </ul>
        <TitleProducts style={{marginTop:'530px'}}>T-Shirts</TitleProducts>
        <TitleProducts style={{marginTop:'1030px'}}>Casacos</TitleProducts>
        <ul style={{display:'inline-flex', listStyle:'none'}}>
          {Casacos.map(product =>  
            <li key={product.id}>
               <ProductCard>
              <Link style={{textDecoration:'none'}} to={`infoproduct/${product.id}`}>
                <ImgProduct src={product.image} alt={product.name} />
                </Link>
                <TitleCard>{product.product_name}</TitleCard>
                <PriceInfo>
                  <p><strong>${product.current_price}</strong></p>
                  <p style={{marginLeft:'20px', fontWeight:'bold',color:"#9CA3AF" }}>$<s>{product.old_price}</s></p>
                  <div>
                    <Toaster toastOptions={{
                      style: {
                        padding:'12px',
                      }
                    }} position='top-right'/> 
                      <ButtonAddToCart>+</ButtonAddToCart>
                  </div>
                </PriceInfo>
               </ProductCard>
            </li>
          )}
        </ul>
      </Products>
      <Footer>
        <Section>
          <CardInfo>
            <TitleInfo>Sobre nós</TitleInfo>
            <ParagraphInfo>Sobre Dev Fashion</ParagraphInfo>
            <ParagraphInfo>Responsabilidade social</ParagraphInfo>
            <ParagraphInfo>Afiliado</ParagraphInfo>
            <ParagraphInfo>Fashion Blogger</ParagraphInfo>
          </CardInfo>
          <CardInfo>
            <TitleInfo>Ajuda e suporte</TitleInfo>
             <ParagraphInfo>Informação de Envio</ParagraphInfo>
             <ParagraphInfo>Retornos</ParagraphInfo>
             <ParagraphInfo>Retornos</ParagraphInfo>
             <ParagraphInfo>Como rastrear</ParagraphInfo>
             <ParagraphInfo>Tabela de tamanhos</ParagraphInfo>
          </CardInfo>
          <CardInfo>
           <TitleInfo>Atendimento</TitleInfo>
           <ParagraphInfo>Contate-nos</ParagraphInfo>
           <ParagraphInfo>Pagamento</ParagraphInfo>
           <ParagraphInfo>Pontos de bônus</ParagraphInfo>
           <ParagraphInfo>Noticias</ParagraphInfo>     
          </CardInfo>
          <CardInfo>
            <TitleInfo>Rede sociais</TitleInfo>
            <div style={{marginTop:'13px'}}>
               <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
               <g clipPath="url(#clip0_27_464)">
               <path fillRule="evenodd" clipRule="evenodd" d="M15.9489 0.484863C18.8335 0.51778 21.4394 1.22672 23.7667 2.61169C26.0662 3.96902 27.9791 5.89358 29.3224 8.20136C30.6989 10.5427 31.4036 13.1644 31.4364 16.0665C31.3547 20.0374 30.1022 23.4288 27.6791 26.241C25.256 29.0531 22.1526 30.7928 18.9399 31.4598V20.3268H21.9772L22.6641 15.9518H18.0649V13.0863C18.0394 12.4923 18.2272 11.9087 18.5945 11.4411C18.9623 10.9722 19.61 10.7258 20.5376 10.7018H23.3149V6.86941C23.2751 6.85659 22.8969 6.80589 22.1805 6.71731C21.3681 6.62224 20.551 6.57147 19.733 6.56521C17.8817 6.57375 16.4175 7.09598 15.3405 8.13192C14.2634 9.16756 13.7133 10.6659 13.6899 12.627V15.9518H10.1899V20.3268H13.6899V31.4598C9.74525 30.7928 6.64181 29.0531 4.21869 26.241C1.79556 23.4288 0.543188 20.0374 0.461426 16.0665C0.494138 13.1643 1.1988 10.5425 2.5754 8.20136C3.9187 5.89359 5.83158 3.96902 8.13113 2.61169C10.4584 1.22699 13.0643 0.518047 15.9489 0.484863Z" fill="#1F2937"/>
               </g>
               <defs>
               <clipPath id="clip0_27_464">
               <rect width="32" height="32" fill="white"/>
               </clipPath>
               </defs>
               </svg>
               <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M16 0C7.16479 0 0 7.16479 0 16C0 24.8352 7.16479 32 16 32C24.8352 32 32 24.8352 32 16C32 7.16479 24.8352 0 16 0ZM23.3054 12.4751C23.3125 12.6326 23.3159 12.7908 23.3159 12.9497C23.3159 17.8025 19.6221 23.3984 12.8669 23.3987H12.8672H12.8669C10.793 23.3987 8.86304 22.7908 7.23779 21.749C7.52515 21.783 7.81763 21.7998 8.11377 21.7998C9.83447 21.7998 11.418 21.2129 12.675 20.2278C11.0674 20.198 9.71191 19.1362 9.24414 17.677C9.46802 17.72 9.69824 17.7434 9.93433 17.7434C10.2695 17.7434 10.5942 17.6982 10.9028 17.614C9.22241 17.2776 7.95654 15.7925 7.95654 14.0142C7.95654 13.9976 7.95654 13.9827 7.95703 13.9673C8.4519 14.2424 9.01782 14.408 9.62036 14.4265C8.63428 13.7686 7.98608 12.6438 7.98608 11.3696C7.98608 10.6968 8.16797 10.0664 8.4834 9.52368C10.2944 11.7458 13.001 13.2073 16.0532 13.3608C15.9902 13.0918 15.9578 12.8115 15.9578 12.5234C15.9578 10.4961 17.6025 8.85132 19.6306 8.85132C20.687 8.85132 21.6411 9.29785 22.3113 10.0117C23.1479 9.84668 23.9336 9.54102 24.6433 9.12036C24.3687 9.97754 23.7866 10.6968 23.0283 11.1516C23.7712 11.0627 24.4792 10.8657 25.1372 10.5732C24.6458 11.3098 24.0225 11.9568 23.3054 12.4751Z" fill="#1F2937"/>
               </svg>
               <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
               <g clipPath="url(#clip0_27_468)">
               <path fillRule="evenodd" clipRule="evenodd" d="M16 12.5011C18.1638 12.5011 19.9178 14.228 19.9178 16.3583C19.9178 18.4881 18.1637 20.215 16 20.215C13.8363 20.215 12.0822 18.4881 12.0822 16.3583C12.0822 14.228 13.8363 12.5011 16 12.5011ZM16 10.9587C12.9708 10.9587 10.5151 13.3761 10.5151 16.3583C10.5151 19.34 12.9708 21.7578 16 21.7578C19.0292 21.7578 21.4849 19.34 21.4849 16.3583C21.4849 13.3761 19.0293 10.9587 16 10.9587ZM21.6543 9.66077C21.3502 9.66553 21.0542 9.76006 20.8037 9.93248C20.5531 10.1049 20.3591 10.3475 20.2461 10.6299C20.133 10.9122 20.1059 11.2217 20.1681 11.5194C20.2304 11.8171 20.3792 12.0897 20.5959 12.3031C20.8127 12.5165 21.0877 12.661 21.3863 12.7186C21.6849 12.7762 21.9939 12.7442 22.2745 12.6268C22.555 12.5093 22.7946 12.3115 22.963 12.0583C23.1315 11.8051 23.2214 11.5077 23.2214 11.2036C23.2181 10.7912 23.0512 10.397 22.7573 10.1076C22.4634 9.81832 22.0666 9.65758 21.6543 9.66077ZM12.1714 7.98169H19.8286C22.3196 7.98169 24.339 9.96967 24.339 12.4216V20.2945C24.339 22.7469 22.3196 24.7344 19.8286 24.7344H12.1714C9.68038 24.7344 7.66098 22.7469 7.66098 20.2945V12.4216C7.66098 9.96967 9.68035 7.98169 12.1714 7.98169ZM11.4492 6.44616C8.48831 6.44616 6.08799 8.80929 6.08799 11.7239V20.9922C6.08799 23.9073 8.48828 26.27 11.4492 26.27H20.5508C23.5117 26.27 25.912 23.9073 25.912 20.9922V11.7239C25.912 8.80926 23.5117 6.44616 20.5508 6.44616H11.4492ZM16 0.870605C24.5535 0.870605 31.4875 7.80436 31.4875 16.3583C31.4875 24.9118 24.5535 31.8455 16 31.8455C7.44648 31.8455 0.512512 24.9118 0.512512 16.3583C0.512512 7.80438 7.44648 0.870605 16 0.870605Z" fill="#1F2937"/>
               </g>
               <defs>
               <clipPath id="clip0_27_468">
               <rect width="32" height="32" fill="white"/>
               </clipPath>
               </defs>
               </svg>
               <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
               <g clipPath="url(#clip0_27_470)">
               <path d="M16 0C12.8355 0 9.74202 0.938384 7.11083 2.69649C4.47964 4.45459 2.42888 6.95345 1.21788 9.87707C0.00687148 12.8007 -0.309982 16.0177 0.307382 19.1214C0.924746 22.2251 2.4486 25.0761 4.68624 27.3137C6.92389 29.5513 9.77482 31.0752 12.8785 31.6926C15.9822 32.3099 19.1993 31.9931 22.1229 30.7821C25.0465 29.5711 27.5454 27.5203 29.3035 24.8891C31.0616 22.2579 32 19.1645 32 16C32 11.7565 30.3143 7.68687 27.3137 4.68629C24.3131 1.68571 20.2434 0 16 0V0ZM23.2126 14.2168C21.7852 14.3747 20.5621 13.8105 19.3389 13.0905C19.3389 13.2084 19.3747 16.8632 19.3137 18.6063C19.2526 20.3979 18.6126 21.9747 17.2084 23.1516C14.2315 25.6505 10.0063 24.3011 8.99785 20.48C8.45048 18.3979 8.92627 16.5221 10.56 15.0379C11.48 14.1958 12.6147 13.8211 13.8315 13.6653C14.0926 13.6316 14.3558 13.6168 14.6379 13.5916V16.4211C14.28 16.5095 13.9179 16.5874 13.5621 16.6926C13.3152 16.7639 13.0745 16.8547 12.8421 16.9642C12.5178 17.11 12.2315 17.3285 12.0053 17.6028C11.7791 17.8771 11.6191 18.1998 11.5377 18.5458C11.4562 18.8919 11.4556 19.2521 11.5358 19.5984C11.6159 19.9448 11.7748 20.2681 12 20.5432C12.2708 20.9176 12.6391 21.2106 13.0649 21.3903C13.4906 21.5699 13.9575 21.6294 14.4147 21.5621C15.3347 21.4505 15.9115 20.8716 16.2526 20.04C16.4884 19.3819 16.5908 18.6834 16.5536 17.9853C16.541 14.5495 16.541 11.1158 16.5347 7.68C16.5376 7.64466 16.5426 7.60952 16.5494 7.57474H19.2968C19.6042 9.87368 20.7705 11.3305 23.2126 11.5368V14.2168Z" fill="#1F2937"/>
               </g>
               <defs>
               <clipPath id="clip0_27_470">
               <rect width="32" height="32" fill="white"/>
               </clipPath>
               </defs>
               </svg>
               <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
               <g clipPath="url(#clip0_27_474)">
               <path fillRule="evenodd" clipRule="evenodd" d="M15.9086 0.503418C7.3633 0.503418 0.421143 7.44573 0.421143 15.9911C0.421143 24.5364 7.36331 31.4783 15.9086 31.4783C24.454 31.4783 31.3962 24.5364 31.3962 15.9911C31.3962 7.44572 24.454 0.503418 15.9086 0.503418ZM25.18 20.9971C25.0741 21.2543 24.575 21.6171 22.8205 21.8896C22.6693 21.9195 22.624 22.1011 22.5332 22.4946C22.505 22.6374 22.4697 22.7787 22.4273 22.918C22.3819 23.0539 22.3063 23.1146 22.1702 23.1146H22.1551C22.0219 23.1115 21.8897 23.0911 21.7618 23.0539C21.4124 22.9902 21.0583 22.9549 20.7031 22.9484C20.4498 22.9465 20.1967 22.9667 19.9469 23.0086C19.4175 23.0996 18.9789 23.417 18.4949 23.7499C17.8143 24.2339 17.1035 24.7329 15.9994 24.7329H15.7574C14.6533 24.7329 13.9425 24.2339 13.2619 23.7499C12.793 23.417 12.3393 23.0996 11.8099 23.0086C11.56 22.9667 11.307 22.9465 11.0537 22.9484C10.6977 22.9545 10.3431 22.995 9.99494 23.0693C9.86587 23.1008 9.73427 23.121 9.60166 23.1295C9.54 23.1363 9.47803 23.1199 9.42774 23.0836C9.37745 23.0473 9.34243 22.9936 9.32945 22.933C9.28406 22.7817 9.25383 22.6305 9.22355 22.4946C9.14792 22.1315 9.08747 21.9196 8.93623 21.8896C7.18174 21.617 6.68266 21.2543 6.57676 20.9971C6.55965 20.9589 6.54941 20.918 6.54653 20.8762C6.54551 20.8288 6.56185 20.7826 6.59249 20.7464C6.62313 20.7102 6.66596 20.6865 6.71289 20.6797C9.40507 20.2259 10.615 17.4732 10.6604 17.3523H10.6756C10.8419 17.0195 10.8721 16.717 10.7663 16.4901C10.5848 16.0513 9.97978 15.8548 9.58656 15.7339C9.49435 15.7081 9.4035 15.6777 9.31435 15.6428C8.51273 15.3254 8.45222 15.008 8.48248 14.8413C8.54293 14.5542 8.90593 14.3573 9.22353 14.3573C9.29667 14.3562 9.36909 14.3719 9.43529 14.403C9.79829 14.5692 10.1159 14.6598 10.3882 14.6598C10.7814 14.6598 10.9477 14.4936 10.9629 14.4786C10.9629 14.297 10.9477 14.1005 10.9326 13.9035C10.857 12.6333 10.7512 11.0453 11.1595 10.1378C12.3695 7.43033 14.9255 7.21884 15.6817 7.21884H16.0599C16.8161 7.21884 19.3873 7.43033 20.5972 10.1378C21.0056 11.0453 20.8997 12.6333 20.8241 13.9035V13.9642C20.809 14.1304 20.7938 14.312 20.7938 14.4786C20.809 14.4936 20.9602 14.6448 21.3081 14.6598C21.5803 14.6448 21.8828 14.5542 22.2155 14.403C22.3064 14.3639 22.4041 14.3433 22.5029 14.3423C22.613 14.3441 22.7214 14.3699 22.8205 14.4179H22.8356C23.0928 14.5085 23.2743 14.7055 23.2743 14.902C23.2894 15.0836 23.1381 15.3707 22.4424 15.6428C22.3668 15.6732 22.276 15.7035 22.1853 15.7339C21.7769 15.8548 21.1719 16.0513 20.9904 16.4901C20.8846 16.717 20.9148 17.0195 21.0812 17.3523H21.0963C21.1417 17.4732 22.3516 20.2259 25.0438 20.6797C25.0908 20.6865 25.1336 20.7102 25.1642 20.7464C25.1949 20.7826 25.2112 20.8288 25.2102 20.8762C25.2073 20.918 25.1971 20.9589 25.1799 20.9971H25.18Z" fill="#1F2937"/>
               </g>
               <defs>
               <clipPath id="clip0_27_474">
               <rect width="32" height="32" fill="white"/>
               </clipPath>
               </defs>
               </svg>
            </div>
            <div>
              <h5 style={{color:'#1F2937', fontFamily:'Arial', fontWeight:'700', marginTop:'15px'}}>Se inscreva para receber as novidades</h5>
              <Form style={{display:'inline-flex'}}>
                 <input style={{padding:'10px', width:'300px', marginTop:'5px'}} type="text" placeholder='Seu e-mail'/>
                 <button style={{background:'#1F2937', color:'white', border:'none', width:'100px', height:'40px', marginTop:'5px', marginLeft:'5px', cursor:'pointer'}}>Inscrever-se</button>
              </Form>
            </div>
          </CardInfo>
        </Section>
      </Footer>
    </>
  )
}

export {Home};