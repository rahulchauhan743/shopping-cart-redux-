import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addCreater } from "../reddux/action";
import "./preview.css"

let Preview = () => {
   let {id} = useParams();  
    
   let state = useSelector((state) => state);

   let dispach = useDispatch();

    let usimagekecoresspondingobject = state[id];

    return (
    <>
      
      <div className="preview-container">
       
        <div className="preview-img-container">
        
          <img src= {usimagekecoresspondingobject.img} alt=""/>
        
        </div>

        <div className="preview-listing">
          <h2>{usimagekecoresspondingobject.name}</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non iste
            voluptas iusto earum reprehenderit sequi ratione quae numquam
            ducimus ab assumenda ex, culpa, ipsam doloribus laborum sit vitae
            delectus rem nam! Optio similique sunt, ut perferendis doloribus
            nihil. Molestiae dolorem, voluptate eum vel deserunt commodi ut.
            Ipsa ipsam cupiditate incidunt.
          </p>
          <button
              onClick = {
                () =>{
                  dispach(addCreater(id))
                }
              } 

          >Add to Cart</button>
        </div>



      </div>
    </>
    )
  };
  
  export default Preview;