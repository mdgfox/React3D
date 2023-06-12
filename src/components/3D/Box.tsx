"use client"
import useActions from "@/hooks/useActions";
import { useCarousel } from "@/hooks/useCarousel";
import { ICarouselItem } from "@/store/carousel/types";
import { useTexture } from "@react-three/drei";
import { ThreeElements, useFrame } from "@react-three/fiber"
import { FC, useRef, useState } from 'react'
import * as THREE from 'three';


type TypeBox = {
    item: ICarouselItem;
} & ThreeElements['mesh'];

const Box: FC<TypeBox> = ({item, ...rest}) => {
    const ref = useRef<THREE.Mesh>(null!);

    const {changeCurrentId} = useActions();
    
    const image = useTexture(item.image);

    const {currentId} = useCarousel();

    const [mousePos, setMousePos] = useState({x: 0, y: 0});
    useFrame((state, delta) => {
        if(ref.current && item.id === currentId) {
            if(mousePos.x === 0 && mousePos.y === 0) {
                ref.current.rotation.y += delta / 8;
            } else {
                ref.current.rotation.y = mousePos.x * 0.01; 
            }
        }
    });

    return(
        <mesh 
            {...rest}
            ref={ref}
            onClick={() => changeCurrentId(item.id)}
            onPointerMove={({clientX, clientY}) => setMousePos({x: clientX, y: clientY})}
            onPointerLeave={() => setMousePos({x: 0, y: 0})}
        >
            <boxBufferGeometry args={[1.5, 1, 1.5]} />
            <meshBasicMaterial key={image.id} map={image} shadowSide={THREE.BackSide}/>
        </mesh>
    );
}

export default Box;