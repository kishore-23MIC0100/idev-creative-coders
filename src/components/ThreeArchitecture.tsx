import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { motion } from "framer-motion";

interface NodeData {
  name: string;
  pos: [number, number, number];
  svgX: number; // percentage X for mobile fallback
  svgY: number; // percentage Y for mobile fallback
  description: string;
}

interface DataPacket {
  mesh: THREE.Mesh;
  startNodeIndex: number;
  endNodeIndex: number;
  progress: number;
  speed: number;
}

export const ThreeArchitecture: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const nodes: NodeData[] = [
    { name: "FRONTEND", pos: [-2, 1.5, 0], svgX: 25, svgY: 30, description: "React / Next.js SPA Client" },
    { name: "BACKEND", pos: [0, 0.5, 0.8], svgX: 50, svgY: 45, description: "Spring Boot / Node REST API" },
    { name: "API GATEWAY", pos: [-1, 0.5, -0.8], svgX: 35, svgY: 55, description: "Secure Gateway Router" },
    { name: "DATABASE", pos: [1.2, -0.5, 1], svgX: 75, svgY: 60, description: "PostgreSQL Transaction Storage" },
    { name: "SECURITY", pos: [0, 1.8, -1.2], svgX: 50, svgY: 20, description: "OAuth2 / IAM Token Validator" },
    { name: "CLOUD", pos: [2, 0.8, -0.5], svgX: 80, svgY: 35, description: "AWS ECS Cluster Container" },
    { name: "AI COGNITIVE", pos: [-1.5, -1, 0.5], svgX: 25, svgY: 75, description: "TensorFlow / OpenCV Model" },
    { name: "INFRASTRUCTURE", pos: [1.5, -1.5, 0], svgX: 70, svgY: 80, description: "Docker / CI-CD Pipelines" },
  ];

  // Connection web for SVG fallback
  const svgConnections = [
    [0, 1], [0, 2], [1, 2], [1, 3], [1, 4], [1, 5], [3, 5], [4, 5], [6, 2], [7, 3]
  ];

  useEffect(() => {
    // Detect mobile viewport on mount and on resize
    const checkViewport = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkViewport();
    window.addEventListener("resize", checkViewport);
    return () => window.removeEventListener("resize", checkViewport);
  }, []);

  useEffect(() => {
    if (isMobile) return; // Skip WebGL on mobile devices
    if (!containerRef.current) return;

    const width = containerRef.current.clientWidth || 400;
    const height = containerRef.current.clientHeight || 400;

    // Scene setup
    const scene = new THREE.Scene();

    // Camera setup
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 8;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // Group to hold meshes
    const group = new THREE.Group();
    scene.add(group);

    // Determine dynamic colors based on theme
    const getThemeColors = () => {
      const isLight = document.documentElement.classList.contains("light");
      return {
        base: isLight ? 0x4a1521 : 0xff8da1, // Brighter glowing rose in dark mode for clear line contrast
        hover: isLight ? 0x8b1e3f : 0xffa6c9,
      };
    };

    const initialColors = getThemeColors();

    // Node Meshes
    const sphereGeometry = new THREE.SphereGeometry(0.12, 16, 16);
    const sphereMaterial = new THREE.MeshBasicMaterial({ color: initialColors.base });

    const meshes: THREE.Mesh[] = [];
    nodes.forEach((node) => {
      const mesh = new THREE.Mesh(sphereGeometry, sphereMaterial.clone());
      mesh.position.set(...node.pos);
      mesh.userData = { name: node.name, description: node.description };
      group.add(mesh);
      meshes.push(mesh);
    });

    // Connecting Lines
    const linesMaterial = new THREE.LineBasicMaterial({
      color: initialColors.base,
      transparent: true,
      opacity: 0.85, // Maximize visibility of thin 1px OpenGL lines
    });

    // Track valid node connection indices
    const connections: [number, number][] = [];
    for (let i = 0; i < meshes.length; i++) {
      for (let j = i + 1; j < meshes.length; j++) {
        const dist = meshes[i].position.distanceTo(meshes[j].position);
        if (dist < 3.2) {
          connections.push([i, j]);
          const points = [meshes[i].position, meshes[j].position];
          const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
          const line = new THREE.Line(lineGeometry, linesMaterial);
          group.add(line);
        }
      }
    }

    // High-Tech Dynamic Data Packets (Simulated Network Traffic)
    const packets: DataPacket[] = [];
    const packetGeometry = new THREE.SphereGeometry(0.04, 8, 8);
    const packetMaterial = new THREE.MeshBasicMaterial({ color: initialColors.hover });

    // Spawn 12 active traffic packets flowing along the grid lines
    for (let k = 0; k < 12; k++) {
      if (connections.length === 0) break;
      const conn = connections[Math.floor(Math.random() * connections.length)];
      const startIdx = Math.random() > 0.5 ? conn[0] : conn[1];
      const endIdx = startIdx === conn[0] ? conn[1] : conn[0];

      const pMesh = new THREE.Mesh(packetGeometry, packetMaterial.clone());
      group.add(pMesh);
      packets.push({
        mesh: pMesh,
        startNodeIndex: startIdx,
        endNodeIndex: endIdx,
        progress: Math.random(), // Distribute progress along lines on load
        speed: 0.003 + Math.random() * 0.004,
      });
    }

    // Raycaster for Hover detection
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2(0, 0);
    let baseRotationY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = renderer.domElement.getBoundingClientRect();
      if (!rect || rect.width <= 0 || rect.height <= 0) return; // Safety check to prevent NaN division
      
      const nextX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const nextY = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      
      if (!isNaN(nextX) && !isNaN(nextY)) {
        mouse.x = nextX;
        mouse.y = nextY;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Animation Loop
    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Auto rotation of the main system
      baseRotationY += 0.0015;

      // Smoothly blend auto-rotation and mouse parallax (lerping) with NaN safety fallbacks
      const cleanMouseX = isNaN(mouse.x) ? 0 : mouse.x;
      const cleanMouseY = isNaN(mouse.y) ? 0 : mouse.y;
      
      const targetY = baseRotationY + cleanMouseX * 0.3;
      const targetX = -cleanMouseY * 0.3;
      
      if (!isNaN(targetY) && !isNaN(targetX)) {
        group.rotation.y += (targetY - group.rotation.y) * 0.05;
        group.rotation.x += (targetX - group.rotation.x) * 0.05;
      }

      // Dynamic theme updates for material colors
      const currentColors = getThemeColors();
      linesMaterial.color.setHex(currentColors.base);

      // Update and animate simulated data packets
      packets.forEach((p) => {
        p.progress += p.speed;
        
        // Reset and randomize start/end targets when packet finishes its line
        if (p.progress >= 1) {
          p.progress = 0;
          const conn = connections[Math.floor(Math.random() * connections.length)];
          p.startNodeIndex = Math.random() > 0.5 ? conn[0] : conn[1];
          p.endNodeIndex = p.startNodeIndex === conn[0] ? conn[1] : conn[0];
          p.speed = 0.003 + Math.random() * 0.004;
        }

        const startPos = meshes[p.startNodeIndex].position;
        const endPos = meshes[p.endNodeIndex].position;
        
        // Linearly interpolate positions of flowing particles
        p.mesh.position.lerpVectors(startPos, endPos, p.progress);
        (p.mesh.material as THREE.MeshBasicMaterial).color.setHex(currentColors.hover);
      });

      // Raycasting hover check
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(meshes);

      if (intersects.length > 0) {
        const hit = intersects[0].object as THREE.Mesh;
        const mat = hit.material as THREE.MeshBasicMaterial;
        mat.color.setHex(currentColors.hover);
        setHoveredNode(hit.userData.name + ": " + hit.userData.description);
      } else {
        meshes.forEach((mesh) => {
          const mat = mesh.material as THREE.MeshBasicMaterial;
          mat.color.setHex(currentColors.base);
        });
        setHoveredNode(null);
      }

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;
      if (w <= 0 || h <= 0) return; // Prevent division by zero / NaN
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      
      // Clean up packet resources
      packets.forEach((p) => {
        group.remove(p.mesh);
        p.mesh.geometry.dispose();
        (p.mesh.material as THREE.Material).dispose();
      });

      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [isMobile]);

  return (
    <div className="relative w-full h-full min-h-[320px] sm:min-h-[400px] flex items-center justify-center select-none overflow-hidden">
      
      {/* 1. WebGL Canvas for Laptops / Desktops */}
      {!isMobile ? (
        <div ref={containerRef} className="absolute inset-0 z-0" />
      ) : (
        
        // 2. High-Performance SVG Fallback for Mobiles
        <motion.div
          animate={{ rotate: [0, 5, 0, -5, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 z-0 flex items-center justify-center p-4"
        >
          <svg viewBox="0 0 100 100" className="w-full h-full text-accent max-w-sm">
            {/* Connections */}
            {svgConnections.map(([i, j], idx) => (
              <line
                key={idx}
                x1={`${nodes[i].svgX}%`}
                y1={`${nodes[i].svgY}%`}
                x2={`${nodes[j].svgX}%`}
                y2={`${nodes[j].svgY}%`}
                stroke="currentColor"
                strokeWidth="0.4"
                className="opacity-20"
              />
            ))}

            {/* Nodes */}
            {nodes.map((node) => (
              <g
                key={node.name}
                onClick={() => setHoveredNode(node.name + ": " + node.description)}
                className="cursor-pointer group"
              >
                <circle
                  cx={`${node.svgX}%`}
                  cy={`${node.svgY}%`}
                  r="2"
                  fill="currentColor"
                  className="transition-transform group-hover:scale-125 duration-300"
                />
                <circle
                  cx={`${node.svgX}%`}
                  cy={`${node.svgY}%`}
                  r="4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.3"
                  className="opacity-40 animate-pulse"
                />
                <text
                  x={`${node.svgX}%`}
                  y={`${node.svgY - 3}%`}
                  textAnchor="middle"
                  className="text-[3px] font-mono font-bold fill-text-primary pointer-events-none opacity-80"
                >
                  {node.name}
                </text>
              </g>
            ))}
          </svg>
        </motion.div>
      )}

      {/* Dynamic HUD Node HUD */}
      {hoveredNode && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-surface/90 border border-accent/30 px-4 py-2.5 rounded-xl backdrop-blur text-left z-10 transition-all duration-300 shadow-xl max-w-[280px]">
          <span className="text-[9px] font-mono tracking-widest text-accent uppercase block mb-1">
            System Node Info
          </span>
          <span className="text-xs font-bold text-text-primary block font-mono">
            {hoveredNode}
          </span>
        </div>
      )}
    </div>
  );
};
