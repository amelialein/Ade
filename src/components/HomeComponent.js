import React from 'react'

function Home (){
    return(
        <div>
            <section className="homepage" style={{display:"grid"}}>

{/* photo carousel */}
<div id="photocarousel">
    <div class="slideshow-container">

        {/* Full-width images */}
        <div class="mySlides fade">
          <img src="" style={{width:"100%"}}/>
        </div>
      
        <div class="mySlides fade">
          <img src="" style={{width:"100%"}}/>
        </div>
      
        <div class="mySlides fade">
          <img src="" style={{width:"100%"}}/>
        </div>
      
        {/* Next and previous buttons */}
        <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
        <a class="next" onclick="plusSlides(1)">&#10095;</a>
      </div>
    </div>

{/* news cards */}  
<div id="news_items">
    <figure class="news_card">
        <img src="" alt="placeholder2"/>
        <h4>News Item</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elementum efficitur nulla, et laoreet diam vehicula vitae. Ut ultrices odio vel tempor imperdiet. Quisque hendrerit, metus id iaculis fringilla, nisl felis aliquam mauris, id rhoncus nunc erat interdum tortor. Sed imperdiet lectus in aliquam vehicula. Aliquam sed tristique diam, quis gravida velit. Donec imperdiet rutrum dolor in euismod. Phasellus sed augue blandit, ullamcorper odio a, porta purus.</p>
    </figure>
    <figure class="news_card">
        <img src="" alt="placeholder3"/>
        <h4>News Item</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elementum efficitur nulla, et laoreet diam vehicula vitae. Ut ultrices odio vel tempor imperdiet. Quisque hendrerit, metus id iaculis fringilla, nisl felis aliquam mauris, id rhoncus nunc erat interdum tortor. Sed imperdiet lectus in aliquam vehicula. Aliquam sed tristique diam, quis gravida velit. Donec imperdiet rutrum dolor in euismod. Phasellus sed augue blandit, ullamcorper odio a, porta purus.</p>
    </figure>
    <figure class="news_card">
        <img src="" alt="placeholder4"/>
        <h4>News Item</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elementum efficitur nulla, et laoreet diam vehicula vitae. Ut ultrices odio vel tempor imperdiet. Quisque hendrerit, metus id iaculis fringilla, nisl felis aliquam mauris, id rhoncus nunc erat interdum tortor. Sed imperdiet lectus in aliquam vehicula. Aliquam sed tristique diam, quis gravida velit. Donec imperdiet rutrum dolor in euismod. Phasellus sed augue blandit, ullamcorper odio a, porta purus.</p>
    </figure>
</div>

{/* next game info */}
<div id="next_game">
    <h2>Next Game:</h2>
    <p class="team_name">Adelaide</p>
    <p>vs</p>
    <p class="team_name">Melbourne</p>
    <p>Sun Apr 20, 2pm, MCG</p>
</div>
</section>
        </div>
    )
}

export default Home