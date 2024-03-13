const VedioPlayer = ({ videoId, width, height }) => {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        paddingBottom: `${(height / width) * 100}%`,
      }}
    >
      <iframe
        title="YouTube Video Player"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
        width={width}
        height={height}
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VedioPlayer;
