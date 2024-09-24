const ProducerIcon = ({ color = 'black', size = 24 }) => (
  // <svg
  //   fill={'yellow'}
  //   height={size}
  //   style={{ backgroundColor: color, borderRadius: 4, padding: 2 }}
  //   version="1.1"
  //   viewBox="0 0 2048 2048"
  //   width={size}
  //   xmlns="http://www.w3.org/2000/svg"
  // >
  //   <path
  //     d="m0 0h54l38 3 38 5 35 7 31 8 29 9 27 10 26 11 33 16 20 11 22 13 21 14 17 12 18 14 11 9 14 12 12 11 17 16 8 8 7 8 7 7 9 11 9 10 13 17 10 13 22 33 15 25 8 14 8 16 16 35 10 26 12 36 9 34 7 35 5 34 3 33 1 22v33l-2 34-3 29-5 32-7 34-10 37-10 29-11 28-13 29-10 19-13 24-12 19-14 21-10 14-13 17-9 11-12 14-12 13-7 8h-2l-2 4-8 8-8 7-9 9-11 9-11 10-30 23-19 13-17 11-15 9-16 9-23 12-25 12-30 12-35 12-37 10-34 7-33 5-28 3-36 2h-30l-23-1-40-4-37-6-39-9-28-8-30-10-34-14-28-13-26-14-17-10-22-14-28-20-14-11-11-9-14-12-15-14-13-12-16-17-12-13-9-11-13-16-12-16-14-20-14-22-15-26-14-27-14-31-11-29-10-30-9-34-6-29-6-39-3-32-1-16v-54l3-39 5-35 7-36 10-38 12-36 12-30 12-26 12-24 11-19 11-18 10-15 12-17 8-11 12-15 9-11 8-9 7-9h2l2-4 33-33 8-7 13-11 12-10 17-13 18-13 12-8 17-11 26-15 31-16 30-13 26-10 34-11 27-7 27-6 29-5 34-4zm3 42-30 2-34 4-28 5-33 8-27 8-29 10-31 13-40 20-17 10-18 11-19 13-19 14-16 13-14 12-12 11-8 8-2 1v2l-4 2-4 4v2h-2l-7 8-9 9-9 11-8 9-13 17-12 16-10 15-12 19-9 15-6 11-14 28-12 28-9 24-7 21-8 28-8 37-4 24-4 37-1 22v43l2 31 4 33 4 23 8 36 9 30 7 21 12 30 12 26 10 19 6 11 9 16 13 20 14 20 13 17 9 11 13 15 12 13 7 7 1 2h2v2h2v2l8 7 11 11 8 7 13 11 17 13 13 10 27 18 20 12 18 10 21 11 29 13 35 13 26 8 27 7 24 5 32 5 40 4 20 1h29l34-2 36-4 38-7 32-8 35-11 31-12 25-11 28-14 27-16 19-12 17-12 16-12 11-9 28-24 33-33 9-11 9-10 8-10 15-20 7-10 10-15 13-21 13-23 11-23 10-22 10-26 10-30 7-26 7-31 5-32 3-27 2-42v-15l-1-27-3-34-6-39-7-31-9-33-12-34-10-24-11-24-13-25-13-22-14-22-11-15-12-16-11-13-9-11-12-13-7-7-7-8-16-15-13-12-11-9-16-13-18-13-13-9-22-14-26-15-32-16-29-12-27-10-33-10-30-7-26-5-30-4-39-3z"
  //     transform="translate(997,409)"
  //   />
  //   <path
  //     d="m0 0 11 2 8 7 3 5 1 4-1 13-26 157-6 34-7 43-17 102-1 2h225l9 4 6 7 2 5v10l-12 25-144 288-8 17-9 17-10 21-10 19-10 21-10 19-10 21-10 19-10 21-10 19-10 21-7 12-6 6-5 2h-12l-7-4-6-7-2-5v-10l56-336v-6h-222l-7-2-7-6-4-8v-10l5-12 263-526 6-7 6-3zm-43 158 1 2zm-1 2-12 23-174 348v2l217 1 8 5h2l2 5 2 4v12l-7 43-13 78-16 97v6l3-4 12-24 10-19 8-16 10-21 9-17 11-23 9-17 48-96 11-23 9-17 11-23 9-17 8-16 12-25 7-14v-1l-215-1-8-3-7-8-2-10 7-44 25-149 5-30v-6z"
  //     transform="translate(1063,552)"
  //   />
  //   <path
  //     d="m0 0h11l8 4 6 7 2 6v168l-2 9-7 8-8 3h-9l-8-4-6-7-2-5-1-26v-47l1-100 3-7 8-7z"
  //     transform="translate(1018,1679)"
  //   />
  //   <path
  //     d="m0 0h10l8 4 6 7 2 5v11l-6 9-5 4-21 12-26 15-24 14-23 13-27 16-19 11-7 3h-9l-7-3-5-4-5-10v-7l3-8 5-6 48-28 97-56z"
  //     transform="translate(1746,583)"
  //   />
  //   <path
  //     d="m0 0h11l8 4 6 7 2 6v8l-5 10-10 7-25 14-22 13-16 9-24 14-49 28-7 3-6 1-10-3-7-6-3-7v-11l4-8 8-6 26-15 24-14 52-30 24-14 16-9z"
  //     transform="translate(433,1341)"
  //   />
  //   <path
  //     d="m0 0h7l10 4 5 6 3 6v10l-8 16-14 24-11 19-13 22-6 11-30 52-7 9-7 4-3 1h-7l-8-3-6-5-4-9v-7l4-10 13-23 16-27 13-23 15-26 12-21 13-22 6-5z"
  //     transform="translate(682,1588)"
  //   />
  //   <path
  //     d="m0 0h9l16 8 26 15 28 16 24 14 28 16 26 15 5 4 5 8 1 4v7l-4 8-5 5-5 3-4 1h-8l-16-8-24-14-26-15-24-14-26-15-28-16-9-7-5-8v-11l4-8 7-6z"
  //     transform="translate(292,583)"
  //   />
  //   <path
  //     d="m0 0h11l8 4 5 6 3 8-1 9-7 14-14 24-6 10-6 11-30 52-11 19-11 18-5 5-6 3-7 1-10-3-5-4-4-6-1-4v-9l8-16 15-26 14-24 13-23 10-17 16-28 9-15 2-3h2v-2z"
  //     transform="translate(1438,276)"
  //   />
  //   <path
  //     d="m0 0h8l10 5 8 11 15 27 11 19 14 24 16 28 10 17 13 23 2 6-1 10-6 9-7 4-4 1h-7l-7-3-6-5-8-13-16-28-15-26-14-24-16-28-11-19-6-12-1-5 3-10 7-8z"
  //     transform="translate(1358,1588)"
  //   />
  //   <path
  //     d="m0 0h11l8 4 7 8 14 25 14 24 15 26 14 24 24 42 2 5v9l-5 10-5 4-9 3-9-1-6-4-7-8-9-16-14-24-13-23-14-24-30-52-3-7v-9l4-8 7-6z"
  //     transform="translate(598,276)"
  //   />
  //   <path
  //     d="m0 0h174l8 4 6 7 2 6v8l-5 10-6 5-10 2h-166l-9-3-8-9-2-7 1-9 5-8 7-5z"
  //     transform="translate(179 1e3)"
  //   />
  //   <path
  //     d="m0 0h174l8 4 5 5 3 6 1 6-2 8-4 6-6 5-10 2h-167l-7-3-5-4-5-9v-10l3-7 5-5z"
  //     transform="translate(1694 1e3)"
  //   />
  //   <path
  //     d="m0 0h11l16 8 104 60 24 14 9 7 5 8v11l-6 10-6 4-3 1h-12l-16-8-27-16-28-16-24-14-52-30-8-8-2-6v-8l4-9 7-6z"
  //     transform="translate(1603,1341)"
  //   />
  //   <path
  //     d="m0 0 9 1 6 3 5 5 3 5 1 5v166l-2 9-6 8-7 3h-13l-7-4-4-5-3-7v-173l4-8 7-6z"
  //     transform="translate(1021,163)"
  //   />
  //   <path
  //     d="m0 0h11l8 4 6 7 2 5v9l-7 27-19 71-5 10-6 5-5 2h-11l-8-4-5-6-3-8 1-9 24-90 4-12 4-6z"
  //     transform="translate(843,1656)"
  //   />
  //   <path
  //     d="m0 0h11l8 4 6 7 2 5v10l-5 9-74 74-10 5h-10l-9-5-5-7-2-6 1-9 5-9h2l2-4h2v-2l8-7 11-11 1-2h2v-2h2v-2l8-7 2-3h2l2-4h2l2-4h2l2-4h2l2-4h2l2-4h2l2-4 8-8z"
  //     transform="translate(540,1481)"
  //   />
  //   <path
  //     d="m0 0 10 1 7 4 5 6 2 4v12l-12 45-14 52-5 10-5 4-8 3-11-1-6-4-5-6-2-5v-10l25-94 5-12 4-5z"
  //     transform="translate(1222,251)"
  //   />
  //   <path
  //     d="m0 0h12l8 4 6 8 2 10-4 10-9 10-67 67-10 5h-8l-8-3-7-8-2-5v-11l5-8 4-5 8-7 19-19 1-2h2v-2h2v-2h2v-2h2v-2h2l2-4h2l2-4h2l2-4h2l2-4h2l2-4h2l2-4h2l2-4 8-7z"
  //     transform="translate(1568,453)"
  //   />
  //   <path
  //     d="m0 0 10 1 6 3 6 7 4 11 25 94v9l-4 8-7 6-7 2h-7l-7-3-6-5-5-12-25-93-1-10 4-9 8-7z"
  //     transform="translate(819,251)"
  //   />
  //   <path
  //     d="m0 0h12l8 5 4 5 4 10 14 53 11 41v11l-3 6-4 5-5 3-4 1h-10l-8-4-5-6-5-14-24-90v-11l4-8 8-6z"
  //     transform="translate(1193,1656)"
  //   />
  //   <path
  //     d="m0 0h10l8 4 6 7 2 5v10l-4 8-6 5-15 5-71 19-24 6-8-2-8-6-4-7-1-10 3-8 4-5 8-4 28-8 68-18z"
  //     transform="translate(366,1178)"
  //   />
  //   <path
  //     d="m0 0 9 1 36 9 63 17 9 5 6 8 1 3v10l-5 9-6 5-6 2h-7l-35-9-63-17-10-4-6-7-3-8 1-10 5-8 6-4z"
  //     transform="translate(268,801)"
  //   />
  //   <path
  //     d="m0 0 26 6 64 17 17 5 8 5 5 6 2 10-2 8-6 8-8 4-6 1-24-6-63-17-20-6-6-4-4-5-2-5v-11l3-6 5-5 5-3z"
  //     transform="translate(1675,1177)"
  //   />
  //   <path
  //     d="m0 0h6l10 5 6 7 2 11-2 7-4 6-5 4-19 6-57 15-31 8-10-1-8-6-5-8v-12l4-8 9-6 32-9 64-17z"
  //     transform="translate(1773,801)"
  //   />
  //   <path
  //     d="m0 0 10 2 8 6 73 73 4 8v10l-4 8-5 5-8 3h-9l-9-5-74-74-5-8-1-9 3-8 5-6 7-4z"
  //     transform="translate(472,452)"
  //   />
  //   <path
  //     d="m0 0h11l8 4 76 76 4 7 1 8-4 10-8 7-5 2h-10l-9-5-75-75-4-8v-11l4-8 9-6z"
  //     transform="translate(1496,1481)"
  //   />
  // </svg>
  <svg
    enableBackground="new 0 0 512 512"
    fill="yellow"
    height={size}
    id="Layer_1"
    style={{ backgroundColor: color, borderRadius: '100%', padding: 2 }}
    version="1.1"
    viewBox="0 0 512 512"
    width={size}
    xmlSpace="preserve"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <polygon points="439.6,0 204.9,0 55.4,256 204.9,256 76.9,512 418.2,192 247.5,192 " />
  </svg>
);

export default ProducerIcon;
