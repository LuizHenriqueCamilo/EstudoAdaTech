import styled from "styled-components";

export const Card = styled.article`
background-color: white;
width: 100%;
padding: 2rem;
margin: 0 auto;
border-radius: 5px;
display: flex;
flex-direction: column;
align-items: center;
box-shadow: 0 0 5px rgba(0, 1, 2, 3, 4, 0.15);
`;

export const ProductImage = styled.img`
width: 100%;
height: 100%;
object-fit: contain;
`;

export const ProductTitle = styled.h2`
font-size: 1.2rem;
font-weight: 500;
margin-top: 1rem;
`;

export const ReviewPriceContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
margin-top: 1rem;
`;

export const Review = styled.span`
display: flex;
font-size: 0.75;
gap: 0.1rem;

svg {
    font-size: 1rem;
}
`;

export const Price = styled.strong``;

export const AssCartButtonWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
margin-top: 1rem;
gap: 0.2rem;
`;

export const AddCartButton = styled.button`
border: none;
border-radius: 5px;
height: 40px;
width: 100%;
background-color: green;
color: white;
display: flex;
align-items: center;
gap: 0.3rem;
font-size: 0.75rem;
justify-content: center;

svg{
    font-size: 0.8rem;
}`;

export const RemoveFromCartButton = styled.button`
border: none;
border-radius: 5px;
height: 40px;
width: 100%;
background-color: red;
color: white;
display: flex;
align-items: center;
gap: 0.3rem;
font-size: 0.75rem;
justify-content: center;

svg{
    font-size: 0.8rem;
}`;