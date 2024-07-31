import { h } from "preact";
import { useRef } from "preact/hooks";
import emailjs from "emailjs";
import { invoke } from "../runtime.ts";

interface ContactUsProps {
  serviceId: string;
  templateId: string;
  publicKey: string;
}

interface EmailOptions {
  publicKey: string;
  nome: string;
  empresa: string;
  email: string;
  telefone: string;
  assunto: string;
  mensagem: string;
}

// const ContactUs: React.FC<ContactUsProps> = ({
//   serviceId,
//   templateId,
//   publicKey,
// }) => {
const ContactUs = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = async (e: Event) => {
    e.preventDefault();

    if (formRef.current) {
      const nomeInput = formRef.current.querySelector(
        "#nomeInput"
      ) as HTMLInputElement;
      const nome = nomeInput.value;

      const empresaInput = formRef.current.querySelector(
        "#empresaInput"
      ) as HTMLInputElement;
      const empresa = empresaInput.value;

      const emailInput = formRef.current.querySelector(
        "#emailInput"
      ) as HTMLInputElement;
      const email = emailInput.value;

      const telefoneInput = formRef.current.querySelector(
        "#telefoneInput"
      ) as HTMLInputElement;
      const telefone = telefoneInput.value;

      const assuntoInput = formRef.current.querySelector(
        "#assuntoInput"
      ) as HTMLInputElement;
      const assunto = assuntoInput.value;

      const mensagemInput = formRef.current.querySelector(
        "#mensagemInput"
      ) as HTMLTextAreaElement;
      const mensagem = mensagemInput.value?.trim() || "";

      // const formData = {
        
      //   nome,
      //   empresa,
      //   email,
      //   telefone,
      //   assunto,
      //   mensagem,
      // };

      await invoke({
        key: "site/actions/sendEmail.ts",
        props: { nome, empresa, email, telefone, assunto, mensagem },
      });

      // emailjs
      //   .send(serviceId, templateId, formData, {
      //     publicKey,
      //   })
      //   .then(() => {
      //     console.log("SUCCESS!", mensagemInput);
      //     formRef.current?.reset();
      //   })
      //   .catch((error: string) => {
      //     console.log("FAILED...", error);
      //   });
    }
  };

  const handleInputChange = () => {
    validateForm();
  };

  return (
    <form
      class="mt-[29px] flex items-end flex-col"
      ref={formRef}
      onSubmit={sendEmail}
    >
      <div class="">
        <label for="nomeInput">
          <p class="font-bold text-[10px]">*Nome</p>
          <input
            type="text"
            id="nomeInput"
            class="md:w-[468px] w-[333px] h-4 border border-base-200 text-[12px] focus:border-primary pl-2"
          />
        </label>
        <label for="empresaInput">
          <p class="font-bold text-[10px] pt-[30px]">Empresa</p>
          <input
            type="text"
            id="empresaInput"
            class="md:w-[468px] w-[333px] h-4 border border-base-200 text-[12px] focus:border-primary pl-2"
          />
        </label>
        <label for="emailInput">
          <p class="font-bold text-[10px] pt-[30px]">*E-mail</p>
          <input
            type="text"
            id="emailInput"
            class="md:w-[468px] w-[333px] h-4 border border-base-200 text-[12px] focus:border-primary pl-2"
          />
        </label>
        <label for="telefoneInput">
          <p class="font-bold text-[10px] pt-[30px]">Telefone</p>
          <input
            type="text"
            id="telefoneInput"
            class="md:w-[468px] w-[333px] h-4 border border-base-200 text-[12px] focus:border-primary pl-2"
          />
        </label>
        <label for="assuntoInput">
          <p class="font-bold text-[10px] pt-[30px]">*Assunto</p>
          <input
            type="text"
            id="assuntoInput"
            class="md:w-[468px] w-[333px] h-4 border border-base-200 text-[12px] focus:border-primary pl-2"
          />
        </label>
        <label htmlFor="mensagemInput">
          <p class="font-bold text-[10px] pt-[30px]">*Mensagem</p>
        </label>
        <textarea
          id="mensagemInput"
          rows={5}
          cols={40}
          class="md:w-[468px] w-[333px] h-[170px] border border-base-200 text-[12px] focus:border-primary pl-2"
        />
      </div>

      <div
        class="btn w-[92px] h-[25px] flex items-center justify-center btn-accent rounded-sm mt-[26px] min-h-0"
        // Desabilita o botão se o formulário não for válido
        disabled={!isFormValid}
      >
        <input type="submit" value="Enviar" class=" text-[9px] " />
      </div>
    </form>
  );
};

export default ContactUs;
