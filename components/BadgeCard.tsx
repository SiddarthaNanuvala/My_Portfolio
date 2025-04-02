import Image from "next/image";

type Badge = {
  name: string;
  img: string;
};

export default function BadgeCard({ name, img }: Badge) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg text-center">
      <Image src={img} alt={name} width={150} height={150} className="mx-auto" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{name}</h3>
      </div>
    </div>
  );
}