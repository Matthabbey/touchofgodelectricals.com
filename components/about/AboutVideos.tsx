import { aboutContent } from "@/lib/content";
import { RevealGroup, RevealItem } from "../motion/Reveal";
import SectionHeader from "../SectionHeader";

export default function AboutVideos() {
  return (
    <section className="section-padding" aria-labelledby="about-videos-title">
      <div className="container">
        <SectionHeader
          id="about-videos-title"
          badge="Videos"
          tagline={aboutContent.videosTagline}
          title={aboutContent.videosTitle}
          subtitle={aboutContent.videosSubtitle}
          red
        />
        <p className="about-video-note">Videos only download when you press play.</p>

        <RevealGroup className="about-video-grid">
          {aboutContent.videos.map((video) => (
            <RevealItem as="figure" key={video.src} className="about-video-card" y={20}>
              {/* Files live in /public, so plain string paths are copied verbatim into the static export. */}
              <video className="about-video" controls preload="metadata" playsInline src={video.src} aria-label={video.title} />
              <figcaption>
                <span className="about-video-title">{video.title}</span>
                <span className="about-video-duration">{video.duration}</span>
              </figcaption>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
