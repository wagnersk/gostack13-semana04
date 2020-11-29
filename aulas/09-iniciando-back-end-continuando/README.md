# Recuperação de senha

**RF**

- O usuário deve poder recupera sua senha informando o seu e-mail;
- O usuário deve receber um e-mail com instruções de recuperação de senha;
- O usuário deve poder resetar sua senha;

**RNF**

- Utilizar Mailtrap para testar envios em ambientes dev;
- Utilizar Amazon SES para envios em produção;
- O envio de e-mails deve acontecer em segundo plano (background job)

**RF**

- O link enviado por email para resetar senha, deve expirar em 2h;
- O usuário precisa confirmar a nova senha ao resetar sua senha;



# Atualização do perfil

**RF**

- O usuário deve poder a atualizar seu nome, email e senha;

**RN**

- O usuário não pode alterar seu email para um email já utilizado;
- Para atualizar sua senha, o usuário deve informar a senha antiga;
- Para atualizar sua senha, o usuário precisa confirmar a nova senha;


**RF**










# Painel do prestador

**RF**

- O usuário deve poder listar seu agendamentos de um dia específico;
- O prestador deve receber uma notificação sempre que houver um novo agendamento
- O prestador deve poder vizualizar as notificações não lidas;

**RNF**

- Os agendamentos do prestador no dia devem ser armazanados em cache
- As notificações do prestador deve ser armazenadas no MongoDB;
- As notificações do prestador devem ser enviadas em tempo-real utilizando Socket.io;

**RN**

- A notificação deve ter um status de lida ou não-lida para que o prestador possa controlar;



# Agendamento de serviços


**RF**

- O usuário deve poder listar todos prestadores de serviço cadastrados
- O usuário deve poder listar os dias de um mês com pelo menos um horário disponível de um prestador;
- O usuário deve poder listar horários disponíveis em um dia específico de um prestador;
- O usuário deve poder realizar um novo agendamento com um prestador;


**RNF**

- A listagem de prestadores deve ser amazenada em cache

**RF**
- Cada agendamento deve durar 1h exatamente;
- Os agendamentos deve estar disponíveis entre 8h ás 18h (Primeiro ás 8h, último ás 17h)
- O usuário não pode agendar em um horário já ocupado
- O usuário não pode agendar em um horário que já passou
- O usuário não pode agendar serviçoes consigo mesmo

