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
import "./ProductCard.css";

const ProductCard = ({ product , handleAddToCart }) => {
 
return (
    <Card className="card">
      <CardMedia component="img"
        image={product.image}
        alt="image" />
      <CardContent>
        <Typography variant="subtitle1" gutterBottom>{product.name}</Typography>
        <Typography className="card-actions" style={{ fontWeight: "bold" }} variant="subtitle1" gutterBottom>${product.cost}</Typography>
        <Rating value={product.rating} readOnly/>
      </CardContent>
      <CardActions>
        <Button fullWidth className="card-button" variant="contained" starIcon={<AddShoppingCartOutlined />}
          onClick={handleAddToCart}>
          ADD TO CART
        </Button>
      </CardActions>
    </Card>
  );







 
};

export default ProductCard;
