import axios from "axios";
import { useState } from "react";
import Button from "../../../components/atoms/Button";
import Input from "../../../components/atoms/Input";

const ShorteningForm = () => {
  const [url, setUrl] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const a = await axios.post('/api/links/create', {
      url
    });
    console.log(a);
  }

  function handleChange(e: any) {
    setUrl(e.target.value);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-start md:items-center md:flex-row"
    >
      <Input
        placeholder="Enter URL here"
        value={url}
        onChange={handleChange}
        className="md:w-80 lg:w-96"
      />
      <Button buttonType="add" className="mt-4 md:mt-0 md:-ml-6">
        Create
      </Button>
    </form>
  );
};

export default ShorteningForm;
