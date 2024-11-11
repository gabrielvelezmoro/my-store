import { CollectionConfig } from "payload/types";

const Produtos: CollectionConfig = {
  slug: "Produtos",
  auth: true,
  admin: {
    useAsTitle: "email",
  },
  fields: [
    { name: "nome", type: "text", required: true },
    { name: "descricao", type: "text", required: true },
    { name: "preco", type: "number", required: true },
    { name: "quantidadeEmEstoque", type: "number", required: true },
    { name: "dataDeCriacao", type: "date", required: true },
  ],
};

export default Produtos;
