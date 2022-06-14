import styled  from "styled-components";
import GlobalStyles from "./components/styles/Global";
import Rating from "./components/Rating"


const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
` 

const App = () => {

  return (
    <>
      <GlobalStyles />
      <Container>
        <Rating /> 
      </Container>
    </>
    
  );
}

export default App;
