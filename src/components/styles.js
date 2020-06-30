import styled from 'styled-components';

const FlexBlock = styled.div`
  display: flex;
`
export const Section = styled.section`
  padding: 100px 0 200px;
`

export const Container = styled.div`
  max-width: 700px;
  width: 100%;
  padding: 0 15px;
  margin: 0 auto;
`;

export const Button = styled.button`
  max-width: 180px;
  width: 100%;
  height: 40px;
  border-radius: 5px;
  background: ${props => (props.primary ? "palevioletred" : "lightgreen")};
  border: none;
`;

export const ImageBlock = styled.div`
  max-width: 300px;
  width: 100%;
  margin-bottom: 30px;
    p {
      padding: 5px 10px;
      text-align: center;
    }
`

export const ImageBlockHistory = styled(ImageBlock)`
  max-width: 100%;
  display: flex;
  padding: 5px;
  border: 1px solid grey;
  border-radius: 5px;
  overflow: hidden;
    div${ImageBlock} {
      margin-bottom: 0;
    }
`

export const DateBlock = styled(FlexBlock)`
  width: 100%;
  padding: 15px;
  color: blue;
  align-items: center;
`

export const ButtonBlock = styled(FlexBlock)`
  width: 100%;
  padding: 15px;
  align-items: center;
`

export const Error = styled.h2`
  color: red;
  font-size: bold;
`