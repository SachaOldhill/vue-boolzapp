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
      'searchText': '',
      "activeIndex": 0,
      'textMessage':'',
    },
    updated() {
      var container = this.$el.querySelector('#right-messages');
      container.scrollTop = container.scrollHeight;
    },
    computed: {
      filteredContacts: function(){
        // const result = words.filter(word => word.length > 6)
        return this.contacts.filter(contact =>{
          const result = contact.name.toLowerCase().includes(this.searchText.toLowerCase());
          return result;
        } );
      }
    },
    methods: {
        contactClick: function(contact) {
        this.activeIndex = this.contacts.indexOf(contact);
      },
        sendMessage: function(){
         // console.log(this.textMessage);
         if (this.textMessage.length>0) {
           const newMsg = this.getNewMessage(this.textMessage, "sent");
           this.contacts[this.activeIndex].messages.push(newMsg);
           this.textMessage = '';
           setTimeout(this.sendAutoReply,1000);
         }
        },
        sendAutoReply: function(){
          const newMsg = this.getNewMessage("ok", "received");
          this.contacts[this.activeIndex].messages.push(newMsg);
        },
        getNewMessage: function(text, status){
          const newMsg = {
            date: "1/1/1",
            text: text,
            status: status
          };
          return newMsg;

        },




      // sendMessage: function() {
      //   const newMsg = this.getNewMessage(this.textMessage, 'sent');
      //   this.contacts[this.activeIndex].messages.push(newMsg);
      //   this.textMessage = "";
      //   this.sendAutoReply();
      // },
      // sendAutoReply: function() {
      //   const indexReply = this.activeIndex;
      //   setTimeout(() => {
      //     const autoMsg = this.getNewMessage('Auto answer', 'received');
      //     this.contacts[indexReply].messages.push(autoMsg);
      //   }, 2000);
      // },
      // getNewMessage: function(text, status) {
      //   // const now = new Date();
      //   // const nowStr = now.getDate() + '/' +
      //   //   now.getMonth() + '/' +
      //   //   now.getFullYear() + ' ' +
      //   //   now.getHours() + ':' +
      //   //   now.getMinutes();
      //   return {
      //     // date: nowStr,
      //     text: text,
      //     status: status
      //   };
      // },
      // contactList: function() {
      //   const contactsArr = [];
      //   for (let i = 0; i < this.contacts.length; i++) {
      //     const contact = this.contacts[i];
      //     const name = contact['name'];
      //     if (name.toLowerCase()
      //       .includes(this.searchText.toLowerCase())) {
      //       contactsArr.push(contact);
      //     }
      //   }
      //   return contactsArr;
      // }
    }
  });
}

function init() {
  initVue();
}
$(init);
