"use client";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "@/components/Global/Input";
import DrobDownMenu from "@/components/Global/DropDownMenu";
import ProjectsHeader from "@/components/ProjectsPage/ProjectsHeader";
import InputTextArea from "@/components/Global/inputTextArea";

const schema = yup.object({
  name: yup.string().min(3).max(30).required("Department Name is required"),
  title: yup.string().min(2).max(20).required("A title is required"),
  description: yup.string().min(8).required("A description is required"),
});
const CreateProject = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(schema) });
  const onSubmit = () => {
    // const res = await signIn('credentials', {
    //   ...data,
    //   redirect: false,
    // })
    // if (res?.error) {
    //   toast('error', res?.error)
    // } else {
    //   toast('success', 'Logged in successfully')
    //   router.push('/profile')
    // }
  };

  return (
    <section className="mt-16 ml-7 mr-10 w-full pb-8">
      <ProjectsHeader title={"Report issues"} text={"Report an issue here"} />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-4 border-2 border-gray-300 rounded-md w-[50vw] space-y-4"
      >
        <Input
          required={true}
          label="Department Name"
          error={errors.name?.message}
          inputProps={{
            placeholder: "Ex : Technical Services",
            ...register("name"),
          }}
        />
        <DrobDownMenu
          label={"What kind of issues do you have? "}
          required={true}
          list={["1", "2", "3"]}
        />
        <Input
          required={true}
          label="Title"
          error={errors.title?.message}
          inputProps={{
            placeholder: "Ex : Your title here",
            ...register("title"),
          }}
        />
        <InputTextArea
          error={errors.description?.message}
          label={"Description"}
          inputProps={{
            placeholder: "Ex : Your description here",
            ...register("description"),
          }}
        />
        <div className="flex gap-4">
          <button
            onClick={(e) => {
              e.preventDefault();
            }}
            className="text-black px-4 py-2 border-2 border-gray-300 rounded-md"
          >
            Cancel
          </button>
          <button
            className={`w-full rounded-md ${
              !errors.name && !errors.description && !errors.title
                ? "bg-primary text-white"
                : "bg-gray-300 text-mainGray"
            }`}
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default CreateProject;
