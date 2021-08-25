import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { addCreater } from "../reddux/action";
import "./product.css";

let Product = (props) => {

  let history = useHistory();

  let dispach = useDispatch();

  return (
    <div className="product-card">
     {/* jab me image par click karo tho me /preview/{us image ki id} par navigate ho jao */}
      <div className="product-img"
        onClick = {
          () => {
              history.push(`/preview/${props.data.id}`)
          }
        }
      >


        <img
          src={props.data.img}
          alt=""
        />

      </div>

      <div className="product-btn">
        <button
        onClick = {
          () =>{
             dispach(addCreater(props.data.id))
          }
        }
        
        >Add to Cart</button>
      </div>

    </div>
  );
};

export default Product;