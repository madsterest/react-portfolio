import covidTrack from "./assets/covid-tracker.png";
import procrasTrack from "./assets/procrastination.png";
import techBlog from "./assets/tech-blog.png";
import weatherDash from "./assets/weather-dash-screenshot.png";
import teamProfile from "./assets/team-profile.png";
import eCommerce from "./assets/routes.png";
import Project from "../components/Project";

function Portfolio() {
  const projects = [
    {
      title: "Tech Online Forum",
      src: techBlog,
      alt: "Tech Blog Homepage",
      github: "https://github.com/madsterest/tech-forum",
      deployed: "https://tech-forum-blog.herokuapp.com/",
    },
    {
      title: "Procrastination Tracker",
      src: procrasTrack,
      alt: "Procrastination Tracker Homepage",
      github: "https://github.com/madsterest/procrastination-tracker",
      deployed: "https://procrastination-tracker.herokuapp.com/",
    },
    {
      title: "Covid Tracker",
      src: covidTrack,
      alt: "Covid Tracker Homepage",
      github: "https://github.com/madsterest/covid-tracking-application",
      deployed: "https://madsterest.github.io/covid-tracking-application/",
    },
    {
      title: "Weather Dashboard",
      src: weatherDash,
      alt: "Weather Dashboard Homepage",
      github: "https://github.com/madsterest/weather-forecast",
      deployed: "https://madsterest.github.io/weather-forecast/",
    },
    {
      title: "Team Profile Generator",
      src: teamProfile,
      alt: "Team Profile Generated Website",
      github: "https://github.com/madsterest/team-profile-generator.git",
      demo:
        "https://drive.google.com/file/d/1cG6CwTDfRJIkhEPeo3Y3hQoJR6XaVXRj/view",
    },
    {
      title: "E-Commerce Backend Functionality",
      src: eCommerce,
      alt: "E-commerce Backend Route Demo",
      github:
        "https://github.com/madsterest/e-commerce-backend-functionality.git",
      demo:
        "https://drive.google.com/file/d/1e1x6WygoGe3HZ8jrXhgNGvFyHRvI9JVP/view",
    },
  ];
  return (
    <div class="profile">
      <Project
        title={projects[0].title}
        src={projects[0].src}
        alt={projects[0].alt}
        github={projects[0].github}
        deployed={projects[0].deployed}
      />
      <Project
        title={projects[1].title}
        src={projects[1].src}
        alt={projects[1].alt}
        github={projects[1].github}
        deployed={projects[1].deployed}
      />
      <Project
        title={projects[2].title}
        src={projects[2].src}
        alt={projects[2].alt}
        github={projects[2].github}
        deployed={projects[2].deployed}
      />
      <Project
        title={projects[3].title}
        src={projects[3].src}
        alt={projects[3].alt}
        github={projects[3].github}
        deployed={projects[3].deployed}
      />
      <Project
        title={projects[4].title}
        src={projects[4].src}
        alt={projects[4].alt}
        github={projects[4].github}
        demo={projects[4].demo}
      />
      <Project
        title={projects[5].title}
        src={projects[5].src}
        alt={projects[5].alt}
        github={projects[5].github}
        demo={projects[5].demo}
      />
    </div>
  );
}

export default Portfolio;
