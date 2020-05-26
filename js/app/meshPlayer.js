define( ["three", "camera","variable",'scene','material'], function ( THREE, camera,variable,scene,material ){

 //snake
    if(window.innerWidth < 745){
 var  meshPlayer = new THREE.Mesh(
        new THREE.SphereGeometry(1,16,16),
        new THREE.MeshNormalMaterial({color:0xFCECA4, wireframe:variable.USE_WIREFRAME})
    );}else{
  var  meshPlayer = new THREE.Mesh(
      new THREE.SphereGeometry(1,16,16),
      material.grass,
  );

 }
    meshPlayer.position.y += 0.65; // Move the player up 1 meter
    meshPlayer.position.x = 0;
    meshPlayer.position.z = 0;
    meshPlayer.receiveShadow = true;
    meshPlayer.castShadow = true;
    //meshPlayer.add(camera);


    return meshPlayer;
} );
