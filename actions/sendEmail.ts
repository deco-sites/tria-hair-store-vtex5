import { AppContext } from "../apps/site.ts";


interface Props {
  nome: string;
  empresa: string;
  email: string;
  telefone: string;
  assunto: string;
  mensagem: string;
  
}

export default async function action (
  props: Props,
  _req: Request,
  _ctx: AppContext,
) {
  const serviceId= "service_05i889q";
  const templateId= "template_5am487o";
  const publicKey= "KbgykvC1N_6NjztB9";
  const privateKey = "9hCi-_9PMO9b1xh_pedmD";

  const emailData = {
    service_id: serviceId,
    template_id: templateId,
    user_id: publicKey,
    template_params: {
      ...props,
    },
    accessToken: privateKey,
  }

  try {
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Email sent successfully:', data);
  } catch (error) {
    console.error('Error sending email:', error);
  }

}