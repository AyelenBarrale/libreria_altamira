export const callWapp = (id, name) => {
  window.open(
    `https://wa.me/+542284581210?text=¡Hola%20soy%20${name}!,%20realice%20un%20pedido%20en%20su%20sitio%20web. Mi%20identificador%20es%20el%20*${id}*. Precisaría%20por%20favor%20se%20contacten%20conmigo%20para%20finalizar%20la%20compra.`,
    "_blank"
  );
};
