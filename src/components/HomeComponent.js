import React from 'react'
import blue from '../resources/blue.jpeg'
import green from '../resources/green.jpeg'
import orange from '../resources/orange.jpeg'
import placeholder234 from '../resources/placeholder234.png'
import Carousel from './CarouselComponent'



function Home (){
    const images = [
        'https://via.placeholder.com/800x400/ff5733/fff',
        'https://via.placeholder.com/800x400/33ff57/fff',
        'https://via.placeholder.com/800x400/5733ff/fff',
      ];
    return(
        <div>
            <section className="homepage" style={{display:"grid",gridTemplate:"350px 1fr / repeat(4, 25%)",position:"relative",top:"100px",
        paddingBottom:"40px"}}>

{/* photo carousel */}
<Carousel images={images}/>
{/* <div id="photocarousel">
    <div class="slideshow-container" style={{width:"100%",height:"350px",overflow:"hidden",margin: 0}}>

        {/* Full-width images */}{/*}
        <div class="mySlides fade" style={{display:"none"}}>
          <img src={blue} style={{width:"100%"}}/>
        </div>
      
        <div class="mySlides fade" style={{display:"none"}}>
          <img src={green} style={{width:"100%"}}/>
        </div>
      
        <div class="mySlides fade" style={{display:"none"}}>
          <img src={orange} style={{width:"100%"}}/>
        </div>*/}
      
        {/* Next and previous buttons */} {/*}
        <a class="prev" onclick="plusSlides(-1)" style={{cursor:"pointer",position:"absolute",top:"50%",
        width:"auto",marginTop:"-172px",padding:"16px",color:"white",fontWeight:"bold",fontSize:"18px",
        transition:"0.6s ease",borderRadius:"0 3px 3px 0",userSelect:"none"}}>&#10094;</a>
        <a class="next" onclick="plusSlides(1)" style={{cursor:"pointer",position:"absolute",top:"50%",
        width:"auto",marginTop:"-172px",padding:"16px",color:"white",fontWeight:"bold",fontSize:"18px",
        transition:"0.6s ease",userSelect:"none",right:0,borderRadius:"3px 0 0 3px"}}>&#10095;</a>
      </div>
    </div> */}

{/* news cards */}  
<div id="news_items" style={{gridArea:"2 / 1 / span 1 / span 3",display:"inline-flex",justifyContent:"space-between",
alignItems:"center",flexWrap:"wrap",padding:"10px"}}>
    <figure class="news_card" style={{width:"250px",height:"210px",margin: 0,border:"1px solid black",
        overflow:"hidden"}}>
        <img src={placeholder234} alt="placeholder2"/>
        <h4 style={{padding:"0 10px",margin:0}}>News Item</h4>
        <p style={{padding:"0 10px",margin:0}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elementum efficitur nulla, et laoreet diam vehicula vitae. Ut ultrices odio vel tempor imperdiet. Quisque hendrerit, metus id iaculis fringilla, nisl felis aliquam mauris, id rhoncus nunc erat interdum tortor. Sed imperdiet lectus in aliquam vehicula. Aliquam sed tristique diam, quis gravida velit. Donec imperdiet rutrum dolor in euismod. Phasellus sed augue blandit, ullamcorper odio a, porta purus.</p>
    </figure>
    <figure class="news_card" style={{width:"250px",height:"210px",margin: 0,border:"1px solid black",
        overflow:"hidden"}}>
        <img src={placeholder234} alt="placeholder3"/>
        <h4 style={{padding:"0 10px",margin:0}}>News Item</h4>
        <p style={{padding:"0 10px",margin:0}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elementum efficitur nulla, et laoreet diam vehicula vitae. Ut ultrices odio vel tempor imperdiet. Quisque hendrerit, metus id iaculis fringilla, nisl felis aliquam mauris, id rhoncus nunc erat interdum tortor. Sed imperdiet lectus in aliquam vehicula. Aliquam sed tristique diam, quis gravida velit. Donec imperdiet rutrum dolor in euismod. Phasellus sed augue blandit, ullamcorper odio a, porta purus.</p>
    </figure>
    <figure class="news_card" style={{width:"250px",height:"210px",margin: 0,border:"1px solid black",
        overflow:"hidden"}}>
        <img src={placeholder234} alt="placeholder4"/>
        <h4 style={{padding:"0 10px",margin:0}}>News Item</h4>
        <p style={{padding:"0 10px",margin:0}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elementum efficitur nulla, et laoreet diam vehicula vitae. Ut ultrices odio vel tempor imperdiet. Quisque hendrerit, metus id iaculis fringilla, nisl felis aliquam mauris, id rhoncus nunc erat interdum tortor. Sed imperdiet lectus in aliquam vehicula. Aliquam sed tristique diam, quis gravida velit. Donec imperdiet rutrum dolor in euismod. Phasellus sed augue blandit, ullamcorper odio a, porta purus.</p>
    </figure>
</div>

{/* next game info */}
<div id="next_game" style={{gridArea:"2 / 4 / span 1 / span 1",display:"inline",color:"white",
backgroundColor:"#741e0a",padding:"10px",alignContent:"space-evenly"}}>
    <h2 style={{fontFamily:"Fredoka",fontSize:"40px",margin:0,textAlign:"center"}}>Next Game:</h2>
    <p class="team_name" style={{margin:0,textAlign:"center",fontSize:"30px"}}>Adelaide</p>
    <p style={{margin:0,textAlign:"center"}}>vs</p>
    <p class="team_name" style={{margin:0,textAlign:"center",fontSize:"30px"}}>Melbourne</p>
    <p style={{margin:0,textAlign:"center"}}>Sun Apr 20, 2pm, MCG</p>
</div>
</section>
        </div>
    )
}

export default Home