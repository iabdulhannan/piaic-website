import {CarouselData, CourseQuarter, DropdownData, ProgramDetailType} from "piaicRoot/assets/types/types";

export const dropdownData: DropdownData[] = [
  {
    title: 'Apply',
    isDropdown: false,
    linkTo: 'https://portal.piaic.org/signup',
  },
  {
    title: 'How It Works',
    isDropdown: false,
    linkTo: 'howItWorks',
  },
  {
    title: 'Available Programs',
    isDropdown: true,
    items: [
      {
        courseName: 'Artificial Intelligence',
        linkTo: '/course/1',
      },
      {
        courseName: 'Cloud Native and Mobile Computing',
        linkTo: '/course/2',
      },
      {
        courseName: 'Blockchain',
        linkTo: '/course/3',
      },
      {
        courseName: 'Internet of Things',
        linkTo: '/course/4',
      },
      {
        courseName: 'Web 3.0 and Metaverse Developer',
        linkTo: 'https://panaverse-dao-syllabus-z.vercel.app/',
      },],
  },

];

const artificialIntelligenceCourseDetails: CourseQuarter[] = [
  {
    quarterName: 'I',
    quarterNumber: 1,
    duration: '13 Weeks',
    title: 'AI Foundations',
    syllabus: [
      {
        title: 'Version Control with Git',
      }, {
        title: 'Object Oriented and Functional Programming using Python',
      }, {
        title: 'Introduction to Linear Algebra and Statistics',
      },
    ]
  },
  {
    quarterName: 'II',
    quarterNumber: 2,
    duration: '13 Weeks',
    title: 'Introduction to Data Science & Deep Learning',
    syllabus: [
      {
        title: 'Advanced Python Libraries with Anaconda',
      }, {
        title: 'Data Science Essentials',
      }, {
        title: 'The Fundamentals of Deep Learning with Keras with TensorFlow Backend',
      },
    ]
  },
  {
    quarterName: 'III',
    quarterNumber: 3,
    duration: '13 Weeks',
    title: 'Deploying AI Solutions',
    syllabus: [
      {
        title: 'Introduction to Linux and Bash',
      }, {
        title: 'Docker Deep Dive',
      }, {
        title: 'Python Microservices Development',
      }, {
        title: 'Build AI Microservices for ContainerDeployments',
      }
    ]
  },
  {
    quarterName: 'IV',
    quarterNumber: 4,
    duration: '13 Weeks',
    title: 'AI In Practice',
    syllabus: [
      {
        title: 'Artificial Intelligence (AI) in Practice',
      }
    ]
  }
]
const internetOfThingsCourseDetails: CourseQuarter[] = [
  {
    quarterName: 'I',
    quarterNumber: 1,
    duration: '13 Weeks',
    title: 'Introduction to IoT Concepts and Rust Programming',
    syllabus: [
      {
        title: 'What Is IoT?',
      }, {
        title: 'Embedded Systems',
      }, {
        title: 'Hardware and Software for IoT',
      }, {
        title: 'Networking and the Internet for IoT',
      }, {
        title: 'Edge and Cloud Computing for IoT',
      }, {
        title: 'Version Control with Git',
      }, {
        title: 'Fundamentals of Rust Programming',
      },
    ]
  },
  {
    quarterName: 'II',
    quarterNumber: 2,
    duration: '13 Weeks',
    title: 'Embedded Rust and Real-time Systems Programming',
    syllabus: [
      {
        title: 'Embedded Rust and Real-time Systems Programming',
      },
    ]
  },
  {
    quarterName: 'III',
    quarterNumber: 3,
    duration: '13 Weeks',
    title: 'Micro Services Development for IoT Edge and IoT Cloud using Web Assembly, Node.js, Docker and KubeEdge technologies',
    syllabus: [
      {
        title: 'Introduction to Linux and Bas',
      }, {
        title: 'Docker Deep Dive',
      }, {
        title: 'Fundamentals of Kubernetes for Edge and Cloud Computing',
      }, {
        title: 'Developing Cloud Native IoT Microservices',
      }, {
        title: 'Fundamentals of KubeEdge',
      }
    ]
  },
  {
    quarterName: 'IV',
    quarterNumber: 4,
    duration: '13 Weeks',
    title: 'Voice Computing for Device Control',
    syllabus: [
      {
        title: 'Voice Computing for Device Control',
      }
    ]
  },
  {
    quarterName: 'V',
    quarterNumber: 5,
    duration: 'Voice Computing for Device Control',
    title: 'Artificial Intelligence (AI) for Internet of Things (IoT)',
    syllabus: [
      {
        title: 'Artificial Intelligence (AI) for Internet of Things (IoT)',
      }
    ]
  },
  {
    quarterName: 'VI',
    quarterNumber: 6,
    duration: '13 Weeks',
    title: 'Blockchain and IOTA Technologies for IoT (Optional)',
    syllabus: [
      {
        title: 'Blockchain and IOTA Technologies for IoT (Optional)',
      }
    ]
  }
]
const cloudComputingCourseDetails: CourseQuarter[] = [
  {
    quarterName: 'I',
    quarterNumber: 1,
    duration: '13 Weeks',
    title: 'Cloud Native Computing Foundations',
    syllabus: [
      {
        title: 'Introduction to Cloud Native Computing',
      }, {
        title: 'Introduction to Linux and Bash using Python',
      }, {
        title: 'Docker Deep Dive',
      }, {
        title: 'JavaScript/TypeScript Programming',
      },
    ]
  },
  {
    quarterName: 'II',
    quarterNumber: 2,
    duration: '13 Weeks',
    title: 'Developing Cloud Native Microservices',
    syllabus: [
      {
        title: 'Developing Microservices using Node.js and Express',
      }, {
        title: 'Version Control with Git',
      }, {
        title: 'Cloud Automation using Ansible',
      },
    ]
  },
  {
    quarterName: 'III',
    quarterNumber: 3,
    duration: '13 Weeks',
    title: 'Kubernetes in Practice',
    syllabus: [
      {
        title: 'Kubernetes in Practice',
      },
    ]
  },
  {
    quarterName: 'IV',
    quarterNumber: 4,
    duration: '13 Weeks',
    title: 'AWS Application Development',
    syllabus: [
      {
        title: 'Cloud Native Application Development',
      }
    ]
  }
]
const blockchainCourseDetails: CourseQuarter[] = [
  {
    quarterName: 'I',
    quarterNumber: 1,
    duration: '13 Weeks',
    title: 'Foundations of Blockchain',
    syllabus: [
      {
        title: 'Digital Money, Bitcoin and Blockchain',
      }, {
        title: 'Crypto Tokens',
      }, {
        title: 'Blockchain Revolution',
      }, {
        title: 'Introduction to Decentralized Apps',
      }, {
        title: 'Ethereum and Hyperledger Fabric Basics',
      }, {
        title: 'Crypto Mining and Operations',
      },
    ]
  },
  {
    quarterName: 'II',
    quarterNumber: 2,
    duration: '13 Weeks',
    title: 'Smart Contract Development',
    syllabus: [
      {
        title: 'Introduction to Smart Contracts',
      }, {
        title: 'Solidity in Depth',
      },
    ]
  },
  {
    quarterName: 'III',
    quarterNumber: 3,
    duration: '13 Weeks',
    title: 'Dapp Development',
    syllabus: [
      {
        title: 'HTML, CSS, and JavaScriptCrash Course',
      }, {
        title: 'Blockchain WebApplications',
      }, {
        title: 'Web3 & Truffle',
      },
    ]
  },
  {
    quarterName: 'IV',
    quarterNumber: 4,
    duration: '13 Weeks',
    title: 'Advanced Blockchain Topics',
    syllabus: [
      {
        title: 'BaaS (Blockchain-as-a-Service)',
      }, {
        title: 'The Art of Initial Coin Offering (ICO)',
      }, {
        title: 'Blockchain Projects for Islamic Finance - A Match Made in Heaven',
      },
    ]
  }
]

