import React from 'react';

export default function Footer(){
    return(
        <>
        {/*footer start here*/}

        <div className="parallaxl" style={{backgroundImage: `url("images/footer7.jpg")`}}>
       <div className="footer">
        <div className="quick-links">
            <div>Locations</div>
            <ul>
                <li><a href="" className="a-links">Address 1</a></li>
                <li><a href="" className="a-links">Address 2</a></li>
                <li><a href="" className="a-links">Address 3</a></li>
            </ul>
                   
        </div>
        <div className="quick-links">
        <div>Careers</div>
            <ul>
                <li><a href="" className="a-links"> Packing Staff</a></li>
                <li><a href="" className="a-links">Delivery Agents</a></li>
                <li><a href="" className="a-links">Shelf Fillers</a></li>
            </ul>
                   
        </div>
        <div className="quick-links">
        <div>Quick Links</div>
            <ul>
                <li><a href="" className="a-links">Contact Us </a></li>
                <li><a href="" className="a-links">FAQ</a></li>
                <li><a href="" className="a-links">Help</a></li>
            </ul>
                   
        </div>
        </div>
        </div>
        </>
    )
}