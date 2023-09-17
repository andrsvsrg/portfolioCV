import React from 'react'
import styles from './styled.module.scss'
import backgroundTable from '../../assets/bg-big.jpg'
import {  useParallax } from 'react-scroll-parallax'

function InteractionTable({setTypeOfPopUpContent}) {
  const arrowP = useParallax({
    easing: 'easeOutQuad',
    translateY: [500, 0],
  });
  const headerP = useParallax({
    scale: [0, 1, 'easeInQuad'],
    translateY: [300, 0],
    easing: 'easeOutQuad',
  });

  const handler = (e) => {
    console.log(e.target.closest('g[id]').id)
    if(e.target.closest('g[id]').id) {
      setTypeOfPopUpContent(e.target.closest('g[id]').id)
      document.body.style.overflowY = 'hidden'
    }
  }

  return (

    <div className={styles.parallaxStyle}>


          <div className={styles.header}>
            <div ref={headerP.ref}>
              <h2>Interact with me</h2>
            </div>

            <div ref={arrowP.ref}>
              <svg width="12" height="31" viewBox="0 0 12 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id="Arrow 3" d="M5.46967 30.5303C5.76256 30.8232 6.23744 30.8232 6.53033 30.5303L11.3033 25.7574C11.5962 25.4645 11.5962 24.9896 11.3033 24.6967C11.0104 24.4038 10.5355 24.4038 10.2426 24.6967L6 28.9393L1.75736 24.6967C1.46447 24.4038 0.989593 24.4038 0.696699 24.6967C0.403806 24.9896 0.403806 25.4645 0.696699 25.7574L5.46967 30.5303ZM5.25 0L5.25 30H6.75L6.75 0L5.25 0Z" fill="white"/>
              </svg>
            </div>

          </div>



      <div className={styles.background}>
        <img src={backgroundTable} alt="backgroundTable"/>
      </div>

      <div className={styles.svg}>
        <svg width="2500" height="1250" viewBox="0 0 2500 1250" fill="none" xmlns="http://www.w3.org/2000/svg">

          <g id="projects" onClick={handler} className={styles.displayBlock} >
            <g className={styles.svgDisplay}>
              <path opacity="0.4" d="M1499.22 546.166C1514.9 546.166 1527.61 533.456 1527.61 517.778C1527.61 502.099 1514.9 489.389 1499.22 489.389C1483.54 489.389 1470.83 502.099 1470.83 517.778C1470.83 533.456 1483.54 546.166 1499.22 546.166Z" fill="#2D8DC9"/>
              <path d="M1500 529.338C1506.81 529.338 1512.34 523.814 1512.34 517C1512.34 510.186 1506.81 504.663 1500 504.663C1493.18 504.663 1487.66 510.186 1487.66 517C1487.66 523.814 1493.18 529.338 1500 529.338Z" fill="#2D8DC9"/>
            </g>
            <g className={styles.fillDisplay}>
              <path  d="M913.466 449.654C913.466 449.654 914.525 441.178 924.049 438H1575.95C1575.95 438 1585.48 442.238 1586.53 448.595L1595 887.227C1595 887.227 1593.94 901 1582.3 901H916.758C916.758 901 905 897.821 905 888.286L913.466 449.654Z" fill="white" fillOpacity="0.001"/>
              <path d="M913.466 449.654C913.466 449.654 914.525 441.178 924.049 438H1575.95C1575.95 438 1585.48 442.238 1586.53 448.595L1595 887.227C1595 887.227 1593.94 901 1582.3 901H916.758C916.758 901 905 897.821 905 888.286L913.466 449.654Z" strokeWidth="0"  strokeMiterlimit="10"/>
            </g>
            <foreignObject  x="1159" y="612" width="204" height="409" rx="24.5" fill="white" >
              <div className={styles.tooltipDisplay} >
                <span>My projects</span>
                <svg width="17" height="21" viewBox="0 0 17 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.7332 10.2667C15.6832 9.15839 14.2832 8.40006 12.8248 8.10839C12.1832 7.93339 11.5415 7.81673 10.8998 7.75839C12.5332 5.83339 12.2415 2.91673 10.3165 1.28339C8.3915 -0.349939 5.47484 -0.058273 3.8415 1.86673C2.20817 3.79173 2.49984 6.70839 4.42484 8.34173C4.77484 8.63339 5.12484 8.86673 5.47484 8.98339V10.2667L4.5415 9.39173C3.72484 8.57506 2.38317 8.57506 1.50817 9.39173C0.691503 10.2084 0.63317 11.4917 1.44984 12.3084L4.13317 15.4584C4.24984 16.2751 4.5415 17.0334 4.94984 17.7334C5.2415 18.2584 5.64984 18.7834 6.05817 19.1917V20.3001C6.05817 20.6501 6.2915 20.8834 6.6415 20.8834H14.5748C14.8665 20.8834 15.1582 20.5917 15.1582 20.3001V18.7834C16.2665 17.4417 16.8498 15.7501 16.8498 14.0584V10.6751C16.9082 10.4417 16.8498 10.3251 16.7332 10.2667ZM3.89984 4.78339C3.89984 2.85839 5.47484 1.34173 7.39984 1.40006C9.32484 1.40006 10.8415 2.97506 10.7832 4.90006C10.7832 5.95006 10.3165 6.88339 9.49984 7.52506V4.60839C9.47005 4.10286 9.24801 3.62787 8.87924 3.28079C8.51048 2.93372 8.02291 2.74085 7.5165 2.74173C6.4665 2.68339 5.53317 3.55839 5.53317 4.60839V7.64173C4.5415 7.05839 3.95817 5.95006 3.89984 4.78339ZM15.7415 14.0001C15.7998 15.5167 15.2748 16.9751 14.2832 18.1417C14.1665 18.2584 14.0498 18.3751 14.0498 18.5501V19.7751H7.28317V18.9584C7.28317 18.7834 7.1665 18.6084 7.04984 18.4917C6.6415 18.1417 6.2915 17.7334 5.99984 17.2084C5.64984 16.6251 5.4165 15.9251 5.29984 15.2251C5.29984 15.1084 5.2415 14.9917 5.18317 14.8751L2.38317 11.5501C2.20817 11.3751 2.0915 11.1417 2.0915 10.8501C2.0915 10.6167 2.20817 10.3251 2.38317 10.1501C2.7915 9.80006 3.37484 9.80006 3.78317 10.1501L5.47484 11.8417V13.5917L6.58317 13.0084V4.60839C6.6415 4.20006 6.9915 3.85006 7.45817 3.90839C7.8665 3.90839 8.27484 4.20006 8.27484 4.60839V11.3167L9.4415 11.5501V8.86673C9.49984 8.80839 9.55817 8.80839 9.6165 8.75006C10.0248 8.75006 10.4332 8.80839 10.8415 8.86673V11.8417L11.7748 12.0167V8.98339L12.4748 9.15839C12.7665 9.21673 13.0582 9.33339 13.3498 9.45006V12.3667L14.2832 12.5417V9.85839C14.8082 10.0917 15.2748 10.4417 15.6832 10.8501L15.7415 14.0001Z" fill="#5B5B5B"/>
                </svg>
              </div>
            </foreignObject>
          </g>

         <g id="skills" onClick={handler} className={styles.notepadBlock}>
            <g className={styles.svgNotepad}>
              <path  opacity="0.4" d="M939.222 1046.17C954.901 1046.17 967.611 1033.46 967.611 1017.78C967.611 1002.1 954.901 989.389 939.222 989.389C923.543 989.389 910.833 1002.1 910.833 1017.78C910.833 1033.46 923.543 1046.17 939.222 1046.17Z" fill="#2D8DC9"/>
              <path  d="M939.999 1029.34C946.812 1029.34 952.336 1023.81 952.336 1017C952.336 1010.19 946.812 1004.66 939.999 1004.66C933.185 1004.66 927.661 1010.19 927.661 1017C927.661 1023.81 933.185 1029.34 939.999 1029.34Z" fill="#2D8DC9"/>
            </g>
            <g className={styles.fillNotepad}>
              <path  d="M779.39 1012L727.168 1048.21L720 1058H985.721L1019 1012H779.39Z" fill="white" fillOpacity="0.001"/>
              <path d="M779.39 1012L727.168 1048.21L720 1058H985.721L1019 1012H779.39Z" strokeWidth="0"/>
            </g>
           <foreignObject  x="775" y="1013" width="178" height="49" rx="24.5" fill="white" >
             <div className={styles.tooltipNotepad} >
               <span>My skills</span>
               <svg width="17" height="21" viewBox="0 0 17 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M16.7332 10.2667C15.6832 9.15839 14.2832 8.40006 12.8248 8.10839C12.1832 7.93339 11.5415 7.81673 10.8998 7.75839C12.5332 5.83339 12.2415 2.91673 10.3165 1.28339C8.3915 -0.349939 5.47484 -0.058273 3.8415 1.86673C2.20817 3.79173 2.49984 6.70839 4.42484 8.34173C4.77484 8.63339 5.12484 8.86673 5.47484 8.98339V10.2667L4.5415 9.39173C3.72484 8.57506 2.38317 8.57506 1.50817 9.39173C0.691503 10.2084 0.63317 11.4917 1.44984 12.3084L4.13317 15.4584C4.24984 16.2751 4.5415 17.0334 4.94984 17.7334C5.2415 18.2584 5.64984 18.7834 6.05817 19.1917V20.3001C6.05817 20.6501 6.2915 20.8834 6.6415 20.8834H14.5748C14.8665 20.8834 15.1582 20.5917 15.1582 20.3001V18.7834C16.2665 17.4417 16.8498 15.7501 16.8498 14.0584V10.6751C16.9082 10.4417 16.8498 10.3251 16.7332 10.2667ZM3.89984 4.78339C3.89984 2.85839 5.47484 1.34173 7.39984 1.40006C9.32484 1.40006 10.8415 2.97506 10.7832 4.90006C10.7832 5.95006 10.3165 6.88339 9.49984 7.52506V4.60839C9.47005 4.10286 9.24801 3.62787 8.87924 3.28079C8.51048 2.93372 8.02291 2.74085 7.5165 2.74173C6.4665 2.68339 5.53317 3.55839 5.53317 4.60839V7.64173C4.5415 7.05839 3.95817 5.95006 3.89984 4.78339ZM15.7415 14.0001C15.7998 15.5167 15.2748 16.9751 14.2832 18.1417C14.1665 18.2584 14.0498 18.3751 14.0498 18.5501V19.7751H7.28317V18.9584C7.28317 18.7834 7.1665 18.6084 7.04984 18.4917C6.6415 18.1417 6.2915 17.7334 5.99984 17.2084C5.64984 16.6251 5.4165 15.9251 5.29984 15.2251C5.29984 15.1084 5.2415 14.9917 5.18317 14.8751L2.38317 11.5501C2.20817 11.3751 2.0915 11.1417 2.0915 10.8501C2.0915 10.6167 2.20817 10.3251 2.38317 10.1501C2.7915 9.80006 3.37484 9.80006 3.78317 10.1501L5.47484 11.8417V13.5917L6.58317 13.0084V4.60839C6.6415 4.20006 6.9915 3.85006 7.45817 3.90839C7.8665 3.90839 8.27484 4.20006 8.27484 4.60839V11.3167L9.4415 11.5501V8.86673C9.49984 8.80839 9.55817 8.80839 9.6165 8.75006C10.0248 8.75006 10.4332 8.80839 10.8415 8.86673V11.8417L11.7748 12.0167V8.98339L12.4748 9.15839C12.7665 9.21673 13.0582 9.33339 13.3498 9.45006V12.3667L14.2832 12.5417V9.85839C14.8082 10.0917 15.2748 10.4417 15.6832 10.8501L15.7415 14.0001Z" fill="#5B5B5B"/>
               </svg>
             </div>
           </foreignObject>
          </g>

          <g id="about" onClick={handler} className={styles.cameraBlock}>
            <g className={styles.svgCamera}>
              <path opacity="0.4" d="M1828.22 1058.17C1843.9 1058.17 1856.61 1045.46 1856.61 1029.78C1856.61 1014.1 1843.9 1001.39 1828.22 1001.39C1812.54 1001.39 1799.83 1014.1 1799.83 1029.78C1799.83 1045.46 1812.54 1058.17 1828.22 1058.17Z" fill="#2D8DC9"/>
              <path d="M1829 1041.34C1835.81 1041.34 1841.34 1035.81 1841.34 1029C1841.34 1022.19 1835.81 1016.66 1829 1016.66C1822.18 1016.66 1816.66 1022.19 1816.66 1029C1816.66 1035.81 1822.18 1041.34 1829 1041.34Z" fill="#2D8DC9"/>
            </g>
            <g className={styles.fillCamera}>
              <path  d="M1683 1045.2V934.241V933.022H1689.05V928.754H1692.68V923.268L1695.11 919L1722.34 920.219V928.754H1726.58L1729 920.219H1741.71V923.268L1768.34 924.487V933.022H1776.21V924.487H1794.37V928.754H1798V924.487L1816.76 925.706V934.241H1825.24L1826.45 926.925H1854.29V936.07L1867 937.289V1056.78L1854.29 1058H1835.53L1683 1045.2Z" fill="white" fillOpacity="0.001"/>
              <path d="M1683 1045.2V934.241V933.022H1689.05V928.754H1692.68V923.268L1695.11 919L1722.34 920.219V928.754H1726.58L1729 920.219H1741.71V923.268L1768.34 924.487V933.022H1776.21V924.487H1794.37V928.754H1798V924.487L1816.76 925.706V934.241H1825.24L1826.45 926.925H1854.29V936.07L1867 937.289V1056.78L1854.29 1058H1835.53L1683 1045.2Z"  strokeWidth="0"/>
            </g>
            <foreignObject  x="1679" y="972" width="192" height="49" rx="24.5" fill="white" >
              <div className={styles.tooltipCamera} >
                <span>About me</span>
                <svg width="17" height="21" viewBox="0 0 17 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.7332 10.2667C15.6832 9.15839 14.2832 8.40006 12.8248 8.10839C12.1832 7.93339 11.5415 7.81673 10.8998 7.75839C12.5332 5.83339 12.2415 2.91673 10.3165 1.28339C8.3915 -0.349939 5.47484 -0.058273 3.8415 1.86673C2.20817 3.79173 2.49984 6.70839 4.42484 8.34173C4.77484 8.63339 5.12484 8.86673 5.47484 8.98339V10.2667L4.5415 9.39173C3.72484 8.57506 2.38317 8.57506 1.50817 9.39173C0.691503 10.2084 0.63317 11.4917 1.44984 12.3084L4.13317 15.4584C4.24984 16.2751 4.5415 17.0334 4.94984 17.7334C5.2415 18.2584 5.64984 18.7834 6.05817 19.1917V20.3001C6.05817 20.6501 6.2915 20.8834 6.6415 20.8834H14.5748C14.8665 20.8834 15.1582 20.5917 15.1582 20.3001V18.7834C16.2665 17.4417 16.8498 15.7501 16.8498 14.0584V10.6751C16.9082 10.4417 16.8498 10.3251 16.7332 10.2667ZM3.89984 4.78339C3.89984 2.85839 5.47484 1.34173 7.39984 1.40006C9.32484 1.40006 10.8415 2.97506 10.7832 4.90006C10.7832 5.95006 10.3165 6.88339 9.49984 7.52506V4.60839C9.47005 4.10286 9.24801 3.62787 8.87924 3.28079C8.51048 2.93372 8.02291 2.74085 7.5165 2.74173C6.4665 2.68339 5.53317 3.55839 5.53317 4.60839V7.64173C4.5415 7.05839 3.95817 5.95006 3.89984 4.78339ZM15.7415 14.0001C15.7998 15.5167 15.2748 16.9751 14.2832 18.1417C14.1665 18.2584 14.0498 18.3751 14.0498 18.5501V19.7751H7.28317V18.9584C7.28317 18.7834 7.1665 18.6084 7.04984 18.4917C6.6415 18.1417 6.2915 17.7334 5.99984 17.2084C5.64984 16.6251 5.4165 15.9251 5.29984 15.2251C5.29984 15.1084 5.2415 14.9917 5.18317 14.8751L2.38317 11.5501C2.20817 11.3751 2.0915 11.1417 2.0915 10.8501C2.0915 10.6167 2.20817 10.3251 2.38317 10.1501C2.7915 9.80006 3.37484 9.80006 3.78317 10.1501L5.47484 11.8417V13.5917L6.58317 13.0084V4.60839C6.6415 4.20006 6.9915 3.85006 7.45817 3.90839C7.8665 3.90839 8.27484 4.20006 8.27484 4.60839V11.3167L9.4415 11.5501V8.86673C9.49984 8.80839 9.55817 8.80839 9.6165 8.75006C10.0248 8.75006 10.4332 8.80839 10.8415 8.86673V11.8417L11.7748 12.0167V8.98339L12.4748 9.15839C12.7665 9.21673 13.0582 9.33339 13.3498 9.45006V12.3667L14.2832 12.5417V9.85839C14.8082 10.0917 15.2748 10.4417 15.6832 10.8501L15.7415 14.0001Z" fill="#5B5B5B"/>
                </svg>
              </div>
            </foreignObject>
          </g>
        </svg>

      </div>


    </div>

  );
}

export default InteractionTable;