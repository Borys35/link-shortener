import { yupResolver } from "@hookform/resolvers/yup";
import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Button from "../../../../components/atoms/Button";
import Heading from "../../../../components/atoms/Heading";
import Field from "../../../../components/molecules/Field";
import { newLinkSchema } from "../../../../lib/yupSchemas";

export type NewLinkInputs = {
  name: string;
  url: string;
};

interface Props {
  onCreateClick: (data: NewLinkInputs) => void;
}

const NewLinkForm: FC<Props> = ({ onCreateClick }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewLinkInputs>({
    resolver: yupResolver(newLinkSchema),
  });

  const onSubmit: SubmitHandler<NewLinkInputs> = async (data) => {
    onCreateClick(data);
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
