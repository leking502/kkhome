
import {
  AcademicCapIcon,
  CalendarIcon,
  DownloadIcon,
  FlagIcon,
  MapIcon,
  OfficeBuildingIcon,
  SparklesIcon,
  // @ts-ignore
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import BiliBiliIcon from '../components/Icon/BiliBiliIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import profilepic from '../images/profilepic0.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';
import {IAuthor, iNavSetup, iSEO} from "../shared/interfaces";
import {AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillLinkedin, AiOutlineTwitter} from "react-icons/ai";
import {LogoType, NavbarType} from "../shared/enums";

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Tim Baker',
  description: ``,
  ogImageUrl: ``,
  twitterCardType: 'summary_large',
  twitterSite: `@timbakerx`,
  twitterCreator: `@timbakerx`,
  twitterDomain: `reactresume.com`,
  twitterUrl: `https://reactresume.com`,
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `间空博客`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        记录我的想法
        {/*I'm a Victoria based <strong className="text-stone-100">Full Stack Software Engineer</strong>, currently working*/}
        {/*at <strong className="text-stone-100">Instant Domains</strong> helping build a modern, mobile-first, domain*/}
        {/*registrar and site builder.*/}
      </p>
      {/*<p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">*/}
      {/*  In my free time time, you can catch me training in <strong className="text-stone-100">Muay Thai</strong>,*/}
      {/*  plucking my <strong className="text-stone-100">banjo</strong>, or exploring beautiful{' '}*/}
      {/*  <strong className="text-stone-100">Vancouver Island</strong>.*/}
      {/*</p>*/}
    </>
  ),
  actions: [
    // {
    //   href: '/assets/resume.pdf',
    //   text: 'Resume',
    //   primary: true,
    //   Icon: DownloadIcon,
    // },
    // {
    //   href: `#${SectionId.Contact}`,
    //   text: 'Contact',
    //   primary: false,
    // },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: ``,
  aboutItems: [
    {label: '位置', text: '广州市', Icon: MapIcon},
    {label: '年龄', text: '23', Icon: CalendarIcon},
    {label: '国籍', text: '中国', Icon: FlagIcon},
    // {label: 'Interests', text: 'Motorcycles, Muay Thai, Banjos', Icon: SparklesIcon},
    {label: '学校', text: '广东工业大学', Icon: AcademicCapIcon},
    // {label: 'Employment', text: 'Instant Domains, inc.', Icon: OfficeBuildingIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'French',
        level: 4,
      },
      {
        name: 'Spanish',
        level: 3,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'GraphQL',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Rust',
        level: 5,
      },
      {
        name: 'Golang',
        level: 4,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 9,
      },
      {
        name: 'Flutter',
        level: 4,
      },
      {
        name: 'Swift',
        level: 3,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    imageUrl: 'https://source.unsplash.com/random/',
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'April 2007',
    location: 'Clown college',
    title: 'Masters in Beer tasting',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
  {
    date: 'March 2003',
    location: 'School of Business',
    title: 'What did you study 101',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'March 2010 - Present',
    location: 'Awesome Development Company',
    title: 'Senior UX Engineer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
  {
    date: 'March 2007 - February 2010',
    location: 'Garage Startup Studio',
    title: 'Junior bug fixer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'reachout@timbaker.me',
      href: 'mailto:reachout@timbaker.me',
    },
    {
      type: ContactType.Location,
      text: 'Victoria BC, Canada',
      href: 'https://www.google.ca/maps/place/Victoria,+BC/@48.4262362,-123.376775,14z',
    },
    {
      type: ContactType.Instagram,
      text: '@tbakerx',
      href: 'https://www.instagram.com/tbakerx/',
    },
    {
      type: ContactType.Github,
      text: 'tbakerx',
      href: 'https://github.com/tbakerx',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/leking502'},
  {label: 'Stack Overflow', Icon: BiliBiliIcon, href: 'https://space.bilibili.com/508347'},
  // {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/timbakerx/'},
  // {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/tbakerx/'},
  // {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
];



export const MAYUR: IAuthor = {
  name: "Mayur Nalwala",
  designation: "Software Engineer",
  bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  profilePic: "",
  social: [
    {
      icon: <AiFillGithub />,
      link: 'https://github.com/nmayur'
    },
    {
      icon: <AiFillLinkedin />,
      link: 'https://www.linkedin.com/in/mayur-nalwala/'
    },
  ]
}

export const RUPALI: IAuthor = {
  name: "Rupali Yadav",
  designation: "IT Analyst",
  bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  profilePic: "",
  social: [
    {
      icon: <AiFillGithub />,
      link: 'https://github.com/rupali-yadav'
    },
    {
      icon: <AiFillLinkedin />,
      link: 'https://www.linkedin.com/in/rupali-yadav-087bb4112/'
    },
  ]
}
export const KANKU: IAuthor = {
  name: "间空",
  designation: "IT Analyst",
  bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  profilePic: "",
  social: [
    {
      icon: <AiFillGithub />,
      link: 'https://github.com/rupali-yadav'
    },
    {
      icon: <AiFillLinkedin />,
      link: 'https://www.linkedin.com/in/rupali-yadav-087bb4112/'
    },
  ]
}



// This can your company name / your name etc for SEO purposes
export const WEBSITE_NAME: string = 'KKBlog';
export const WEBSITE_URL: string = 'https://www.baidu.com/';

/**
 * This is the main navigation setup.
 * This includes the main navbar and the side drawer.
 */
export const PRIMARY_NAV: iNavSetup = {
  type: NavbarType.DEFAULT,
  // max logo image height 40px
  // you can add logo light version if using image
  // logo: {
  //     type: LogoType.IMAGE,
  //     logo: '/images/logo.png',
  //     logoLight: '/images/logo-light.png'
  // },
  logo: {
    type: LogoType.TEXT,
    logo: 'KKBlog',
  },
  // navLinks are the main navbar links that apper on top of every page
  navLinks: [
    {
      label: '主页',
      path: '/'
    },
    {
      // for categories don't add path and add type: dropdown and pass path empty
      label: '博客',
      type: 'dropdown',
      path: ''
    },
    {
      label: '关于我',
      // path: '/about-us'
      path: '/#about'
    },
    // {
    //   // to open a link in new tab pass newTab: true
    //   label: 'Support Us',
    //   path: 'https://www.buymeacoffee.com/webexpe13z',
    //   newTab: true
    // },
    // {
    //   label: 'Github Repo',
    //   path: 'https://github.com/webexpe13/blog-template-using-nextjs-typescript-tailwindcss',
    //   newTab: true
    // },
    // {
    //   label: 'Contact Us',
    //   path: '/contact-us'
    // }
  ],
  // sideNavLinks are the links which appear when you open the side menu after clicking the burger menu icon.
  sideNavLinks: [
    {
      label: '主页',
      path: '/'
    },
    {
      // for categories dont add path and add type: dropdown
      label: '博客',
      type: 'dropdown',
      path: ''
    },
    {
      label: '关于我',
      // path: '/about-us'
      path: '/#about'
    },
    // {
    //   label: 'Support Us',
    //   path: 'https://www.buymeacoffee.com/webexpe13z',
    //   newTab: true
    // },
    // {
    //   label: 'Github Repo',
    //   path: 'https://github.com/webexpe13/blog-template-using-nextjs-typescript-tailwindcss',
    //   newTab: true
    // },
    // {
    //   label: 'Contact Us',
    //   path: '/contact-us'
    // }
  ],
  socials: [
    {
      link: 'https://github.com/leking502',
      icon: <AiFillGithub />
    },
    // {
    //   link: 'https://www.instagram.com/',
    //   icon: <AiFillInstagram />
    // },
    // {
    //   link: 'https://twitter.com/WebExpe',
    //   icon: <AiOutlineTwitter />
    // },
  ]
}

export const DEFAULT_SEO: iSEO = {
  title: "间空博客",
  description: "间空的个人博客",
  keywords: "Blog",
  url: WEBSITE_URL,
  // author: `${MAYUR.name}, ${RUPALI.name}`,
  author: `leking`,
  twitterHandle: '@WebExpe',
  ogImage: '/public/images/og-image.jpg'
}
