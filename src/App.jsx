import { LargeAuthorListItem } from "./components/authors/LargeListItems";
import { SmallAuthorListItem } from "./components/authors/SmallListItems";
import { LargeBookListItem } from "./components/books/LargeListItems";
import { SmallBookListItem } from "./components/books/SmallListItems";
import { RegularList } from "./components/lists/Regular";
import { NumberedList } from "./components/lists/Numbered";
import { authors } from "./data/authors";
import { books } from "./data/books";

export function App() {
  return (
    <>
      <RegularList
        items={ books }
        sourceName={ "book" }
        ItemComponent={ SmallBookListItem }
      />
      -----------------------------
      <NumberedList
        items={ books }
        sourceName={ "book" }
        ItemComponent={ LargeBookListItem }
      />

      <hr />

      <RegularList
        items={ authors }
        sourceName={ "author" }
        ItemComponent={ SmallAuthorListItem }
      />
      -----------------------------
      <NumberedList
        items={ authors }
        sourceName={ "author" }
        ItemComponent={ LargeAuthorListItem }
      />
    </>
  );
}