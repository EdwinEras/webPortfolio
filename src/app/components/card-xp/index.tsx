import content from "../../content.json";

const CardXP = () => {
  return(
    <div className="size-full mx-auto">
    <div className="space-y-8">
      {content.home.workxp.map((exp, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-xl shadow-md
          transition duration-500 hover:scale-105 hover:shadow-xl"
        >
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-xl font-semibold">{exp.role}</h3>
            <span className="text-sm text-gray-500">{exp.duration}</span>
          </div>
          <p className="text-gray-700 mb-3 italic">{exp.company}</p>
          {exp.description.map((desc,i) => (
            <p key={i} className="text-gray-600 mb-4">* {desc}</p>
          ))}
          <div className="flex flex-wrap gap-2">
            {exp.technologies.map((tech, i) => (
              <span
                key={i}
                className="bg-gray-300 rounded-full px-3 py-1 text-sm 
                hover:bg-gray-600 hover:text-white font-semibold text-black"
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