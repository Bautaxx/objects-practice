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
function addBook(book){
    books.push(book);
}

// Get the <ul> element
const frame = document.getElementById("main-frame");

books[0] = new Book('Harry','Rowling',256,'not read yet')

// Loop through the elements of the array
for (let i = 0; i < books.length; i++) {
  // Create a new <li> element
  let card = document.createElement("div");
  
  // Set the text content of the <li> element to the current array element
  card.innerText = books[i].info();
  
  // Append the <li> element to the <ul> element
  frame.appendChild(card);
}


