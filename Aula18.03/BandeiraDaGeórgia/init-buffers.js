function initBuffers(gl) {
  const positionBuffer = initPositionBuffer(gl);

  return {
    position: positionBuffer,
    color: initColorBuffer(gl),
  };
}

function initPositionBuffer(gl) {
  //cria o buffer de pontos
  const positionBuffer = gl.createBuffer();

  // seleciona o buffer para as proximas coisas
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

  // vetor com 4 pontos do quadrado
  const positions = [
    -0.2, 1.0,
    0.2, 1.0,
    -0.2, 0.2,
    0.2, 0.2,
    -1.5, 0.2,
    1.5, 0.2,
    -1.5, -0.2,
    1.5, -0.2,
    -0.2, -0.2,
    0.2, -0.2,
    -0.2, -1,
    0.2, -1,
  ];

  // passa nosso vetor de pontos para o buffer atual: positionBuffer
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

  
  return positionBuffer;
}
const initColorBuffer=(gl)=>{
  //cria o buffer de cores
  const colorBuffer = gl.createBuffer();

  // seleciona o buffer para as proximas coisas
  gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);

  
  const colors = [
    1,0,0,
    1,0,0,
    1,0,0,
    1,0,0,
    1,0,0,
    1,0,0,
    1,0,0,
    1,0,0,
    1,0,0,
    1,0,0,
    1,0,0,
    1,0,0,
  ];
  // passa nosso vetor de pontos para o buffer atual: positionBuffer
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
  return colorBuffer;
}


