import styled from "styled-components";
import thunder from "../../../assets/thunder.png";

export const ProfessionCss = styled.div`
  height: 100%;
  background-image: url(${thunder});
  background-repeat: repeat;
  background-size: 80px 80px;
  .liting {
    width: 80px;
  }
  .backgroundFull {
    width: calc(100% - 80px);
  }
  .container {
    padding-top: 2.5rem;
    height: 100%;
  }
  .title {
    color: #ffe600;
    font-size: 4.5rem;
    margin-bottom: 0;
  }
  .chooseProfession {
    padding: 1rem;
    column-gap: 2.75rem;
    flex-direction: column;
  }
  .pumpkinMan {
    margin-top: 8px;
    max-width:558px;
    width: 100%;
    height: auto;
    object-fit: cover;
  }
  .chooseText {
    margin-top: 1.1875rem;
    font-size: 4rem;
    margin-bottom: 0;
  }
  .ques {
    position: absolute;
    top: 63%;
    left: 55%;
    transform: translate(-50%, -50%);
    font-size: 9.375rem;
    line-height: 100%;
    width: 5.25rem;
    height: auto;
  }

  .role {
    width: 100%;
    img {
      width: 10rem;
      height: 10rem;
      border: 6px solid #ffffff;
    }
  }
  .chooseRole {
    font-weight: 400;
    font-size: 40px;
    line-height: 47px;
  }

  .roleTitle {
    font-weight: 400;
    font-size: 2rem;
    line-height: 37px;
  }
  @media (min-width: 992px) {
    .title {
      font-size: 5.5rem;
    }
    .chooseProfession {
      flex-direction: row;
      column-gap: 1rem;
    }
    .role {
        width:  51.875%;
        img {
          width: 7.5rem;
          height: 7.5rem;
        }
    } 
  }
  @media (min-width: 1200px) {
    .title {
      font-size: 6.5rem;
    }
  }
  @media (min-width: 1400px) {
    .container {
      max-width: calc(100% - 160px);
    }
    .chooseProfession {
        flex-direction: row;
        column-gap: 2.75rem;
      }
    .title {
      color: #ffe600;
      font-size: 7.5rem;
      margin-bottom: 0;
      height: 8.75rem;
    }
    .role {
      width: 51.875%;
      img {
        width: 10rem;
        height: 10rem;
      }
    }
  }
`
