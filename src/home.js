import '../style.css';

const home = () => {
  const homeBody = `
  <div class="tab-content" id="nav-tabContent">
  <div class="tab-pane fade show active p-2" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
    <div id="home-img"></div>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus blanditiis in fuga corporis, itaque, natus nihil commodi dolorem beatae aliquid dolor magni quasi atque cumque. Consequatur fugit iste sint nemo!
    </p>
  </div>`;
  return homeBody;
};

export default home;