import React  from "react";
import Wrapper from "./wrapper";
const Deals = () => {
    return (
      <div className='deals'>
        <span className="head">Deal Terms</span>
        <span className="txt">Perks you will receive for Investing Letzrent</span>
        <Wrapper 
          heading="2000" 
          trm="LetzRent Premium Apparel (T-shirts & Coffee Mug) • Early access to new features & promotions" 
          tnc="Limited to the first 100" 
        />
        <Wrapper
          heading="5000"
          trm="• LetzRent Premium Apparel Box (T-shirts, Sweatshirts & additional Swag) | • Early access to new features & promotions"
          tnc="Limited to the first 200"
        />
        <Wrapper
          heading="10000"
          trm="• Exclusive interest in owning equity with an investment of ₹50,000 — ₹2,00,000 | • Invite to exclusive LetzRent team chat | • LetzRent Premium Apparel Box (T-shirts, Sweatshirts & additional Swag) | • Early access to new features & promotions"
          tnc="Equity benefits with no voting rights. Limited to the first 5 investors."
        />
        <Wrapper
          heading="25000"
          trm="• Exclusive interest in owning equity with an investment of ₹3,00,000 — ₹10,00,000 • One-on-one 30 minute video call with Co-Founders • Invite to exclusive LetzRent team chat • LetzRent Premium Apparel Box (T-shirts, Sweatshirts & additional Swag) • Early access to new features & promotions          "
          tnc="Equity benefits with no voting rights. Limited to the first 5 investors."
        />
        <Wrapper
          heading="50000"
          trm="• Exclusive interest in owning equity with an investment of ₹11,00,000 — ₹30,00,000 • In-Person dinner with Co-Founder in Whitefield, Bangalore • One-on-one 30 minute video call with Co-Founders • Invite to exclusive LetzRent team chat • LetzRent Premium Apparel Box (T-shirts, Sweatshirts & additional Swag) • Early access to new features & promotions"
          tnc="Equity benefits with voting rights. Limited to the first 5 investors."
        />
        <Wrapper
          heading="100000"
          trm="• Exclusive interest in owning equity with an investment of above ₹40,00,000 • LetzRent Weekend Experience: Flight & Hotel on us • In-Person dinner with Co-Founder in Whitefield, Bangalore • One-on-one 30 minute video call with Co-Founders • Invite to exclusive LetzRent team chat • LetzRent Premium Apparel Box (T-shirts, Sweatshirts & additional Swag) • Early access to new features & promotions"
          tnc="Equity benefits with voting rights(open for discussion of term sheet). Limited to the first 2 investors."
        />
        
      </div>
    );
};

export default Deals;