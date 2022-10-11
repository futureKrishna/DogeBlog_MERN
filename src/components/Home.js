import React , { useState } from 'react'
import '../styles/index.css'


import { useHistory } from 'react-router-dom'

const Home = () => {


let history = useHistory();
history.push('/')    




  return (
<>

    <div className="mainbanner">
     <div className="bannercover">
      <h1><span className="span">W</span>rite , <span className="span" >P</span>ublish <em> And </em> <span className="span">I</span>nspire</h1>
     </div>
    </div>

   
   <h1 className="my-3 text-center"><span className="span">T</span>rending <span className="span">S</span>tories </h1>
   
   
   <div className="trending">
   <div class="trendingLeft">
    <div className="card">
        <img src="/demo2.jpg" className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
   </div>
   <div class="trendingRight">
    <div class="card1">
        <img src="/demo4.jpg" alt=""/>
        <div class="data">
            <h5><strong>Hey there this is title</strong></h5>
            <p>hello frends this is my first blog hope you all will support me to write and inspire peoples.</p>
            <h6><b>Created by</b> : harsh verma</h6>
        </div>
    </div>
    <div class="card1">
        <img src="/demo5.jpg" alt=""/>
        <div class="data">
            <h5><strong>Hey there this is title</strong></h5>
            <p>hello frends this is my first blog hope you all will support me to write and inspire peoples.</p>
            <h6><b>Created by </b>: harsh verma</h6>
        </div>
    </div>
    <div class="card1">
        <img src="/demo3.jpg" alt=""/>
        <div class="data">
            <h5><strong>Hey there this is title</strong></h5>
            <p>hello frends this is my first blog hope you all will support me to write and inspire peoples.</p>
            <h6><b>Created by</b> : harsh verma</h6>
        </div>
    </div>
    <div class="card1">
        <img src="/demo3.jpg" alt=""/>
        <div class="data">
            <h5><strong>Hey there this is title</strong></h5>
            <p>hello frends this is my first blog hope you all will support me to write and inspire peoples.</p>
            <h6><b>Created by</b> : harsh verma</h6>
        </div>
    </div>
    <div class="card1">
        <img src="/demo3.jpg" alt=""/>
        <div class="data">
            <h5><strong>Hey there this is title</strong></h5>
            <p>hello frends this is my first blog hope you all will support me to write and inspire peoples.</p>
            <h6><b>Created by</b> : harsh verma</h6>
        </div>
    </div>
    <div class="card1">
        <img src="/demo3.jpg" alt=""/>
        <div class="data">
            <h5><strong>Hey there this is title</strong></h5>
            <p>hello frends this is my first blog hope you all will support me to write and inspire peoples.</p>
            <h6><b>Created by</b> : harsh verma</h6>
        </div>
    </div>
   </div>
 
   </div>



   <div class="section2">
    <div class="section2Left">
        <h1><span className="span">J</span>oin <span className="span">O</span>ur <span className="span">C</span>ommunity </h1>
        <h6><strong><em>Write your positive thoughts</em></strong></h6>
        <p>"We recently formed a community which help people to guide and show them the path and outcomes of choosing a path.<br/>
          This help students to choose the right path for growing in their career and do something big."
        </p>
    </div>
    <div class="section2Right">
        <div class="box">
            <div class="joinbutton">Join Now</div>
        </div>
    </div>


   </div>




   <footer class="foot">
    
   </footer>

</>
    )
}

export default Home