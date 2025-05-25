import React from "react";

const Home = () => {
  return (  
    <>
        <h2>Lançamentos</h2>
        <div className="card">
            <div className="thumb">
                <img src="sneaker\public\Imagens\sapatos\Lançamento\lançamento1.jpg" alt="" />
                </div>
                <div className="detalhes">
                    <h3>Jordan Blod 1</h3>
                        <p>JORDAN</p>
                    <a href="#">Leia mais</a>    
                </div>
                </div>
            <div className="card">
                <div className="thumb">
                    <img src="sneaker\public\Imagens\sapatos\Lançamento\lançamento2.jpg" alt ="" />
                </div>
                <div className="detalhes">
                    <h3>Jordan Pink</h3>
                    <p>JORDANN</p>
                    <a href="#">Leia Mais</a>
                </div>
        </div>
    </>
    );
}

export default Home;


