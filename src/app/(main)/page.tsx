import { BlogsSection } from "@/components/blogs";
import { ContactForPartnership } from "@/components/contact-for-partnership";
import { CurrentProjectsSection } from "./_components/current-projects";
import { HeroSection } from "./_components/hero";
import { ProjectsSection } from "./_components/projects";
import { TeamSection } from "./_components/team";

export default function HomePage() {
  return (
    <main className="space-y-32 md:space-y-64 pt-32 sm:pt-64 max-w-368 mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
      <HeroSection />
      <TeamSection />
      <div className="-mb-8 md:-mb-16"></div>
      <CurrentProjectsSection />
      <ProjectsSection />
      <BlogsSection />
      <ContactForPartnership />
    </main>
  );
}
