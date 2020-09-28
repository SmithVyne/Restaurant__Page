import '../style.css';

const header = (contentBox) => {
  contentBox.innerHTML = `<h1 id="header">
  A Great Restaurant
</h1>`;
};

const pageBody = (contentBox) => {
  contentBox.innerHTML += `<div class="tab-content" id="nav-tabContent">
 <div class="tab-pane fade show active p-2" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
   <div id="home-img"></div>
   <p>
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus blanditiis in fuga corporis, itaque, natus nihil commodi dolorem beatae aliquid dolor magni quasi atque cumque. Consequatur fugit iste sint nemo!
   </p>
 </div>

 <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
   <div class="menu-items">
     <div class="menu-itm">
       <div class="menu-img"></div>
       <span class="d-block">Pancakes</span>
     </div>
     <div class="menu-itm">
       <div class="menu-img"></div>
       <span class="d-block">IceCream</span>
     </div>
     <div class="menu-itm">
       <div class="menu-img"></div>
       <span class="d-block">Candy</span>
     </div>
   </div>
 </div>

 <div class="tab-pane fade p-4" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
   <form id="contact-form">
     <div class="d-flex">
       <div class="labels mr-2">
         <div>Your Request: </div>
         <div class="mt-3">Email here: </div>
       </div>
       <div class="entries">
         <input type="text" id="request-box">
         <input type="email" id="email-box" class="mt-2">
       </div>
     </div>
     <button type="submit" class="mt-3 btn btn-primary">Submit</button>
   </form>
 </div>
</div>`;
};


export { header, pageBody };