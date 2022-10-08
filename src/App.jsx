import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Earth } from "./components/Earth/Earth";
import { Content } from "./components/Content/Content";

const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
`;

function App() {
  return (
    <CanvasContainer>
      <Content />
      <Canvas>
        <Suspense fallback={null}>
          <Earth />
        </Suspense>
      </Canvas>
    </CanvasContainer>
  );
}

export default App;
