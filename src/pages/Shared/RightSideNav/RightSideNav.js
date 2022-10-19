import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGithub, FaGoogle,FaFacebook, FaWhatsapp, FaTwitch, FaTwitter } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarrousel from '../brandCarrousal/BrandCarrousel';

const RightSideNav = () => {
    return (
        <div>
             <ButtonGroup vertical>
      <Button variant="outline-info"><FaGoogle></FaGoogle> Login With Google</Button>
      <Button className='mb-2' variant="outline-dark"> <FaGithub></FaGithub> Login With Github</Button>
   </ButtonGroup>
   <div>
    <h5>Find us on</h5>
    <ListGroup>
      <ListGroup.Item className='mb-2'><FaFacebook></FaFacebook> Facebook</ListGroup.Item>
      <ListGroup.Item className='mb-2'><FaWhatsapp></FaWhatsapp>Whatsapp</ListGroup.Item>
      <ListGroup.Item className='mb-2'><FaTwitch></FaTwitch>Twitch</ListGroup.Item>
      <ListGroup.Item className='mb-2'><FaTwitter></FaTwitter>Twitter</ListGroup.Item>
      
    </ListGroup>
   </div>
   <BrandCarrousel></BrandCarrousel>
        </div>
    );
};

export default RightSideNav;