import { Float, Environment, useGLTF, OrbitControls, PresentationControls } from '@react-three/drei'

export default function Experience() {
    const computer = useGLTF("https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf")
    return <>
        <Environment preset='city' />
        <color args={["#241a1a"]} attach={"background"} />
        {/* <OrbitControls makeDefault /> */}
        <PresentationControls
            global
        >
            <Float rotationIntensity={0.4}>
                <primitive object={computer.scene} position-y={-1} />
            </Float></PresentationControls>
    </>
}