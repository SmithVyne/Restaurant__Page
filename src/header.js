const header = (contentBox) => {
  const h1 = document.createElement('h1');
  h1.id = 'header';
  h1.textContent = 'A Great Restaurant';
  contentBox.appendChild(h1);
};

export default header;