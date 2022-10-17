const Bookmark = ({ w = 6, h = 6, ...rest }) => {
  return (
    <svg
      viewBox="0 0 1000 1000"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
      style={{ width: w, height: h }}
    >
      <path
        fill="inherit"
        fillRule="evenodd"
        d="M153.906 69.336c-19.14 0-34.57 15.43-34.57 34.57v766.602l277.148-184.766 277.149 184.766V519.531c0-19.14 15.429-34.57 34.57-34.57s34.57 15.43 34.57 34.57V1000L396.484 769.141 50 1000V103.906C50 46.484 96.68 0 153.906 0h277.149c19.14 0 34.57 15.43 34.57 34.57s-15.43 34.57-34.57 34.57H153.906v.196ZM777.539 0c19.141 0 34.57 15.43 34.57 34.57v138.477c0 19.14-15.429 34.57-34.57 34.57H639.062c-19.14 0-34.57-15.43-34.57-34.57 0-19.141 15.43-34.57 34.57-34.57h103.907V34.57c0-19.14 15.429-34.57 34.57-34.57Z"
        clipRule="evenodd"
      ></path>
      <path
        fill="inherit"
        fillRule="evenodd"
        d="M742.969 173.242c0-19.14 15.43-34.57 34.57-34.57h138.477c19.14 0 34.57 15.43 34.57 34.57 0 19.141-15.43 34.571-34.57 34.571H812.11v103.906c0 19.14-15.43 34.57-34.571 34.57-19.14 0-34.57-15.43-34.57-34.57V173.242Z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export default Bookmark;
