import { AddShoppingCartOutlined } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";
import Footer from "./Footer";
import "./ProductCard.css";
import { CardActionArea } from '@mui/material';
// import Products from "./Products";

const ProductCard = ({ product , handleAddToCart }) => {
 

  return (
  
    <div>
      
    <Card className="card" sx={{ maxWidth: 345 }}>
     
        <CardMedia
          component="img"
          src={product?.image}
          alt={product?.name}
        />
        <CardContent>
          <Typography>
            {product?.name}
          </Typography>
          <Typography fontWeight="700">
          ${product?.cost}
          </Typography>
          <Rating name="read-only" value={product?.rating} precision={0.5} readOnly/>
          </CardContent>
          <Button className="card-button" variant="contained">ADD TO CART</Button>
     
      </Card>
      
    </div>
    
   
  
  );
};

export default ProductCard;
