import { OrbitControls } from '@react-three/drei'

export default function Experience() {
    return <>
        <color args={["#000000"]} attach={"background"} />
        <OrbitControls makeDefault />

        <mesh>
            <boxGeometry />
            <meshNormalMaterial />
        </mesh>

    </>
}