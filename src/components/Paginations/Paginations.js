import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";


const Paginations = (prop) => {
  const slug = prop;
  const [current, setCurrent] = useState(1);
  const navigate = useNavigate()

  useEffect(() => {
    const arry = document.querySelectorAll(`.pagi`);
    arry.forEach((a) => {
      a.onclick = () => {
        arry.forEach((x) => {
          if (x.className.includes("active")) {
            x.classList.remove("active");
          }
        });
        a.classList.add("active");
        setCurrent(a.innerText);
      };
    });
    navigate(`${slug.url}${current}`);
    window.scrollTo(0,0);
  }, [current]);

  return (
    <>
      <Container>
        {/* <a href="#" > Previous</a> */}

        <div className="pagi active">1</div>
        <div className="pagi">2</div>
        <div className="pagi">3</div>
        <div className="pagi">4</div>
        <div className="pagi">5</div>
        <div className="pagi">6</div>
        <div className="pagi">7</div>
        <div className="pagi">8</div>
        <div className="pagi">9</div>
        <div className="pagi">10</div>
        {/* <a href="#" > Next </a> */}
      </Container>
    </>
  );
};

export default Paginations;

const Container = styled.div`
  display: flex;
  justify-content: center;
  background: var(--color-background);
  padding-bottom:10px;
  

  .pagi {
    display: flex;
    justify-content: center;
    align-items:center;
    color: white;
    border-radius:50%;
    height:30px;
    width:30px;
    text-decoration: none;
    cursor:pointer;
    margin:0 10px;

    &:hover:not(.active) {
      color: white;
    }
  }

  .active {
    background-color: rgb(251, 253, 251);
    color: rgb(0, 0, 0);
  }
`;
