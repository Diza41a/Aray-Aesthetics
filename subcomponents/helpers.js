const toggleClass = (el, className) => {
  if (el.classList.contains(className)) {
    el.classList.remove(className);
  } else {
    el.classList.add(className);
  }
};

const makeInputBox = (name) => {
  const id = name.split(' ').join('-').toLowerCase();

  return (
    <div className="input-wrap">
      <label htmlFor={id}>{name}</label>
      <input id={id} onFocus={((e) => e.target.placeholder = '')}/>
    </div>
  );
};

const makeTextArea = (name) => {
  const id = name.split(' ').join('-').toLowerCase();

  return (
    <div className="input-wrap textarea-wrap">
      <label htmlFor={id}>{name}</label>
      <textarea id={id} onFocus={((e) => e.target.placeholder = '')}/>
    </div>
  );
};


export {
  toggleClass,
  makeInputBox,
  makeTextArea,
};
