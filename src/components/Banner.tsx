type BannerProps = {
  url: string;
};

const Banner = ({ url }: BannerProps) => {
  return (
    <div className="flex justify-center mt-10 ">
      <img src={url} alt="Banner principal" className="w-3/4" />
    </div>
  );
};

export default Banner;
