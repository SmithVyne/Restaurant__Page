import navBar from './navbar';
import { header, pageBody } from './majors';

const loadContent = () => {
  const contentBox = document.querySelector('#content');
  header(contentBox);
  navBar(contentBox);
  contentBox.appendChild(pageBody());
};

loadContent();