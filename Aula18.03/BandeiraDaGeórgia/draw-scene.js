function drawScene(gl, programInfo, buffers) {
  gl.clearColor(1, 1, 1, 1.0); // cor de fundo preta
  gl.clearDepth(1.0); // limpar zbuffer
  gl.enable(gl.DEPTH_TEST); // ligar teste de profundidade
  gl.depthFunc(gl.LEQUAL); // objetos mais proximos escondem os mais afastados

  // limpar buffers

  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

  

  const aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
  const zNear = -1;
  const zFar = 1;
  //matriz de projeçao ortogonal
  const projectionMatrix = [
  1.0/aspect,0,0,0,
  0,1.0,0,0,
  0,0,-2/(zFar-zNear),-(zFar+zNear)/(zFar-zNear),
  0,0,0,1
  ];
  projectionMatrix[10]=-2/(zFar-zNear);
  projectionMatrix[11]=-(zFar+zNear)/(zFar-zNear);
  
  
   // matriz de modelagem
  const modelViewMatrix = [
  1,0,0,0,
  0,1,0,0,
  0,0,1,0,
  0,0,0,1
  ];


  // configurar como carregar os vertices
  setPositionAttribute(gl, buffers.position, programInfo);
  setColorAttribute(gl, buffers.color, programInfo)

  // Usar nosso codigo de vertex e pixel shader
  gl.useProgram(programInfo.program);

  // linca nossas matrizes com as do shaders
  gl.uniformMatrix4fv(
    programInfo.uniformLocations.projectionMatrix,
    false,
    new Float32Array(projectionMatrix)
  );
  gl.uniformMatrix4fv(
    programInfo.uniformLocations.modelViewMatrix,
    false,
    new Float32Array(modelViewMatrix)
  );

  {
    const offset = 0;
    const vertexCount = 12;
    gl.drawArrays(gl.TRIANGLE_STRIP, offset, vertexCount);
  }
}

// configurar como carregar os vertices
function setPositionAttribute(gl, buffers, programInfo) {
  const numComponents = 2; // dimensoes por vertices
  const type = gl.FLOAT; // tipo de dado
  const normalize = false; // não normalizar os valores
  const stride = 0; // espaço entre os valores

  const offset = 0; // quantas posiçoes pular no inicio
  gl.bindBuffer(gl.ARRAY_BUFFER, buffers);
  gl.vertexAttribPointer(
    programInfo.attribLocations.vertexPosition,
    numComponents,
    type,
    normalize,
    stride,
    offset
  );
  gl.enableVertexAttribArray(programInfo.attribLocations.vertexPosition);
}

// configurar como carregar os vertices
function setColorAttribute(gl, buffers, programInfo) {
  const numComponents = 3; // dimensoes por vertices
  const type = gl.FLOAT; // tipo de dado
  const normalize = false; // não normalizar os valores
  const stride = 0; // espaço entre os valores
  
  const offset = 0; // quantas posiçoes pular no inicio
  gl.bindBuffer(gl.ARRAY_BUFFER, buffers);
  gl.vertexAttribPointer(
    programInfo.attribLocations.vertexColor,
    numComponents,
    type,
    normalize,
    stride,
    offset
  );
  gl.enableVertexAttribArray(programInfo.attribLocations.vertexColor);
}

