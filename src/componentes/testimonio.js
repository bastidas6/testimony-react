import React from 'react';

//Vamos a definir el componente funcional
function Testimonio(){
  return(
    <div className='contenedor-testimonio'>
      <img className='imagen-testimonio' 
           src={require('../imagenes/john-fernando-restrepo-tamayo.jpg')} 
           alt="Foto de Jhon"/>
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'>Jhon Fernando UDEA</p>
        <p className='cargo-testimonio'>Ingeniero de Software UDEA</p>
        <p className='texto-testimonio'>qzerxtcvubinouibyvuctyrtxrztxtcfgvbhljnbgyfctdxyrsxydtcfgvkhbljn</p>
      </div>
    </div>
  );
}