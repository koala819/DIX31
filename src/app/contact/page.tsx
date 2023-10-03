"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export default function Page() {
  const schema = yup.object().shape({
    email: yup
      .string()
      .required("L'e-mail est obligatoire")
      .matches(
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        "L'e-mail n'est pas valide"
      ),

    first_name: yup.string().required("Veuillez saisir votre nom"),
    msg: yup.string().required("Veuillez saisir votre message"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  async function handleSendMail(values: any) {
    console.log("ready to send mail with values", values);
    const data = {
      firstName: values.first_name,
      email: values.email,
      message: values.msg,
      from: "contact",
    };

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };

    fetch(`${process.env.CLIENT_URL}/api/mail`, options)
      .then((response: any) => {
        console.log("response or Not", response);
        response.status === 200 && console.log("Send mail with SUCCESS :)");
        // setConfirmationSend(true);
      })
      .catch((error: any) => {
        console.log("ERROR to send the mail in contact.tsx", error);
      });
  }

  return (
    <section className='flex-grow text-gray-700 body-font relative'>
      <div className='absolute inset-0 bg-gray-300'>
        <iframe
          style={{
            filter: "grayscale(1) contrast(1.2) opacity(0.4)",
          }}
          title='map'
          scrolling='no'
          src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d54970.122924033974!2d1.489419400498161!3d43.60630826308362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2sfr!4v1605604684663!5m2!1sfr!2sfr'
          width='100%'
          height='100%'
        />
      </div>
      <form
        onSubmit={handleSubmit(handleSendMail)}
        className='container px-5 py-24 mx-auto flex'
      >
        <div className='lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10'>
          <h2 className='text-gray-900 text-lg font-medium title-font text-center pb-2 mb-2'>
            Contactez moi
          </h2>
          <div className='h-1 bg-gray-200 rounded overflow-hidden'>
            <div className='w-24 h-full bg-blue-500'></div>
          </div>
          <p className='leading-relaxed mb-5 text-gray-600 mt-2'>
            Transformez votre vision en réalité avec mon développement sur
            mesure.
          </p>

          <div className='relative mb-4'>
            <label
              htmlFor='first_name'
              className={`leading-7 text-sm${
                errors.first_name ? "text-red-500 font-mono text-sm" : ""
              }`}
            >
              Nom
            </label>
            <input
              type='text'
              id='first_name'
              placeholder='Al'
              {...register("first_name")}
              className={`w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out ${
                errors.first_name ? "border-red-600" : ""
              }`}
            />

            {errors.first_name && (
              <div className='text-red-500 font-mono text-xs'>
                {errors.first_name.message}
              </div>
            )}
          </div>

          <div className='relative mb-4'>
            <label
              htmlFor='email'
              className={`leading-7 text-sm${
                errors.email ? "text-red-500 font-mono text-sm" : ""
              }`}
            >
              Email
            </label>
            <input
              type='text'
              id='email'
              placeholder='al.gorythme@dix31.org'
              {...register("email")}
              className={`w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out ${
                errors.email ? "border-red-600" : ""
              }`}
            />

            {errors.email && (
              <div className='text-red-500 font-mono text-xs'>
                {errors.email.message}
              </div>
            )}
          </div>

          <div className='relative mb-4'>
            <label
              htmlFor='message'
              className={`leading-7 text-sm${
                errors.msg ? "text-red-500 font-mono text-sm" : ""
              }`}
            >
              Message
            </label>
            <textarea
              typeof='text'
              id='msg'
              placeholder='Veuillez saisir votre message ici...'
              {...register("msg")}
              className={`w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out ${
                errors.msg ? "border-red-600" : ""
              }`}
            ></textarea>

            {errors.msg && (
              <div className='text-red-500 font-mono text-xs'>
                {errors.msg.message}
              </div>
            )}
          </div>

          <div className='flex justify-center items-center'>
            <button
              className='flex items-center px-4 py-2 text-white bg-blue-600 rounded-lg duration-150 hover:bg-blue-500 active:shadow-lg'
              type='submit'
            >
              Envoyer
            </button>
          </div>

          <p className='text-xs text-gray-500 mt-3'>
            Mon engagement : vous apporter une réponse en moins de 24h.
          </p>
        </div>
      </form>
    </section>
  );
}
