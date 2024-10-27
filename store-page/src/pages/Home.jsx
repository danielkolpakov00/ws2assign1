import { Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import React, { useRef } from 'react';
import './styles.css'; // Custom CSS for additional styling if needed

function Model({ position = [0, 0, 0] }) {
  const { scene } = useGLTF('/models/Glasses.glb');
  const modelRef = useRef();

  // Use useFrame to rotate the model continuously
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.004; // Adjust the rotation speed here
    }
  });

  return (
    <primitive
      ref={modelRef}
      object={scene}
      scale={36}
      position={position}  // Set the model's position here
      /* eslint-disable-line react/no-unknown-property */
    />
  );
}

function Home() {
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Full-Screen Canvas */}
      <Suspense fallback={<div className="loading-overlay">Loading model...</div>}>
        <Canvas className="absolute inset-0">
          <ambientLight intensity={0.6} /* eslint-disable-line react/no-unknown-property */ />
          <directionalLight position={[5, 5, 5]} intensity={1} /* eslint-disable-line react/no-unknown-property */ />
          <Model position={[0, -1, 0]} />
        </Canvas>
      </Suspense>

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 p-6">
        <h2 className="text-4xl font-bold mb-2 md:mb-4 text-yellow-300 drop-shadow-lg">
          Welcome to My Store
        </h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-md text-center drop-shadow-md">
          Explore our collection of products and find your favorites!
        </p>
      </div>
    </div>
  );
}

export default Home;
