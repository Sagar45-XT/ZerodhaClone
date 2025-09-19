import React from 'react';
import CreateTicket from './CreateTicket';
import SupportHero from './SupportHero';

function SupportPage() {
    return ( 
        <>
            <CreateTicket />
            <SupportHero 
                optionDropdown = {[
                {
                    title :"Account Opening",
                    icon: "fa-solid fa-circle-plus",
                    items : ["Resident individua", "Minor", "Non Resident Indian (NRI)", "Company, Partnership, HUF and LLP", "Glossary"]
                },
                {
                    title :"Your Zerodha Account",
                    icon: "fa-slab-press fa-regular fa-circle-user",
                    items : ["Your Profile", "Account modification", "Client Master Report (CMR) and Depository Participant (DP)", "Nomination", "Transfer and conversion of securities"]
                },
                {
                    title :"Kite",
                    icon: "fa-regular fa-paper-plane",
                    items : ["IPO", "Trading FAQs", "Margin Trading Facility (MTF) and Margins", "Charts and orders", "Alerts and Nudges", "General"]
                },
                {
                    title :"Funds",
                    icon: "fa-solid fa-indian-rupee-sign",
                    items : ["Add money", "Withdraw money", "Add bank accounts", "eMandates"]
                },
                {
                    title :"Console",
                    icon: "fa-solid fa-circle-dot",
                    items : ["Portfolio", "Corporate actions", "Funds statement", "Reports", "Profile", "Segments"]
                },
                {
                    title :"Coin",
                    icon: "fa-solid fa-coins",
                    items : ["Mutual funds", "National Pension Scheme (NPS)", "Fixed Deposit (FD)", "Features on Coin", "Payments and Orders", "General"]
                },
            ]}
                
            />
        </>
     );
}

export default SupportPage;