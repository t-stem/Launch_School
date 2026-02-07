/*
Attributes
  Title: Mythos
  Author: Stephen Fry

Behavior:
  Get Description

-----------------------------
Attributes
  Title: Me Talk Pretty One Day
  Author: David Sedaris

Behavior:
  Get Description

-----------------------------
Attributes
 Title: Aunts aren't Gentlemen
 Author: PG Wodehouse

 Behavior:
   Get Description

Create three objects that represent the three books shown above. 
The method for the "Get Description" behavior should return a string like the following:

"Me Talk Pretty One Day was written by David Sedaris."
*/

function createBook(title, author, read = false) {
  return {
    title: title,
    author: author,
    read: read,

    getDescription() {
      console.log(`${this.title} was written by ${this.author}. I ${this.read ? 'have': "haven't"} read it.`);
    },

    readBook() {
      this.read = true;
    }
  };
}

let book1 = createBook('Mythos', 'Stephen Fry');
let book2 = createBook('Me Talk Pretty One Day', 'David Sedaris');


book1.readBook();
book1.getDescription();
book2.getDescription();


