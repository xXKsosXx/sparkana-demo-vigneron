const award = {
  name: "award",
  title: "Award / Presse",
  type: "document",
  fields: [
    {
      name: "citation",
      title: "Citation",
      type: "string",
    },
    {
      name: "source",
      title: "Source",
      type: "string",
    },
    {
      name: "type",
      title: "Type",
      type: "string",
      options: {
        list: [
          { title: "Points", value: "POINTS" },
          { title: "Médaille", value: "MEDAL" },
          { title: "Citation", value: "QUOTE" },
        ],
      },
    },
  ],
};

export default award;
