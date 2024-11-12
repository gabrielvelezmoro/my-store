import { CollectionConfig } from "payload/types";
import Produtos from "./Products";

const Catalog: CollectionConfig = {
  slug: "Catalogo",
  auth: true,
  admin: {
    useAsTitle: "email",
  },
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
