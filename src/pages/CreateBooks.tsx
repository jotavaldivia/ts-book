import { Form } from "../components";
import { NewBooksProvider } from "../context/new-book.context";

const CreateBooks = () => {
  return (
    <div>
      <NewBooksProvider>
        <Form />
      </NewBooksProvider>
    </div>
  );
};

export default CreateBooks;
