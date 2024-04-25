import React from "react"
import './Landing.css';
function Land()
{
return (
<div>
<div class = "bg-container">
            <div>      
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">Go Adventure</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <div class="navbar-nav ml-auto">
                    <a class="nav-link active" href="#">This weeks Deal <span class="sr-only">(current)</span></a>
                    <a class="nav-link" href="#">Login</a>                 
                  </div>
                </div>
              </nav>
            </div>
            <div class = "main-flex">
            <div class = "text-container">
                <h1 class= "home-heading"><span class = "home-span-heading">UP TO 60% </span>OFF ADVENTURE TRAVEL</h1>
                <h2 class = "home-subheading"> JOIN OVER 40,000 MEMBERS</h2>
                <p class = "home-para">Get Exclusive access to members only deals on amazing adventures holidays by email- its free</p>
                <div class ="input-btn-merg-container">
                    <input class = "email home-mail-input" placeholder="Enter your mail id "/><span><button class = "subcribebtn">Subcribe</button></span>
                </div>
               
            </div>
        </div>
        </div>
        <div class="color-flex">
            <div class = "orange-flex">
                TRAVEL GUIDE
            </div>
            <div class = "blue-flex">
                CONSULTING
            </div>
            <div class = "green-flex">
                HOTEL INFO
            </div>
        </div>
        <div>
            <div class = "Deals-bg-container">
                <h1 class = "deals-main-heading">Recent Deals</h1>
                <div class = "deals-flex">
                <div class = "deals-card-container" >
                    <div class = "recent-deal-image"></div>
                    <div class = "text-card-container">
                        <h1 class = "deals-card-heading">Patagonia Wilderness Trek</h1>
                        <p>10 days from<span class = "strike">1199</span>1000</p>
                    </div>
                </div>
                <div class = "deals-card-container" >
                <img src = "img2.jpg" class = "recent-deal-image"/>
                    <div class = "text-card-container">
                        <h1 class = "deals-card-heading">15 days Gorilla and  chimp</h1>
                        <p>10 days from<span class = "strike">1199</span>1000</p>
                    </div>
                </div>
                <div class = "deals-card-container"  >
                <img src = "img3.jpg" class = "recent-deal-image"/>
                    <div class = "text-card-container" >
                        <h1 class = "deals-card-heading" >Discover croatia and italy</h1>
                        <p>7 days from<span class = "strike">1199</span>1000</p>
                    </div>
                </div>
                <br/>
                <div class = "deals-card-container" >
                <img src = "img4.jpg" class = "recent-deal-image"/>
                    <div class = "text-card-container" >
                        <h1 class = "deals-card-heading" >15- days unique maldives</h1>
                        <p>15 days from<span class = "strike">1199</span>1000</p>
                    </div>
                </div>
            </div>
            </div>  
        </div>
        <div >
            <div class = "working-bgcontainer">
                <h1 class = "how-it-worksiheading">How Its Work</h1>
                <div class = "work-flex">
                <div class = "work-text-container">
                    <div>
                        <img src = "https://media.istockphoto.com/id/516449022/photo/lady-with-kayak.jpg?s=1024x1024&w=is&k=20&c=S0QB4a2HwQdjfZtz2k5LdcCOHD5QSI3NyOEFLIBW4pg=" class = "working-image"/>
                    </div>
                    <div class = "work-para-container">
                        <h1 class = "">Handpicked Adventures</h1>
                        <p>We search more tha 700....</p>
                    </div>
                </div>
                <div class = "work-text-container">
                    <div>
                        <img src = "https://img.freepik.com/premium-photo/friends-car-driving-adventure-travel-generate-ai_98402-43750.jpg?w=826" class = "working-image"/>
                    </div>
                    <div class = "work-para-container">
                        <h1 class = "">Trips that match your interest</h1>
                        <p>From local gems to highlight</p>
                    </div>
                </div>
                <div class = "work-text-container">
                    <div>
                        <img src = "https://img.freepik.com/free-vector/special-offer-sale-banner-hexagonal-shape-with-stars_1017-16283.jpg?1&w=740&t=st=1706090625~exp=1706091225~hmac=1490c0348e89d295a7f896ace465bd5875f0752daea467774b9030cdb8ef0021" class = "working-image"/>
                    </div>
                    <div class = "work-para-container">
                        <h1 class = "">Exclusive Deals</h1>
                        <p>From local gems to highlight</p>
                    </div>
                </div>    
            </div>
            </div>
        </div>
        <div>
            <div class = "lastbg-container">
                <h1 >Huge Saving across 7 countrys</h1>
                <div class = "country-container">
                <div class = "lasttext-container">
                    <h1>Last minute deal</h1>
                    <p>Find travel packages to suit all needs and you can also find exquisite honeymoon packages ... and MakeMyTrip offers you an extensive list of holiday packages</p>
                </div>
                <div class = "lasttext-container">
                    <h1>2 for 1 deall</h1>
                    <p>Find travel packages to suit all needs and you can also find exquisite honeymoon packages ... and MakeMyTrip offers you an extensive list of holiday packages</p>
                </div>
                <div class = "lasttext-container">
                    <h1>Life time pakage</h1>
                    <p>Find travel packages to suit all needs and you can also find exquisite honeymoon packages ... and MakeMyTrip offers you an extensive list of holiday packages</p>
                </div>
                <div class = "lasttext-container">
                    <h1>Early Birds Deal</h1>
                    <p>Find travel packages to suit all needs and you can also find exquisite honeymoon packages ... and MakeMyTrip offers you an extensive list of holiday packages</p>
                </div>
            </div>  
            <div class = "bg-contact">
                <a href = "https://www.visitsaudi.com/en/see-do?gclid=EAIaIQobChMIr-nq9qX4gwMVPKNmAh3moARzEAAYASAAEgLCG_D_BwE&gclsrc=aw.ds">www.tourism.website.in</a>
                <p> 78,srivalliputhur,chennai</p>
            </div>
            </div>
        </div>
</div>
);
}

export default Land