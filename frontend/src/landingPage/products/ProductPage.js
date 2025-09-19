import React from "react";
import ProductHero from "./ProductHero";
import KiteCard from './KiteCard';
import ConsoleCard from './ConsoleCard';
import CoinCard from "./CoinCard";
import KiteConnectCard from './KiteConnectCard';
import VarsityCard from "./VarsityCard";
import Universe from './Universe';

function ProductPage() {
    return ( 
        <div>
            < ProductHero />
            < KiteCard />
            < ConsoleCard/>
            < CoinCard/>
            < KiteConnectCard/>
            < VarsityCard/>
            < Universe/>
        </div>
     );
}

export default ProductPage;