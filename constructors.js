let books = [];
function Book(title,author,pages,status){
    this.title = title
    this.author = author
    this.pages = pages  
    this.status = status
    this.info = () => {
        return (this.title + 'by' + this.author + this.pages + this.status)
    }
}

function addBook(toAdd){
    books.push(toAdd);
    addDisplay(books)
}



// Get the <ul> element
const frame = document.getElementById("main-frame");
//Creates a div with the book information
function addDisplay(){
    let card = document.createElement("div");
    card.innerText = books[books.length - 1].info();
    frame.appendChild(card);
}


const form = document.querySelector("form");
form.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the form from being submitted
  let bookName = form.elements.name.value
  let author = form.elements.author.value
  let pages = form.elements.pages.value
  let status = form.elements.status.value

  bookToAdd = new Book(bookName,author,pages,status) //Replace that info with the submited data
  addBook(bookToAdd)

  console.log("The form was submitted!");
});