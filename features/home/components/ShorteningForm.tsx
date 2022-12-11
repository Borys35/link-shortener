import { Link } from "@prisma/client";
import axios, { AxiosResponse } from "axios";
import { useRef, useState } from "react";
import Button from "../../../components/atoms/Button";
import Input from "../../../components/atoms/Input";
import { slugToUrl } from "../../../utils/slugToUrl";

const ShorteningForm = () => {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const response = await axios.post<any, AxiosResponse<{ link: Link }>>(
      "/api/links/create-anonymously",
      { url }
    );
    setShortUrl(slugToUrl(response.data.link.slug));
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setUrl(e.target.value);
  }

  function handleClick(e: React.MouseEvent) {
    if (!shortUrl) return;

    e.preventDefault();

    inputRef.current?.select();
    inputRef.current?.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(inputRef.current!.value);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-start md:items-center md:flex-row"
    >
      <Input
        ref={inputRef}
        placeholder="Enter URL here"
        value={shortUrl || url}
        onChange={handleChange}
        className="md:w-80 lg:w-96"
        readOnly={!!shortUrl}
        inputSize="large"
      />
      <Button
        buttonType={!shortUrl ? "add" : "none"}
        className="mt-4 md:mt-0 md:-ml-6"
        onClick={handleClick}
      >
        {!shortUrl ? "Create" : "Copy"}
      </Button>
    </form>
  );
};

export default ShorteningForm;
