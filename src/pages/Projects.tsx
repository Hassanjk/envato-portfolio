import React from 'react';
import { ArrowRight } from 'lucide-react';

const Projects = React.forwardRef<HTMLDivElement>((props, ref) => {
  const projects = [
    {
      id: 1,
      title: "Digital Experience",
      category: "Web Design",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2072",
    },
    {
      id: 2,
      title: "Brand Identity",
      category: "Branding",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=2064",
    },
    {
      id: 3,
      title: "Mobile Interface",
      category: "UI/UX Design",
      image: "https://images.unsplash.com/photo-1482062364825-616fd23b8fc1?auto=format&fit=crop&q=80&w=2070",
    },
  ];

  return (
    <div ref={ref} className="h-screen w-full bg-zinc-900 flex items-center justify-center px-32">
      <div className="grid grid-cols-3 gap-8 w-full max-w-7xl">
        {projects.map((project) => (
          <div 
            key={project.id}
            className="group relative overflow-hidden rounded-lg aspect-[4/5] cursor-pointer"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style={{ backgroundImage: `url(${project.image})` }}
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <p className="text-[#FF0099] text-sm mb-2">{project.category}</p>
              <h3 className="text-white text-2xl font-bold mb-4">{project.title}</h3>
              <div className="flex items-center gap-2 text-white">
                <span className="text-sm">View Project</span>
                <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

export default Projects;