import React, { useEffect, useRef } from "react";

function CanvasAnimation() {
  const canvasRef = useRef(null);
  const customPoints = [];
  let animationFrameId = null;
  const points = [];

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
      const speed = Math.random() * 2 + 0.2;

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
          points[i] = createPoint();
        } else {
          customPoints.splice(i, 1);
        }
      }

      if (isCustom) {
        ctx.fillStyle = "#C9692D";
      } else {
        ctx.fillStyle = "#8a8a8a";
      }

      ctx.beginPath();
      ctx.arc(point.x, point.y, isCustom ? 3 : 0.8, 0, 2 * Math.PI);
      ctx.fill();
    }

    function drawBackground() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#8a8a8a";

      // console.log(newPoint)
      for (let i = 0; i < points.length; i++) {
        const point = points[i];
        drawPoint(point, i, false);
        if (customPoints[i]) {
          const point = customPoints[i];
          drawPoint(point, i, true);
        }
      }
    }

    for (let i = 0; i < 300; i++) {
      points.push(createPoint());
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

    const angle = Math.random() * 2 * Math.PI;
    const speed = Math.random() * 2 + 0.2;

    const newPoint = {
      x,
      y,
      angle,
      speed,
    };

    customPoints.push(newPoint);
  };

  return (
    <canvas
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 5,
        cursor: "pointer",
      }}
      ref={canvasRef}
      height={window.innerHeight}
      width={window.innerWidth}
      onClick={handleCanvasClick}
    ></canvas>
  );
}

export default CanvasAnimation;

// useEffect(() => {
//   const canvas = canvasRef.current;
//   const ctx = canvas.getContext('2d');
//   canvas.width = window.innerWidth;
//   canvas.height = window.innerHeight;
//
//   function createLine() {
//     const centerX = canvas.width / 2;
//     const centerY = canvas.height / 2;
//     const angle = Math.random() * 2 * Math.PI; // Случайный угол
//     const radius = Math.random() * Math.min(centerX, centerY); // Случайный радиус от центра
//
//     const x1 = centerX + radius * Math.cos(angle);
//     const y1 = centerY + radius * Math.sin(angle);
//
//     const angleOffset = Math.random() * 2 * Math.PI; // Случайное смещение угла для направления движения
//     const speed = Math.random() * 2 + 1; // Установите скорость движения линии
//
//     return { x1, y1, angle: angle + angleOffset, speed };
//   }
//
//   function drawBackground() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//
//     // Здесь вы можете настроить стиль и цвет линий
//     ctx.strokeStyle = '#ffffff';
//     ctx.lineWidth = 1;
//
//     // Обновляем положение линий и рисуем их
//     for (let i = 0; i < lines.length; i++) {
//       const line = lines[i];
//       line.x1 += line.speed * Math.cos(line.angle);
//       line.y1 += line.speed * Math.sin(line.angle);
//
//       // Если линия вышла за пределы канваса, создаем новую
//       if (
//         line.x1 < 0 ||
//         line.x1 > canvas.width ||
//         line.y1 < 0 ||
//         line.y1 > canvas.height
//       ) {
//         lines[i] = createLine();
//       }
//
//       ctx.beginPath();
//       ctx.moveTo(line.x1, line.y1);
//       ctx.lineTo(line.x1 + 3, line.y1); // Добавим небольшую длину линии
//       ctx.stroke();
//     }
//   }
//
//   // Создаем начальные линии
//   for (let i = 0; i < 200; i++) {
//     lines.push(createLine());
//   }
//
//   function animate() {
//     drawBackground();
//     animationFrameId = requestAnimationFrame(animate);
//   }
//
//   animate();
//
//   return () => {
//     cancelAnimationFrame(animationFrameId);
//   };
// }, []);

