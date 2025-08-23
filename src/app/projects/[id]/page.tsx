import { projectsData } from '@/data/projectsData';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FaArrowLeft, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const getProject = (id: number) => {
  return projectsData.find((project) => project.id === id);
};

// Update metadata generation to handle async params
export async function generateMetadata(
  { params }: { params: Promise<{ id: string }> }
): Promise<Metadata> {
  const { id } = await params;
  const project = getProject(parseInt(id, 10));
  if (!project) {
    return { title: 'Project Not Found' };
  }
  return {
    title: `Sely Ruli Amanda | Project: ${project.title}`,
    description: project.description,
  };
}

// This function remains the same for static generation
export function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.id.toString(),
  }));
}

// Update the page component to handle async params
export default async function ProjectDetailPage({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}) {
  const { id } = await params;
  const project = getProject(parseInt(id, 10));

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/#portfolio" className="inline-flex items-center gap-2 text-primary hover:text-cyan-300 transition-colors mb-8">
          <FaArrowLeft />
          <span>Back to Portfolio</span>
        </Link>
        
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">{project.title}</h1>
        <p className="text-lg text-gray-400 mb-8">{project.description}</p>
        
        <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden mb-12 shadow-2xl shadow-primary/20">
          <Image src={project.image} alt={project.title} fill className="object-cover" />
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-4">About This Project</h2>
            <div className="prose prose-invert text-gray-300 max-w-none">
              <p>{project.longDescription || project.description}</p>
            </div>
          </div>
          
          <div className="md:col-span-1">
            <div className="bg-accent p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4">Technologies</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-secondary text-primary text-sm rounded-full">{tag}</span>
                ))}
              </div>

              <h3 className="text-xl font-bold mb-4">Links</h3>
              <div className="flex flex-col gap-4">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors">
                  <FaGithub />
                  <span>View on GitHub</span>
                </a>
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-primary hover:bg-cyan-600 rounded-lg transition-colors">
                  <FaExternalLinkAlt />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}