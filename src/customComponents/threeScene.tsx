"use client"
import { useRef, useEffect } from "react";
import * as THREE from 'three';
export default function ThreeScene() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            // Initialize Three.js scene here
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            const renderer = new THREE.WebGLRenderer();
            renderer.setSize(window.innerWidth, window.innerHeight);
            containerRef.current?.appendChild(renderer.domElement);
            camera.position.z = 5;
            


            const geometry = new THREE.BoxGeometry();
            const material = new THREE.MeshBasicMaterial({ color: 0x00ffff });
            const sphere = new THREE.Mesh(geometry, material);
            scene.add(sphere);


            // Render the scene and camera
            renderer.render(scene, camera);

            const renderScene = () => {
                sphere.rotation.x += 0.01;
                sphere.rotation.y += 0.01;
                renderer.render(scene, camera);
                requestAnimationFrame(renderScene);
              };
            
              renderScene();
        }
    }, []);

    return <div ref={containerRef} />;
};