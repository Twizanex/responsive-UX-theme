var camera, scene, renderer, position;
			var geometry, material, mesh;
			var target = new THREE.Vector3();

			var lon = 90, lat = 0;
			var phi = 0, theta = 0;

			var touchX, touchY;
			
			if(full){
				panweight = window.innerWidth;
				panheight = window.innerHeight;
			}
			init();
			animate();

			function init() {

				camera = new THREE.PerspectiveCamera( 75, panweight / panheight, 1, 1000 );
			
				scene = new THREE.Scene();
				position = panweight/2;
				var sides = [
					{
						url: image_left,
						position: [ -position, 0, 0 ],
						rotation: [ 0, Math.PI / 2, 0 ]
					},
					{
						url: image_right,
						position: [ position, 0, 0 ],
						rotation: [ 0, -Math.PI / 2, 0 ]
					},
					{
						url: image_top,
						position: [ 0,  position, 0 ],
						rotation: [ Math.PI / 2, 0, Math.PI ]
					},
					{
						url: image_bottom,
						position: [ 0, -position, 0 ],
						rotation: [ - Math.PI / 2, 0, Math.PI ]
					},
					{
						url: image_front,
						position: [ 0, 0,  position ],
						rotation: [ 0, Math.PI, 0 ]
					},
					{
						url: image_back,
						position: [ 0, 0, -position ],
						rotation: [ 0, 0, 0 ]
					}
				];

				var length = sides.length, item;
				
				for ( item = 0; item < length; item++ ) {

					var side = sides[item];

					var element = document.createElement( 'img' );
					element.width = panweight + 2;  // 2 pixels extra to close the gap.
					element.src = side.url;

					var object = new THREE.CSS3DObject( element );
					object.position.fromArray( side.position );
					object.rotation.fromArray( side.rotation );
					scene.add( object );

				}

				renderer = new THREE.CSS3DRenderer();
				renderer.setSize( panweight, panheight );
				panorama.appendChild( renderer.domElement );

				panorama.addEventListener( 'mousedown', onDocumentMouseDown, false );

				panorama.addEventListener( 'touchstart', onDocumentTouchStart, false );
				panorama.addEventListener( 'touchmove', onDocumentTouchMove, false );
				if(full){
					window.addEventListener( 'resize', onWindowResize, false );
				}
			}
