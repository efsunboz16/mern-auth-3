import { client, sender } from "./mailtrap.config.js"
import { VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplates.js"


export const sendVerificationEmail = async (email, verificationToken) => {
    const recipient = [{ email }]

    try {
        const response = await client.send({
            from: sender,
            to: recipient,
            subject: "Verify your email",
            html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken),
            category: "Email verification"
        })

        console.log("Email sent successfully", response)
    } catch (error) {
        console.log('Error sending verification', error);
        throw new Error(`Error sending verification email: ${error}`);
    }
}

export const sendWelcomeEmail = async (email, name) => {
    const recipient = [{ email }];

    try {
        const response = await client.send({
            from: sender,
            to: recipient,
            template_uuid: "7f85c4fa-7952-495b-b7e1-4d24599d76ae",
            template_variables: {
                company_info_name: "PUFFY & MUFFY",
                name: name
            }
        });

        console.log("Welcome email sent successfully", response);
    } catch (error) {
        console.error(`Error sending welcome email`, error);

        throw new Error(`Error sending welcome email: ${error}`);
    }
}