js
const venom = require('venom-bot');

venom
  .create()
  .then((client) => start(client))
  .catch((error) => console.log(error));

function start(client) {
  client.onMessage(async (message) => {
    if (message.body === '.tabela') {
      client.sendText(message.from, '📦 Tabela de preços:\n[📶🚀NetVoda🚩
      Tabela de preços

*Link do grupo:* https://chat.whatsapp.com/EFy6iMPTVusGq2vkFmcY5K

* *📶Pacotes diários🚩*
10MT_________500MB
15MT __________ 800MB
18MT________1000MB
20MT _________ 1100MB
25MT _______1300MB
40MT _________ 2200MB
65MT _________ 3600MB 
80MT _________ 4500MB
100MT ________ 6250MB
120MT ________ 7500MB
190MT__________10GB

* *📶Pacotes semanais🚀*
50MT__1000 + 600MB
115MT __ 4300 + 600MB
140MT __ 5300 + 600MB
155MT __ 6300 + 600MB
175MT __ 7300 + 600MB
195MT __ 8300 + 600MB
215MT __ 9300 + 600MB

* *🚀Pacotes mensais🚀*
260MT ______ 10.000MB
300MT ______ 12.000MB
375MT ______ 15.000MB
480MT ______ 20.000MB
650MT _______25.000MB
950MT ______ 50.000MB

- ~Fala, Fala Sem Parar!~
~Todo mundo está a curtir, só falta você~
*Super ilimitado: Chamadas, SMS e Megas para curtir sem limites*!

`Duração: 30 dias`
---

Planos disponíveis:
Preço	Dados	Benefícios adicionais

*480,00 MT*= 	11.1 GB	Chamadas e SMS ilimitadas + 10 min IN + 30 MB Roaming

*580,00 MT*	= 14.5 GB	Chamadas e SMS ilimitadas + 10 min IN + 30 MB Roaming

*680,00 MT*= 	20 GB	Chamadas e SMS ilimitadas + 10 min IN + 30 MB Roaming

*880,00 MT*	= 30 GB	Chamadas e SMS ilimitadas + 10 min IN + 30 MB Roaming

*1100,00 MT*	= 45 GB	Chamadas e SMS ilimitadas + 10 min IN + 30 MB Roaming

*1300,00 MT* = 	55 GB	Chamadas e SMS ilimitadas + 10 min IN + 30 MB Roaming]');
    } else if (message.body === '.pagamento') {
      client.sendText(message.from, 
`🧾 *Formas de pagamento:*
*M-pesa:* 842785015 - Alice Libombo
*E-Mola:* 866807673 - Alice Libombo

*NB:* Após feito o pagamento, mande o comprovativo e o número que pretende receber os dados.`);
    } else if (message.body === '.grupo f') {
      await client.setGroupSettings(message.chatId, false); // só admins podem enviar
    } else if (message.body.startsWith('.ban') && message.mentionedJidList.length > 0) {
      await client.removeParticipant(message.chatId, message.mentionedJidList[0]);
    }
  });
}