export const programCarouselData: CarouselData[] = [
  {
    title: 'Blockchain',
    linkTo: 'course/3',
    description: 'A ONE YEAR BLOCKCHAIN PROGRAM DESIGNED FOR ABSOLUTE BEGINNERS GETTING PAKISTAN READY FOR THE NEW ERA OF BLOCKCHAIN, FINTECH AND SMART CONTRACTS',
    imageURL: '/blockchain.webp'
  },
  {
    title: 'Cloud Native and Mobile Computing',
    linkTo: 'course/2',
    description: 'A ONE YEAR CLOUD COMPUTING PROGRAM DESIGNED FOR ABSOLUTE BEGINNERS. GETTING PAKISTAN READY FOR THE NEW ERA OF MICROSERVICES AND MULTI-CLOUD NATIVE COMPUTING',
    imageURL: '/cloud.webp'
  },
  {
    title: 'Artificial Intelligence',
    linkTo: 'course/1',
    description: 'A ONE YEAR AI PROGRAM DESIGNED FOR ABSOLUTE BEGINNERS. GETTING PAKISTAN READY FOR THE NEW ERA OF COMPUTING ENABLED BY THE RISE OF AI',
    imageURL: '/ai.jpg'
  },
  {
    title: 'Internet of Things',
    linkTo: 'course/4',
    description: 'A FIFTEEN MONTHS IOT AND AI PROGRAM DESIGNED FOR ABSOLUTE BEGINNERS GETTING PAKISTAN READY FOR THE NEW ERA OF INTERNET OF THINGS AND AI',
    imageURL: '/Iot.webp'
  },
  {
    title: 'Web 3.0 and Metaverse Developer',
    linkTo: 'https://panaverse-dao-syllabus-z.vercel.app/',
    description: 'Learn how to make money and boost exports in within a short time span of 6 months from the start of program, resembling a cross between a corporate venture and an educational project',
    imageURL: '/half-man-wearing-vr-headset-portrait-human-user-social-media-avatar-in-metaverse-world-free-png.webp'
  },
]

