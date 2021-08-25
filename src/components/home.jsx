import Product from "./product";
import "./home.css"
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

let Home = () => {
   
  let history = useHistory();
  let state = useSelector((state) => state); 

  return (
    <>
      <div className="product-container">
        {
          state.map((el,index) => {
           return <Product key = {index} data = {el} />
          })
        }

      </div>


     {/* when we click on cart button it takes out current page domain ans push the /cart given by us to that domain and navigate us to that page */}
      <button 
         onClick = {
           () => {
             history.push("/cart")
           } 
         }      
         className="shopping-cart-home">

         <span class="material-icons">shopping_cart</span>

      </button>
    </>
  );
};

export default Home;