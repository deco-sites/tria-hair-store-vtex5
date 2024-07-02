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
    <div>
      <div>
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
      <div>
        <div>
          <p>Formulário de Contato</p>
          <p>Campos marcados com barra são de preenchimento obrigatório.</p>
          <form>
            <div>
              <label for="nomeInput">
                <p>*Nome</p>
                <input type="text" id="nomeInput" />
              </label>
              <label for="empresaInput">
                <p>Empresa</p>
                <input type="text" id="empresaInput" />
              </label>
              <label for="emailInput">
                <p>*E-mail</p>
                <input type="text" id="emailInput" />
              </label>
              <label for="telefoneInput">
                <p>Telefone</p>
                <input type="text" id="telefoneInput" />
              </label>
              <label for="assuntoInput">
                <p>*Assunto</p>
                <input type="text" id="assuntoInput" />
              </label>
              <label htmlFor="mensagemInput">
                <p>*Mensagem</p>
              </label>
              <textarea id="mensagemInput" rows={5} cols={40} />
            </div>
          </form>
          <div>
            <div>
              <h4>{titleBox1}</h4>
              <p>{textBox1}</p>
            </div>
            <div>
              <div>
                <h4>{titleBox2}</h4>
                <p>{textBox2}</p>
              </div>
              <div>
                <h4>{titleBox3}</h4>
                <p>{textBox3}</p>
              </div>
            </div>
            <div>
              <div>
                <h4>{titleBox4}</h4>
                <p>{textBox4}</p>
              </div>
              <div>
                <h4>{titleBox5}</h4>
                <p>{textBox5}</p>
              </div>
            </div>
            <div>
              <h4>{titleGoogleMaps}</h4>
              <div dangerouslySetInnerHTML={{ __html: maps }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
