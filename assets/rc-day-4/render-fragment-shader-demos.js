/**
 * Provides requestAnimationFrame in a cross browser way.
 * paulirish.com/2011/requestanimationframe-for-smart-animating/
 */
window.requestAnimationFrame = window.requestAnimationFrame || (function () {
  return  window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.oRequestAnimationFrame ||
          window.msRequestAnimationFrame ||
          function (callback) {
            window.setTimeout( callback, 1000 / 60 );
          };
})();

[1, 2, 3, 4, 5, 6].forEach(function (i) {
  var gl = twgl.getWebGLContext(document.getElementById(['demo', i, 'canvas'].join('-')));
  var programInfo = twgl.createProgramInfo(gl, ['vertex-shader', ['demo', i, 'fragment-shader'].join('-')]);

  var arrays = {
    position: {
      numComponents: 3,
      data: [
        /* triangle covering lower left half of the canvas */
        -1, -1, 0,
         1, -1, 0,
        -1, 1, 0,
        /* triangle covering upper right half of canvas */
        -1, 1, 0,
         1, -1, 0,
         1, 1, 0
      ]
    }
  };
  var bufferInfo = twgl.createBufferInfoFromArrays(gl, arrays);

  function render(time) {
    twgl.resizeCanvasToDisplaySize(gl.canvas);
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

    var uniforms = {
      time: time * 0.001,
      resolution: [gl.canvas.width, gl.canvas.height],
    };

    gl.useProgram(programInfo.program);
    twgl.setBuffersAndAttributes(gl, programInfo, bufferInfo);
    twgl.setUniforms(programInfo, uniforms);
    twgl.drawBufferInfo(gl, gl.TRIANGLES, bufferInfo);

    window.requestAnimationFrame(render);
  }
  window.requestAnimationFrame(render);
});
