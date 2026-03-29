export type Artifact = {
  label: string
  name: string
  year: number
  significance: string
  curatorialNote: string
}

export type Source = {
  institution: string
  title: string
  url: string
}

export type Exhibit = {
  label: string
  title: string
  era: string
  description: string
  href: string
  overview: string[]
  artifacts: Artifact[]
  culturalImpact: {
    title: string
    paragraphs: string[]
  }
  sources: Source[]
}

export const exhibits: Exhibit[] = [
  {
    label: 'Exhibit 01',
    title: 'Personal Computers',
    era: '1970s – 1990s',
    description:
      'From hobbyist kits assembled in garages to the machine on every office desk and in every home — the personal computer is the foundation on which the digital age was built.',
    href: '/exhibits/personal-computers',
    overview: [
      'In 1975, a computer was a room-sized machine operated by specialists behind locked doors. By 1995, it was a household appliance. The transformation took less than two decades and was driven not by corporations alone, but by hobbyists, educators, and a generation of engineers who believed that computing power should belong to individuals.',
      'This exhibit traces the personal computer from the Altair 8800 kit through the Apple II that entered schools, to the IBM PC that standardized the industry. Each artifact represents not just a product, but a shift in who computing was for.',
    ],
    artifacts: [
      {
        label: 'Artifact 01',
        name: 'Altair 8800',
        year: 1975,
        significance:
          'The first commercially successful personal computer kit, sold by MITS for $439 to hobbyists who assembled it from parts without a keyboard, monitor, or operating system.',
        curatorialNote:
          'We selected the Altair not for what it could do but for what it started. Bill Gates and Paul Allen wrote the first version of BASIC for this machine. Its existence proved there was a market for personal computing before that market had a name.',
      },
      {
        label: 'Artifact 02',
        name: 'Apple II',
        year: 1977,
        significance:
          'One of the first mass-produced microcomputers with color graphics and an open expansion slot architecture, credited with bringing personal computing into American homes and classrooms.',
        curatorialNote:
          'The Apple II was the first personal computer designed to be sold to people who did not know what a personal computer was. Its educational software library — particularly VisiCalc, the first spreadsheet — made it a tool, not a hobby.',
      },
      {
        label: 'Artifact 03',
        name: 'IBM PC 5150',
        year: 1981,
        significance:
          'Established the open-architecture standard by using off-the-shelf components and licensing MS-DOS, inadvertently creating the clone market that defined the PC industry for three decades.',
        curatorialNote:
          'IBM intended to control the PC market. By licensing rather than owning the operating system, they lost that control — and in doing so, made the personal computer universal. The IBM PC is as historically significant for what IBM got wrong as for what it got right.',
      },
    ],
    culturalImpact: {
      title: 'How the PC Changed Daily Life',
      paragraphs: [
        'By 1984, approximately 8% of U.S. households owned a personal computer. By 2000, that figure exceeded 50% — a rate of adoption faster than the telephone, the television, or the automobile at comparable stages of their histories (U.S. Census Bureau).',
        "The personal computer did not simply automate existing tasks. It created new ones. Word processing replaced the typewriter. Spreadsheets replaced the accountant's ledger. Desktop publishing replaced the print shop for small publishers. Each replacement was also an expansion.",
        "The PC's deepest cultural impact was the normalization of personal data. For the first time, ordinary people maintained digital records of their finances, correspondence, creative work, and personal history. The implications of that shift are still unfolding.",
      ],
    },
    sources: [
      {
        institution: 'Computer History Museum',
        title: 'Timeline of Computer History',
        url: 'https://computerhistory.org/timelines',
      },
      {
        institution: 'Britannica',
        title: 'Computer: Home Use, Microprocessors, and Software',
        url: 'https://www.britannica.com/technology/computer/Home-use-microprocessors-software',
      },
    ],
  },
  {
    label: 'Exhibit 02',
    title: 'Mobile Phones',
    era: '1983 – 2007',
    description:
      'From a 1.75-pound brick that cost nearly $4,000 to a glass rectangle carrying the internet in your pocket — the mobile phone compressed four decades of communication history into a single device.',
    href: '/exhibits/mobile-phones',
    overview: [
      'The first commercial handheld cellular phone call was made on October 13, 1983. The Motorola DynaTAC 8000X weighed 1.75 pounds, offered 30 minutes of talk time, and cost $3,995. The idea that everyone would carry one was not yet imaginable.',
      'Within twenty-four years, mobile phones had become the most widely distributed consumer electronics device in human history. This exhibit follows that arc — from the DynaTAC through the mass-market feature phone era to the iPhone, which reset the category entirely.',
    ],
    artifacts: [
      {
        label: 'Artifact 01',
        name: 'Motorola DynaTAC 8000X',
        year: 1983,
        significance:
          'The first commercially available handheld cellular phone, weighing 1.75 pounds, offering 30 minutes of talk time, and retailing for $3,995.',
        curatorialNote:
          'The DynaTAC is often presented as a curiosity. We present it as a proof of concept. Motorola engineer Martin Cooper made the first cell phone call on a prototype in 1973. The decade between that call and commercial release is a story of regulatory, infrastructure, and manufacturing problems solved one by one.',
      },
      {
        label: 'Artifact 02',
        name: 'Nokia 3310',
        year: 2000,
        significance:
          'Sold over 126 million units globally and became a cultural symbol of the pre-smartphone era, representing the peak of the feature phone: affordable, durable, and universally accessible.',
        curatorialNote:
          'The Nokia 3310 is remembered for its indestructibility, but its significance is broader. It was the phone that made mobile communication genuinely democratic — affordable enough for students, durable enough for laborers, simple enough for anyone.',
      },
      {
        label: 'Artifact 03',
        name: 'Apple iPhone (1st generation)',
        year: 2007,
        significance:
          'Introduced the modern smartphone paradigm — capacitive touchscreen, full mobile internet browser, and an application ecosystem — redefining what a phone was.',
        curatorialNote:
          'Steve Jobs described the iPhone as an iPod, a phone, and an internet communicator combined. What it actually introduced was the idea that a phone should be a general-purpose computer — a shift that made every previous phone category obsolete within five years.',
      },
    ],
    culturalImpact: {
      title: 'The Phone as Primary Computer',
      paragraphs: [
        'Global mobile phone subscribers reached 1 billion in 2002, up from 11 million in 1990 — a growth rate with no historical precedent for a consumer technology (International Telecommunication Union).',
        'The mobile phone changed the social meaning of availability. Before cellular phones, being unreachable was the default state. After them, it became an exception requiring explanation. The psychological implications of always-on connectivity are among the most significant behavioral shifts of the late twentieth century.',
        "The transition from feature phones to smartphones between 2007 and 2012 marked the moment the mobile phone became the primary internet device for the majority of the world's population.",
      ],
    },
    sources: [
      {
        institution: 'Smithsonian Institution',
        title: 'The History of the Cell Phone',
        url: 'https://www.smithsonianmag.com',
      },
      {
        institution: 'Computer History Museum',
        title: 'Mobile Phone History',
        url: 'https://computerhistory.org',
      },
    ],
  },
  {
    label: 'Exhibit 03',
    title: 'Music Players',
    era: '1979 – 2004',
    description:
      'From the cassette tape in a yellow plastic case to a thousand songs in a white rectangle — portable music players transformed how people inhabit public space.',
    href: '/exhibits/music-players',
    overview: [
      'Before 1979, music was either communal or stationary. The Sony Walkman changed that. For the first time, music followed the listener — onto the subway, into the park, through the school hallway.',
      'This exhibit traces portable music from the Walkman through the CD era and the MP3 player legal battles to the iPod, which solved not just the hardware problem but the distribution problem.',
    ],
    artifacts: [
      {
        label: 'Artifact 01',
        name: 'Sony Walkman TPS-L2',
        year: 1979,
        significance:
          'The first commercially successful portable cassette player, which created the concept of personal mobile music and sold over 400 million units across its product lifetime.',
        curatorialNote:
          'Sony co-founder Masaru Ibuka wanted a portable player for long-haul flights. The Walkman was initially dismissed by Sony marketing. We include it as a case study in the failure of market research to predict category-creating products.',
      },
      {
        label: 'Artifact 02',
        name: 'Diamond Rio PMP300',
        year: 1998,
        significance:
          'One of the first mass-market portable MP3 players, which triggered an RIAA lawsuit — a legal battle the RIAA lost, establishing the legitimacy of portable digital music.',
        curatorialNote:
          'When a federal court ruled that the Rio did not violate copyright law, it established that consumers had the right to make personal copies of music they owned. That ruling cleared the path for every MP3 player and digital music service that followed.',
      },
      {
        label: 'Artifact 03',
        name: 'Apple iPod (1st generation)',
        year: 2001,
        significance:
          'The first portable music player to combine a large hard drive, a scroll-wheel interface, and seamless desktop library integration.',
        curatorialNote:
          'The iPod did not invent the portable MP3 player. It solved the problems that made existing players frustrating. Its deeper contribution was demonstrating that hardware, software, and a content ecosystem must be designed as a single system.',
      },
    ],
    culturalImpact: {
      title: 'Music, Solitude, and Public Space',
      paragraphs: [
        'By 2004, the iPod accounted for 92% of the hard-drive-based music player market in the United States (NPD Group). By 2006, Apple had sold 67 million iPods.',
        'The portable music player made it socially acceptable to be mentally present in a private sonic world while physically present in a public space. Sociologists identified new forms of urban behavior tied directly to personal audio: altered pace of walking, reduced social interaction, changed experience of commuting.',
        "The iPod's integration with the iTunes Music Store in 2003 established the 99-cent single as the new unit of music commerce and accelerated the decline of the album as the standard purchase.",
      ],
    },
    sources: [
      {
        institution: 'Smithsonian Institution',
        title: 'How the Walkman Changed the Way We Listen to Music',
        url: 'https://www.smithsonianmag.com',
      },
      {
        institution: 'Computer History Museum',
        title: 'Portable Music Players',
        url: 'https://computerhistory.org',
      },
    ],
  },
  {
    label: 'Exhibit 04',
    title: 'The Early Internet',
    era: '1991 – 2004',
    description:
      'From a single website published by a physicist at CERN to a medium used by hundreds of millions — the early internet transformed how information moved, how communities formed, and how commerce worked.',
    href: '/exhibits/early-internet',
    overview: [
      'The World Wide Web became publicly available on August 6, 1991. It described the web itself: what it was, how to use it, how to set up a server. The audience was researchers. No one anticipated that within a decade it would be the dominant medium for communication, commerce, and culture.',
      'This exhibit covers the consumer internet from the Mosaic browser in 1993 through the broadband transition of the early 2000s, told through three artifacts that each represent a different mechanism of adoption.',
    ],
    artifacts: [
      {
        label: 'Artifact 01',
        name: 'NCSA Mosaic Browser',
        year: 1993,
        significance:
          'The first web browser to display inline images alongside text, making the World Wide Web visually accessible to general users and triggering the first wave of mainstream internet adoption.',
        curatorialNote:
          'Before Mosaic, the web was text. Mosaic made it a medium. The team that built it — including Marc Andreessen, who later co-founded Netscape — were graduate students. The browser that started the commercial internet was built by people who were not yet in the industry it would create.',
      },
      {
        label: 'Artifact 02',
        name: 'AOL Dial-Up Service',
        year: 1993,
        significance:
          'Introduced email, instant messaging, and online communities to mainstream American households through a mass CD distribution campaign.',
        curatorialNote:
          "AOL mailed over one billion CDs to American households between 1993 and 2006. At its peak in 2002, AOL had 35 million subscribers. We include AOL not as a technological achievement but as a distribution achievement: it is the reason most Americans' first experience of the internet was through a walled garden rather than the open web.",
      },
      {
        label: 'Artifact 03',
        name: 'Google Search',
        year: 1998,
        significance:
          'Replaced directory-based web navigation with algorithmic search, fundamentally changing how people find information and establishing the advertising-supported search model.',
        curatorialNote:
          "Larry Page and Sergey Brin's original paper on PageRank noted that advertising-supported search engines were inherently biased toward advertisers over users. Google's historical significance is that it solved information retrieval well enough to make the web's scale an asset rather than a liability.",
      },
    ],
    culturalImpact: {
      title: 'From Novelty to Infrastructure',
      paragraphs: [
        'In 1995, approximately 16 million people worldwide used the internet. By 2000, that number had grown to 361 million — a 22-fold increase in five years, faster than any previous communication technology (Internet World Stats).',
        'The early internet normalized asynchronous communication. Email made it possible to communicate across time zones without scheduling, to compose thoughts carefully rather than speaking spontaneously, and to maintain relationships at low cost across large distances.',
        'The broadband transition between 2000 and 2004 changed not just speed but behavior. Always-on internet access made the web ambient rather than intentional. The shift from going online to being online marks the boundary between the early internet and everything that followed.',
      ],
    },
    sources: [
      {
        institution: 'Computer History Museum',
        title: 'Internet History',
        url: 'https://computerhistory.org',
      },
      {
        institution: 'Britannica',
        title: 'Internet: History and Development',
        url: 'https://www.britannica.com/technology/Internet',
      },
    ],
  },
]
