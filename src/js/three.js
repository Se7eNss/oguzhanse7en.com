


//loading
// const textureloader = new THREE.TextureLoader();
// const cross = textureloader.load("dest/images/cross.png")
// Debug
// const gui = new dat.GUI()

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Objects
 const geometry = new THREE.SphereGeometry( 1, 32, 32 );

const particlesGeometry = new THREE.BufferGeometry;
const particlesCnt = 5000;
const posArray = new Float32Array(particlesCnt*3);

for(let i=0; i < particlesCnt*3; i++){
    posArray[i] = (Math.random()-0.5)*(Math.random()*100)
}
particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray,3))
// Materials

 const material = new THREE.PointsMaterial({
     size:0.005,
    color:'white',
    
 })

const particlesMaterial = new THREE.PointsMaterial({
    size: 0.005 ,
    // map: cross,
    transparent: true
})

// Mesh
 const sphere = new THREE.Points(geometry,material)
const particleMesh = new THREE.Points(particlesGeometry,particlesMaterial)
scene.add(particleMesh,sphere)

// Lights




// const pointLighthelper = new THREE.PointLightHelper(pointLight,0.11)
// scene.add(pointLighthelper)
/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 0
camera.position.y = 0
camera.position.z = 3
scene.add(camera)

// Controls
// const controls = new OrbitControls(camera, canvas)
// controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */
 document.addEventListener('mousemove',MouseMove)
let mouseX = 0
let mouseY = 0


function MouseMove (event) {
  mouseX =event.clientX 
  mouseY =event.clientY
}

const d = new Date()


const clock = new THREE.Clock()

const tick = () =>
{
  
     const elapsedTime = clock.getElapsedTime()
    // const n=d.getSeconds()*0.01
    if(elapsedTime>15){
        
        clock.start()
        
    }
    
    // Update objects
        sphere.rotation.y = 0.05 * elapsedTime
        particleMesh.rotation.y = -.02 * elapsedTime
    
      if(mouseX > 0){
        particleMesh.rotation.x = -mouseY * (elapsedTime* 0.00001)
        particleMesh.rotation.y = mouseX * (elapsedTime * 0.00001)

      }
        
    
    
    // Update Orbital Controls
    // controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()