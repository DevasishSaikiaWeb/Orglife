import { BLOGS } from "@/constants/blogs";
import {
  BLOGS_SECTION_CTA_LABEL,
  BLOGS_SECTION_SUBTITLE,
  BLOGS_SECTION_TITLE,
} from "@/constants/home";
import { Heading2 } from "./heading";
import { TextWithImageCard } from "./text-image-card";

export function BlogsSection() {
  return (
    <section>
      <Heading2
        title={BLOGS_SECTION_TITLE}
        subtitle={BLOGS_SECTION_SUBTITLE}
        action={{
          href: "/blogs",
          label: BLOGS_SECTION_CTA_LABEL,
        }}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 gap-y-16">
        {BLOGS.slice(0, 6).map((blog) => (
          <TextWithImageCard
            key={blog.title}
            {...blog}
            squareImage
            type="blog"
          />
        ))}
      </div>
    </section>
  );
}
