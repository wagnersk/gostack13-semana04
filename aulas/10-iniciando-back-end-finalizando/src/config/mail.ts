interface IMailConfig {
  driver: 'ethereal' | 'ses';
  defaults: {
    from: {
      email: string;
      name: string;
    };
  };
}

export default {
  driver: process.env.MAIL_DRIVER || 'ethereal',

  defaults: {
    from: {
      email: 'wagner@rocketseat.com.br',
      name: 'Wagner da rocketseat',
    },
  },
} as IMailConfig;

// aqui fica qual email eu tenho
// configurado em adress aula 17:11 Emails pelo Amazon SES lvl 4 , personalizando produção
