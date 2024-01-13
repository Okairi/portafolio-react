export const CardProyect = ({ title, image, content1, content2 }) => {
  return (
    <article
      className="relative text-white w-full bg-[#004d81] p-2 rounded-[10px] max-w-[344px] sm:max-h-[362px] md:max-h-[362px] lg:max-h-[362px] xl:max-h-[362px] flex flex-col items-center hover:opacity-[0.7] transition-all cursor-pointer text-center transform hover:scale-105"
      style={{ zIndex: "1" }}
    >
      <h3 className="text-white text-[20px] mb-3 font-medium">{title}</h3>

      <img
        className="w-full h-auto mb-4 max-w-[268px] max-h-[124px]"
        srcSet={image}
        alt=""
      />

      <p className="mb-3">{content1}</p>
      <p>{content2}</p>
    </article>
  );
};
