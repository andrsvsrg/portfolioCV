import React, { useEffect, useRef } from 'react'

function BackgroundPopupCanvas() {
  const canvasRef = useRef(null);
  let animationFrameId = null;
  let points = []

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    function updateCanvasSize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    updateCanvasSize();

    function createPoint() {
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const angle = Math.random() * 2 * Math.PI;
      const radius = Math.random() * Math.min(centerX, centerY);

      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);

      const angleOffset = Math.random() * 2 * Math.PI;
      const speed = Math.random() * 2 + 0.2;

      return { x, y, angle: angle + angleOffset, speed };
    }



    function drawBackground() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#8a8a8a';

      for (let i = 0; i < points.length; i++) {
        const point = points[i];
        point.x += point.speed * Math.cos(point.angle);
        point.y += point.speed * Math.sin(point.angle);

        if (
          point.x < 0 ||
          point.x > canvas.width ||
          point.y < 0 ||
          point.y > canvas.height
        ) {
          points[i] = createPoint();

        }
        ctx.fillStyle = '#8a8a8a';


        ctx.beginPath();
        ctx.arc(point.x, point.y,  0.8 , 0, 2 * Math.PI);
        ctx.fill();

      }
    }



    points = [...new Array(300)].map(() => createPoint());

    function animate() {
      drawBackground();
      animationFrameId = requestAnimationFrame(animate);
    }

    animate();

    window.addEventListener('resize', updateCanvasSize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', updateCanvasSize);
    };
  }, []);



  return (
    <canvas
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: -1,
        width: '100%',
        height: '100%',
      }}
      ref={canvasRef}
      height={window.innerHeight}
      width={window.innerWidth}
    ></canvas>
  );
}

export default BackgroundPopupCanvas;


