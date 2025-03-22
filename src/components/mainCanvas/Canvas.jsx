import React, { useEffect, useRef } from "react";

function CanvasAnimation() {
  const canvasRef = useRef(null);
  const customPoints = useRef([]);
  const points = useRef([]);
  let animationFrameId = null;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
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
      const speed = Math.random() * 1.2 + 0.3;

      return { x, y, angle: angle + angleOffset, speed };
    }

    function drawPoint(point, i, isCustom) {
      point.x += point.speed * Math.cos(point.angle);
      point.y += point.speed * Math.sin(point.angle);

      if (
        point.x < 0 ||
        point.x > canvas.width ||
        point.y < 0 ||
        point.y > canvas.height
      ) {
        if (!isCustom) {
          points.current[i] = createPoint();
        } else {
          customPoints.current.splice(i, 1);
        }
        return;
      }

      // Add glow effect
      ctx.shadowBlur = isCustom ? 15 : 8;
      ctx.shadowColor = isCustom
        ? "rgba(255, 193, 7, 0.8)"
        : "rgba(33, 150, 243, 0.8)";

      if (isCustom) {
        ctx.fillStyle = "rgba(255, 193, 7, 0.9)";
        ctx.beginPath();
        ctx.arc(point.x, point.y, 2.5, 0, 2 * Math.PI);
        ctx.fill();
      } else {
        ctx.fillStyle = "rgba(33, 150, 243, 0.7)";
        ctx.beginPath();
        ctx.arc(point.x, point.y, 2, 0, 2 * Math.PI);
        ctx.fill();
      }
    }

    function drawConnections(points, customPoints) {
      const maxDistance = 120;
      const allPoints = [...points, ...customPoints];

      ctx.beginPath();
      for (let i = 0; i < allPoints.length; i++) {
        const point = allPoints[i];
        let connectionsCount = 0;

        for (let j = i + 1; j < allPoints.length && connectionsCount < 3; j++) {
          const otherPoint = allPoints[j];
          const dx = point.x - otherPoint.x;
          const dy = point.y - otherPoint.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            const opacity = 0.5 * (1 - distance / maxDistance);
            const isCustomConnection = customPoints.includes(point) || customPoints.includes(otherPoint);
            ctx.strokeStyle = isCustomConnection
              ? `rgba(255, 193, 7, ${opacity})`
              : `rgba(33, 150, 243, ${opacity})`;
            ctx.lineWidth = 0.4;
            ctx.moveTo(point.x, point.y);
            ctx.lineTo(otherPoint.x, otherPoint.y);
            ctx.stroke();
            ctx.beginPath();
            connectionsCount++;
          }
        }
      }
    }

    function drawBackground() {
      ctx.globalCompositeOperation = 'source-over';
      ctx.shadowBlur = 0;
      ctx.shadowColor = 'transparent';
      ctx.fillStyle = "rgb(18, 18, 18)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "rgba(18, 18, 18, 0.85)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      drawConnections(points.current, customPoints.current);

      for (let i = 0; i < points.current.length; i++) {
        drawPoint(points.current[i], i, false);
      }

      for (let i = 0; i < customPoints.current.length; i++) {
        drawPoint(customPoints.current[i], i, true);
      }

      ctx.shadowBlur = 0;
      ctx.shadowColor = 'transparent';
    }

    for (let i = 0; i < 90; i++) {
      points.current.push(createPoint());
    }

    function animate() {
      drawBackground();
      animationFrameId = requestAnimationFrame(animate);
    }

    animate();

    window.addEventListener("resize", updateCanvasSize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", updateCanvasSize);
    };
  }, []);

  const handleCanvasClick = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    for (let i = 0; i < 3; i++) {
      const angle = Math.random() * 2 * Math.PI;
      const speed = Math.random() * 1.2 + 0.3;
      const offset = Math.random() * 20;

      customPoints.current.push({
        x: x + Math.cos(angle) * offset,
        y: y + Math.sin(angle) * offset,
        angle,
        speed,
      });
    }
  };

  return (
    <canvas
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        cursor: "pointer",
      }}
      ref={canvasRef}
      onClick={handleCanvasClick}
    ></canvas>
  );
}

export default CanvasAnimation;
