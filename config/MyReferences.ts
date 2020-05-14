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
