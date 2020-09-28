import '../style.css';
import home from './home';
import menu from './menu';
import contact from './contact';

const pageBody = () => {
  const wrapper = document.createElement('div');
  const content = `
    ${home()}
    ${menu()} 
    ${contact()}
    `;

  wrapper.innerHTML += content;
  return wrapper;
};


export default pageBody;