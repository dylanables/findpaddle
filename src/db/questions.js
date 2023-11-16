const data = [
  {
    questionText: "What is your skill level?",
    required: true,
    answerOptions: [
        { answerText: "Beginner", answerValue: "Beginner" },
        { answerText: "Intermediate", answerValue: "Intermediate" },
        { answerText: "Advanced/Pro", answerValue: "Advanced" }
    ],
  },
  {
    questionText: "What is your play style?",
    required: true,
    answerOptions: [
        { answerText: "Control", answerValue: "Control" },
        { answerText: "Power", answerValue: "Power" },
        { answerText: "Balanced/IDK", answerValue: "Balanced" }
    ],
  },
  {
    questionText: "What is your budget?",
    required: false,
    answerOptions: [
        { answerText: "$50", answerValue: "50" },
        { answerText: "$100", answerValue: "100" },
        { answerText: "$150+", answerValue: "150" }
    ],
  },
  {
    questionText: "Do you have a color preference?",
    required: false,
    answerOptions: [
        { answerText: "Black", answerValue: "Black" },
        { answerText: "White", answerValue: "White" },
        { answerText: "Red", answerValue: "Red" },
        { answerText: "Blue", answerValue: "Blue" },
        { answerText: "Green", answerValue: "Green" },
        { answerText: "Brown", answerValue: "Brown" },
        { answerText: "Any Color", answerValue: "" },
    ],
  },
  {
    questionText: "Do you have a brand preference?",
    required: false,
    answerOptions: [
        { answerText: "Joola", answerValue: "Joola" },
        { answerText: "Paddletek", answerValue: "Paddletek" },
        { answerText: "Selkirk", answerValue: "Selkirk" },
        { answerText: "No preference", answerValue: "" },
    ],
  },
  {
    questionText: "Do you have a core thickness preference?",
    required: false,
    answerOptions: [
        { answerText: "Thin (12mm & under)", answerValue: "Thin" },
        { answerText: "Standard (12.1 - 14mm)", answerValue: "Standard" },
        { answerText: "Thick (14.1 - 16mm)", answerValue: "Thick" },
        { answerText: "No preference", answerValue: "" },
    ],
  },
  {
    questionText: "Do you have a handle length preference?",
    required: false,
    answerOptions: [
        { answerText: "Short", answerValue: "Short" },
        { answerText: "Medium", answerValue: "Medium" },
        { answerText: "Long (recommended for two-handed backhands)", answerValue: "Long" },
        { answerText: "No preference", answerValue: "" },
    ],
  },
  {
    questionText: "Do you have a paddle weight preference?",
    required: false,
    answerOptions: [
        { answerText: "Light", answerValue: "Light" },
        { answerText: "Medium", answerValue: "Medium" },
        { answerText: "Heavy", answerValue: "Heavy" },
        { answerText: "No preference", answerValue: "" },
    ],
  },
  {
    questionText: "Do you have a surface preference?",
    required: false,
    answerOptions: [
        { answerText: "Carbon Fiber", answerValue: "Carbon Fiber" },
        { answerText: "Graphite", answerValue: "Graphite" },
        { answerText: "Fiberglass", answerValue: "Fiberglass" },
        { answerText: "No preference", answerValue: "" },
    ],
  },
];

export default data;