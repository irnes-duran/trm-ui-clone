const TransformerIcon = ({
  backgroundColor = '#FEFEFE',
  color = '#3E3C4A',
  isCircle = false,
  size = 1280,
  ...props
}) => (
  <div
    style={{
      alignItems: 'center',
      backgroundColor: isCircle ? backgroundColor : 'transparent',
      borderRadius: isCircle ? '50%' : '0',
      display: 'flex',
      height: size,
      justifyContent: 'center',
      width: size
    }}
  >
    <svg
      fill={'currentColor'}
      height={isCircle ? size * 0.9 : size} // Adjust SVG size within the circle if needed
      style={{ backgroundColor: color }}
      version="1.1"
      viewBox="0 0 1288 1520"
      width={isCircle ? size * 0.9 : size} // Adjust SVG size within the circle if needed
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="m0 0h1288v1520h-1288z"
        fill={backgroundColor}
        transform="translate(0)"
      />
      <path
        d="m0 0h1079l2 2v778l-1 1h-1081l-1-219v-246l1-315z"
        fill={backgroundColor}
        transform="translate(133,564)"
      />
      <path
        d="m0 0h21l15 5 11 7 10 10 7 12 3 9 1 7v104l6-4 10-7 16-9 13-6 18-6 17-4 16-2h28l20 3 19 5 19 7 19 10 11 8 7 5 1-107 3-11 5-10 8-10 10-8 13-6 8-2h19l13 4 12 6 7 6 9 13 5 12 2 13v94l-1 427-5 5-8 1-6-3-2-3-1-512-1-15-4-10-7-8-6-4-10-3h-12l-11 4-6 4-7 9-4 10-1 14v111l8 11 10 15 9 17 9 24 5 25 1 11v26l-3 23-5 18-8 20-9 17-12 17-5 8v116l-1 53-4 4-2 1h-8l-6-4-1-2-1-147-22 14-25 12-20 6-21 4-12 1h-17l-20-2-25-6-19-7-19-10-14-10-5-3v147l-3 5-5 2-9-1-4-4-1-3-1-168-8-11-11-17-8-16-9-24-4-20-1-8v-37l4-24 7-21 9-20 14-22 7-8v-127l-4-10-7-9-9-6-8-2h-12l-9 3-8 6-7 8-4 11-1 523-3 5-6 2-8-1-4-4-1-3v-522l3-14 7-14 8-9 10-7 11-5z"
        fill={backgroundColor}
        transform="translate(495,664)"
      />
      <path
        d="m0 0h947l38 1 5 4 1 2v813l-4 5-3 1-85 1-1 80-3 5-2 1-15 1h-905l-10-2-3-3-1-13v-39l4-6 4-2h7l6 4 2 4v35h894l-1-65-1e3 -1-7-3-1-2-1-66v-713l1-36 6-5zm-111 23-1 1-1 315v251l1 214h1081l1-1v-778l-2-2z"
        fill={color}
        transform="translate(244,541)"
      />
      <path
        d="m0 0h21l15 5 11 7 10 10 7 12 3 9 1 7v104l6-4 10-7 16-9 13-6 18-6 17-4 16-2h28l20 3 19 5 19 7 19 10 11 8 7 5 1-107 3-11 5-10 8-10 10-8 13-6 8-2h19l13 4 12 6 7 6 9 13 5 12 2 13v94l-1 427-5 5-8 1-6-3-2-3-1-512-1-15-4-10-7-8-6-4-10-3h-12l-11 4-6 4-7 9-4 10-1 14v111l8 11 10 15 9 17 9 24 5 25 1 11v26l-3 23-5 18-8 20-9 17-12 17-5 8v116l-1 53-4 4-2 1h-8l-6-4-1-2-1-147-22 14-25 12-20 6-21 4-12 1h-17l-20-2-25-6-19-7-19-10-14-10-5-3v147l-3 5-5 2-9-1-4-4-1-3-1-168-8-11-11-17-8-16-9-24-4-20-1-8v-37l4-24 7-21 9-20 14-22 7-8v-127l-4-10-7-9-9-6-8-2h-12l-9 3-8 6-7 8-4 11-1 523-3 5-6 2-8-1-4-4-1-3v-522l3-14 7-14 8-9 10-7 11-5zm165 139-17 2-19 5-17 7-18 10-14 11-12 11-13 15-10 16-8 16-6 19-4 17-2 16v13l4 25 6 22 7 15 9 16 10 13 12 13 10 9 16 11 16 8 18 7 19 5 20 2h12l20-2 23-6 25-11 12-8 12-9 15-14 9-11 10-15 8-16 7-21 4-17 1-7v-31l-4-20-6-19-5-12-9-16-8-11-12-14-11-10-15-11-16-9-17-7-15-4-22-3z"
        fill={color}
        transform="translate(495,664)"
      />
      <path
        d="m0 0h13l10 4 8 9 4 11 1 37 7 8 28 28 8 7 27 27 3 6-1 6-5 6-2 1-48 1-1 43 7 8 16 16 8 7 22 22 4 7-1 7-7 6-18 1h-30v44l7 8 47 47 2 6-1 4-5 6-3 1-47 1-1 50-1 9-6 6h-8l-5-3-3-5v-71l4-7 5-2h30l-7-8-29-29-3-5v-68l6-7h33l-2-4-8-7-28-28-1-2v-68l3-6 4-2 14-1h18l-4-5-8-7-43-43-1-3-1-46h-7l-2 1-1 9v36l-4 7-13 12-33 33-5 4-1 2h29l5 2 4 4 1 4v68l-9 10-8 7-21 21-1 2h33l4 4 2 8v64l-6 8-16 15-15 15-1 2 28 1 6 2 3 3 1 13v59l-2 7-5 4h-8l-6-5-1-3v-57l-49-1-5-3-3-4v-8l7-8 31-31 8-7 10-10 1-45h-45l-9-3-4-9 1-4 5-7 8-7 33-33 9-8 1-2v-44l-49-1-5-4-2-4v-7l6-8 15-14 27-27 8-7 15-15 2-5 1-39 5-10 8-7z"
        fill={color}
        transform="translate(295,69)"
      />
      <path
        d="m0 0h12l9 3 7 6 6 12 1 40 9 10 8 7 55 55 1 2v7l-4 6-4 2-36 1h-12v44l5 6 8 7 41 41 2 4v6l-4 6-3 2-18 1h-32l1 44 7 8 7 7 8 7 32 32 2 4v7l-5 6-4 1-47 1-1 51-1 9-5 5h-9l-6-4-1-3v-73l3-6 7-2h29l-7-8-8-8-8-7-12-12-4-7v-68l4-6 2-1h33l-7-8-18-18-6-5v-2l-3-1-5-7v-68l3-6 2-2 18-1h15l-7-8-41-41-6-7-1-2-1-46h-8l-1 1-1 16v29l-3 5-37 37-8 7-7 7-1 2h19l13 1 5 3 2 10v60l-3 7-19 19-8 7-9 9-1 2h34l5 6 1 4v61l-2 8-38 38h29l7 2 3 4 1 16v52l-2 10-5 4h-9l-6-5-1-3-1-57-48-1-5-3-2-4v-8l5-7 8-7 42-42 1-45-49-1-4-2-3-6v-7l4-6 23-23 8-7 20-20v-45l-48-1-6-5-1-2v-8l6-8 21-21 7-6 5-6 8-7 24-24 1-2 1-36 2-8 5-8 7-6z"
        fill={color}
        transform="translate(1038,69)"
      />
      <path
        d="m0 0h13l8 3 8 7 5 10 1 7 1 35 32 32 8 7 30 30 3 6-1 7-5 5-3 1-38 1h-9v44l9 10 17 17 8 7 19 19 3 5-1 8-4 5-13 2h-39l1 44 7 8 25 25 8 7 11 11 5 7v6l-4 6-4 2-48 1-1 54-2 7-5 4h-8l-5-3-2-3v-76l4-5 5-1h30l-5-5v-2h-2l-5-6-8-7-17-17-2-4-1-12v-26l1-32 4-5 2-1 30-1 2-1-15-15-8-7-12-12-3-4-1-4v-60l1-8 6-5 15-1h17l-7-8-25-25-8-7-12-12-3-4-1-7v-38l-1-2-8-1-1 1-1 46-3 5-20 20-8 7-23 23-1 2h22l10 1 5 4 1 2v71l-7 8-12 11-19 19-1 2h32l5 3 2 3v71l-7 8-17 16-12 12-2 3 28 1 6 2 4 4v75l-3 5-3 2h-8l-5-3-2-2-1-5-1-55-47-1-5-2-3-4-1-8 4-6 27-27 8-7 17-17 1-45-50-1-5-5-2-5 1-6 7-8 16-16 8-7 19-19 5-6v-44l-48-1-5-3-3-7 1-6 6-8 8-7 37-37 8-7 12-12 1-2 1-37 3-10 6-8 8-5z"
        fill={color}
        transform="translate(666,69)"
      />
      <path
        d="m0 0h20l15 5 10 6 8 7 7 10 5 11 2 8v527l-3 5-6 2h-6l-5-3-2-6-1-520-3-10-6-9-7-6-11-4h-13l-11 4-8 7-6 8-3 10-1 523-5 5-9 1-6-3-2-4v-525l3-12 8-15 7-8 14-9 10-4z"
        fill={color}
        transform="translate(329,664)"
      />
      <path
        d="m0 0h19l11 3 12 6 10 9 6 8 6 12 2 6 1 7v521l-2 5-4 3-8 1-7-3-1-2-1-14v-454l-1-59-4-10-7-9-6-4-10-3h-13l-10 4-8 6-6 9-3 9-1 57v461l-2 8-3 3-3 1h-7l-6-4-1-2v-529l4-13 6-10 9-10 11-7 12-5z"
        fill={color}
        transform="translate(997,664)"
      />
      <path
        d="m0 0 9 1 4 5v13l-7 43-1 7 3 1h55l7 3 3 5v7l-7 11-11 13-10 13-11 14-14 18-10 12-10 13-14 18-10 13-13 16-8 10-6 5h-7l-6-4-2-5 2-14 11-46 7-34h-46l-5-4-2-5v-6l6-9 9-11 10-13 11-14 13-16 7-9 11-14 14-18 13-16z"
        fill={color}
        transform="translate(686,834)"
      />
      <path
        d="m0 0 6 1 5 5 1 2v294l-5 6-2 1h-8l-4-2-2-3v-298l4-4z"
        fill={color}
        transform="translate(75,839)"
      />
      <path
        d="m0 0h182l5 5 1 9-4 7-3 1h-181l-5-4-2-5 2-9z"
        fill={color}
        transform="translate(832,588)"
      />
      <path
        d="m0 0h2l-2 16v14l3 5 3 1 51 1-2 4-8 10-9 12-9 11-10 13-13 16-9 12-7 9-3 2 2-12 8-33 1-6v-8l-3-5-2-1-37-1-1-2 13-17 13-16 10-13z"
        fill={backgroundColor}
        transform="translate(667,890)"
      />
      <path
        d="m0 0h9l6 5 2 4-1 9-5 5-3 1h-7l-5-3-3-4-1-7 3-6z"
        fill={color}
        transform="translate(1048,587)"
      />
      <path
        d="m0 0h9l5 4 2 4v8l-4 6-4 2h-8l-6-5-2-6 1-7z"
        fill={color}
        transform="translate(72,795)"
      />
    </svg>
  </div>
);

export default TransformerIcon;
