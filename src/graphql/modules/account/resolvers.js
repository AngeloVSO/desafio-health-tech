const db = require('../../../db')

module.exports = {
  Query: {
    saldo: async (_, args) => {
      const { conta } = args;
      const [res] = await db("accounts").where({ conta: conta });

      if (!res) {
        throw new Error("Conta inválida ou inexistente");
      }
      return JSON.parse(JSON.stringify(res));
    },
  },

  Mutation: {
    sacar: async (_, { conta, valor }) => {
      const contaExiste = await db("accounts").where({ conta: conta });

      if (!contaExiste.length) {
        throw new Error("Conta inválida ou inexistente");
      }

      if (valor <= 0) {
        throw new Error("Valor precisa ser maior que 0");  
      }

      contaExiste.map((acc) => {
        if (valor > acc.saldo) {
          throw new Error("Saldo insuficiente.");
        }
      });

      await db("accounts").where({ conta: conta }).decrement("saldo", valor);

      const [saldoAtualizado] = await db("accounts").where({ conta: conta });

      return JSON.parse(JSON.stringify(saldoAtualizado));
    },

    depositar: async (_, { conta, valor }) => {
      const contaExiste = await db("accounts").where({ conta: conta });

      if (!contaExiste.length) {
        throw new Error("Conta inválida ou inexistente");
      }

      if (valor <= 0) {
        throw new Error("Valor precisa ser maior que 0");
      }

      await db("accounts").where({ conta: conta }).increment("saldo", valor);

      const [saldoAtualizado] = await db("accounts").where({ conta: conta });

      return JSON.parse(JSON.stringify(saldoAtualizado));
    },
  },
};
