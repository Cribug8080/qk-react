import React, { useEffect, useRef } from 'react'
import { Chart } from '@antv/g2'
import { randomExponential } from 'd3-random'

const random = randomExponential(5, [0, 1]);
const direction = () => Math.random() > 0.5 ? 1 : -1
const SAMPLE = 5000;
const HEART_COLOR = "#ff2121"  // 心的颜色，这个是中国红
const JITTER_RATIO = 0.2;
function point(angle) {
  const a = 6;
  const x = a * (16 * Math.sin(angle) ** 3);
  const y =
    a *
    (13 * Math.cos(angle) -
      5 * Math.cos(2 * angle) -
      2 * Math.cos(3 * angle) -
      Math.cos(4 * angle));
  return { x, y };
}
function getHeartPoints() {
  return new Array(SAMPLE).fill(0).map(() => point(Math.random() * 2 * Math.PI))
}
function Jitter() {
  return (I, mark) => {
    const { encode } = mark;
    const { x, y } = encode;
    const X = x.value;
    const Y = y.value;

    X.forEach((v, idx) => {
      X[idx] = v += (v * random() * JITTER_RATIO * direction())
    });

    Y.forEach((v, idx) => {
      Y[idx] = v += (v * random() * JITTER_RATIO * direction())
    });

    return [I, mark];
  };
}

export default function Heart() {
  const container = useRef();
  const chart = useRef();

  useEffect(() => {
    if (!chart.current) {
      chart.current = renderChart(container.current);
    }
  }, [])

  const renderChart = (container) => {
    const chart = new Chart({
      container: container,
      theme: 'classic',
    });
    chart
      .point()
      .data(getHeartPoints())
      .encode('x', 'x')
      .encode('y', 'y')
      .encode('shape', 'point')
      .encode('color', HEART_COLOR)
      .encode('size', 1)
      .transform({ type: Jitter })
      .axis(false);

    chart.render();
    return chart;
  }

  return (
    <div ref={container}></div>
  )
}
