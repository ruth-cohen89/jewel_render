/* eslint-disable */
const showButton = document.getElementById('show'); 

if (showButton) {
  showButton.addEventListener('click', e => {
    console.log('clicked');
    showModels();
  });
}

const showModels = async () => {
  try {
    const res = await axios({
      method: 'GET',
      url: 'http://localhost:8000/api/v1/models'
    });
    
    const modelItems = res.data.data;
    console.log(modelItems);
    createModelList(modelItems);

  } catch (err) {
    console.error(err); 
  }
};

const createModelList = modelItems => {
  const modelList = document.createElement('ul');
  modelList.classList.add("todo");

  document.getElementById('renderList').appendChild(modelList);

  if (Array.isArray(modelItems) && modelItems.length > 0) {
    modelItems.map(modelItem => {
      modelList.appendChild(createModelElement(modelItem));
    });

  } else if (modelItems) {
    modelList.appendChild(createModelElement(modelItems));
  }
}

const createModelElement = item => {
  const modelElement = document.createElement('li');
  const btnDlt = document.createElement('button');
  btnDlt.appendChild(document.createTextNode("Remove"));

  modelElement.appendChild(document.createTextNode(item.name));
  modelElement.appendChild(btnDlt);

  modelElement.dataset.id = item._id;

  btnDlt.onclick = function() {
    const id = btnDlt.parentElement.dataset.id;

    deleteModel(id);
    this.parentElement.style.display = "none";
  }
  return modelElement;
};

const deleteModel = async (modelId) => {
  try {
    const res = await axios({
      method: 'DELETE',
      url: `http://localhost:8000/api/v1/models/${modelId}`
    });
    
    console.log(res);

  } catch (err) {
    console.error(err); 
  }
}
// const updateTodoList = todoItems => {
//   const modelList = document.querySelector('ul');

//   if (Array.isArray(todoItems) && todoItems.length > 0) {
//     todoItems.map(todoItem => {
//       modelList.appendChild(createTodoElement(todoItem));
//     });
//   } else if (todoItems) {
//     modelList.appendChild(createTodoElement(todoItems));
//   }
// };
//const name = btnDlt.parentElement.innerText.split('\n')[0]