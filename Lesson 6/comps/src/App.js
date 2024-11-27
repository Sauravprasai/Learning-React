import Button from './Component/Button';
import { FaMousePointer, FaHome, FaShoppingCart, FaClipboardList, FaStopCircle, FaUserAstronaut } from "react-icons/fa";

function App() {
  return (
    <div>
      <div>
        <Button>
          <FaHome/>  
          Click me!!
        </Button>
      </div>

      <div>
        <Button primary rounded outline>
          <FaMousePointer/>  
          Click me!!
        </Button>
      </div>
      <div>
        <Button danger outline>
          <FaShoppingCart/>  
          Buy Now!
        </Button>
      </div>
      <div>
        <Button warning>
          <FaClipboardList />  
          See Deal!
        </Button>
      </div>
      <div>
        <Button secondary outline>
          <FaStopCircle />  
          Hide Ads!
        </Button>
      </div>
      <div>
        <Button success rounded>
         <FaUserAstronaut />  
          Something!
        </Button>
      </div>
    </div>
  );
}

export default App;
