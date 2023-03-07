const functions = require('@google-cloud/functions-framework');

functions.cloudEvent('verificaSituacaoPedido', cloudEvent => {
  const base64name = cloudEvent.data.message.data;

  const {
    cpfTitular,
    idPedido,
    idContrato
  } = JSON.parse(Buffer.from(base64name, 'base64').toString());

  console.log(`CPF do Titular: ${cpfTitular}`);
  console.log(`ID do Pedido: ${idPedido}`);
  console.log(`ID do Contrato: ${idContrato}`);
});
