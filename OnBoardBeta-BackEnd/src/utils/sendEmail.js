const sendVerificationEmail = async (email, token, type = 'register') => {
  const link =
    type === 'register'
      ? `${process.env.FRONTEND_URL}/api/auth/verify/${token}`
      : `${process.env.FRONTEND_URL}/api/auth/verify-password-change/${token}`;

  const subject = type === 'register' ? 'Verify your email' : 'Confirm password change';
  const html = `<p>Click <a href="${link}">here</a> to ${type === 'register' ? 'verify your email' : 'confirm your password change'}.</p>`;

  // send email...
};


export { sendVerificationEmail };