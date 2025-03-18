function initBuffers(gl) {
  const positionBuffer = initPositionBuffer(gl);

  return {
    position: positionBuffer,
  };
}

function initPositionBuffer(gl) {
  //cria o buffer de pontos
  const positionBuffer = gl.createBuffer();

  // seleciona o buffer para as proximas coisas
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

  // vetor com 6 pontos do quadrado
  const positions = [0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, -0.5];

  // passa nosso vetor de pontos para o buffer atual: positionBuffer
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

  return positionBuffer;
}


