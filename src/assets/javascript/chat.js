
var trial;
document.querySelector("#input1").addEventListener("keypress", function(e){
    var key = e.which || e.keyCode;
    if(key === 13){ //Enter button
    var input = document.getElementById("input1").value;
    document.getElementById("user").innerHTML = input;
    console.log(input);
    sendReply(input);
    }
});
		    function runSpeechRecognition() {
		        // get output div reference
		        var output = document.getElementById("output");
		        // get action element reference
		        var action = document.getElementById("action");
                // new speech recognition object
                var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
                var recognition = new SpeechRecognition();
            
                // This runs when the speech recognition service starts
                recognition.onstart = function() {
                    action.innerHTML = "<small>listening, please speak...</small>";
                };
                
                recognition.onspeechend = function() {
                    action.innerHTML = "<small>stopped listening, hope you are done...</small>";
                    recognition.stop();
                }
              
                // This runs when the speech recognition service returns result
                recognition.onresult = function(event) {
                    var transcript = event.results[0][0].transcript;
                   // output.innerHTML = "<b>Text:</b> " + transcript + "<br/>";// <b>Confidence:</b> " + confidence*100+"%";
                    output.classList.remove("hide");
                    trial = transcript;
                    sendReply(trial);				
                };
              
                 // start recognition				 
                 recognition.start();
	        }

			function sendReply(input){
			var trigger = [
          ["thanks"],
          ["what are your payment methods"],
          ["hi","hey","hello"],
          ["how many types of vehicles are available"],
          ["how are you"],
          ["can we pay online"],
          ["what are the criteria for billing"],
          ["how old are you"],
          ["what all states are the services available", "for how many states are the service available"],
          ["are there any precautions taken for covid", "what all precautions are taken for covid"],
          ["when will your packers come to pack stuff", "is your service available all the time in the day"],
          ["how many helpers will come to pack and unpack boxes", "how many people do you send during shifting"],
          ["in how many days will my items be delivered"],
          ["what all vehicles do you provide", "how many types of vehicles do you have for transportation"],
          ["how many times can I avail your services"],
          ["what is the gurantee to our goods"],
          ["how do you treat your customers"],
          ["can I track my vehicle while it’s in route ", "can I track my vehicle while it is on the way"],
          ["which is the best day for moving"],
          ["who created you", "who made you"],
          ["your name please",  "your name", "may i know your name", "what is your name"],
          ["when can i receive response"],
          ["bye", "good bye", "goodbye", "see you later"]
          ];
      
          var reply = [
          ["you are welcome"],
          ["currently Cash on delivery"],
          ["Hi","Hey","Hello"],
          ["There are two types of vehicles available, Tempo and Truck."],
          ["I am good, thanks for asking."],
          ["No, currently only C O D is available."],
          ["We charge based on distance, vehicle type and precautionary charges"],
          ["I am 1 day old"],
          ["We serve four states, they are Telangana, Andhra pradesh, Maharashtra, Tamil nadu as of now"],
          ["Yes, we take full care of our customers. We make sure every employee of ours is COVID safe and follows all precautions perfectly."],
          ["we make sure our pick up and delivery facilities are done between 8 am to 8 pm"],
          ["It depends upon the type of vehicle you select."],
          ["It generally depends upon the distance, but we make sure to deliver the packages within 10 days."],
          ["We have 2 types of vehicles currently, truck and tempo"],
          ["As many times as you want"],
          ["We trust our drivers and service providers, and if there is any kind of glitch , the local manager will personally look up to your case."],
          ["With atmost respect, because customer service is our priority. And also by practicing social distancing."],
          ["Yes, after booking the service , you get in touch with the driver and he will be sharing his location all the time"],
          ["Everday is best with moving made easy and obviously me!"],
          ["Moving made easy created me"],
          ["My name is bot, James bot."],
          ["You will recive a response within twenty four hours"],
          ["Bye", "Goodbye", "See you later"]
          ];
      
          var alternative = ["Sorry. James Bot didn't get you."];
				document.getElementById("user").innerHTML = input;
				output(input);
				function output(input){
				try{
				var product = input + "=" + eval(input);
				} catch(e){
				var text = (input.toLowerCase()).replace(/[^\w\s\d]/gi, ""); //remove all chars except words, space and
				text = text.replace(/ a /g, " ").replace(/i feel /g, "").replace(/whats/g, "what is").replace(/please /g, "").replace(/ please/g, "");
				if(compare(trigger, reply, text)){
				var product = compare(trigger, reply, text);
				} else {
				var product = alternative[Math.floor(Math.random()*alternative.length)];
				}
				}
				document.getElementById("chatbot").innerHTML = product;
				speak(product);
				document.getElementById("input1").value = ""; //clear input value
				}
				function compare(arr, array, string){
				var item;
				for(var x=0; x<arr.length; x++){
				for(var y=0; y<array.length; y++){
				if(arr[x][y] == string){
				items = array[x];
				item =  items[Math.floor(Math.random()*items.length)];
				}
				}
				}
				return item;
				}

				function speak(string){
				var utterance = new SpeechSynthesisUtterance();
				utterance.voice = speechSynthesis.getVoices().filter(function(voice){return voice.name == "Agnes";})[0];
				utterance.text = string;
				utterance.lang = "en-US";
				utterance.volume = 1; //0-1 interval
				utterance.rate = 1;
				utterance.pitch = 2; //0-2 interval
				speechSynthesis.speak(utterance);
				}
			}