function main() {
    const canvas = document.querySelector("#glcanvas");
    const gl = canvas.getContext("webgl");
    
    if (!gl) {
        alert("WebGL não suportado");
        return;
    }
    
    // Define a cor de fundo
    gl.clearColor(0.0, 0.0, 0.0, 0.4);
    gl.clear(gl.COLOR_BUFFER_BIT);
    
    // Carregar shaders
    const shaderProgram = initShaderProgram(gl);
    const programInfo = {
        program: shaderProgram,
        attribLocations: {
            vertexPosition: gl.getAttribLocation(shaderProgram, "aVertexPosition"),
        },
    };
    
    // Criar buffers
    const buffers = initBuffers(gl);
    
    // Desenhar cena
    drawScene(gl, programInfo, buffers);
}

function initBuffers(gl) {
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    
    
    const positions = [
        -0.5, 0.5,
        0.5, 0.5,
        0.0, -0.5,
        0.0, -0.5,
    ];
    // Triangulo de Cabeça para Baixo
    
    
    
    // const positions = [
    //     0.0, 0.8,
    //     -0.8, 0.0,
    //     0.8, 0.0,
    //     0.0, -0.8,
    // ];
    // Losango
   
   
    // const positions = [
    //     0.0, 0.8,
    //     0.8, 0.0,
    //     -0.8, 0.0,
    //     0.4, -0.8,
    //     -0.4, -0.8,
    // ];
    // Pentagono

    // const positions = [
    //     -0.4, 0.8,
    //     0.4, 0.8,
    //     -0.8, 0.0,
    //     0.8, 0.0,
    //     -0.4, -0.8,
    //     0.4, -0.8,
    // ];
    // Hexagono

    
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);
    return { position: positionBuffer };
}

function drawScene(gl, programInfo, buffers) {
    gl.clear(gl.COLOR_BUFFER_BIT);
    
    gl.useProgram(programInfo.program);
    gl.bindBuffer(gl.ARRAY_BUFFER, buffers.position);
    
    gl.vertexAttribPointer(
        programInfo.attribLocations.vertexPosition,
        2, gl.FLOAT, false, 0, 0);
    
    gl.enableVertexAttribArray(programInfo.attribLocations.vertexPosition);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 6);
}

window.onload = main;