// useEffect(() => {
//   const canvas = canvasRef.current;
//   const ctx = canvas.getContext('2d');
//   const cw = canvas.width;
//   const ch = canvas.height;
//   const centerX = cw / 2 ;
//   const centerY = ch / 2 - 200;
//   const centerX2 = cw / 2 ;
//   const centerY2 = ch / 2 + 300;
//   // const centerXAll = [...new Array(3)].map(() => )
//   const ellipseWidth = 180; // Ширина эллипса
//   const ellipseHeight = 70; // Высота эллипса
//   const pointSize = 5; // Размер точки
//   const rotationSpeed = 0.008; // Скорость вращения
//
//   let angle1 = 0;
//   let angle2 = Math.PI / 2; // Начальный угол для второй точки
//
//   function drawEllipse(centerX, centerY) {
//
//
//     ctx.strokeStyle = '#00F'; // Синий цвет
//     ctx.lineWidth = 2;
//     ctx.beginPath();
//     ctx.ellipse(centerX, centerY, ellipseWidth / 2, ellipseHeight / 2, 0, 0, 2 * Math.PI);
//     ctx.stroke();
//   }
//
//   function drawRotatingPoint1(centerX, centerY ) {
//     const x = centerX + ellipseWidth / 2 * Math.cos(angle1);
//     const y = centerY - ellipseHeight / 2 * Math.sin(angle1);
//
//     ctx.fillStyle = '#F00'; // Красный цвет
//     ctx.beginPath();
//     ctx.arc(x, y, pointSize, 0, 2 * Math.PI);
//     ctx.fill();
//   }
//
//   function drawRotatingPoint2(centerX, centerY) {
//     const x = centerX + ellipseWidth / 2 * Math.cos(angle2);
//     const y = centerY - ellipseHeight / 2 * Math.sin(angle2);
//
//     ctx.fillStyle = '#0F0'; // Зеленый цвет
//     ctx.beginPath();
//     ctx.arc(x, y, pointSize, 0, 2 * Math.PI);
//     ctx.fill();
//   }
//
//   function drawLine(centerX, centerY, centerX2, centerY2) {
//     const x1 = centerX + ellipseWidth / 2 * Math.cos(angle1);
//     const y1 = centerY - ellipseHeight / 2 * Math.sin(angle1);
//     const x2 = centerX2 + ellipseWidth / 2 * Math.cos(angle2);
//     const y2 = centerY2 - ellipseHeight / 2 * Math.sin(angle2);
//     ctx.beginPath();
//     ctx.moveTo(x1, y1);
//     ctx.lineTo(x2, y2);
//     ctx.lineWidth = 1; // Толщина линии
//     ctx.strokeStyle = 'rgba(189, 195, 199, 0.65)';
//     ctx.stroke();
//   }
//
//   function animate() {
//     ctx.clearRect(0, 0, cw, ch);
//
//     drawEllipse(centerX, centerY);
//     drawEllipse(centerX2, centerY2);
//     drawRotatingPoint1(centerX, centerY);
//     drawRotatingPoint2(centerX, centerY);
//     drawRotatingPoint1(centerX2, centerY2);
//     drawRotatingPoint2(centerX2, centerY2);
//     drawLine(centerX, centerY, centerX2, centerY2)
//     drawLine(centerX2, centerY2, centerX, centerY)
//     angle1 += rotationSpeed;
//     angle2 += rotationSpeed;
//
//     requestAnimationFrame(animate);
//   }
//
//   animate();
// }, []);

// useEffect(() => {
//   const canvas = canvasRef.current;
//   const ctx = canvas.getContext('2d');
//   const cw = canvas.width;
//   const ch = canvas.height;
//
//   let lines = [];
//
//   // Создаем линии и точки в ряд
//   const lineCount = 10;
//   const lineHeight = ch / lineCount;
//   const pointCount = 10;
//   const pointSpacing = cw / pointCount;
//
//   for (let i = 0; i < lineCount; i++) {
//     const y = (i + 0.5) * lineHeight;
//
//     for (let j = 0; j < pointCount; j++) {
//       const x1 = j * pointSpacing;
//       const x2 = (j + 1) * pointSpacing;
//       const radius = 5; // Радиус точки
//
//       lines.push({
//         x1,
//         y1: y,
//         x2,
//         y2: y,
//         radius,
//         angle: 0,
//         speed: 0.01 * (i/2 + 0.2), // Разная скорость для разных линий
//       });
//     }
//   }
//
//   let requestId;
//
//   function drawLine(x1, y1, x2, y2) {
//     ctx.beginPath();
//     ctx.moveTo(x1, y1);
//     ctx.lineTo(x2, y2);
//     ctx.lineWidth = 2; // Толщина линии
//     ctx.strokeStyle = 'rgba(189, 195, 199, 0.65)';
//     ctx.stroke();
//   }
//
//   function drawPoint(x, y, r) {
//     ctx.beginPath();
//     ctx.arc(x, y, r, 0, 2 * Math.PI);
//     ctx.fillStyle = '#ECC13E';
//     ctx.fill();
//   }
//
//   function animate() {
//     ctx.clearRect(0, 0, cw, ch);
//
//     for (const line of lines) {
//       const { x1, y1, x2, y2, radius, angle, speed } = line;
//
//       // Изменяем угол для создания анимации
//       line.angle += speed;
//
//       // Вычисляем новые координаты точек
//       const newX1 = x1 + Math.cos(angle) * 50;
//       const newY1 = y1 + Math.sin(angle) * 50;
//       const newX2 = x2 + Math.cos(angle) * 50;
//       const newY2 = y2 + Math.sin(angle) * 50;
//
//       drawLine(newX1, newY1, newX2, newY2);
//       drawPoint(newX1, newY1, radius);
//       drawPoint(newX2, newY2, radius);
//     }
//
//     requestId = requestAnimationFrame(animate);
//   }
//
//   animate();
//
//   return () => {
//     cancelAnimationFrame(requestId);
//   };
// }, []);

