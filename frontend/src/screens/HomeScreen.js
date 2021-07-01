import React,{useEffect} from 'react';
import Product from '../components/Product';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
//import { listProducts } from '../actions/productActions';
import { listProducts } from './../actions/productActions';

const HomeScreen = () => {

  const dispatch = useDispatch();
  const productList = useSelector( (state) => state.productList);
  const {loading, error, products} = productList;

  useEffect(() => {
    dispatch( listProducts());
  }, [dispatch])

    return (
      <>
        {/*Veg Begins Here*/}
        {loading? (
        <LoadingBox></LoadingBox>
        ): error? (
        <MessageBox variant="danger">{error}</MessageBox>
        ):(
        <div className="deals-container" id="Vegetables">
        <div className="parallax">
            <div className="titles">VEGETABLES</div>
        </div>
        { 
          products.map((product) => {
              if(product.category === 'veg'){
              return(
            <Product key={product._id} product={product}></Product>
          );
        }else{
            return <></>;
        }
          })
        }
        
        </div>
        )}

        {/*Fruits Begins Here*/}
        
        {loading? (
        <LoadingBox></LoadingBox>
        ): error? (
        <MessageBox variant="danger">{error}</MessageBox>
        ):(
          <div className="deals-container" id="fruits">
          <div className="parallax">
              <div className="titles">Fruits</div>
          </div>
          { 
            products.map((product) => {
                if(product.category === 'fruit'){
                return(
              <Product key={product._id} product={product}></Product>
            );
          }else{
              return <></>;
          }
            })
          }
      </div>
        )}
        
    

    
    {/*Meat Begins Here*/}
    
    {loading? (
        <LoadingBox></LoadingBox>
        ): error? (
        <MessageBox variant="danger">{error}</MessageBox>
        ):(
    <div className="deals-container" id="meat">
        <div className="parallax">
            <div className="titles">MEAT & SEAFOOD</div>
        </div>
        { 
          products.map((product) => {
              if(product.category === 'meat'){
              return(
            <Product key={product._id} product={product}></Product>
          );
        }else{
            return <></>;
        }
          })
        }
    </div> 
    )}
    </>
    );
}

export default HomeScreen;
