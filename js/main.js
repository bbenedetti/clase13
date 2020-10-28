$( document ). ready( function(){
  let scene = new THREE.Scene();
  let camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
  let renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );
  $( "body" ).append( renderer.domElement );

  scene.add( camera );
  camera.position.z = 6;

  var light = new THREE.PointLight( 0xffffff, 1, 100 );
  light.position.set( 0, 0, camera.position.z );
  scene.add( light );

  let circulo = new THREE.Object3D();
  scene.add( circulo);

  let num = 30;
  let interval = 360/num;
  let radius = 2;
  let grosor = 8;
  let divi = 2;


 for( let j = 0; j < grosor ; j++){
    for( let i = 0; i < 360; i+= interval) {
         let geometry = new THREE.BoxGeometry(0.1,0.1,0.1);
         let material = new THREE.MeshLambertMaterial({color: 0xFF0000});
         let nodo = new THREE.Mesh(geometry, material);
         nodo.position.x = Math.cos( toRadians( i ))* radius/j;
         nodo.position.y = Math.sin( toRadians( i ))* radius/j ;
         nodo.position.z = j/3;
         nodo.setSize = radius/j;
         circulo.add(nodo);
  }
}




  function animate(){
      requestAnimationFrame( animate );
      renderer.render( scene, camera );
      circulo.rotation.y += 0.01;
    }
    animate();

    function toRadians(degrees){
      var pi = Math.PI;
      return degrees * (pi/180);

    }
});
