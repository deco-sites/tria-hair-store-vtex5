import { HTMLWidget } from "apps/admin/widgets.ts";

interface Props {
  title: string;
  subtitle?: string;
  titleBox1: string;
  textBox1: string;
  titleBox2: string;
  textBox2: string;
  titleBox3: string;
  textBox3: string;
  titleBox4: string;
  textBox4: string;
  titleBox5: string;
  textBox5: string;
  titleGoogleMaps: string;
  /** @description mudar o width para 567 e o height para 166 */
  maps: HTMLWidget;
}

export default function ContactForm({
  title,
  subtitle,
  titleBox1,
  textBox1,
  titleBox2,
  textBox2,
  titleBox3,
  textBox3,
  titleBox4,
  textBox4,
  titleBox5,
  textBox5,
  titleGoogleMaps,
  maps,
}: Props) {
  return (
    <div class="md:max-w-[1300px] flex flex-col items-center mx-auto text-primary">
      <div class=" bg-accent md:h-[186px] h-[157px] w-full flex flex-col items-center justify-center">
        <h3 class="uppercase font-bold md:text-2xl text-base">{title}</h3>
        <div className="relative h-[1px] bg-primary rounded-full  md:w-[538px] mt-[29px] w-[342px]">
          <div className="absolute top-0 -translate-y-1/2  left-0 w-2 h-2 rounded-full bg-primary"></div>
          <div className="absolute top-0 -translate-y-1/2  right-0 w-2 h-2 rounded-full bg-primary"></div>
        </div>
        <p class="md:text-[12px] text-[8px] pt-4">{subtitle}</p>
      </div>

      <div class="flex md:w-[1200px] justify-between mx-auto md:mt-[66px] mt-[50px] mb-[49px] md:flex-row flex-col-reverse ">
        <div class="flex flex-col items-start md:mt-0 mt-[52px]  mx-auto">
          <p class="md:text-base text-[11px] font-bold ">
            Formulário de Contato
          </p>

          <p class="md:text-[12px] text-[9px] mt-[6px] ">
            Campos marcados com asterisco são de preenchimento obrigatório.
          </p>
          <form class="mt-[29px] flex items-end flex-col">
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

            <div class="btn w-[92px] h-[25px] flex items-center justify-center btn-accent rounded-sm mt-[26px] min-h-0">
              <button class=" text-[9px] ">Enviar</button>
            </div>
          </form>
        </div>

        <div class="flex flex-col items-center md:w-[567px] w-screen">
          <div class="flex flex-col">
            <div class="md:w-[567px] w-[385px] mx-auto md:bg-accent flex flex-col items-center justify-center rounded-lg">
              <h4 class="md:text-[15px] text-[11px] font-bold pt-[14px] ">
                {titleBox1}
              </h4>
              <p class="md:text-[12px] text-[9px] md:w-[500px] w-[340px] mt-[22px] mb-[16px]">
                {textBox1}
              </p>
            </div>

            <div class="md:w-[567px] w-[385px] bg-accent flex  justify-between rounded-lg md:px-[34px] px-[22px] mt-[19px]">
              <div class=" w-1/2 flex flex-col items-center">
                <h4 class="md:text-[15px] text-[11px] font-bold pt-[14px] ">
                  {titleBox2}
                </h4>
                <p class="md:text-[12px] text-[9px] mt-[22px] mb-[16px] text-center">
                  {textBox2}
                </p>
              </div>
              <div class="w-1/2 flex flex-col items-center">
                <h4 class="md:text-[15px] text-[11px] font-bold pt-[14px] ">
                  {titleBox3}
                </h4>
                <p class="md:text-[12px] text-[9px] mt-[22px] mb-[16px] text-center">
                  {textBox3}
                </p>
              </div>
            </div>

            <div class="md:w-[567px] w-[385px] bg-accent flex  justify-between rounded-lg md:px-[34px] px-[22px] mt-[19px]">
              <div class="w-1/2 flex flex-col items-center">
                <h4 class="md:text-[15px] text-[11px] font-bold pt-[14px] ">
                  {titleBox4}
                </h4>
                <p class="md:text-[12px] text-[9px] mt-[22px] mb-[16px] text-center">
                  {textBox4}
                </p>
              </div>
              <div class="w-1/2 flex flex-col items-center">
                <h4 class="md:text-[15px] text-[11px] font-bold pt-[14px] ">
                  {titleBox5}
                </h4>
                <p class="md:text-[12px] text-[9px] mt-[22px] mb-[16px] text-center">
                  {textBox5}
                </p>
              </div>
            </div>
          </div>
          <div class="flex-col mt-[29px] items-center hidden md:flex md:visible">
            <h4 class="font-bold text-[15px]">{titleGoogleMaps}</h4>
            <div class="w-[567px] h-[166px] rounded-lg mt-[10px] overflow-hidden">
              <div dangerouslySetInnerHTML={{ __html: maps }}></div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-col mt-[20px] mb-[34px] items-center flex md:hidden">
        <h4 class="font-bold text-[15px]">{titleGoogleMaps}</h4>
        <div class="w-[370px] h-[166px] rounded-lg mt-[10px] overflow-hidden mx-auto">
          <div dangerouslySetInnerHTML={{ __html: maps }}></div>
        </div>
      </div>
    </div>
  );
}
