console.log("Language Translator");

const textArea1 = document.getElementById("textArea1");
const textArea2 = document.getElementById("textArea2");

const translateBtn = document.getElementById("translateBtn");

translateBtn.addEventListener("click", () => {
  let userText = String(textArea1.value);
  let translateFrom = select1.value;
  let translateTo = select2.value;

  let apiUrl = `https://api.mymemory.translated.net/get?q=${userText}&langpair=${translateFrom}|${translateTo}`;

  if (userText.length > 0) {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        console.log(translateFrom, translateTo);
        textArea2.value = data.responseData.translatedText;
      });
  }
});

const select1 = document.getElementById("select1");
const select2 = document.getElementById("select2");

window.onload = function addOption() {
  for (const key1 in countries) {
    let optionTag1 = document.createElement("option");

    optionTag1.value = key1;
    optionTag1.innerHTML = countries[key1];

    if (key1 == "en-GB" && countries[key1] == "English") {
      optionTag1.selected = key1;
    }

    select1.append(optionTag1);
  }
  for (const key2 in countries) {
    let optionTag2 = document.createElement("option");

    optionTag2.value = key2;
    optionTag2.innerHTML = countries[key2];

    if (key2 == "hi-IN" && countries[key2] == "Hindi") {
      optionTag2.selected = key2;
    }

    select2.append(optionTag2);
  }
};

const speaker1 = document.getElementById("speaker1");
const speaker2 = document.getElementById("speaker2");

speaker1.addEventListener("click", () => {
  let speakText1 = textArea1.value;

  if (speakText1.length > 0) {
    const msg = new SpeechSynthesisUtterance();
    msg.volume = 1;
    msg.pitch = 1;
    msg.rate = 1;
    msg.text = speakText1;
    msg.lang = select1.value;

    speechSynthesis.speak(msg);
  } else {
    alert("add some text");
  }
});

speaker2.addEventListener("click", () => {
  let speakText2 = textArea2.value;

  if (speakText2.length > 0) {
    const msg = new SpeechSynthesisUtterance();
    msg.volume = 1;
    msg.pitch = 0.55;
    msg.rate = 1;
    msg.text = speakText2;
    msg.lang = select2.value;

    speechSynthesis.speak(msg);
  } else {
    alert("no text found add some text");
  }
});

const saveFile1 = document.getElementById("saveFile1");
const saveFile2 = document.getElementById("saveFile2");

saveFile1.addEventListener("click", () => {
  let text1 = String(textArea1.value);
  const askUser1 = confirm("Do you want to download (.txt) file?");

  if (askUser1 == true) {
    if (text1.length > 0) {
      let file = new Blob([text1], { type: "text" });
      let anchorTag = document.createElement("a");
      anchorTag.href = URL.createObjectURL(file);
      anchorTag.download = "file_langTranslator.txt";
      anchorTag.click();
    } else {
      alert("please enter some text.");
    }
  }
});

saveFile2.addEventListener("click", () => {
  let text2 = String(textArea2.value);
  const askUser2 = confirm(
    "Do you want to download translated text as (.txt) file?"
  );

  if (askUser2 == true) {
    if (text2.length > 0) {
      let file = new Blob([text2], { type: "text" });
      let anchorTag = document.createElement("a");
      anchorTag.href = URL.createObjectURL(file);
      anchorTag.download = "file_langTranslator_trans.txt";
      anchorTag.click();
    } else {
      alert(
        "no translated text found, click the button to translate the text."
      );
    }
  }
});
