import { useCursor, MeshPortalMaterial, Text } from "@react-three/drei"
import { Object3DNode, ThreeEvent, extend, useFrame } from "@react-three/fiber"
import { FC, Suspense, useCallback, useRef, useState } from "react"
import * as THREE from 'three';
import { ColorRepresentation } from "three"
import { DefaultRatio } from "./PortalCarousel"
import { easing, geometry } from "maath"

interface Props extends  Object3DNode<THREE.Group, typeof THREE.Group> {
    name: string;
    author: string;
    bg: ColorRepresentation;
    width?: number;
    height?: number;

    selectedItem: number | undefined;
    setSelectedItem: (v: number | undefined) => void;

    children: React.ReactNode;
}
extend(geometry);

const Frame: FC<Props> = ({ id, name, author, bg, width = 1, height = DefaultRatio, selectedItem, setSelectedItem, children, ...props }) => {
    const portal = useRef(null);
    const [hover, setHover] = useState(false);

    const onDoubleClick = useCallback((e: ThreeEvent<MouseEvent>) => {
      e.stopPropagation();
      setSelectedItem(id);
    }, [setSelectedItem]);

    const onPointerOver = (e: ThreeEvent<PointerEvent>) => setHover(true);
    const onPointerOut = () => setHover(false);

    useCursor(hover);
    useFrame((state, dt) => easing.damp(portal.current!, 'blend', selectedItem === id ? 1 : 0, 0.2, dt));

    return (
      <group {...props}>
        <Text fontSize={0.3} anchorY="top" anchorX="left" lineHeight={0.8} position={[-0.375, 1.525, 0.01]} material-toneMapped={false}>
          {name}
        </Text>
        <Text fontSize={0.1} anchorX="right" position={[0.4, 0.15, 0.01]} material-toneMapped={false}>
          /{id}
        </Text>
        <Text fontSize={0.04} anchorX="right" position={[0.0, 0.132, 0.01]} material-toneMapped={false}>
          {author}
        </Text>
        <mesh name={id?.toString()} position={[0, DefaultRatio / 2, 0]} onDoubleClick={onDoubleClick} onPointerOver={onPointerOver} onPointerOut={onPointerOut}>
          <roundedPlaneGeometry args={[width, height, 0.1]} />
          <MeshPortalMaterial ref={portal} events={selectedItem === id} side={THREE.DoubleSide}>
            <color attach="background" args={[bg]} />
            <Suspense fallback={null}>
              {children}
            </Suspense>
          </MeshPortalMaterial>
        </mesh>
      </group>
    )
  }

  export default Frame;