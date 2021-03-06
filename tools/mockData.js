const courses = [
  {
    id: 1,
    title: "CS1014: Introduction to Computational Thinking",
    slug: "introduction-to-computational-thinking",
    authorId: 1,
    category: "Computer Science",
    description:
      "An exploration of basic ideas of computational thinking focusing on the perspectives, thought processes, and skills that underlie computational approaches to problem formulation and problem solving. Application of computational tools to investigate complex, large- scale problems in a variety of knowledge domains. Examination of the societal and political implications of computational systems.",
  },
  {
    id: 2,
    title: "CS1044: Introduction to Programming in C",
    slug: "introduction-to-programming-in-c",
    authorId: 2,
    category: "Computer Science",
    description:
      "Fundamental concepts underlying software solutions of many problems. Structured data, statement sequencing, logic control, input/output, and functions. The course will be taught using a structured approach to programming.",
  },
  {
    id: 3,
    title: "CS1054: Introduction to Programming in Java",
    slug: "introduction-to-programming-in-java",
    authorId: 2,
    category: "Computer Science",
    description:
      "This course provides an introduction to object oriented programming using the Java language. Fundamental concepts underlying programming and software solutions to many problems. Structured data, statement sequencing, logic control, classes, objects, methods, instantiation of classes, sending messages to objects.",
  },
  {
    id: 4,
    title: "CS1064: Introduction to Programming in Python",
    slug: "introduction-to-programming-in-python",
    authorId: 2,
    category: "Computer Science",
    description:
      "Developing computational problem solving skills and software solutions to a variety of multimedia, scientific, and engineering problems using the Python programming language. Statement sequencing, conditional program flow, iteration, functional decomposition, and recursion. Simple numeric data types, strings, lists, list comprehensions, sets, and dictionaries. Input/output of file-based data, content obtained from the web, and manipulation of digital images. Basic object-oriented concepts, classes, objects, and methods",
  },
  {
    id: 5,
    title: "CS1114: Introduction to Software Design",
    slug: "introduction-to-software-design",
    authorId: 2,
    category: "Computer Science",
    description:
      "Fundamental concepts of programming from an object-oriented perspective. Basic software engineering principles and programming skills in a programming language that supports the object-oriented paradigm. Simple data types, control structures, array and string data structures, basic algorithms, testing and debugging. A basic model of the computer as an abstract machine. Modeling and problem-solving skills applicable to programming at this level.",
  },
  {
    id: 6,
    title: "CS1124: Introduction to Media Computation",
    slug: "introduction-to-media-computation",
    authorId: 2,
    category: "Computer Science",
    description:
      "This course teaches fundamental manipulations of digital media as an introduction to computer science. Basic software engineering principles and programming skills are taught with a programming language that supports object-oriented programming. Simple data types, control structures, array and string data structures and algorithms, testing and debugging.",
  },
  {
    id: 7,
    title: "CS1604: Introduction to the Internet",
    slug: "introduction-to-the-internet",
    authorId: 2,
    category: "Computer Science",
    description:
      "Introduces the concepts, software, data organization and issues involved with using networked information. Also covers file formats (as applied in networked hypermedia and multimedia sound/video documents), local and global (Internet) network access, electronic mail, transferring files, network news, the World Wide Web, digital libraries, on-line public access catalogs and electronic journals, CD-ROMs and on-line databases, and commercial and other networks.  Word processing ability required.",
  },
  {
    id: 8,
    title: "CS2104: Introduction to Problem Solving in Computer Science",
    slug: "introduction-to-problem-solving-in-computer-science",
    authorId: 11,
    category: "Computer Science",
    description:
      "This course introduces the student to a broad range of heuristics for solving problems in a range of settings. Emphasis on problem-solving techniques that aid programmers and computer scientists. Heuristics for solving problems ''in the small'' (classical math and word problems), generating potential solutions to ''real-life'' problems encountered in the profession, and problem solving in teams.",
  },
  {
    id: 9,
    title: "CS2114: Software Design & Data Structures",
    slug: "software-design-data-structures",
    authorId: 2,
    category: "Computer Science",
    description:
      "A programming-intensive exploration of software design concepts and implementation techniques. Builds on knowledge of fundamental object-oriented programming. Advanced object-oriented software design, algorithm development and analysis, and classic data structures. Includes a team-based, semester-long software project.",
  },
  {
    id: 10,
    title: "CS2304: Self Study in a Programming System",
    slug: "self-study-in-a-programming-system",
    authorId: 2,
    category: "Computer Science",
    description:
      "Guided self-study in a specific programming system, its syntax and applications; based on prior knowledge of the programming process and experience in programming with some high level language; may be taken three times for credit with different system each time; may be taken only twice for CS major or minor credit; systems to be offered may include FORTRAN, COBOL, C, UNIX, LISP, and SQL.",
  },
  {
    id: 11,
    title: "CS2505: Introduction to Computer Organization I",
    slug: "introduction-to-computer-organization-i",
    authorId: 15,
    category: "Computer Science",
    description:
      "An introduction to the design and operation of digital computers. Works up from the logic gate level to combinational and sequential circuits, information representation, computer arithmetic, arithmetic/logic units, control unit design, basic computer organization, relationships between high level programming languages and instruction set architectures.",
  },
  {
    id: 12,
    title: "CS2506: Introduction to Computer Organization II",
    slug: "introduction-to-computer-organization-ii",
    authorId: 17,
    category: "Computer Science",
    description:
      "An introduction to the design and operation of digital computers. Instruction formats and construction, addressing modes, instruction execution, memory hierarchy operation and performance, pipelining, input/output, multiprocessors, and the relationships between high level programming languages and machine language.",
  },
  {
    id: 13,
    title: "CS3114: Data Structures & Algorithms",
    slug: "data-structures-algorithms",
    authorId: 2,
    category: "Computer Science",
    description:
      "Advanced data structures and analysis of data structure and algorithm performance. Sorting, searching, hashing, and advanced tree structures and algorithms. File system organization and access methods. Course projects require advanced problem-solving, design, and implementation skills.",
  },
  {
    id: 14,
    title: "CS3214: Computer Systems",
    slug: "computer-systems",
    authorId: 20,
    category: "Computer Science",
    description:
      "Introduction to computer systems as they are relevant to application programmers today, with an emphasis on operating systems principles. Operating systems design and architectures; processes, threads, synchronization techniques, deadlock; CPU scheduling; system call interfaces, system level I/O and file management; shell programming; separate compilation, loading and linking; inter-process communication (IPC); virtual and physical memory management and garbage collection; network protocols and programming; virtualization; performance analysis and optimization.",
  },
  {
    id: 15,
    title: "CS3304: Comparative Languages",
    slug: "comparative-languages",
    authorId: 22,
    category: "Computer Science",
    description:
      "This course in programming language constructs emphasizes the run-time behavior of programs. The languages are studied from two points of view: (1) the fundamental elements of languages and their inclusion in commercially available systems; and, (2) the differences between implementations of common elements in languages.",
  },
  {
    id: 16,
    title: "CS3414: Numerical Methods",
    slug: "numerical-methods",
    authorId: 11,
    category: "Computer Science",
    description:
      "Computational methods for numerical solution of non-linear equations, differential equations, approximations, iterations, methods of least squares, and other topics.",
  },
  {
    id: 17,
    title: "CS3604: Professionalism in Computing",
    slug: "professionalism-in-computing",
    authorId: 26,
    category: "Computer Science",
    description: "",
  },
  {
    id: 18,
    title: "CS3634: Computer Science Foundations for CMDA",
    slug: "computer-science-foundations-for-cmda",
    authorId: 2,
    category: "Computer Science",
    description:
      "Survey of computer science concepts and tools that enable computational science and data analytics. Data structure design and implementation. Analysis of data structure and algorithm performance. Introduction to high-performance computer architectures and parallel computation. Basic operating systems concepts that influence the performance of large-scale computational modeling and data analytics. Software development and software tools for computational modeling.",
  },
  {
    id: 19,
    title: "CS3654: Introductory Data Analytics and Visualization",
    slug: "introductory-data-analytics-and-visualization",
    authorId: 27,
    category: "Computer Science",
    description:
      "Basic principles and techniques in data analytics; methods for the collection of, storing, accessing, and manipulating standard-size and large datasets; data visualization; and identifying sources of bias.",
  },
  {
    id: 20,
    title: "CS3704: Intermediate Software Design and Engineering",
    slug: "intermediate-software-design-and-engineering",
    authorId: 28,
    category: "Computer Science",
    description:
      "Explores the principles of software design in detail, with an emphasis on software engineering aspects. Includes exposure of software lifecycle activities including design, coding, testing, debugging, and maintenance, highlighting how design affects these activities. Peer reviews, designing for software reuse, CASE tools, and writing software to specifications are also covered.",
  },
  {
    id: 21,
    title: "CS3714: Mobile Software Development",
    slug: "mobile-software-development",
    authorId: 28,
    category: "Computer Science",
    description:
      "Technologies and concepts underlying software development for mobile devices (handheld computers). Mobile computing platforms, including architecture, operating system, and programming environment. Software design patterns and structuring for mobile applications. Network-centric mobile software development. Data persistence. Programming for mobile device components such as cameras, recorders, accelerometer, gyroscope and antennas. Location-aware software development.",
  },
  {
    id: 22,
    title: "CS3724: Introduction to Human-Computer Interaction",
    slug: "introduction-to-human-computer-interaction",
    authorId: 27,
    category: "Computer Science",
    description:
      "Survey of human-computer interaction concepts, theory, and practice. Basic components of human-computer interaction. Interdisciplinary underpinnings. Informed and critical evaluation of computer-based technology. User-oriented perspective, rather than system-oriented, with two thrusts: human (cognitive, social) and technological (input/output, interactions styles, devices). Design guidelines, evaluation methods, participatory design, communication between users and system developers.",
  },
  {
    id: 23,
    title: "CS3744: Introduction to GUI Programming and Graphics",
    slug: "introduction-to-gui-programming-and-graphics",
    authorId: 27,
    category: "Computer Science",
    description:
      "Design and implementation of object-oriented graphical user interfaces (GUI) and two-dimensional computer graphics systems. Implementation methodologies including callbacks, handlers, event listeners, design patterns, layout managers, and architectural models. Mathematical foundations of computer graphics applied to fundamental algorithms for clipping, scan conversion, affine and convex linear transformations, projections, viewing, structuring, and modeling.",
  },
  {
    id: 24,
    title: "CS3754: Cloud Software Development",
    slug: "cloud-software-development",
    authorId: 28,
    category: "Computer Science",
    description:
      "Fundamentals of cloud software development, including design patterns, application programming interfaces, and underlying middleware technologies. Development of distributed multi-tiered enterprise software applications that run on a server computer and are accessed using a web browser over the Internet on a network-connected computer such as desktop, laptop, or handheld computer (tablet, smartphone, or mobile device.",
  },
  {
    id: 25,
    title: "CS3824: Introduction to Computational Biology and Bioinformatics",
    slug: "introduction-to-computational-biology-and-bioinformatics",
    authorId: 11,
    category: "Computer Science",
    description:
      "Introduction to computational biology and bioinformatics (CBB) through hands-on learning experiences. Emphasis on problem solving in CBB. Breadth of topics covering structural bioinformatics; modeling and simulation of biological networks; computational sequence analysis; algorithms for reconstructing phylogenies; computational systems biology; and data mining algorithms.",
  },
  {
    id: 26,
    title: "CS3984: User Experience Design",
    slug: "user-experience-design",
    authorId: 34,
    category: "Computer Science",
    description:
      "In this interdisciplinary studio course, we will use a human-centered approach in imagining, creating, and evaluating computational systems for diverse populations. Students will encounter and develop a rich toolbox of design methods and computational skills including contextual analysis, design probes, storyboarding, prototyping, crowdsourcing, machine learning, adaptive interfaces, instrumentation, and user evaluation studies. Working in teams, we will identify authentic human problems, explore the opportunity design space, use diverse materials to create prototypes, and engage in iterative cycles of testing, refining, and evaluating design products and experiences. Throughout the semester, students will document their design and production process as dynamic annotated portfolios and engage in weekly critique sessions with instructors and invited guests. We will also explore the subject literature, examining design theory, research applications, business case studies, and socio-cultural implications across a broad range of publications and presentation venues.",
  },
  {
    id: 27,
    title: "CS4104: Data and Algorithm Analysis",
    slug: "data-and-algorithm-analysis",
    authorId: 24,
    category: "Computer Science",
    description:
      "Data structures and algorithms from an analytical perspective. Theoretical analysis of algorithm efficiency. Comparing algorithms with respect to space and run-time requirements. Analytical methods for describing theoretical and practical bounds on performance. Constraints affecting problem solvability.",
  },
  {
    id: 28,
    title: "CS4114: Introduction to Formal Languages and Automata Theory",
    slug: "introduction-to-formal-languages-and-automata-theory",
    authorId: 38,
    category: "Computer Science",
    description:
      "The course presents a study of formal languages and the correspondence between language classes and the automata that recognize them. Formal definitions of grammars and acceptors, deterministic and nondeterministic systems, grammar ambiguity, finite state and push-down automata, and normal forms will be discussed.",
  },
  {
    id: 29,
    title: "CS4124: Theory of Computation",
    slug: "theory-of-computation",
    authorId: 21,
    category: "Computer Science",
    description:
      "Theoretical analysis of the computational process; fundamental concepts such as abstract programs, classes of computational machines and their equivalence, recursive function theory, unsolvable problems, Church's thesis, Kleene's theorem, program equivalence, and generability, acceptability, decidability will be covered. ",
  },
  {
    id: 30,
    title: "CS4204: Computer Graphics",
    slug: "computer-graphics",
    authorId: 31,
    category: "Computer Science",
    description:
      "Hardware and software techniques for the display of graphical information. 2D and 3D geometry and transformations, clipping and windowing, software systems. Interactive graphics, shading, hidden surface elimination, perspective depth. Modeling and realism.",
  },
  {
    id: 31,
    title: "CS4214: Simulation and Modeling",
    slug: "simulation-and-modeling",
    authorId: 28,
    category: "Computer Science",
    description:
      "Overview of discrete-event digital computer simulation and modeling. Fundamentals of model development, Monte Carlo simulation, the life cycle of a simulation study, input and output data analysis, world views and time control, random number and variate generation, credibility assessment of simulation results, simulation languages, applications of simulation using the General Purpose Simulation System (GPSS).",
  },
  {
    id: 32,
    title: "CS4234: Parallel Computation",
    slug: "parallel-computation",
    authorId: 24,
    category: "Computer Science",
    description:
      "Survey of parallel computer architectures, models of parallel computation, and interconnection networks. Parallel algorithm development and analysis. Programming paradigms and languages for parallel computation. Example applications. Performance measurement and evaluation.",
  },
  {
    id: 33,
    title: "CS4254: Computer Network Architecture and Programming",
    slug: "computer-network-architecture-and-programming",
    authorId: 16,
    category: "Computer Science",
    description:
      "Introduction to computer network architecture, and methods for programming network services and applications (e.g. DNS, Email and MIME, http, SNMP, multimedia). Wired, wireless, and satellite network architectures. OSI protocol model, with an emphasis on upper layers. Congestion control, quality of service, routing. Internet protocol suite (e.g. IP, TCP, ARP, RARP). Server design (e.g. connectionless, concurrent). Network programming abstractions (e.g. XDR, remote procedure calls, sockets, DCOM). Case studies (e.g. TELNET).",
  },
  {
    id: 34,
    title: "CS4264: Principles of Computer Security",
    slug: "principles-of-computer-security",
    authorId: 43,
    category: "Computer Science",
    description:
      "Survey of computer security problems and fundamental computer security design principles and models for software systems. Cryptographic models and methods. Modern cyber security techniques for robust computer operating systems, software, web applications, large-scale networks and data protection. Privacy models and techniques. Contemporary computer and network security examples.",
  },
  {
    id: 35,
    title: "CS4284: Systems & Networking Capstone",
    slug: "system-networking-capstone",
    authorId: 41,
    category: "Computer Science",
    description:
      "Advanced topics in computer systems & networking, e.g. distributed and parellel processing, emerging architectures, novel systems management & networking design, fault-tolerance, and robust and secure data management. Team-based approach to solving open-ended computer systems & networking problems. Designing, implementing and documenting advanced computer/networking systems.",
  },
  {
    id: 36,
    title: "CS4304: Compiler Design and Implementation",
    slug: "compiler-design-and-implementation",
    authorId: 22,
    category: "Computer Science",
    description:
      "This course includes the theory, the design, and the implementation of a large language translator system. Lexical analysis, syntactic analysis, code generation, and optimization are emphasized.",
  },
  {
    id: 37,
    title: "CS4414: Issues in Scientific Computing",
    slug: "issues-in-scientific-computing",
    authorId: 24,
    category: "Computer Science",
    description:
      "Theory and techniques of modern computational mathematics, computing environments, computational linear algebra, optimization, approximation, parameter identification, finite difference and finite element methods and symbolic computation. Project-oriented course; modeling and analysis of physical systems using state-of-the-art software and packaged subroutines.",
  },
  {
    id: 38,
    title: "CS4504: Computer Organization",
    slug: "computer-organization",
    authorId: 41,
    category: "Computer Science",
    description:
      "Information representation and transfer; instructions and data access methods; the control unit and microprogramming; memories; input/output and interrupts; secondary storage; the von Neumann SISD organization; high level language machines; the RISC concept; special purpose processors including operating system, file, text, floating point, communication, etc. Multicomputers; multiprocessors; concurrent processing support; Pipeline machines, processor arrays, database machines; the data flow/data directed approach; computer networks.",
  },
  {
    id: 39,
    title: "CS4570: Wireless Networks and Mobile Systems",
    slug: "wireless-networks-and-mobile-systems",
    authorId: 16,
    category: "Computer Science",
    description:
      "Multidisciplinary, project-oriented design course that considers aspects of wireless and mobile systems including wireless networks and link protocols, mobile networking including support for the Internet Protocol suite, mobile middleware, and mobile applications. Students complete multiple experiments and design projects.",
  },
  {
    id: 40,
    title: "CS4604: Introduction to Data Base Management Systems",
    slug: "introduction-to-data-base-management-systems",
    authorId: 45,
    category: "Computer Science",
    description:
      "Emphasis on introduction of the basic data base models, corresponding logical and physical data structures, comparisons of models, logical data design, and data base usage. Terminology, historical evolution, relationships, implementation, data base personnel, future trends, applications, performance considerations, data integrity. Senior standing required.",
  },
  {
    id: 41,
    title: "CS4624: Multimedia, Hypertext and information Access",
    slug: "multimedia-hypertext-and-information-access",
    authorId: 47,
    category: "Computer Science",
    description:
      "Introduces the architectures, concepts, data, hardware, methods, models, software, standards, structures, technologies, and issues involved with: networked multimedia (e.g., image, audio, video) information, access and systems; hypertext and hypermedia; electronic publishing; virtual reality. Coverage includes text processing, search, retrieval, browsing, time-based performance, synchronization, quality of service, video conferencing and authoring.",
  },
  {
    id: 42,
    title: "CS4634: Design of Information",
    slug: "design-of-information",
    authorId: 31,
    category: "Computer Science",
    description:
      "Survey of the higher-order properties that allow data to become information, that is, to inform people.  The course focuses on the analysis of user needs, user comprehension and local semantics; the design of information organization; and the design of information display appropriate to use and setting.",
  },
  {
    id: 43,
    title: "CS4644: Creative Computing Studio",
    slug: "creative-computing-studio",
    authorId: 10,
    category: "Computer Science",
    description:
      "Capstone computer science course at the intersection of arts and technology. Intensive immersion in different approaches to digital arts such as game design, interactive art, digital music, and immersive virtual reality. Students work in teams to conduct an end-to-end integrative design project.",
  },
  {
    id: 44,
    title: "CS4654: Intermediate Data Analytics and Machine Learning",
    slug: "intermediate-data-analytics-and-machine-learning",
    authorId: 0,
    category: "Computer Science",
    description:
      "A technical analytics course.  Covers supervised and unsupervised learning strategies, including regression, generalized linear models, regularization, dimension reduction methods, tree-based methods for classification, and clustering. Upper-level analytical methods shown in practice, e.g., advanced naive Bayes and neural networks.",
  },
  {
    id: 45,
    title: "CS4704: Software Engineering Capstone",
    slug: "software-engineering-capstone",
    authorId: 28,
    category: "Computer Science",
    description:
      "Senior project course integrating software engineering knowledge and skills acquired in previous courses. Team-based approach to problem formulation, requirements engineering, architecture, design, implementation, integration, documentation and delivery of a software system that solves a real-world problem.",
  },
  {
    id: 46,
    title: "CS4784: Human-Computer Interaction Capstone",
    slug: "human-computer-interaction-capstone",
    authorId: 27,
    category: "Computer Science",
    description:
      "Advanced, project-based course in Human-Computer Interaction. Team-based, end-to-end, integrative interface design project drawn from areas of expertise in the department, e.g., virtual reality, augmented reality, embodied cognition, visualization, semiotic engineering, game design, personal information management, mobile computing, design tools, educational technology, and digital democracy. ",
  },
  {
    id: 47,
    title: "CS4804: Introduction to Artificial Intelligence",
    slug: "introduction-to-artificial-intelligence",
    authorId: 46,
    category: "Computer Science",
    description:
      "Overview of the areas of problem solving, game playing, and computer vision. Search trees and/or graphs, game trees, block world vision, syntactic pattern recognition, object matching, natural language, and robotics.",
  },
  {
    id: 48,
    title: "CS4824: Machine Learning",
    slug: "machine-learning",
    authorId: 49,
    category: "Computer Science",
    description:
      "This course will cover the science of machine learning including foundations, analysis and applications of machine learning methods.",
  },
  {
    id: 49,
    title: "CS4884: Computational Biology & Bioinformatics Capstone",
    slug: "computational-biology-bioinformatics-capstone",
    authorId: 11,
    category: "Computer Science",
    description:
      "Advanced topics in computational biology and bioinformatics (CBB). Team-based approach to solving open-ended problems in CBB. Projects drawn from areas of expertise in the department, e.g., algorithms for CBB, computational models for biological systems, analysis of structure-function relationships in biomolecules, genomic data analysis and data mining, computational genomics, systems biology.  Design, implementation, documentation and presentation of solutions.",
  },
];

