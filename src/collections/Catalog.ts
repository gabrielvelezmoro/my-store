import { CollectionConfig } from "payload/types";

const Catalog: CollectionConfig = {
  slug: "catalogo",
  fields: [
    {
      name: "total",
      type: "number",
      required: true,
    },
    {
      name: "produtos",
      type: "relationship",
      relationTo: "produtos",
      hasMany: true,
      required: true,
    },
  ],
};

export default Catalog;
