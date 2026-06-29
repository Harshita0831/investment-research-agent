interface FeaturedCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function FeaturedCard({
  icon,
  title,
  description,
}: FeaturedCardProps) {
  return (
    <div className="rounded-2xl bg-slate-800 p-8 shadow-lg hover:scale-105 transition duration-300">
      <div className="text-5xl">{icon}</div>

      <h2 className="mt-4 text-2xl font-bold text-white">
        {title}
      </h2>

      <p className="mt-3 text-slate-400">
        {description}
      </p>
    </div>
  );
}