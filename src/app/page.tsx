import Image from "next/image";

export default function Home() {
  const skills = [
    { name: "React", color: "#61DBFB" },
    { name: "Node.js", color: "#68A063" },
    { name: "Express.js", color: "#ffffff" },
    { name: "JavaScript", color: "#F0DB4F" },
    { name: "TypeScript", color: "#3178C6" },
    { name: "Next.js", color: "#ffffff" },
    { name: "Astro.js", color: "#FF5A03" },
    { name: "Redux", color: "#764ABC" },
    { name: "MongoDB", color: "#4DB33D" },
    { name: "Mongoose", color: "#48cf4b" },
    { name: "SupaBase", color: "#68A063" },
    { name: "PostgreSQL", color: "#336791" },
    { name: "Prisma", color: "#0C344B" },
  ];

  return (
    <div className="font-mono">
      <Image
        src="https://i.pinimg.com/736x/d8/30/f0/d830f0e56de9360efc1f3a3239941137.jpg"
        width={130}
        height={130}
        className="rounded-full p-2 border border-stone-700"
        alt="avatar"
      />
      <br />
      <h1 className="font-bold">
        Hi, I'm <em>Afra Anjum Subha</em> (morningstar)
      </h1>
      <br />
      <p className="text-stone-300">
        I'm a fullstack developer focused on delivering high-quality products. I
        enjoy working where design and engineering intersect, building software
        that's visually appealing and technically solid.
      </p>

      <div className="flex flex-wrap gap-3 mt-6">
        {skills.map((skill) => (
          <div
            key={skill.name}
            style={{ color: skill.color }}
            className="px-3 py-1 border border-stone-700 rounded-md text-sm font-semibold"
          >
            {skill.name}
          </div>
        ))}
      </div>
    </div>
  );
}
