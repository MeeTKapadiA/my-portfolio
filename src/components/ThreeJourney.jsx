import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import './ThreeJourney.css';

const ThreeJourney = () => {
  const containerRef = useRef(null);
  const scrollRef = useRef(0);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // --- Scene Setup ---
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x03000a, 0.008);

    // --- Camera Setup ---
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    // --- Renderer Setup ---
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x03000a, 1);
    container.appendChild(renderer.domElement);

    // --- Defining the 3D Track Path ---
    // A winding path that dips, curves, and extends deep in Z
    const points = [
      new THREE.Vector3(0, 4, 0),        // Home
      new THREE.Vector3(-6, 2, -35),     // About
      new THREE.Vector3(6, -2, -80),     // Projects
      new THREE.Vector3(-5, -4, -125),   // Experience
      new THREE.Vector3(5, 3, -170),     // Certifications
      new THREE.Vector3(0, 0, -220),     // Contact
    ];
    
    const curve = new THREE.CatmullRomCurve3(points);
    
    // --- Grid System (The cyber road) ---
    // Floor grid
    const gridHelperFloor = new THREE.GridHelper(600, 120, 0x00ffe7, 0x1f074d);
    gridHelperFloor.position.y = -10;
    gridHelperFloor.position.z = -110;
    scene.add(gridHelperFloor);

    // Ceiling grid
    const gridHelperCeil = new THREE.GridHelper(600, 120, 0xbd00ff, 0x1f074d);
    gridHelperCeil.position.y = 15;
    gridHelperCeil.position.z = -110;
    scene.add(gridHelperCeil);

    // --- Tunnel Rings along the path ---
    const rings = [];
    const ringCount = 50;
    const ringGeom = new THREE.RingGeometry(7, 7.15, 32);
    
    for (let i = 0; i < ringCount; i++) {
      const t = i / (ringCount - 1);
      const pt = curve.getPointAt(t);
      
      const ringMat = new THREE.MeshBasicMaterial({
        color: i % 2 === 0 ? 0xbd00ff : 0x00ffe7,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.15 + (1 - t) * 0.2
      });
      
      const ring = new THREE.Mesh(ringGeom, ringMat);
      ring.position.copy(pt);
      
      // Orient the ring with the curve's direction
      const tangent = curve.getTangentAt(t).normalize();
      const up = new THREE.Vector3(0, 1, 0);
      const axis = new THREE.Vector3().crossVectors(up, tangent).normalize();
      const radians = Math.acos(up.dot(tangent));
      ring.quaternion.setFromAxisAngle(axis, radians);
      
      scene.add(ring);
      rings.push(ring);
    }

    // --- Glowing Particles / Space Dust ---
    const particleCount = 1000;
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      // Random coordinates around the highway path
      const t = Math.random();
      const pathPoint = curve.getPointAt(t);
      const offsetRadius = 5 + Math.random() * 20;
      const angle = Math.random() * Math.PI * 2;
      
      particlePositions[i * 3] = pathPoint.x + Math.cos(angle) * offsetRadius;
      particlePositions[i * 3 + 1] = pathPoint.y + Math.sin(angle) * offsetRadius;
      particlePositions[i * 3 + 2] = pathPoint.z + (Math.random() - 0.5) * 10;

      // HSL color blending from Cyan to Purple
      const color = new THREE.Color();
      color.setHSL(t * 0.4 + 0.5, 1, 0.6); // Cyan (180 deg / 0.5) to Purple (280 deg / 0.77)
      
      particleColors[i * 3] = color.r;
      particleColors[i * 3 + 1] = color.g;
      particleColors[i * 3 + 2] = color.b;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.15,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    });

    const starParticles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(starParticles);

    // --- Interactive 3D Node Objects (Station Visuals) ---
    const nodes = [];
    const nodeTypes = [
      { geom: new THREE.IcosahedronGeometry(3.5, 1), color: 0x00ffe7, pos: points[1] }, // About
      { geom: new THREE.BoxGeometry(4, 4, 4), color: 0xbd00ff, pos: points[2] },          // Projects
      { geom: new THREE.TorusGeometry(3, 0.7, 10, 32), color: 0x005eff, pos: points[3] }, // Experience
      { geom: new THREE.OctahedronGeometry(3.5), color: 0xbd00ff, pos: points[4] },       // Certifications
      { geom: new THREE.SphereGeometry(3.2, 16, 16), color: 0x00ffe7, pos: points[5] }   // Contact
    ];

    nodeTypes.forEach((nodeConfig) => {
      const mat = new THREE.MeshBasicMaterial({
        color: nodeConfig.color,
        wireframe: true,
        transparent: true,
        opacity: 0.35
      });
      const outerMat = new THREE.MeshBasicMaterial({
        color: nodeConfig.color,
        wireframe: true,
        transparent: true,
        opacity: 0.08
      });

      const mesh = new THREE.Mesh(nodeConfig.geom, mat);
      mesh.position.copy(nodeConfig.pos);
      
      // Floating outer orbit shell
      const shellMesh = new THREE.Mesh(nodeConfig.geom, outerMat);
      shellMesh.scale.multiplyScalar(1.4);
      mesh.add(shellMesh);

      scene.add(mesh);
      nodes.push({ main: mesh, shell: shellMesh });
    });

    // --- Scroll & Mouse Handlers ---
    const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (maxScroll <= 0) return;
      scrollRef.current = window.scrollY / maxScroll;
    };

    const handleMouseMove = (e) => {
      mouseRef.current.x = (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2);
      mouseRef.current.y = (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    // --- Animation loop ---
    let animationFrameId;
    let cameraT = 0; // Current position on the path [0, 1]

    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();

      // Lerp camera position on track based on scroll
      cameraT += (scrollRef.current - cameraT) * 0.05; // smooth damping
      
      // Get point along the path
      const clampedT = THREE.MathUtils.clamp(cameraT, 0, 0.999);
      const currentPos = curve.getPointAt(clampedT);
      
      // Smooth look-at point (look slightly ahead of the camera)
      const lookAtT = THREE.MathUtils.clamp(cameraT + 0.04, 0, 1);
      const lookPos = curve.getPointAt(lookAtT);

      // Blend mouse parallax offset
      const targetCamX = currentPos.x + mouseRef.current.x * 0.7;
      const targetCamY = currentPos.y - mouseRef.current.y * 0.7;
      
      camera.position.x += (targetCamX - camera.position.x) * 0.1;
      camera.position.y += (targetCamY - camera.position.y) * 0.1;
      camera.position.z += (currentPos.z - camera.position.z) * 0.1;

      // Adjust camera rotation smoothly to look down track
      const tempLook = new THREE.Vector3().copy(lookPos);
      
      // Add a slight tilt on curves
      camera.lookAt(tempLook);
      camera.rotation.z = mouseRef.current.x * 0.04;

      // Animate floating nodes
      nodes.forEach((node, index) => {
        node.main.rotation.y += 0.01 + index * 0.002;
        node.main.rotation.x += 0.005;
        node.shell.rotation.y -= 0.004;
        
        // Hover float animation
        const floatOffset = Math.sin(elapsed * 2 + index) * 0.2;
        node.main.position.y = nodeTypes[index].pos.y + floatOffset;
      });

      // Animate particles in space
      starParticles.rotation.z += 0.002;

      // Pulse ring tunnels
      rings.forEach((ring, index) => {
        const pulse = 1 + Math.sin(elapsed * 3 + index) * 0.03;
        ring.scale.set(pulse, pulse, 1);
      });

      renderer.render(scene, camera);
    };

    animate();

    // --- Window Resize ---
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);

    // --- Cleanup ---
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      
      // Dispose materials/geometries
      ringGeom.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      
      nodeTypes.forEach((config) => {
        config.geom.dispose();
      });
      
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} className="three-journey-canvas" />;
};

export default ThreeJourney;
