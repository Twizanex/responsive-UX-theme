var camera, scene, renderer;
			var geometry, material, mesh;
			var target = new THREE.Vector3();

			var lon = 90, lat = 0;
			var phi = 0, theta = 0;

			var touchX, touchY;
			var pancube;

			if(full){
				panweight = window.innerWidth;
				panheight = window.innerHeight;
			}
			
			init();
			animate();
			
			function init() {

				camera = new THREE.PerspectiveCamera( 75, panweight / panheight, 1, 1000 );

				scene = new THREE.Scene();

				//
				var urls = [
						image_left, image_right, image_top, image_bottom, image_front, image_back
				];

				var reflectionCube = THREE.ImageUtils.loadTextureCube( urls );
				reflectionCube.format = THREE.RGBFormat;

				var refractionCube = new THREE.Texture( reflectionCube.image, new THREE.CubeRefractionMapping() );
				refractionCube.format = THREE.RGBFormat;


				// Skybox

				var shader = THREE.ShaderLib[ "cube" ];
				shader.uniforms[ "tCube" ].value = reflectionCube;

				var material = new THREE.ShaderMaterial( {

					fragmentShader: shader.fragmentShader,
					vertexShader: shader.vertexShader,
					uniforms: shader.uniforms,
					depthWrite: false,
					side: THREE.BackSide

				} );
				

				if(full){
					pancube = new THREE.CubeGeometry( 100, 100, 100 );
				}
				else
				{
					pancube = new THREE.CubeGeometry( panweight, panheight, panweight );
				}
				var mesh = new THREE.Mesh( pancube, material );
				scene.add( mesh );

				//

				renderer = new THREE.WebGLRenderer();
				renderer.setSize( panweight, panheight );
				renderer.autoClear = false;
				panorama.appendChild( renderer.domElement );
				
				panorama.addEventListener( 'mousedown', onDocumentMouseDown, false );

				panorama.addEventListener( 'touchstart', onDocumentTouchStart, false );
				panorama.addEventListener( 'touchmove', onDocumentTouchMove, false );
				if(full){
					window.addEventListener( 'resize', onWindowResize, false );
				}
			}
