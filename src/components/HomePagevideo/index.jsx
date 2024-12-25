import React from 'react';

function HomeVideo() {
  return (
    <div className="flex justify-center items-center p-4">
      <div className="w-full max-w-md md:max-w-lg lg:max-w-2xl">
        <iframe
          className="w-full aspect-video"
          src="https://www.youtube.com/embed/llAYUWXV7CI"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default HomeVideo;
