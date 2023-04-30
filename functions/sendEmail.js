const sgMail = require("@sendgrid/mail");

exports.handler = async (event, context) => {
  const { firstName, lastName, email, socialMedia, phoneNumber } = JSON.parse(
    event.body
  );

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const msg = {
    to: "plasticsoup@yahoo.co.uk",
    from: "dantrovato@gmail.com",
    subject: "New form submission",
    html: `
      <p>First name: \${firstName}</p>
      <p>Last name: \${lastName}</p>
      <p>Email: \${email}</p>
      <p>Social media: \${socialMedia}</p>
      <p>Phone number: \${phoneNumber}</p>
    `,
  };

  try {
    await sgMail.send(msg);
    return {
      statusCode: 200,
      body: "Email sent successfully",
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: "Error sending email",
    };
  }
};
