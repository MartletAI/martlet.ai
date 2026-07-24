interface Stat {
  value: string;
  label: string;
}

interface StatRowProps {
  stats: Stat[];
}

/** StatRow - bold numbers, pulled out of the prose so they're skimmable. */
export function StatRow({ stats }: StatRowProps) {
  return (
    <div className="not-prose grid grid-cols-2 sm:grid-cols-3 gap-6 md:gap-8 my-10 md:my-12 py-8 border-y border-border">
      {stats.map((stat) => (
        <div key={stat.label}>
          <div className="apple-stat text-[28px] md:text-[36px] text-gradient-blue mb-1.5">
            {stat.value}
          </div>
          <p className="text-sm apple-caption leading-snug m-0">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
