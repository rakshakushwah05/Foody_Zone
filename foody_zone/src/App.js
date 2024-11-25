import './App.css';
import styled from 'styled-components';
// import background from "./food-background.jpg";
import { useEffect, useState } from 'react';
import Searchcard from './Component/Searchcard';

export const Base_Url = "http://localhost:9000";

function App() {
  const [data,setData]=useState(null);
  const [loading,setLoading]=useState(false);
  const [error,setError]=useState(null);
  const [filterdata,setFilterdata]=useState(null);
  const [btn,setBtn]=useState("all");
  const filterbtn = [
    {
      name:"All",
      type:"all"
    },
    {
      name:"Breakfast",
      type:"breakfast"
    }, 
    {
      name:"Lunch",
      type:"lunch"
    },
    {
      name:"Dinner",
      type:"dinner"
    },
  ];

  

useEffect(()=>{
  const fetchfooddata = async () => {
    setLoading(true)
   try{
    const response = await fetch(Base_Url);

    const data = await response.json();
    setData(data)
    setFilterdata(data)
    setLoading(false)
   }
   catch(error){
    setError("Unable to fetch")
    
   }
  };

  fetchfooddata();
},[]);
console.log(data);

 if(error) return <div>{error}</div>;
 if(loading) return <div>Loading....</div>
 const Filtervalue = (e)=>{
  const value = e.target.value;

    console.log(value)
    if(value===""){
      setFilterdata(null);
    }
    const filter = data?.filter((food)=>
    food.name.toLowerCase().includes(value.toLowerCase()));
    setFilterdata(filter);
 }
   const btnclick = (type) =>{
       if(type==="all"){
        setFilterdata(data);
        setBtn("all");
        return;
       }
       const btntype = data?.filter((food)=>
       food.type.toLowerCase().includes(type.toLowerCase()))
       setFilterdata(btntype);
       setBtn(type)
   }

  return (
    <>
    <Container className="App">

      <TopSection >
        <div>
          <span className='white'>F</span><span className='red'>oo</span><span className='white'>dy</span>
          <span className='white'> Z</span><span className='red'>o</span><span className='white'>ne</span>
          {/* <img src={require("./Component/foodzone2.png")} alt="logo"/> */}
        </div>
        <div>
          <input type="text" placeholder='Search Food' onChange={Filtervalue} />
        </div>
      </TopSection>

      <FilterContainer>
        {
          filterbtn.map(value=>
            <Button isSelected = {btn === value.type}
             key={value.name} onClick={()=>btnclick(value.type)}>{value.name}</Button>
            )
        }
    
      </FilterContainer>
      
     
  
    </Container>
    <Searchcard data = {filterdata} />
    </>

  );
}

export default App;

export const Container = styled.section`
max-width:1500px;
margin:0 auto;





`;
const TopSection = styled.div`
margin-top:5px;
 margin-left:50px;
 max-height:100px;
 display:flex;
 justify-content:space-between;
 padding:16px;
 align-items:center;

.red{
  font-size:40px;
  color:red;
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.white{
  font-size:40px;
  color:white;
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
input{
  background-color:transparent;
  border:1px solid red;
  border-radius:5px;
  height: 2.5em;
  color:white;
  font-size:1em;
  padding: 0 10px;
  color:white;
}

@media (0< width < 600px){
  flex-direction:column;
  height:120px;
  /* justify-content:center; */
  /* align-items:start; */
  /* margin-left:5px; */
  

}

`;

const FilterContainer = styled.div`
  display:flex;
  justify-content:center;
  gap:12px;
  padding-bottom:30px;

  
`;
export const Button= styled.button`
    background-color:${({isSelected})=>(isSelected)? "#6b0902": "red"};
    outline: 1px solid ${({isSelected})=>(isSelected)?"white":"none"};
    border-radius:5px;
    padding: 6px 12px;
    border:none;
    color:white;
    cursor:pointer;
    &:hover{
        background-color:#6b0902;
    };
   `;


   

 
