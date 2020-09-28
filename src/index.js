import navBar from './navbar';
import pageBody from './pageBody';
import header from './header';

const loadContent = () => {
  const contentBox = document.querySelector('#content');
  header(contentBox);
  navBar(contentBox);
  contentBox.appendChild(pageBody());
};

loadContent();