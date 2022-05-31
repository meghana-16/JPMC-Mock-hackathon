import React, { Component } from 'react';
import styled from 'styled-components';

export const Box = styled.div`
padding: 80px 60px;
background: #242F9B;
position: absolute;
bottom: 0;
width: 100%;


@media (max-width: 100%) {
	padding: 70px 30px;
}
`;

export const Container = styled.div`
	display: inline-block;
	justify-content: center;
	height:7px;
  margin: 0 auto;
  
	/* background: red; */
`

export const Column = styled.div`
 
`;

export const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,
						minmax(185px, 1fr));
grid-gap: 20px;

@media (max-width: 1000px) {
	grid-template-columns: repeat(auto-fill,
						minmax(200px, 1fr));
}
`;

export const FooterLink = styled.a`
color: #fff;
margin-bottom: 0;
font-size: 18px;
text-decoration: none;

&:hover {
	color: #E9D5CA;
	transition: 200ms ease-in;
}
`;

export const Heading = styled.p`
font-size: 24px;
color: #fff;
margin-bottom: 40px;
font-weight: bold;
`;

const Foot = () => {
    return (
        <Box style={{marginLeft:"0", height:"1px"}}>
        
        <Container>
            <Row>
            <Column>
                
                <FooterLink href="#" style={{marginLeft:"10px"}}>Contact</FooterLink>
                <FooterLink href="#" style={{marginLeft:"120px"}}>Follow</FooterLink>
                <FooterLink style={{marginBottom:"0",marginLeft:"120px"}}>T&C</FooterLink>
            </Column>
    
                
            
            </Row>
        </Container>
        </Box>
    );
    };
    export default Foot;


