type Props = {
  title: string;
  description: string;
};

export const UnitBanner = ({ title, description }: Props) => {
  return (
    <div className="w-full rounded-xl bg-[#5090A1] text-center p-5 text-white flex items-center justify-center">
      <div className=" space-y-2.5">
        <h3 className="text-3xl font-bold">{title}</h3>
        <p className="text-xl">{description}</p>
      </div>
    </div>
  );
};