const authors = [
  { value: 0, label: "TBD" },
  { value: 1, label: "Dennis Kafura" },
  { value: 2, label: "Dwight Barnette" },
  { value: 3, label: "William McQuain" },
  { value: 4, label: "John Lewis" },
  { value: 5, label: "Godmar Back" },
  { value: 6, label: "Stephen Edwards" },
  { value: 7, label: "Eli Tilevich" },
  { value: 8, label: "Deborah Tatar" },
  { value: 9, label: "Nicholas Polys" },
  { value: 10, label: "Steve Harrison" },
  { value: 11, label: "Alexey Onufriev" },
  { value: 12, label: "Layne Watson" },
  { value: 13, label: "Margaret Ellis" },
  { value: 14, label: "Cliff Shaffer" },
  { value: 15, label: "Changhee Jung" },
  { value: 16, label: "Wu Feng" },
  { value: 17, label: "Dimitrios Nikolopoulos" },
  { value: 18, label: "John Wenskovitch" },
  { value: 19, label: "Xun Jian" },
  { value: 20, label: "Ali Butt" },
  { value: 21, label: "Lenwood Heath" },
  { value: 22, label: "James Arthur" },
  { value: 23, label: "Denis Gracanin" },
  { value: 24, label: "Adrian Sandu" },
  { value: 25, label: "Yang Cao" },
  { value: 26, label: "Scott McCrickard" },
  { value: 27, label: "Chris North" },
  { value: 28, label: "Osman Balci" },
  { value: 29, label: "Francisco Servant" },
  { value: 30, label: "Na Meng" },
  { value: 31, label: "Doug Bowman" },
  { value: 32, label: "Kurt Luther" },
  { value: 33, label: "Liqing Zhang" },
  { value: 34, label: "Aisling Kelliher" },
  { value: 35, label: "Sharath Raghvendra" },
  { value: 36, label: "T. M. Murali" },
  { value: 37, label: "Anil Vullikanti" },
  { value: 38, label: "Roger Ehrich" },
  { value: 39, label: "Denis Gracanin" },
  { value: 41, label: "Kirk Cameron" },
  { value: 42, label: "Calvin Ribbens" },
  { value: 43, label: "Danfeng Yao" },
  { value: 44, label: "Gang Wang" },
  { value: 45, label: "Aditya Prakash" },
  { value: 46, label: "Naren Ramakrishnan" },
  { value: 47, label: "Edward Fox" },
  { value: 48, label: "Sanmay Das" },
  { value: 49, label: "Hoda Eldardiry" },
];

const newCourse = {
  id: null,
  title: "",
  authorId: null,
  category: "",
  description: "",
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newCourse,
  courses,
  authors,
};
