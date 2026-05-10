import Image from 'next/image';

type Props = {
    item_list: {
        name: string;
        img: string;
    }[];
    orientation: "left" | "right";
}

const InfiniteBanner = ({ item_list, orientation }: Props) => {
  const duplicated = [...item_list, ...item_list];
  return (
    <div className="overflow-hidden relative w-full">
      <div
        className={`flex w-max gap-6 ${
          orientation === "left" ? "animate-scroll_to_left" : "animate-scroll_to_right" }`}
      >
        {duplicated.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-2 min-w-[80px]"
          >
            <Image
              width={100}
              height={100}
              src={item.img}
              alt={`language-${index}`}
              className="h-12 object-contain px-1 
              transform transition-transform duration-700 hover:rotate-[360deg]"
            />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteBanner;