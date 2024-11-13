import { isLoggedIn } from "../access/loggedIn";
import { CollectionConfig } from "payload/types";

const Products: CollectionConfig = {
  slug: "Produtos",
  admin: {
    useAsTitle: "name",
  },
  access: {
    // Anyone logged in can create
    create: isLoggedIn,
    update: isLoggedIn,
    read: isLoggedIn,
    delete: isLoggedIn,
  },
  fields: [
    { name: "nome", type: "text", required: true },
    { name: "descricao", type: "text", required: true },
    { name: "preco", type: "number", required: true },
    { name: "quantidadeEmEstoque", type: "number", required: true },
    { name: "dataDeCriacao", type: "date", required: true },
  ],
};

export default Products;
