// /* eslint-disable */
// const showButton = document.getElementById('show'); 
// const searchButton = document.getElementById('search'); 

// //console.log("https://brio-models.s3.me-south-1.amazonaws.com/Ring_17023_RND.fbx");
// const encoded = encode("https://brio-models.s3.me-south-1.amazonaws.com/Ring_17023_RND.fbx");

// function encode(data) {
//   //var str = data.reduce(function(a,b){ return a+String.fromCharCode(b) },'');
//   return btoa(data).replace(/.{76}(?=.)/g,'$&\n');

// }

// if (showButton) {
//   showButton.addEventListener('click', e => {
//     showModels();
//   });
// }

// if (searchButton) {
//   searchButton.addEventListener('click', e => {
//     const searchInput = document.getElementById('searchInput').value; 

//     searchModel(searchInput);
//   });
// }

// const searchModel = async(model) => {
//   try {
//     const res = await axios({
//       method: 'GET',
//       url: 'http://localhost:8000/api/v1/models'
//     });
    
//     const modelItems = res.data.data;
//     const modelItemsNames = modelItems.map((e)=>{return e.name});

//     const valueInput = document.getElementById("valueInput"); 
//     let message; 
//     if (modelItemsNames.includes(model)) {
//       message = `Model: ${model} found`;
//     } else {
//       message = `Model: ${model} not found`
//     }

//     valueInput.innerHTML = message;

//   } catch (err) {
//     console.error(err); 
//   } 
// }

// const showModels = async () => {
//   try {
//     const res = await axios({
//       method: 'GET',
//       url: 'http://localhost:8000/api/v1/models'
//     });
    
//     const modelItems = res.data.data;
//     createModelList(modelItems);

//   } catch (err) {
//     console.error(err); 
//   }
// };

// const createModelList = modelItems => {
//   const modelList = document.createElement('ul');
//   modelList.classList.add("todo");

//   document.getElementById('renderList').appendChild(modelList);

//   if (Array.isArray(modelItems) && modelItems.length > 0) {
//     modelItems.map(modelItem => {
//       modelList.appendChild(createModelElement(modelItem));
//     });

//   } else if (modelItems) {
//     modelList.appendChild(createModelElement(modelItems));
//   }
// }

// const createModelElement = item => {
//   const modelElement = document.createElement('li');
//   const btnDlt = document.createElement('button');
//   btnDlt.appendChild(document.createTextNode("Remove"));

//   modelElement.appendChild(document.createTextNode(item.name));
//   modelElement.appendChild(btnDlt);

//   modelElement.dataset.id = item._id;

//   btnDlt.onclick = function() {
//     const id = btnDlt.parentElement.dataset.id;

//     deleteModel(id);
//     this.parentElement.style.display = "none";
//   }
//   return modelElement;
// };

// const deleteModel = async (modelId) => {
//   try {
//     const res = await axios({
//       method: 'DELETE',
//       url: `http://localhost:8000/api/v1/models/${modelId}`
//     });

//   } catch (err) {
//     console.error(err); 
//   }
// }

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import Stats from 'three/examples/jsm/libs/stats.module'

const scene = new THREE.Scene()
scene.add(new THREE.AxesHelper(5))

const light = new THREE.PointLight()
light.position.set(0.8, 1.4, 1.0)
scene.add(light)

const ambientLight = new THREE.AmbientLight()
scene.add(ambientLight)

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
)
camera.position.set(0.8, 1.4, 1.0)

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

const controls = new OrbitControls(camera, renderer.domElement)
controls.enableDamping = true
controls.target.set(0, 1, 0)

//const material = new THREE.MeshNormalMaterial()

const fbxLoader = new FBXLoader()
fbxLoader.load(
  'models/kachujin_g_rosales.fbx',
  (object) => {
      // object.traverse(function (child) {
      //     if ((child as THREE.Mesh).isMesh) {
      //         // (child as THREE.Mesh).material = material
      //         if ((child as THREE.Mesh).material) {
      //             ((child as THREE.Mesh).material as THREE.MeshBasicMaterial).transparent = false
      //         }
      //     }
      // })
      // object.scale.set(.01, .01, .01)
      scene.add(object)
  },
  (xhr) => {
      console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
  },
  (error) => {
      console.log(error)
  }
)

window.addEventListener('resize', onWindowResize, false)
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
  render()
}

const stats = Stats()
document.body.appendChild(stats.dom)

function animate() {
  requestAnimationFrame(animate)

  controls.update()

  render()

  stats.update()
}

function render() {
  renderer.render(scene, camera)
}

animate()

