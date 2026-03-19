import content from "../../content.json";

const CardXP = () => {
  return(
    <div className="size-full mx-auto">
    <div className="space-y-8">
      {content.home.workxp.map((exp, index) => (
        <div
          key={index}
          className="rounded-xl border border-transparent bg-white p-6 text-gray-900 shadow-md transition duration-500 hover:scale-105 hover:shadow-xl dark:border-violet-800/60 dark:bg-violet-950/80 dark:text-gray-100"
        >
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-xl font-semibold">{exp.role}</h3>
            <span className="text-sm text-gray-500 dark:text-gray-400">{exp.duration}</span>
          </div>
          <p className="mb-3 italic text-gray-700 dark:text-gray-300">{exp.company}</p>
          {exp.description.map((desc,i) => (
            <p key={i} className="mb-4 text-gray-600 dark:text-gray-300">* {desc}</p>
          ))}
          <div className="flex flex-wrap gap-2">
            {exp.technologies.map((tech, i) => (
              <span
                key={i}
                className="rounded-full bg-gray-300 px-3 py-1 text-sm font-semibold text-black hover:bg-gray-600 hover:text-white dark:bg-violet-900/80 dark:text-gray-200 dark:hover:bg-violet-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
  );
}

export default CardXP;
