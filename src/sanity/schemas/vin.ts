const vin = {
  name: "vin",
  title: "Vin",
  type: "document",
  fields: [
    {
      name: "nom",
      title: "Nom",
      type: "string",
    },
    {
      name: "cepage",
      title: "Cépage",
      type: "string",
    },
    {
      name: "millesime",
      title: "Millésime",
      type: "number",
    },
    {
      name: "prix",
      title: "Prix",
      type: "number",
    },
    {
      name: "badge",
      title: "Badge",
      type: "string",
    },
    {
      name: "note_degustation",
      title: "Note de dégustation",
      type: "text",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "disponible",
      title: "Disponible",
      type: "boolean",
      initialValue: true,
    },
    {
      name: "ordre",
      title: "Ordre d'affichage",
      type: "number",
    },
  ],
  orderings: [
    {
      title: "Ordre d'affichage",
      name: "ordreAsc",
      by: [{ field: "ordre", direction: "asc" }],
    },
  ],
};

export default vin;
