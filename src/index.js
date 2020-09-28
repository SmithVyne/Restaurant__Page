import navBar from './navbar';
import { header, pageBody } from './majors';

const loadContent = () => {
  const contentBox = document.querySelector('#content');
  header(contentBox);
  navBar(contentBox);
  pageBody(contentBox);
};

loadContent();