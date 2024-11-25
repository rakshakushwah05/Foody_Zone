import React from 'react';
import styled from 'styled-components';
import background from "./food-background.jpg";
import { Base_Url,Button, Container } from '../App';
const Searchcard = ({data}) => {
  let index = 0;
console.log(data)

  return (
    
        <FoodcardContainer>
       <Container>
        <FoodCards>
        
              {data?.map((food)=>(
              <Foodcard key={food.index}>
                <div className='food-img'>
                {/* <img src={require(`./Food/Food.${index=index+1}.png`)} alt="img"/> */}
                <img src={Base_Url +food.image}alt="img"/>
                </div>
                <div className='food-info'>
                  <div>
                    <h3>{food.name}</h3>
                  <p>{food.text}</p>
                  </div>
                  
                <div><Button>${food.price.toFixed(2)}</Button></div>
                
                </div>
              </Foodcard>
              
           ) )

          }    

        </FoodCards>
        </Container>
        
      </FoodcardContainer>
      
  )
}
export default Searchcard;

const FoodcardContainer = styled.section`
  
    margin-left:0;
    padding:0;
    
    background-image: url(${background});
    background-size: cover;
    height:650px;
    
    /* min-height:calc(100vh-210px);  */
     
     
    `;

  const FoodCards = styled.div`
  display:flex;
  flex-wrap:wrap;
  row-gap:20px;
  column-gap:34px;
  align-items:center;
  justify-content:center;
  padding-top:40;
  
  @media ( 0 < width >50vw)
  {
    flex-direction:column;
  }
  
  

  `; 
  const Foodcard = styled.div`
  margin-top:9px;
  font-size:16px;
  color:white;
   /* backdrop-filter: blur(10px); */
  border:0.25px solid whitesmoke;
  border-radius:20px; 
  background: rgba(0,0,0,0.7);
  backdrop-filter: saturate(900%) blur(10px);
  width:340px;
  height:170px;
  display:flex;
  line-height:22px;
  row-gap:20px;
  align-items:center; 
  padding:18px;


.food-info{
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  align-items:end;
  p{
    font-size:12px;

  }
  h3{
    font-size:16px;
    font-weight:500;
  }
  
}
  
  `;