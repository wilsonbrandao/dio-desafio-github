//new Error(message, fileName, lineName);
//todos parametros são opcionais

const meuErro = new Error('Mensagem Inválida');
meuErro.name = 'InvalidMessage';
throw meuErro;

