document.getElementById("noteForm").addEventListener("submit", function(event) {
  event.preventDefault();
  var title = document.getElementById("title").value;
  var content = document.getElementById("content").value;

  if (title && content) {
    var note = document.createElement("div");
    note.className = "note";
    note.innerHTML       += `
      <h2>${title}</h2>
      <p>${content}</p>
    `;
   
    document.getElementById("noteList").appendChild(note);

    // Clear the input fields
    document.getElementById("title").value = "";
    document.getElementById("content").value = "";
  }
});
