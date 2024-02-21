import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

function CardImages() {
  const cardData = [
    {
      title: 'Water Problems',
      description: 'Description: Water problems in an apartment.\nStatus: Open',
      image: 'https://tse4.mm.bing.net/th?id=OIP.BlUzlOK__wYGDi70OWL3UgHaEn&pid=Api&P=0&h=180',
    },
    {
      title: 'Cleaning',
      description: 'Description: Surrounding need to be cleaned.\nStatus: Open',
      image: 'https://www.seatowncleaners.com/wp-content/uploads/2020/12/How-to-clean-a-messy-home-fast-6.jpg',
    },
    {
      title: 'Security',
      description: 'Description: Broken front door lock.\nStatus: Open',
      image: 'https://tse2.mm.bing.net/th?id=OIP.1JuDGfoc0Oebd6WYVGpkxAHaFL&pid=Api&P=0&h=180',
    },
    {
      title: 'Maintenance',
      description: 'Description: Leaky faucet in the bathroom.\nStatus: Open',
      image: 'https://tse1.mm.bing.net/th?id=OIP.sLnPZuMdmU_Igz3JfNdv6AHaFG&pid=Api&P=0&h=180',
    },
    {
      title: 'Power Supply',
      description: 'Description: some electrical issues.\nStatus: Open',
      image: 'https://akm-img-a-in.tosshub.com/businesstoday/images/story/202008/power_cut_660_120820033552.jpg?size=1200:675',
    },
    {
      title: 'Lift Issues',
      description: 'Description: some elavator issues.\nStatus: Open',
      image: 'http://i.cbc.ca/1.3689496.1469123445!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/elevator-buttons.jpg',
    }
    
   
  ];

  return (
    <Container> <div className="d-flex flex-row">
      {cardData.map((card, index) => (
        <Card key={index} style={{ width: '18rem', marginRight: '10px' }}>
          <Card.Img variant="top" src={card.image} style={{ height: '100px'}}/>
          <Card.Body>
            <Card.Title>{card.title}</Card.Title>
            <Card.Text>{card.description}</Card.Text>
            
          </Card.Body>
        </Card>
      ))}
      </div>
      
    </Container>
  );
}

export default CardImages;
