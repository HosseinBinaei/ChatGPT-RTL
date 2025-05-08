// version: 2.6.0

function updateAssistantMessages() {
  let assistantMessages = document.querySelectorAll(
    '[data-message-author-role="assistant"]'
  );

  assistantMessages.forEach((message) => {
    let textContent = message.textContent;

    message.style.border = "1px solid gray";
    message.style.padding = "10px 30px";
    message.style.borderRadius = "5px";
    message.style.overflow = "auto";
    let containsPersian = /[آ-ی]/.test(textContent);
    let codeBlocks = message.querySelectorAll("pre, code");
    let table = message.querySelectorAll("table");
    if (containsPersian) {
      message.style.direction = "rtl";
      message.style.textAlign = "right";

      codeBlocks.forEach((block) => {
        block.style.direction = "ltr";
        block.style.textAlign = "left";
      });
    } else {
      message.style.direction = "ltr";
      message.style.textAlign = "left";

      codeBlocks.forEach((block) => {
        block.style.direction = "ltr";
        block.style.textAlign = "left";
      });
    }
    table.forEach((p)=> {
      p.style.paddingLeft= "60px";
    });
    let katexElements = message.querySelectorAll(".katex");
    katexElements.forEach((el) => {
      el.style.textAlign = "left";
      el.setAttribute("dir", "ltr");
    });
  });
}

const observer_rtl = new MutationObserver(updateAssistantMessages);
observer_rtl.observe(document.body, {
  childList: true,
  subtree: true,
});

updateAssistantMessages();
