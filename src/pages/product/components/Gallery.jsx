import {useState} from "react";

const Miniature = ({src, alt, onImgClick}) => {
  const handleClick = () => {
    onImgClick(src);
  };

  return (
    <div className="relative" onClick={handleClick}>
      <div className="rounded mr-0 z-[5] border cursor-pointer inline-flex text-xs overflow-hidden p-0 relative group hover:border-2 hover:border-blue-500">
        <div className="size-12 p-0.5 group-hover:-m-px">
          <img alt={alt} className="size-full object-contain" src={src} />
        </div>
      </div>
    </div>
  );
};

export const Gallery = ({images, title}) => {
  const [imgSrc, setImgSrc] = useState(images[0].secure_url);
  const handleClick = (src) => {
    setImgSrc(src);
  };

  return (
    <div className="flex-grow flex-shrink basis-[0%]">
      <div className="mb-6 sticky">
        <div className="min-h-[500px] h-full w-[486px]">
          <div className="h-auto ml-4 mt-4 space-y-2 absolute">
            {images.slice(0, 8).map((img, _index) => (
              <Miniature key={img.id} alt={title} src={img.secure_url} onImgClick={handleClick} />
            ))}
          </div>
          <div className="flex text-center h-full mt-6 p-4 w-[410px] absolute left-[65px] top-0">
            <img alt={title} className="h-auto object-contain w-full" src={imgSrc} />
          </div>
        </div>
      </div>
    </div>
  );
};
