"use client";

import styled from "styled-components";

const ComingSoon = () => {
  return (
    <StyledDiv>
      <MovingText>
        <div className="text">
          <span>#SOUNDTOPIAFESTIVAL2024-</span>
          <span>#SOUNDTOPIAFESTIVAL2024-</span>
          <span>#SOUNDTOPIAFESTIVAL2024-</span>
          <span>#SOUNDTOPIAFESTIVAL2024-</span>
          <span>#SOUNDTOPIAFESTIVAL2024-</span>
          <span>#SOUNDTOPIAFESTIVAL2024-</span>
        </div>
        <div className="text">
          <span>#SOUNDTOPIAFESTIVAL2024-</span>
          <span>#SOUNDTOPIAFESTIVAL2024-</span>
          <span>#SOUNDTOPIAFESTIVAL2024-</span>
          <span>#SOUNDTOPIAFESTIVAL2024-</span>
          <span>#SOUNDTOPIAFESTIVAL2024-</span>
          <span>#SOUNDTOPIAFESTIVAL2024-</span>
        </div>
      </MovingText>
      <MainText>
        <h1>SOUNDTOPIA</h1>
        <h2>FESTIVAL 2024</h2>
        <p>MORE INFORMATION SOON</p>
      </MainText>
      <MovingText>
        <div className="text">
          <span>#SOUNDTOPIAFESTIVAL2024-</span>
          <span>#SOUNDTOPIAFESTIVAL2024-</span>
          <span>#SOUNDTOPIAFESTIVAL2024-</span>
          <span>#SOUNDTOPIAFESTIVAL2024-</span>
          <span>#SOUNDTOPIAFESTIVAL2024-</span>
          <span>#SOUNDTOPIAFESTIVAL2024-</span>
        </div>
        <div className="text">
          <span>#SOUNDTOPIAFESTIVAL2024-</span>
          <span>#SOUNDTOPIAFESTIVAL2024-</span>
          <span>#SOUNDTOPIAFESTIVAL2024-</span>
          <span>#SOUNDTOPIAFESTIVAL2024-</span>
          <span>#SOUNDTOPIAFESTIVAL2024-</span>
          <span>#SOUNDTOPIAFESTIVAL2024-</span>
        </div>
      </MovingText>
    </StyledDiv>
  );
};

export default ComingSoon;

const StyledDiv = styled.div`
  background: black;
  height: 100vh;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  font-family: "InriaSans-Light";
  padding: 3rem 0;
`;

const MainText = styled.div`
  text-align: center;
  h1 {
    letter-spacing: 35px;
    margin-bottom: 20px;
    font-size: 52px;
    text-shadow: 0px 0px 10px rgba(255, 255, 255, 1);
  }
  h2 {
    letter-spacing: 26px;
    margin-bottom: 30px;
    font-size: 40px;
    text-shadow: 0px 0px 10px rgba(255, 255, 255, 1);
  }
  p {
    font-size: 24px;
    letter-spacing: 9px;
    text-decoration: underline;
  }
`;
const MovingText = styled.div`
  width: 100%;
  overflow: hidden;
  display: flex;
  white-space: nowrap;
  .text {
    letter-spacing: 7px;
    font-size: 20px;
    font-weight: 700;
    text-transform: uppercase;
    color: white;
    animation: animate_text 20s linear infinite;
  }

  @keyframes animate_text {
    from {
      transform: translate3d(0, 0, 0);
    }
    to {
      transform: translate3d(-100%, 0, 0);
    }
  }
`;