// useEffect(() => {
//   const canvas = canvasRef.current;
//   const ctx = canvas.getContext('2d');
//   const cw = canvas.width;
//   const ch = canvas.height;
//   console.log( (cw / 15) )
//   const xAll = [...new Array(15)].map((e, i) => {
//     console.log(i * (cw / 15))
//     return i * (cw / 15)
//   })
//   const yAll = [...new Array(15)].map((e, i) => Math.random() * 100 )
//   const centerX = cw / 2;
//   const centerY = ch / 2;
//   const ellipseWidth = 80; // Ширина эллипса
//   const ellipseHeight = 30; // Высота эллипса
//   const pointSize = 3; // Размер точки
//   const rotationSpeed = 0.02; // Скорость вращения
//
//   let angle = 0;
//
//
//   function drawRotatingPoint(x,y) {
//
//
//     ctx.fillStyle = '#F00'; // Красный цвет
//     ctx.beginPath();
//     ctx.arc(x, y, pointSize, 0, 2 * Math.PI);
//     ctx.fill();
//   }
//
//   function drawLine(x1, y1, x2, y2) {
//     ctx.beginPath();
//     ctx.moveTo(x1, y1);
//     ctx.lineTo(x2, y2);
//     ctx.lineWidth = 1; // Толщина линии
//     ctx.strokeStyle = 'rgba(189, 195, 199, 0.65)';
//     ctx.stroke();
//   }
//
//   function drawLines() {
//     xAll.forEach((x, i) => {
//       const x1 = x;
//       const y1 = yAll[i];
//       const x2 = Math.random() * cw;
//       const y2 = Math.random() * ch;
//
//       drawLine(x1, y1, x2, y2);
//     })
//
//
//   }
//
//   function animate() {
//     ctx.clearRect(0, 0, cw, ch);
//     for(let i = 0; i<= xAll.length; i++) {
//       const x = xAll[i] +( Math.random() * 0.5) + ellipseWidth / 2 * Math.cos(angle);
//       const y = yAll[i] - ellipseHeight / 2 * Math.sin(angle);
//       const x2 = xAll[i] +( Math.random() * 0.2) + ellipseWidth / 2 * Math.cos(-angle);
//       const y2 = yAll[i] + 400 - ellipseHeight / 2 * Math.sin(-angle);
//       drawLine(x, y, x2, y2)
//       drawRotatingPoint(x, y);
//       drawRotatingPoint(x2, y2);
//     }
//
//
//     angle += rotationSpeed;
//
//     requestAnimationFrame(animate);
//   }
//
//   animate();
// }, []);

// useEffect(() => {
//   const canvas = canvasRef.current;
//   const ctx = canvas.getContext('2d');
//   const cw = canvas.width;
//   const ch = canvas.height;
//   const centerX = cw / 2;
//   const centerY = ch / 2;
//   const lineHeight = ch * 0.7; // Высота линии
//   const lineWidth = 1.5; // Ширина линии
//
//   function drawLine(x1,y1,x2, y2) {
//     ctx.strokeStyle = '#a4a4a4'; // Синий цвет
//     ctx.lineWidth = lineWidth;
//
//     ctx.beginPath();
//     ctx.moveTo(x1, y1);
//     ctx.lineTo(x2, y2);
//     ctx.stroke();
//   }
//
//   function animate() {
//     ctx.clearRect(0, 0, cw, ch);
//     drawLine(50,50,100,100)
//
//
//     requestAnimationFrame(animate);
//   }
//
//   animate();
// }, []);

// useEffect(() => {
//   const canvas = canvasRef.current;
//   const ctx = canvas.getContext('2d');
//   const cw = canvas.width;
//   const ch = canvas.height;
//
//   const sphereRadius = 80;
//   const spherePointCount = 20; // Уменьшили количество точек на сфере
//   const points = [];
//
//   for (let i = 0; i < spherePointCount; i++) {
//     const angle1 = (i / spherePointCount) * Math.PI * 2;
//     for (let j = 0; j < spherePointCount; j++) {
//       const angle2 = (j / spherePointCount) * Math.PI;
//
//       const x = sphereRadius * Math.sin(angle1) * Math.sin(angle2) + cw / 2;
//       const y = sphereRadius * Math.cos(angle2) + ch / 2;
//       const radius = 2; // Радиус точки
//
//       points.push({
//         x,
//         y,
//         radius,
//         angle1,
//         angle2,
//       });
//     }
//   }
//
//
//   let requestId;
//
//   function drawPoint(x, y, r) {
//     ctx.beginPath();
//     ctx.arc(x, y, r, 0, 2 * Math.PI);
//     ctx.fillStyle = '#ECC13E';
//     ctx.fill();
//   }
//
//   function animate() {
//     ctx.clearRect(0, 0, cw, ch);
//     for (const point of points) {
//         const { x, y, radius, angle1, angle2 } = point;
//
//         point.angle1 += 0.005;
//         point.angle2 += 0.002;
//         const newX = sphereRadius * Math.sin(angle1) * Math.sin(angle2) + cw / 2;
//         const newY = sphereRadius * Math.cos(angle2) + ch / 2;
//
//         drawPoint(newX, newY, radius);
//     }
//
//     requestId = requestAnimationFrame(animate);
//   }
//   animate();
//
//   return () => {
//     cancelAnimationFrame(requestId);
//   };
// }, []);
