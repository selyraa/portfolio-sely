// src/components/ProjectCarousel.tsx
'use client';
import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Project } from '@/data/projectsData'; // Pastikan path ini benar

type PropType = {
  projects: Project[];
};

export const ProjectCarousel: React.FC<PropType> = ({ projects }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: 'start' });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex space-x-8 -ml-4 pl-4">
          <AnimatePresence>
            {projects.map((project) => (
              <div className="flex-shrink-0 w-80 md:w-96" key={project.id}>
                <Link href={`/projects/${project.id}`}>
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.4 }}
                    className="bg-accent rounded-xl overflow-hidden group h-full flex flex-col"
                  >
                    <div className="relative h-56 w-full">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={500}
                        height={300}
                        className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-300"></div>
                    </div>
                    <div className="p-6 flex-grow flex flex-col">
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-sm text-[#ADB7BE] mb-4 flex-grow">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="px-3 py-1 bg-secondary text-primary text-xs rounded-full">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </div>
            ))}
          </AnimatePresence>
        </div>
      </div>
      
      {/* Tombol Navigasi */}
      <button
        className="absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2 bg-accent/50 hover:bg-accent p-3 rounded-full transition-all text-white disabled:opacity-0"
        onClick={scrollPrev}
        disabled={!emblaApi || !emblaApi.canScrollPrev()}
      >
        <FaArrowLeft />
      </button>
      <button
        className="absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2 bg-accent/50 hover:bg-accent p-3 rounded-full transition-all text-white disabled:opacity-0"
        onClick={scrollNext}
        disabled={!emblaApi || !emblaApi.canScrollNext()}
      >
        <FaArrowRight />
      </button>
    </div>
  );
};