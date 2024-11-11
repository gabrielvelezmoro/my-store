import { CollectionConfig } from "payload/types";
import Produtos from "./Products";

const Catalog: CollectionConfig = {
  slug: "Catalogo",
  auth: true,
  admin: {
    useAsTitle: "email",
  },
  fields: Produtos.fields,
};

export default Catalog;