export const programDetail: ProgramDetailType[] = [
  {
    id: 1,
    title: 'Artificial Intelligence',
    description: 'A ONE YEAR BLOCKCHAIN PROGRAM DESIGNED FOR ABSOLUTE BEGINNERS GETTING PAKISTAN READY FOR THE NEW ERA OF BLOCKCHAIN, FINTECH AND SMART CONTRACTS',
    quarters: artificialIntelligenceCourseDetails
  }, {
    id: 2,
    title: 'Internet of Things and AI Specialist',
    description: 'A FIFTEEN MONTHS IOT AND AI PROGRAM DESIGNED FOR ABSOLUTE BEGINNERS GETTING PAKISTAN READY FOR THE NEW ERA OF INTERNET OF THINGS AND AI\n',
    quarters: internetOfThingsCourseDetails
  }, {
    id: 3,
    title: 'Cloud Native and Mobile Web Computing Specialist',
    description: 'A ONE YEAR CLOUD COMPUTING PROGRAM DESIGNED FOR ABSOLUTE BEGINNERS. GETTING PAKISTAN READY FOR THE NEW ERA OF MICROSERVICES AND MULTI-CLOUD NATIVE COMPUTING.',
    quarters: cloudComputingCourseDetails
  }, {
    id: 4,
    title: 'Blockchain',
    description: 'A ONE YEAR BLOCKCHAIN PROGRAM DESIGNED FOR ABSOLUTE BEGINNERS GETTING PAKISTAN READY FOR THE NEW ERA OF BLOCKCHAIN, FINTECH AND SMART CONTRACTS',
    quarters: blockchainCourseDetails
  },
]
