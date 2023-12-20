const usuario = {
  nome: "Daniel B.",
  email: "danielynx@proton.me"
};

const { nome, ...resto } = usuario;

console.log(nome);
console.log(resto);
