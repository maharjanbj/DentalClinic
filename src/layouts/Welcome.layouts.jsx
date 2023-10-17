import { Footer } from "../components/partials/Footer";
import { Nav } from "../components/partials/Nav";
import { PrimaryRoute } from "../routes";

export const WelcomeLayout = () => {
    return <>
    <div>
        <Nav/>
    </div>
    <div>  
      <PrimaryRoute/>
    </div> 
    <div>
      <Footer />
    </div>
    </>
}