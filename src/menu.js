import '../style.css';

const menu = () => {
  const menuBody = `<div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
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
</div>`;
  return menuBody;
};

export default menu;