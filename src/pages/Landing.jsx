import { Contact } from "../components/modules/Landing/Contact";
import { Info } from "../components/modules/Landing/Info";
import { Home } from "../components/modules/Landing/Home";
import { Service } from "../components/modules/Landing/Service";

export const Landing = () => {
    return <>
    <div>
        <Home />
    </div>
    <div>
        <Service />
    </div>
    <div>
        <Contact />
    </div>
    <div>
        <Info />
    </div>
    </>
}