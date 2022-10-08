import { yupResolver } from "@hookform/resolvers/yup";
import axios, { AxiosResponse } from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import Button from "../../../../components/atoms/Button";
import Heading from "../../../../components/atoms/Heading";
import Field from "../../../../components/molecules/Field";

type Inputs = {
  name: string;
  url: string;
};

const schema = yup
  .object({
    name: yup.string().required(),
    url: yup.string().url().required(),
  })
  .required();

const NewLinkForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const response = await axios.post<any, AxiosResponse<{}>>("url", data);
    response.data;
  };

  return (
    <div>
      <Heading level={5} className="mb-8">
        Link creator
      </Heading>
      <div className="box px-8 py-5 mb-4">
        <form
          className="flex flex-col gap-y-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Field
            label="Name"
            inputProps={{ variant: "inset", ...register("name") }}
            error={errors.name}
          />
          <Field
            label="URL to shorten"
            inputProps={{ variant: "inset", ...register("url") }}
            error={errors.url}
          />
          <Button className="self-end mt-7">Create</Button>
        </form>
      </div>
    </div>
  );
};

export default NewLinkForm;
