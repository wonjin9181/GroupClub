// $(function () {
//     const yourFunctionObject = {
//         myFunc: function (payload) {
//             $('.someElementClass').text(playload.message);
//         }
//     }
//   // if user is running mozilla then use it's built-in WebSocket
//   window.WebSocket = window.WebSocket || window.MozWebSocket;

//   var connection = new WebSocket('ws://127.0.0.1:1337');

//   connection.onopen = function () {
//     // connection is opened and ready to use
//   };

//   connection.onerror = function (error) {
//     // an error occurred when sending/receiving data
//   };

//   connection.onmessage = function (message) {
//     message = {
//         data: {
//             function: 'setText',
//             payload: {
//                 message: 'Some message.'
//             }
//         }
//     }

//     yourFunctionObject.myFunc(payload.message);



//     try {
//       var json = JSON.parse(message.data);
//     } catch (e) {
//         yourFunctionObject[json.function](json.payload);
//       return;
//     }
//     // handle incoming message
//   };
// });