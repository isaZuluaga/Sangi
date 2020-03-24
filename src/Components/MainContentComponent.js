import React from 'react';
import SangiLogo from '../img/sangiLogo.png';
import SangiScroll from '../img/scrolldown.gif';
import TeamImg from '../img/swap.jpg';

const mainContent = () =>{
    return(
        <main class="mainContent">
        <div class="logoScroll">
           <img src={SangiLogo} alt="Sangi_Logo" id="sangiLogo"></img>
           <img src={SangiScroll} alt="ScrollDown_Indicator" id="scrollImg"></img>
        </div>
        <div class="sangiInfo">
            <h1 class="infoTitle">
                ¡BIENVENIDO!
            </h1>
            <div class="description">
             <section class="sangiDescription">
                 <h2 class="justifyTitle">JUSTIFICACIÓN</h2>
                 <p class="justifyText">
                  El proyecto surge como una idea para el curso de desarrollo web avanzado, con el fin de implementar una plataforma web 
                  que facilite y agilice el intercambio de objetos entre usuarios permitiéndoles obtener un beneficio de estos trueques, 
                  facilitando la difusión a través de la web, fomentando el intercambio, la circulación y la reutilización de estos sin intervención del dinero.
                 </p>
                 <h2 class="problemTitle">PROBLEMA</h2>
                 <p class="problemText">
                     Vivimos en un mundo capitalista donde el consumo es desmesurado, haciendo inevitable en algunas ocasiones el acumular cosas que no se necesitan ya sea porque han sido remplazadas por otras mejores o simplemente ya no se usan como se solía hacer, en ocasiones el acumular cosas sin necesidad puede llegarse a convertir en situaciones angustiosas en las que se acumula tanto que no se sabe cómo disponer de todos estos objetos, hoy en día especialmente en las grandes ciudades el acumular objetos que ya no se necesitan no es una opción, debido a que no solo se trata de la problemática ambiental (la cual nos trae problemas como la reducción de espacio de almacenaje de residuos, la falta de materias primas que obligarían a subir los precios a niveles fuera del alcance de las economías y las emisiones de gases tóxicos) sino también a que cada vez el espacio es mas valioso, mas limitado y mas costoso a medida que la población aumenta, por lo tanto se comienza a volver una necesidad el salir de estos objetos lo antes posible y conseguir un beneficio por estos, ya sea monetario, un servicio u otro objeto que si se requiera.
                     Sin embargo, en ocasiones no están sencillo llegar a aquellas personas interesadas en adquirir el producto o simplemente no tienen el dinero suficiente para pagar por él, haciendo más difícil la circulación de estos para que lleguen a las personas indicadas y se disponga de estos de la mejor manera.
                 </p>
             </section>
             <section class="infoImgSection">
                  <img src={TeamImg} alt="Swap_img" id="infoImg"></img>
             </section>
            </div>
        </div>
    </main>
    )
};
export default mainContent;