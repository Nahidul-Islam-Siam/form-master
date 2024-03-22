import { createContext } from "react";
import Anty from "../Anty/Anty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import './Granda.css'

export const AssetContext = createContext('gold')

const Grandpa = () => {
    const asset = 'Diamond'
    return (
        <div className="grandpa ">
            <h2>Grandpa</h2>
        <AssetContext.Provider value="gold">
        <section className="flex">
          <Dad asset={asset}></Dad>
            <Uncle asset={asset}></Uncle>
            <Anty></Anty>
          </section>
        </AssetContext.Provider>
        </div>
    );
};

export default Grandpa;