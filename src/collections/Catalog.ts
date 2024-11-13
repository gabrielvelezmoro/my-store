import { CollectionConfig } from "payload/types";

const Catalog: CollectionConfig = {
  slug: "Catalogo",
  fields: [
    {
      name: "total",
      type: "number",
      required: true,
    },
    {
      name: "Produtos",
      type: "relationship",
      relationTo: "Produtos",
      required: true,
    },
  ],
};

export default Catalog;
