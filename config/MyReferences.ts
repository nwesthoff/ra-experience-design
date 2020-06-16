const myReferences: AcademicRef[] = [
  {
    citationKey: "spotify1",
    entryType: "TRADEMAG",
    entryTags: {
      inText: "(Karol, Hörding and Torres de Souza, 2019)",
      inBib:
        "Karol, S., Hörding, O. and Torres de Souza, M. (2019). The Story of Spotify Personas. [online] Spotify Design. Available at: https://spotify.design/article/the-story-of-spotify-personas [Accessed 14 May 2020].",
    },
  },
  {
    citationKey: "spotify2",
    entryType: "TRADEMAG",
    entryTags: {
      inText: "(Buendia, 2020)",
      inBib:
        "Buendia, A. (2020). How to Get a Job at Spotify Design. [online] Spotify Design. Available at: https://spotify.design/article/how-to-get-a-job-at-spotify-design [Accessed 14 May 2020].",
    },
  },
  {
    citationKey: "insight1",
    entryType: "ACADEMIC",
    entryTags: {
      inText: "(Yuan and Hsieh, 2015)",
      inBib:
        "Yuan, S.-T.D. and Hsieh, P.-K. (2015). Using association reasoning tool to achieve semantic reframing of service design insight discovery. Design Studies, [online] 40, pp.143–175. Available at: https://www.sciencedirect.com/science/article/pii/S0142694X15000526 [Accessed 14 May 2020].",
    },
  },
  {
    citationKey: "basic-design-cycle",
    entryType: "ACADEMIC",
    entryTags: {
      inText: "(Roozenburg and Eekels, 1995, pp.84–93)",
      inBib:
        "Roozenburg, N.F.M. and Eekels, J. (1995). Product Design: Fundamentals and Methods. Chichester: Wiley, pp.84–93.",
    },
  },
  {
    citationKey: "ViP",
    entryType: "ACADEMIC",
    entryTags: {
      inText: "(Hekkert & van Dijk, 2011, pp. 128-129)",
      inBib:
        "Hekkert, P. and van Dijk, M. (2011). ViP: Vision in Design. 1st ed. Amsterdam: BIS Publishers BV, pp.128–129.",
    },
  },
  {
    citationKey: "prototypeAdobe",
    entryType: "TRADEMAG",
    entryTags: {
      inText: "(Babich, 2017)",
      inBib:
        "Babich, N. (2017). Prototyping 101: The Difference between Low-Fidelity and High-Fidelity Prototypes and When to Use Each. [online] Adobe Blog. Available at: https://theblog.adobe.com/prototyping-difference-low-fidelity-high-fidelity-prototypes-use/ [Accessed 8 Jun. 2020].",
    },
  },
  {
    citationKey: "planesOfExperience",
    entryType: "TRADEMAG",
    entryTags: {
      inText: "(Garrett, 2011, pp.19–22)",
      inBib:
        "Garrett, J.J. (2011). The elements of user experience : user-centered design for the Web and beyond. 2nd ed. Berkeley, Ca: New Riders, pp.19–22.",
    },
  },
  {
    citationKey: "prototypeDesignStudies",
    entryType: "ACADEMIC",
    entryTags: {
      inText: "(Yang, 2005)",
      inBib:
        "Yang, M.C. (2005). A study of prototypes, design activity, and design outcome. Design Studies, 26(6), pp.649–669.",
    },
  },
  {
    citationKey: "samAltman",
    entryType: "POPULAR",
    entryTags: {
      inText: "(Altman, 2020)",
      inBib:
        "Altman, S. (2020). Idea Generation. [online] Sam Altman. Available at: https://blog.samaltman.com/idea-generation [Accessed 15 Jun. 2020].",
    },
  },
  {
    citationKey: "experienceBenz",
    entryType: "TRADEMAG",
    entryTags: {
      inText: "(Benz, 2015)",
      inBib:
        "Benz, P. (2015). Experience design : concepts and case studies. London: Bloomsbury Academic.",
    },
  },
  {
    citationKey: "dscout",
    entryType: "TRADEMAG",
    entryTags: {
      inText: "(Anderson and DScout, 2019)",
      inBib:
        "Anderson, N. and DScout (2019). How to Conduct Generative Research: A Complete Guide for UX Researchers. [online] dscout. Available at: https://dscout.com/people-nerds/generative-research-complete-guide [Accessed 16 Jun. 2020].",
    },
  },
  {
    citationKey: "justEnough",
    entryType: "TRADEMAG",
    entryTags: {
      inText: "(Hall, 2019, pp.10–33)",
      inBib:
        "Hall, E. (2019). Just enough research. New York, New York: A Book Apart, pp.10–33.",
    },
  },
];

export interface AcademicRef {
  citationKey: string;
  entryType: "POPULAR" | "TRADEMAG" | "ACADEMIC";
  entryTags: {
    inText: string;
    inBib: string;
  };
}

export default myReferences;
