import { useState } from "react";
import Button from "../../../components/atoms/Button";
import Input from "../../../components/atoms/Input";

const ShorteningForm = () => {
  const [url, setUrl] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    console.log(url);
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
