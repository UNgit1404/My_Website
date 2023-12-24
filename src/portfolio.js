/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "U.N.",
  title: "Hi all, I'm Utkarsh Narayan",
  subTitle: emoji(
    "A budding Engineer aspiring to make a name in my domain and do my bit to make this society a better place to live. 🚀 "
  ),
  resumeLink:
    "https://drive.google.com/file/d/11ZzR6CU4WGS_rUxp0yuyz5N8SJejC5P3/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/UNgit1404",
  linkedin: "https://www.linkedin.com/in/un14/",
  gmail: "utkarsh.narayan14@gmail.com",
  instagram: "https://www.instagram.com/utkarsh__1404/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Pursuing my B.Tech in CSE with Specialization in Blockchain!!",
  skills: [
    emoji(
      "⚡ Love to stay up to date with New Technologies and Gadgets!"
    ),
    emoji("⚡ Interested in Cryptography, Blockchain and Geo-Politics!"),
    emoji(
      "⚡ Looking for jobs in IT Sector!"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "VIT, Vellore",
      logo: require("./assets/images/vitlogo.png"),
      subHeader: "Bachelors in Computer Science and Engineering",
      duration: "September 2020 - Current",
      desc: "Currently in 7th Semester with 9.45 cgpa."
    },
    {
      schoolName: "JVM Shyamali, Ranchi",
      logo: require("./assets/images/logo1.png"),
      subHeader: "SSC,AISSCE",
      duration: "July 2007 - April 2018",
      desc: "Passed my SSC and AISSCE with flying colours.",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Spoken English", //Insert stack or technology you have experience in
      progressPercentage: "95%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Development",
      progressPercentage: "50%"
    },
    {
      Stack: "Programming",
      progressPercentage: "40%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Intern",
      company: "Central Mine Planning and Design Institute",
      companylogo: require("./assets/images/intern.jpg"),
      date: "May 2023 – June 2023",
      desc: "I learned a lot about the tools and technologies that are used in the development of a web application during this period.  The exposure has also helped me to put forth this project.",
      descBullets: [
        "Worked using Symfony Framework(PHP)."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "Projects that have helped me grow.",
  projects: [
    {
      image: require("./assets/images/stegan.png"),
      projectName: "Image Steganography",
      projectDesc: "Implemented a technique of hiding secret information within an image without altering its visual appearance.",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/UNgit1404/IMAGE-STEGANOGRAPHY.git"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/organ.webp"),
      projectName: "UN-Donate",
      projectDesc: "A web-dev project to create a platform for Organ-Donation, using HTML,CSS,JS,PHP,SQL etc.",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/UNgit1404/Organ-Donation.git"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/griev.jpg"),
      projectName: "Grievance-Social-Platform",
      projectDesc: "Provide a transparent platform using Symfony framework where users can not only raise grievances but also become a collective force.",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/UNgit1404/Grievance-Social-Platform.git"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff!",

  achievementsCards: [
    {
      title: "AWS-Certified Cloud Practitioner",
      subtitle:
        "Got certified as an AWS-Certified Cloud Practitoner from Amazon-AWS.",
      image: require("./assets/images/aws.png"),
      imageAlt: "AMAZON-AWS",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1EUKvLu5bj-uQ_CLMPSgZq7aypf8pcfWG/view?usp=sharing"
        },
        
      ]
    },
    {
      title: "Merit Certificate",
      subtitle:
        "Awarded a Merit Certificate during my Ist and IInd year of B.Tech..",
      image: require("./assets/images/merit.jpg"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Certification-2020-21",
          url: "https://drive.google.com/file/d/1LFlY1zj4HWKgyqBwzoyZZFhtIgqVpyb8/view?usp=sharing"
        },
        {
          name: "Certification-2021-22",
          url: "https://drive.google.com/file/d/1A9hTy_BJ2H0xesXH9PXyF3AqZfXONs4W/view?usp=sharing"
        }
      ]
    }

    // {
    //   title: "PWA Web App Developer",
    //   subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
    //   image: require("./assets/images/pwaLogo.webp"),
    //   imageAlt: "PWA Logo",
    //   footerLink: [
    //     {name: "Certification", url: ""},
    //     {
    //       name: "Final Project",
    //       url: "https://pakistan-olx-1.firebaseapp.com/"
    //     }
    //   ]
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Reach out to me on-call or on-email!",
  number: "+91-9955xxxxxx",
  email_address: "utkarsh.narayan14@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
