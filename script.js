// Milestone 1
//● Replica della grafica con la possibilità
// di averemessaggi scritti dall’utente (verdi) e dall'
// interlocutore (bianco) assegnando due classiCSS diverse
//● Visualizzazione dinamica della lista contatti:
// tramitela direttiva v-for, visualizzarenome e immagine
// di ogni contatto
// Milestone 2
//● Visualizzazione dinamica dei messaggi:tramite la direttiva
// v-for, visualizzare tutti i messaggi relativi al contatto
// attivo all’interno del pannello della conversazione
//● Click contatto mostrala conversazione del contatto cliccato


function initVue() {
  new Vue({
    el: "#app",
    data: {
      contacts: [{
          "name": 'Michele',
          "avatar": 'img/tram.png',
          "visible": true,
          "messages": [{
              "date": '10/01/2020 15:30:55',
              "text": 'Hai portato a spasso il cane?',
              "status": 'sent'
            },
            {
              "date": '10/01/2020 15:50:00',
              "text": 'Ricordati di dargli da mangiare',
              "status": 'sent'
            },
            {
              "date": '10/01/2020 16:15:22',
              "text": 'Tutto fatto!',
              "status": 'received'
            }
          ],
        },
        {
          "name": 'Fabio',
          "avatar": 'img/ship.png',
          "visible": true,
          "messages": [{
              "date": '20/03/2020 16:30:00',
              "text": 'Ciao come stai?',
              "status": 'sent'
            },
            {
              "date": '20/03/2020 16:30:55',
              "text": 'Bene grazie! Stasera ci vediamo?',
              "status": 'received'
            },
            {
              "date": '20/03/2020 16:35:00',
              "text": 'Mi piacerebbe ma devo andare a fare la spesa.',
              "status": 'sent'
            }
          ],
        },
        {
          "name": 'Samuele',
          "avatar": 'img/tractor.png',
          "visible": true,
          "messages": [{
              "date": '28/03/2020 10:10:40',
              "text": 'La Marianna va in campagna',
              "status": 'received'
            },
            {
              "date": '28/03/2020 10:20:10',
              "text": 'Sicuro di non aver sbagliato chat?',
              "status": 'sent'
            },
            {
              "date": '28/03/2020 16:15:22',
              "text": 'Ah scusa!',
              "status": 'received'
            }
          ],
        },
        {
          "name": 'Luisa',
          "avatar": 'img/submarine.png',
          "visible": true,
          "messages": [{
              "date": '10/01/2020 15:30:55',
              "text": 'Lo sai che ha aperto una nuova pizzeria?',
              "status": 'sent'
            },
            {
              "date": '10/01/2020 15:50:00',
              "text": 'Si, ma preferirei andare al cinema',
              "status": 'received'
            }
          ],
        },
      ],
      "activeContact": 0,
    },
    methods: {
      contactClick: function(index) {
        this.activeIndex = index;
      },
      sendMessage: function() {
        const newMsg = this.getNewMessage(this.textMessage, 'sent');
        this.contacts[this.activeIndex].messages.push(newMsg);
        this.textMessage = '';
        this.sendAutoReply();
      },
      sendAutoReply: function() {
        const toReplyIndex = this.activeIndex;
        setTimeout(() => {
          const newMsg = this.getNewMessage('Ok', 'received');
          this.contacts[toReplyIndex].messages.push(newMsg);
        }, 1000);
      },
      getNewMessage: function(text, status) {
        const now = new Date();
        const nowStr = now.getDate() + '/' +
          now.getMonth() + '/' +
          now.getFullYear() + ' ' +
          now.getHours() + ':' +
          now.getMinutes();
        return {
          date: nowStr,
          text: text,
          status: status
        };
      },
      searchContact: function() {
        const resContacts = [];
        for (let i = 0; i < this.contacts.length; i++) {
          const contact = this.contacts[i];
          const name = contact['name'];
          if (name.toLowerCase()
            .includes(this.searchText.toLowerCase())) {
            resContacts.push(contact);
          }
        }
        return resContacts;
      }
    }
  });
}

function init() {
  initVue();
}
$(init);
