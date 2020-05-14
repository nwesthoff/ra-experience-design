const myReferences: AcademicRef[] = [
  {
    citationKey: "ref1",
    entryType: "TRADEMAG",
    entryTags: {
      inText: "(Boston Consulting Group, 2017)",
      inBib:
        "Boston Consulting Group (2017). By 2030, 25% of Miles Driven in US Could Be in Shared Self-Driving Electric Cars. [online] https://www.bcg.com. Available at: https://www.bcg.com/d/press/10april2017-future-autonomous-electric-vehicles-151076 [Accessed 30 Apr. 2020].",
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
